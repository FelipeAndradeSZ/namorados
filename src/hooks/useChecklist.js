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
  serverTimestamp 
} from "firebase/firestore";
import { db } from "../lib/firebase";

const INITIAL_ITEMS = [
  // Malas
  { text: "Roupas de calor (Vitória é quente!)", category: "malas", checked: false, checkedBy: "" },
  { text: "Roupas de banho / Biquíni / Sunga", category: "malas", checked: false, checkedBy: "" },
  { text: "Protetor solar e pós-sol", category: "malas", checked: false, checkedBy: "" },
  { text: "Carregadores e adaptadores de tomada", category: "malas", checked: false, checkedBy: "" },
  { text: "Necessaire (escova, pasta, shampoo)", category: "malas", checked: false, checkedBy: "" },
  
  // Documentos
  { text: "Documento de identidade (RG ou CNH)", category: "documentos", checked: false, checkedBy: "" },
  { text: "Passagens aéreas salvas no celular", category: "documentos", checked: false, checkedBy: "" },
  { text: "Cartões de crédito / dinheiro", category: "documentos", checked: false, checkedBy: "" },
  
  // Antes de viajar
  { text: "Fazer o check-in online (24h antes)", category: "antes", checked: false, checkedBy: "" },
  { text: "Carregar celulares e fones de ouvido", category: "antes", checked: false, checkedBy: "" },
  { text: "Esvaziar o lixo da casa", category: "antes", checked: false, checkedBy: "" },
  { text: "Conferir se todas as janelas estão trancadas", category: "antes", checked: false, checkedBy: "" },
  
  // Na viagem
  { text: "Lanchinho para o voo / conexão", category: "viagem", checked: false, checkedBy: "" },
  { text: "Casaco leve para o ar condicionado do avião", category: "viagem", checked: false, checkedBy: "" },
  { text: "Óculos de sol", category: "viagem", checked: false, checkedBy: "" }
];

export function useChecklist() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "checklist"), orderBy("createdAt", "asc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedItems = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setItems(fetchedItems);
      setLoading(false);

      // If database is empty, seed initial data
      if (snapshot.empty && loading) {
        seedInitialData();
      }
    });

    return () => unsubscribe();
  }, [loading]);

  const seedInitialData = async () => {
    for (const item of INITIAL_ITEMS) {
      await addDoc(collection(db, "checklist"), {
        ...item,
        createdAt: serverTimestamp()
      });
    }
  };

  const addItem = async (text, category) => {
    if (!text.trim()) return;
    await addDoc(collection(db, "checklist"), {
      text,
      category,
      checked: false,
      checkedBy: "",
      createdAt: serverTimestamp()
    });
  };

  const toggleItem = async (id, currentChecked, userInitials) => {
    const itemRef = doc(db, "checklist", id);
    await updateDoc(itemRef, {
      checked: !currentChecked,
      checkedBy: !currentChecked ? userInitials : ""
    });
  };

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "checklist", id));
  };

  return { items, loading, addItem, toggleItem, deleteItem };
}
