import { useState, useEffect } from "react";
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  setDoc,
  serverTimestamp 
} from "firebase/firestore";
import { db } from "../lib/firebase";

const INITIAL_DAYS = [
  { date: "2026-12-14", title: "Chegada em Vitória ✈️" },
  { date: "2026-12-15", title: "Explorando as Praias 🏖️" },
  { date: "2026-12-16", title: "Passeio Histórico 🏰" },
  { date: "2026-12-17", title: "Dia de Moqueca 🥘" },
  { date: "2026-12-18", title: "Mais Aventuras 🚙" },
  { date: "2026-12-19", title: "Último Dia de Sol 🌊" },
  { date: "2026-12-20", title: "Despedida e Retorno 👋" }
];

const INITIAL_ACTIVITIES = [
  // 14/12
  { date: "2026-12-14", time: "12:25", description: "Voo de Ribeirão Preto (RAO)", location: "Aeroporto de Ribeirão Preto (RAO)", icon: "plane", mapsUrl: "https://maps.app.goo.gl/wYcE22Yh9Hk9qE3H6", lat: -21.1367, lng: -47.7749 },
  { date: "2026-12-14", time: "13:20", description: "Conexão em Congonhas (CGH)", location: "Aeroporto de Congonhas (CGH)", icon: "plane", mapsUrl: "https://maps.app.goo.gl/bV38D485fWk1uSjB6", lat: -23.6261, lng: -46.6564 },
  { date: "2026-12-14", time: "16:35", description: "Chegada em Vitória (VIX)", location: "Aeroporto de Vitória (VIX)", icon: "plane", mapsUrl: "https://maps.app.goo.gl/pM795aU6WkJ1u2dH8", lat: -20.2581, lng: -40.2864 },
  { date: "2026-12-14", time: "18:00", description: "Check-in no Hotel", location: "Praia do Canto, Vitória", icon: "hotel", mapsUrl: "", lat: -20.2982, lng: -40.2925 },
  { date: "2026-12-14", time: "20:30", description: "Primeiro Jantar Juntos na Cidade", location: "Rua Joaquim Lírio, Praia do Canto, Vitória", icon: "food", mapsUrl: "", lat: -20.3015, lng: -40.2902 },
  
  // 15/12
  { date: "2026-12-15", time: "09:00", description: "Café da manhã reforçado", location: "Hotel Senac Ilha do Boi, Vitória", icon: "food", mapsUrl: "", lat: -20.3188, lng: -40.2835 },
  { date: "2026-12-15", time: "10:30", description: "Praia do Canto & Ilha do Boi", location: "Praia da Esquerda, Ilha do Boi, Vitória", icon: "beach", mapsUrl: "https://maps.app.goo.gl/nN4942U6XkJ2u3dH8", lat: -20.3168, lng: -40.2842 },
  
  // 16/12
  { date: "2026-12-16", time: "10:00", description: "Visita ao Convento da Penha", location: "Convento da Penha, Vila Velha", icon: "star", mapsUrl: "https://maps.app.goo.gl/tWcE11Yh8Hk8qE2H5", lat: -20.3288, lng: -40.2872 },
  
  // 17/12
  { date: "2026-12-17", time: "13:00", description: "Almoçar Moqueca Capixaba tradicional", location: "Curva da Jurema, Vitória", icon: "food", mapsUrl: "", lat: -20.3134, lng: -40.2987 }
];

