import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Coordinates
const RAO = [-21.1367, -47.7749]; // Ribeirão Preto
const CGH = [-23.6261, -46.6564]; // Congonhas (São Paulo)
const VIX = [-20.2581, -40.2864]; // Vitória

// Generate a smooth curved arc between two points
function generateArc(start, end, curvatureAmount = 1.2, numPoints = 50) {
  const points = [];
  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const lat = start[0] + (end[0] - start[0]) * t;
    const lng = start[1] + (end[1] - start[1]) * t;
    // Add curvature (arc upward = negative lat offset for southern hemisphere)
    const curvature = Math.sin(t * Math.PI) * curvatureAmount;
    points.push([lat - curvature, lng]);
  }
  return points;
}

function createCityMarker(label) {
  return L.divIcon({
    className: "",
    html: `
      <div style="position:relative;display:flex;flex-direction:column;align-items:center;">
        <div style="
          width: 14px; height: 14px; border-radius: 50%;
          background: radial-gradient(circle, #fecdd3, #fb7185);
          box-shadow: 0 0 18px rgba(251,113,133,0.6), 0 0 40px rgba(251,113,133,0.3);
          border: 2px solid rgba(255,255,255,0.3);
        "></div>
        <div style="
          margin-top: 8px;
          font-family: 'Italiana', Georgia, serif;
          font-size: 18px;
          color: #fecdd3;
          text-shadow: 0 0 20px rgba(251,113,133,0.5);
          white-space: nowrap;
          letter-spacing: 0.08em;
        ">${label}</div>
      </div>
    `,
    iconSize: [60, 50],
    iconAnchor: [30, 7],
  });
}

const planeIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width: 28px; height: 28px;
      display: grid; place-items: center;
      border-radius: 50%;
      background: rgba(251,113,133,0.15);
      backdrop-filter: blur(4px);
      border: 1px solid rgba(251,113,133,0.3);
      box-shadow: 0 0 20px rgba(251,113,133,0.4);
    ">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fecdd3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
      </svg>
    </div>
  `,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
});

export function FlightMap({ direction = "ida" }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create map
    const map = L.map(containerRef.current, {
      center: [-20.7, -44.0],
      zoom: 5,
      zoomControl: false,
      attributionControl: false,
      dragging: false,
      touchZoom: false,
      doubleClickZoom: false,
      scrollWheelZoom: false,
      boxZoom: false,
      keyboard: false,
    });

    mapRef.current = map;

    // Dark tiles
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      subdomains: "abcd",
      maxZoom: 19,
    }).addTo(map);

    // Fit to show all three cities
    const bounds = L.latLngBounds([RAO, CGH, VIX]);
    map.fitBounds(bounds, { padding: [60, 60], maxZoom: 6 });

    // City markers
    L.marker(RAO, { icon: createCityMarker("RAO") }).addTo(map);
    L.marker(CGH, { icon: createCityMarker("CGH") }).addTo(map);
    L.marker(VIX, { icon: createCityMarker("VIX") }).addTo(map);

    // Arc points — two legs: RAO→CGH then CGH→VIX
    const leg1 = generateArc(RAO, CGH, 0.8);
    const leg2 = generateArc(CGH, VIX, 1.0);
    // Remove duplicate point at CGH junction
    let arcPoints = [...leg1, ...leg2.slice(1)];
    if (direction === "volta") {
      arcPoints = [...arcPoints].reverse();
    }

    // Dashed trail lines (background)
    L.polyline(arcPoints, {
      color: "rgba(251,113,133,0.15)",
      weight: 2,
      dashArray: "6 8",
      lineCap: "round",
    }).addTo(map);

    // Animated glow line
    const glowLine = L.polyline([], {
      color: "#fb7185",
      weight: 2.5,
      opacity: 0.9,
      lineCap: "round",
      className: "flight-arc-glow",
    }).addTo(map);

    // Animated plane marker
    const planeIcon = L.divIcon({
      className: "",
      html: `
        <div style="
          width: 28px; height: 28px;
          display: grid; place-items: center;
          border-radius: 50%;
          background: rgba(251,113,133,0.15);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(251,113,133,0.3);
          box-shadow: 0 0 20px rgba(251,113,133,0.4);
        ">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fecdd3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="${direction === 'volta' ? 'transform: rotate(225deg);' : ''}">
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
          </svg>
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });

    // Plane marker
    const planeMarker = L.marker(arcPoints[0], {
      icon: planeIcon,
      zIndexOffset: 1000,
    }).addTo(map);

    // Animation
    let animFrameId;
    let progress = 0;
    const speed = 0.003;
    const pauseDuration = 2000;
    let pauseStart = null;
    let started = false;

    function animate() {
      if (pauseStart !== null) {
        if (Date.now() - pauseStart < pauseDuration) {
          animFrameId = requestAnimationFrame(animate);
          return;
        }
        pauseStart = null;
        progress = 0;
      }

      progress += speed;

      if (progress >= 1) {
        progress = 1;
        glowLine.setLatLngs(arcPoints);
        planeMarker.setLatLng(arcPoints[arcPoints.length - 1]);
        pauseStart = Date.now();
        animFrameId = requestAnimationFrame(animate);
        return;
      }

      const currentIndex = Math.floor(progress * (arcPoints.length - 1));
      glowLine.setLatLngs(arcPoints.slice(0, currentIndex + 1));
      planeMarker.setLatLng(arcPoints[currentIndex]);

      animFrameId = requestAnimationFrame(animate);
    }

    // Start animation when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          // Small delay to let tiles load
          setTimeout(() => {
            map.invalidateSize();
            animate();
          }, 300);
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      if (animFrameId) cancelAnimationFrame(animFrameId);
      map.remove();
      mapRef.current = null;
    };
  }, [direction]);

  return (
    <div className="flight-map-wrapper relative overflow-hidden">
      <div ref={containerRef} style={{ height: "100%", width: "100%" }} />
      {/* Gradient overlay to blend edges into the card */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_30px_rgba(16,8,16,0.7)]" />
    </div>
  );
}
