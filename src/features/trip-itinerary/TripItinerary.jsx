import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DayMap } from "./DayMap";
import { 
  Plane, 
  Hotel, 
  Utensils, 
  Palmtree, 
  Star, 
  Clock, 
  MapPin, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  X,
  Calendar 
} from "lucide-react";

const iconMap = {
  plane: Plane,
  hotel: Hotel,
  food: Utensils,
  beach: Palmtree,
  star: Star
};

const iconOptions = [
  { id: "plane", label: "✈️ Voo / Deslocamento" },
  { id: "hotel", label: "🏨 Hospedagem" },
  { id: "food", label: "🍴 Alimentação" },
  { id: "beach", label: "🏖️ Praia / Lazer" },
  { id: "star", label: "⭐ Passeio / Especial" }
];

export function TripItinerary({ 
  days, 
  activities, 
  loading, 
  updateDayTitle, 
  addActivity, 
  updateActivity, 
  deleteActivity 
}) {
  const [activeDate, setActiveDate] = useState("2026-12-14");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editingTitleText, setEditingTitleText] = useState("");
  
  // Add activity form state
  const [newTime, setNewTime] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newLoc, setNewLoc] = useState("");
  const [newIcon, setNewIcon] = useState("star");
  const [newMapsUrl, setNewMapsUrl] = useState("");
  const [newCoords, setNewCoords] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  // Edit activity state
  const [editingActivityId, setEditingActivityId] = useState(null);
  const [editTime, setEditTime] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editLoc, setEditLoc] = useState("");
  const [editIcon, setEditIcon] = useState("star");
  const [editMapsUrl, setEditMapsUrl] = useState("");
  const [editCoords, setEditCoords] = useState("");

  const activeDay = days.find(d => d.date === activeDate);
  const activeActivities = activities
    .filter(act => act.date === activeDate)
    .sort((a, b) => a.time.localeCompare(b.time));

  const handleStartEditTitle = () => {
    setEditingTitleText(activeDay?.title || "");
    setIsEditingTitle(true);
  };

  const handleSaveTitle = () => {
    if (editingTitleText.trim()) {
      updateDayTitle(activeDate, editingTitleText);
    }
    setIsEditingTitle(false);
  };

  const handleAddActivity = (e) => {
    e.preventDefault();
    if (!newTime || !newDesc) return;
    
    let lat = null;
    let lng = null;
    if (newCoords.trim()) {
      const parts = newCoords.split(",");
      if (parts.length === 2) {
        lat = parseFloat(parts[0].trim());
        lng = parseFloat(parts[1].trim());
      }
    }

    addActivity(activeDate, newTime, newDesc, newLoc, newIcon, newMapsUrl, lat, lng);
    setNewTime("");
    setNewDesc("");
    setNewLoc("");
    setNewIcon("star");
    setNewMapsUrl("");
    setNewCoords("");
    setIsAdding(false);
  };

  const handleStartEditActivity = (act) => {
    setEditingActivityId(act.id);
    setEditTime(act.time);
    setEditDesc(act.description);
    setEditLoc(act.location || "");
    setEditIcon(act.icon || "star");
    setEditMapsUrl(act.mapsUrl || "");
    setEditCoords(act.lat !== undefined && act.lng !== undefined ? `${act.lat}, ${act.lng}` : "");
  };

  const handleSaveActivity = (id) => {
    let lat = undefined;
    let lng = undefined;
    if (editCoords.trim()) {
      const parts = editCoords.split(",");
      if (parts.length === 2) {
        lat = parseFloat(parts[0].trim());
        lng = parseFloat(parts[1].trim());
      }
    } else {
      // If coordinates are cleared, explicitly set them to null in database
      lat = null;
      lng = null;
    }

    updateActivity(id, {
      time: editTime,
      description: editDesc,
      location: editLoc,
      icon: editIcon,
      mapsUrl: editMapsUrl,
      lat: lat !== undefined && !isNaN(lat) ? lat : lat,
      lng: lng !== undefined && !isNaN(lng) ? lng : lng
    });
    setEditingActivityId(null);
  };

  const formatDateLabel = (dateStr) => {
    const parts = dateStr.split("-");
    return `${parts[2]}/${parts[1]}`;
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Day Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {days.map((day) => (
          <button
            key={day.date}
            onClick={() => {
              setActiveDate(day.date);
              setIsEditingTitle(false);
              setIsAdding(false);
              setEditingActivityId(null);
            }}
            className={`relative rounded-full px-4 py-2.5 text-xs font-semibold tracking-wide transition-all ${
              activeDate === day.date
                ? "text-[#2a1020]"
                : "border border-white/10 text-rose-100/60 hover:text-rose-100 hover:border-rose-100/20"
            }`}
          >
            {activeDate === day.date && (
              <motion.span
                layoutId="active-itinerary-day"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-200 to-rose-300"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{formatDateLabel(day.date)}</span>
          </button>
        ))}
      </div>

      {/* Grid containing Itinerary Details (Left) and DayMap (Right) */}
      <div className="grid gap-6 md:grid-cols-5 items-stretch">
        {/* Itinerary Details */}
        <div className="md:col-span-3 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
        <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-4">
          <div className="flex-1">
            {isEditingTitle ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={editingTitleText}
                  onChange={(e) => setEditingTitleText(e.target.value)}
                  className="flex-1 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-base text-white focus:outline-none focus:border-rose-300/30"
                  autoFocus
                />
                <button
                  onClick={handleSaveTitle}
                  className="rounded-lg bg-rose-200 px-3 text-xs font-bold text-[#2a1020] hover:bg-rose-100"
                >
                  Salvar
                </button>
                <button
                  onClick={() => setIsEditingTitle(false)}
                  className="rounded-lg border border-white/10 px-3 text-xs text-rose-100/60 hover:text-rose-100"
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <h3 className="font-display text-2xl text-white">
                  {activeDay ? activeDay.title : "Carregando..."}
                </h3>
                <button
                  onClick={handleStartEditTitle}
                  className="text-rose-100/40 hover:text-rose-200 p-1"
                >
                  <Edit3 size={14} />
                </button>
              </div>
            )}
            <p className="mt-1 text-xs text-rose-100/40">
              Programação para o dia {activeDay ? new Date(activeDay.date + "T00:00:00").toLocaleDateString("pt-BR", { weekday: 'long', day: 'numeric', month: 'long' }) : ""}
            </p>
          </div>

          <button
            onClick={() => setIsAdding(!isAdding)}
            className="flex items-center gap-1.5 rounded-xl border border-rose-300/20 bg-rose-300/5 px-3.5 py-2 text-xs font-semibold text-rose-200 hover:bg-rose-300/10 transition-colors"
          >
            {isAdding ? <X size={14} /> : <Plus size={14} />}
            <span>Atividade</span>
          </button>
        </div>

        {/* Add Activity Form */}
        <AnimatePresence>
          {isAdding && (
            <motion.form
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              onSubmit={handleAddActivity}
              className="mt-4 flex flex-col gap-3 border-b border-white/5 pb-4 overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[0.65rem] tracking-wider text-rose-100/40 uppercase">Horário</label>
                  <input
                    type="time"
                    required
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-300/30"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[0.65rem] tracking-wider text-rose-100/40 uppercase">Tipo</label>
                  <select
                    value={newIcon}
                    onChange={(e) => setNewIcon(e.target.value)}
                    className="rounded-lg border border-white/10 bg-[#160e15] px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-300/30"
                  >
                    {iconOptions.map(opt => (
                      <option key={opt.id} value={opt.id}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[0.65rem] tracking-wider text-rose-100/40 uppercase">O que faremos</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Almoçar no restaurante na beira da praia..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-300/30"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[0.65rem] tracking-wider text-rose-100/40 uppercase">Local (opcional)</label>
                <input
                  type="text"
                  placeholder="Ex: Restaurante Capixaba, Praia do Canto"
                  value={newLoc}
                  onChange={(e) => setNewLoc(e.target.value)}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-300/30"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[0.65rem] tracking-wider text-rose-100/40 uppercase">Link do Google Maps (opcional)</label>
                <input
                  type="url"
                  placeholder="Ex: https://maps.app.goo.gl/..."
                  value={newMapsUrl}
                  onChange={(e) => setNewMapsUrl(e.target.value)}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-300/30"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[0.65rem] tracking-wider text-rose-100/40 uppercase flex justify-between">
                  <span>Coordenadas Manuais (opcional)</span>
                  <span className="text-[0.55rem] text-rose-300/70 lowercase font-normal italic">botão direito no Google Maps &gt; copiar lat,lng</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: -20.31845, -40.29748"
                  value={newCoords}
                  onChange={(e) => setNewCoords(e.target.value)}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-300/30"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-rose-200 py-2.5 text-xs font-bold text-[#2a1020] hover:bg-rose-100 transition-colors"
              >
                Confirmar Atividade
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Activities list/timeline */}
        <div className="mt-6 relative">
          {loading ? (
            <div className="flex h-32 items-center justify-center text-sm text-rose-100/40">
              Carregando roteiro...
            </div>
          ) : activeActivities.length === 0 ? (
            <div className="flex h-32 flex-col items-center justify-center gap-2 text-rose-100/30 text-center">
              <Calendar size={20} className="opacity-40" />
              <p className="text-sm">Nenhuma atividade agendada.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {activeActivities.map((act) => {
                const Icon = iconMap[act.icon] || Star;
                const isEditing = editingActivityId === act.id;

                return (
                  <div key={act.id} className="relative flex gap-4">
                    {/* Timeline bar / Icon */}
                    <div className="flex flex-col items-center">
                      <div className="grid size-9 place-items-center rounded-full border border-rose-300/25 bg-rose-300/10 text-rose-200">
                        <Icon size={15} />
                      </div>
                      <div className="w-px flex-1 bg-white/10 my-2 min-h-[1.5rem] last:hidden" />
                    </div>

                    {/* Content Box */}
                    <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.01] p-3 hover:bg-white/[0.02] transition-colors">
                      {isEditing ? (
                        <div className="flex flex-col gap-2.5">
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="time"
                              value={editTime}
                              onChange={(e) => setEditTime(e.target.value)}
                              className="rounded border border-white/10 bg-[#160e15] px-2 py-1 text-xs text-white"
                            />
                            <select
                              value={editIcon}
                              onChange={(e) => setEditIcon(e.target.value)}
                              className="rounded border border-white/10 bg-[#160e15] px-2 py-1 text-xs text-white"
                            >
                              {iconOptions.map(opt => (
                                <option key={opt.id} value={opt.id}>{opt.label}</option>
                              ))}
                            </select>
                          </div>
                          <input
                            type="text"
                            value={editDesc}
                            onChange={(e) => setEditDesc(e.target.value)}
                            className="w-full rounded border border-white/10 bg-[#160e15] px-2 py-1 text-xs text-white"
                          />
                          <input
                            type="text"
                            value={editLoc}
                            onChange={(e) => setEditLoc(e.target.value)}
                            placeholder="Localização"
                            className="w-full rounded border border-white/10 bg-[#160e15] px-2 py-1 text-xs text-white"
                          />
                          <input
                            type="url"
                            value={editMapsUrl}
                            onChange={(e) => setEditMapsUrl(e.target.value)}
                            placeholder="Link do Google Maps"
                            className="w-full rounded border border-white/10 bg-[#160e15] px-2 py-1 text-xs text-white"
                          />
                          <input
                            type="text"
                            value={editCoords}
                            onChange={(e) => setEditCoords(e.target.value)}
                            placeholder="Coordenadas (ex: -20.31845, -40.29748)"
                            className="w-full rounded border border-white/10 bg-[#160e15] px-2 py-1 text-xs text-white"
                          />
                          <div className="flex justify-end gap-1.5 mt-1">
                            <button
                              onClick={() => handleSaveActivity(act.id)}
                              className="flex items-center gap-1 rounded bg-rose-200 px-2 py-1 text-[0.65rem] font-bold text-[#2a1020]"
                            >
                              <Save size={10} /> Salvar
                            </button>
                            <button
                              onClick={() => setEditingActivityId(null)}
                              className="flex items-center gap-1 rounded border border-white/10 px-2 py-1 text-[0.65rem] text-white"
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="flex items-center gap-1 text-xs font-semibold text-rose-200 tabular-nums">
                                <Clock size={11} /> {act.time}
                              </span>
                              {act.location && (
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <a
                                    href={act.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(act.location + " Vitória Vila Velha")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-0.5 text-[0.65rem] text-rose-300 hover:text-rose-100 hover:underline transition-colors duration-200"
                                    title="Ver no Google Maps"
                                  >
                                    <MapPin size={10} /> {act.location}
                                  </a>
                                  {(act.lat === undefined || act.lat === null) && (
                                    <span 
                                      className="text-[0.55rem] text-rose-300/40 italic cursor-help" 
                                      title="Não conseguimos colocar esse ponto no mapa automaticamente. Use um nome mais completo ou insira as coordenadas manuais."
                                    >
                                      (sem mapa)
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                            <p className="mt-1 text-sm text-rose-50 leading-relaxed">
                              {act.description}
                            </p>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 md:opacity-40 hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => handleStartEditActivity(act)}
                              className="text-rose-100/40 hover:text-rose-200 p-1.5"
                              title="Editar atividade"
                            >
                              <Edit3 size={13} />
                            </button>
                            <button
                              onClick={() => deleteActivity(act.id)}
                              className="text-rose-100/30 hover:text-rose-400 p-1.5"
                              title="Deletar atividade"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* DayMap Container (Right) */}
      <div className="md:col-span-2 min-h-[22rem] md:min-h-0">
        <DayMap activities={activeActivities} />
      </div>
      </div>
    </div>
  );
}
