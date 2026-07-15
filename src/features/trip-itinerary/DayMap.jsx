import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Center of Vitoria as fallback
const VIX_CENTER = [-20.31, -40.29];

function createNumberedMarker(number, label, time) {
  return L.divIcon({
    className: "",
    html: `
      <div style="position:relative;display:flex;flex-direction:column;align-items:center;">
        <!-- Glowing Dot with Number -->
        <div style="
          width: 22px; height: 22px; border-radius: 50%;
          background: linear-gradient(135deg, #fecdd3, #fb7185);
          box-shadow: 0 0 14px rgba(251,113,133,0.6), 0 0 25px rgba(251,113,133,0.3);
          border: 2px solid rgba(255,255,255,0.4);
          display: grid;
          place-items: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: #2a1020;
          z-index: 10;
        ">${number}</div>
        
        <!-- Label Badge -->
        <div style="
          margin-top: 4px;
          padding: 3px 8px;
          border-radius: 6px;
          background: rgba(22, 14, 21, 0.85);
          border: 1px solid rgba(251,113,133,0.25);
          backdrop-filter: blur(4px);
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 600;
          color: #fecdd3;
          white-space: nowrap;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        ">
          <span style="opacity: 0.6; margin-right: 3px;">${time}</span>${label}
        </div>
      </div>
    `,
    iconSize: [80, 50],
    iconAnchor: [40, 11],
  });
}

export function DayMap({ activities }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const layerGroupRef = useRef(null);

  // Filter and sort activities with valid coordinates
  const mappedActs = activities
    .filter(
      (act) =>
        act.lat !== undefined &&
        act.lat !== null &&
        !isNaN(act.lat) &&
        act.lng !== undefined &&
        act.lng !== null &&
        !isNaN(act.lng)
    )
    .sort((a, b) => a.time.localeCompare(b.time));

  useEffect(() => {
    if (!containerRef.current) return;

    // Create map if it doesn't exist
    if (!mapRef.current) {
      const map = L.map(containerRef.current, {
        center: VIX_CENTER,
        zoom: 12,
        zoomControl: true,
        attributionControl: false,
        scrollWheelZoom: false, // Don't scroll zoom accidentally while reading the page
      });

      // Dark tiles
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      mapRef.current = map;
      layerGroupRef.current = L.layerGroup().addTo(map);
    }

    const map = mapRef.current;
    const layerGroup = layerGroupRef.current;

    // Clear previous markers and routes
    layerGroup.clearLayers();

    if (mappedActs.length > 0) {
      const points = [];
      
      // Add markers
      mappedActs.forEach((act, index) => {
        const markerPos = [act.lat, act.lng];
        points.push(markerPos);

        const shortLocation = act.location.split(",")[0];
        const marker = L.marker(markerPos, {
          icon: createNumberedMarker(index + 1, shortLocation, act.time)
        });

        // Add popup
        marker.bindPopup(`
          <div style="color: #2a1020; font-family: 'DM Sans', sans-serif; padding: 4px;">
            <p style="margin: 0; font-size: 10px; font-weight: 700; color: #e11d48; text-transform: uppercase; letter-spacing: 0.05em;">
              📌 Passo ${index + 1} — ${act.time}
            </p>
            <h4 style="margin: 4px 0 2px 0; font-size: 13px; font-weight: bold;">${act.description}</h4>
            <p style="margin: 0; font-size: 11px; color: #666;">${act.location}</p>
          </div>
        `);

        marker.addTo(layerGroup);
      });

      // Draw route connecting them
      if (points.length > 1) {
        L.polyline(points, {
          color: "#fb7185",
          weight: 3,
          opacity: 0.8,
          lineCap: "round",
          lineJoin: "round",
          dashArray: "8 8",
          className: "flight-arc-glow"
        }).addTo(layerGroup);
      }

      // Fit map bounds to show all markers with padding
      // Check if they are all flights (far away) or local (Vitória)
      const hasLongDistance = mappedActs.some(act => act.location && (act.location.includes("RAO") || act.location.includes("CGH")));
      
      const bounds = L.latLngBounds(points);
      map.fitBounds(bounds, { 
        padding: [40, 40], 
        maxZoom: hasLongDistance ? 5 : 14 
      });
    } else {
      // Fallback center
      map.setView(VIX_CENTER, 12);
    }

    // Trigger window resize to ensure Leaflet renders tiles correctly
    setTimeout(() => {
      map.invalidateSize();
    }, 200);

  }, [activities]); // Redraw whenever activities list updates

  return (
    <div className="day-map-wrapper relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.02]">
      <div ref={containerRef} style={{ height: "100%", width: "100%" }} />
      {/* Edge gradient overlays to blend nicely */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_30px_15px_rgba(16,8,16,0.6)]" />
    </div>
  );
}