// Geocoding helper using OpenStreetMap's Nominatim API
async function geocodeLocation(locationText) {
  if (!locationText || locationText.trim().length < 3) return null;
  
  // If location is a flight/airport outside Vitoria context, don't force Vitoria
  const isFlight = locationText.toLowerCase().includes("aeroporto") || 
                  locationText.toLowerCase().includes("cgh") || 
                  locationText.toLowerCase().includes("rao");

  let queryText = locationText;
  if (!isFlight) {
    queryText = `${locationText}, Espírito Santo, Brasil`;
  }

  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(queryText)}&limit=1`);
    const data = await res.json();
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };
    }
  } catch (err) {
    console.error("Geocoding error", err);
  }
  return null;
}

export function useItinerary() {
  const [days, setDays] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen to days
    const qDays = query(collection(db, "days"), orderBy("date", "asc"));
    const unsubDays = onSnapshot(qDays, (snapshot) => {
      const fetchedDays = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDays(fetchedDays);
      
      if (snapshot.empty && loading) {
        seedInitialDays();
      } else if (!snapshot.empty) {
        // Auto-migrate missing days
        const existingDates = fetchedDays.map(d => d.date);
        const missingDays = INITIAL_DAYS.filter(d => !existingDates.includes(d.date));
        if (missingDays.length > 0) {
          missingDays.forEach(async (day) => {
            await setDoc(doc(db, "days", day.date), {
              date: day.date,
              title: day.title
            });
          });
        }
      }
    });

    // Listen to activities
    const qActs = query(collection(db, "activities"), orderBy("time", "asc"));
    const unsubActs = onSnapshot(qActs, (snapshot) => {
      const fetchedActs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setActivities(fetchedActs);
      setLoading(false);

      if (snapshot.empty && loading) {
        seedInitialActivities();
      }
    });

    return () => {
      unsubDays();
      unsubActs();
    };
  }, [loading]);

  const seedInitialDays = async () => {
    for (const day of INITIAL_DAYS) {
      await setDoc(doc(db, "days", day.date), {
        date: day.date,
        title: day.title
      });
    }
  };

  const seedInitialActivities = async () => {
    const customSeeds = [
      { date: "2026-12-14", time: "12:25", description: "Voo de Ribeirão Preto (RAO)", location: "Aeroporto de Ribeirão Preto (RAO)", icon: "plane", mapsUrl: "https://maps.app.goo.gl/wYcE22Yh9Hk9qE3H6", lat: -21.1367, lng: -47.7749 },
      { date: "2026-12-14", time: "13:20", description: "Conexão em Congonhas (CGH)", location: "Aeroporto de Congonhas (CGH)", icon: "plane", mapsUrl: "https://maps.app.goo.gl/bV38D485fWk1uSjB6", lat: -23.6261, lng: -46.6564 },
      { date: "2026-12-14", time: "16:35", description: "Chegada em Vitória (VIX)", location: "Aeroporto de Vitória (VIX)", icon: "plane", mapsUrl: "https://maps.app.goo.gl/pM795aU6WkJ1u2dH8", lat: -20.2581, lng: -40.2864 },
      { date: "2026-12-14", time: "18:00", description: "Check-in no Hotel", location: "Praia do Canto, Vitória", icon: "hotel", mapsUrl: "", lat: -20.2982, lng: -40.2925 },
      { date: "2026-12-14", time: "20:30", description: "Primeiro Jantar Juntos na Cidade", location: "Rua Joaquim Lírio, Praia do Canto, Vitória", icon: "food", mapsUrl: "", lat: -20.3015, lng: -40.2902 },
      { date: "2026-12-15", time: "09:00", description: "Café da manhã reforçado", location: "Hotel Senac Ilha do Boi, Vitória", icon: "food", mapsUrl: "", lat: -20.3188, lng: -40.2835 },
      { date: "2026-12-15", time: "10:30", description: "Praia do Canto & Ilha do Boi", location: "Praia da Esquerda, Ilha do Boi, Vitória", icon: "beach", mapsUrl: "https://maps.app.goo.gl/nN4942U6XkJ2u3dH8", lat: -20.3168, lng: -40.2842 },
      { date: "2026-12-16", time: "10:00", description: "Visita ao Convento da Penha", location: "Convento da Penha, Vila Velha", icon: "star", mapsUrl: "https://maps.app.goo.gl/tWcE11Yh8Hk8qE2H5", lat: -20.3288, lng: -40.2872 },
      { date: "2026-12-17", time: "13:00", description: "Almoçar Moqueca Capixaba tradicional", location: "Curva da Jurema, Vitória", icon: "food", mapsUrl: "", lat: -20.3134, lng: -40.2987 }
    ];

    for (const act of customSeeds) {
      await addDoc(collection(db, "activities"), {
        ...act,
        createdAt: serverTimestamp()
      });
    }
  };

  const updateDayTitle = async (date, title) => {
    await setDoc(doc(db, "days", date), { date, title }, { merge: true });
  };

  const addActivity = async (date, time, description, location, icon, mapsUrl = "", lat = null, lng = null) => {
    const newAct = {
      date,
      time,
      description,
      location,
      icon,
      mapsUrl,
      createdAt: serverTimestamp()
    };

    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng)) {
      newAct.lat = lat;
      newAct.lng = lng;
    } else {
      const coords = await geocodeLocation(location);
      if (coords) {
        newAct.lat = coords.lat;
        newAct.lng = coords.lng;
      }
    }
    await addDoc(collection(db, "activities"), newAct);
  };

  const updateActivity = async (id, updatedFields) => {
    const actRef = doc(db, "activities", id);
    const updates = { ...updatedFields };
    
    // Only geocode if location is provided AND coordinates are not explicitly set/updated
    if (updatedFields.location && updatedFields.lat === undefined && updatedFields.lng === undefined) {
      const coords = await geocodeLocation(updatedFields.location);
      if (coords) {
        updates.lat = coords.lat;
        updates.lng = coords.lng;
      }
    }
    await updateDoc(actRef, updates);
  };

  const deleteActivity = async (id) => {
    await deleteDoc(doc(db, "activities", id));
  };

  return { 
    days, 
    activities, 
    loading, 
    updateDayTitle, 
    addActivity, 
    updateActivity, 
    deleteActivity 
  };
}
