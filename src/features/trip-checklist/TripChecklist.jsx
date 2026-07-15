import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, Trash2, CheckSquare } from "lucide-react";

const categories = [
  { id: "malas", label: "🧳 Malas" },
  { id: "documentos", label: "📄 Documentos" },
  { id: "antes", label: "🏡 Antes de Viajar" },
  { id: "viagem", label: "✈️ Na Viagem" }
];

export function TripChecklist({ items, loading, addItem, toggleItem, deleteItem, currentUser }) {
  const [activeCategory, setActiveCategory] = useState("malas");
  const [newItemText, setNewItemText] = useState("");

  const filteredItems = items.filter(item => item.category === activeCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemText.trim()) return;
    addItem(newItemText, activeCategory);
    setNewItemText("");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`relative rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
              activeCategory === cat.id
                ? "text-[#2a1020]"
                : "border border-white/10 text-rose-100/60 hover:text-rose-100 hover:border-rose-100/20"
            }`}
          >
            {activeCategory === cat.id && (
              <motion.span
                layoutId="active-checklist-cat"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-200 to-rose-300"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Input to add items */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder={`Adicionar à categoria ${categories.find(c => c.id === activeCategory)?.label}...`}
          className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-rose-100/30 focus:border-rose-300/30 focus:bg-white/[0.05] focus:outline-none"
        />
        <button
          type="submit"
          disabled={!newItemText.trim()}
          className="grid size-12 place-items-center rounded-xl bg-rose-200 text-[#2a1020] hover:bg-rose-100 disabled:opacity-40 disabled:hover:bg-rose-200 transition-colors"
        >
          <Plus size={18} />
        </button>
      </form>

      {/* Items List */}
      <div className="min-h-[200px] rounded-2xl border border-white/5 bg-white/[0.02] p-4">
        {loading ? (
          <div className="flex h-40 items-center justify-center text-sm text-rose-100/40">
            Carregando checklist...
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="flex h-40 flex-col items-center justify-center gap-2 text-rose-100/40 text-center">
            <CheckSquare size={24} className="opacity-40" />
            <p className="text-sm">Nenhum item nesta categoria ainda.</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-2.5">
            <AnimatePresence initial={false}>
              {filteredItems.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/[0.015] px-4 py-3 hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {/* Custom Checkbox */}
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id, item.checked, currentUser)}
                      className={`grid size-6 shrink-0 place-items-center rounded-lg border transition-all ${
                        item.checked
                          ? "border-rose-400 bg-rose-400/20 text-rose-200"
                          : "border-white/20 hover:border-rose-300/40"
                      }`}
                    >
                      {item.checked && <Check size={14} strokeWidth={3} />}
                    </button>

                    {/* Text */}
                    <span
                      onClick={() => toggleItem(item.id, item.checked, currentUser)}
                      className={`text-sm text-rose-50 cursor-pointer select-none truncate transition-all duration-300 ${
                        item.checked ? "opacity-40 line-through decoration-rose-300/50" : ""
                      }`}
                    >
                      {item.text}
                    </span>

                    {/* Checked By Badge */}
                    {item.checked && item.checkedBy && (
                      <span className={`rounded px-1.5 py-0.5 text-[0.6rem] font-bold ${
                        item.checkedBy === "F" 
                          ? "bg-rose-500/20 text-rose-300 border border-rose-500/20" 
                          : "bg-pink-500/20 text-pink-300 border border-pink-500/20"
                      }`}>
                        {item.checkedBy}
                      </span>
                    )}
                  </div>

                  {/* Delete Button */}
                  <button
                    type="button"
                    onClick={() => deleteItem(item.id)}
                    className="text-rose-100/30 hover:text-rose-300 p-1 transition-colors"
                  >
                    <Trash2 size={15} />
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </div>
    </div>
  );
}
