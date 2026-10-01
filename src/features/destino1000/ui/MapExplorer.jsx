import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Compass, 
  Sparkles, 
  AlertCircle,
  BookOpen,
  Sword,
  Zap
} from "lucide-react";
import { BRAZIL_CITIES } from "../content/citiesData";
import { destinoAudio } from "../core/soundEngine";
import { contentEngine } from "../core/contentEngine";

export function MapExplorer({ 
  playerState, 
  onSelectCityForStudy, 
  onTravelToCity 
}) {
  const currentCityId = playerState.location.currentCityId || "vitoria";
  const [selectedCityId, setSelectedCityId] = useState(currentCityId);
  const [travelError, setTravelError] = useState(null);
  const [cityMissions, setCityMissions] = useState([]);

  const currentCity = BRAZIL_CITIES.find(c => c.id === currentCityId);
  const selectedCity = BRAZIL_CITIES.find(c => c.id === selectedCityId) || currentCity;
  const isCurrentCity = selectedCity.id === currentCityId;

  useEffect(() => {
    let active = true;
    contentEngine.getMissionsForCity(selectedCity.id).then(missions => {
      if (active) setCityMissions(missions);
    });
    return () => { active = false; };
  }, [selectedCity.id]);

  // Verifica se há conexão direta entre a cidade atual e a selecionada
  const directConnection = currentCity?.connections.find(conn => conn.to === selectedCity.id);
  const canTravel = !isCurrentCity && Boolean(directConnection);

  const handleCityClick = (cityId) => {
    destinoAudio.playClick();
    setSelectedCityId(cityId);
    setTravelError(null);
  };

  const handleTravelByBus = () => {
    if (!directConnection) return;
    if (playerState.economy.saldoReais < directConnection.busCost) {
      setTravelError(`Saldo insuficiente em R$! Você precisa de R$ ${directConnection.busCost.toFixed(2)}.`);
      return;
    }
    destinoAudio.playStamp();
    onTravelToCity?.(selectedCity.id, {
      costReais: directConnection.busCost,
      costMiles: 0,
      transport: "bus"
    });
  };

  const handleTravelByPlane = () => {
    if (!directConnection) return;
    if (playerState.economy.milhas < directConnection.flightMiles) {
      setTravelError(`Milhas insuficientes! Você precisa de ${directConnection.flightMiles} milhas (estude mais para ganhar milhas).`);
      return;
    }
    destinoAudio.playStamp();
    onTravelToCity?.(selectedCity.id, {
      costReais: 0,
      costMiles: directConnection.flightMiles,
      transport: "plane"
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-3 py-6 sm:px-6">
      
      {/* Título & Instrução de Viagem */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <span className="text-xs font-semibold tracking-widest text-rose-300 uppercase flex items-center gap-1.5">
            <Compass size={14} />
            <span>Trilha de Aprendizado Gamificada</span>
          </span>
          <h2 className="font-display text-2xl sm:text-3xl text-white mt-1">
            Escolha seu Próximo Módulo
          </h2>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#160a16]/80 px-4 py-2 text-xs text-rose-200">
          <span>Você está focado em:</span>
          <strong className="text-white flex items-center gap-1">
            <MapPin size={14} className="text-rose-400" />
            {currentCity?.name}
          </strong>
        </div>
      </div>

      {/* Grid Principal: Mapa Visual (Esquerda) e Painel de Cidade (Direita) */}
      <div className="grid gap-6 lg:grid-cols-12 items-start">
        
        {/* Painel do Mapa e Grade de Cidades (8 colunas) */}
        <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#130b14]/90 p-4 sm:p-6 shadow-2xl relative overflow-hidden">
          
          <div className="mb-4 flex items-center justify-between text-xs text-rose-200/60">
            <span>Módulos de Estudo (Polos Temáticos)</span>
            <span>{BRAZIL_CITIES.length} Módulos Disponíveis</span>
          </div>

          {/* Lista de Cidades Estilizadas como Cartões de Embarque */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BRAZIL_CITIES.map((city) => {
              const isCurrent = city.id === currentCityId;
              const isSelected = city.id === selectedCityId;
              const hasVisited = playerState.location.visitedCities.includes(city.id);

              return (
                <motion.button
                  key={city.id}
                  type="button"
                  onClick={() => handleCityClick(city.id)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex flex-col text-left p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? "border-rose-400 bg-rose-500/15 shadow-[0_0_25px_rgba(244,63,94,0.2)]"
                      : isCurrent
                      ? "border-emerald-500/50 bg-emerald-950/20"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1.5">
                    <span className="font-display font-semibold text-white text-base flex items-center gap-1.5">
                      <MapPin size={16} className={isCurrent ? "text-emerald-400" : "text-rose-400"} />
                      {city.name}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {hasVisited && !isCurrent && (
                        <span className="text-[0.65rem] text-emerald-300 font-bold" title="Cidade já visitada">✓</span>
                      )}
                      <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded bg-white/10 text-rose-200">
                        {city.state}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-rose-200/70 line-clamp-1 mb-2">
                    {city.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-auto">
                    {city.thematicFocus.slice(0, 2).map((focus, idx) => (
                      <span key={idx} className="rounded-md bg-white/5 px-2 py-0.5 text-[0.6rem] text-rose-100/70 border border-white/5">
                        {focus}
                      </span>
                    ))}
                  </div>

                  {/* Badges de Status */}
                  {isCurrent && (
                    <span className="absolute top-2 right-2 size-2 rounded-full bg-emerald-400 animate-ping" />
                  )}
                </motion.button>
              );
            })}
          </div>

        </div>

        {/* Detalhes da Cidade Selecionada & Painel de Viagem (5 colunas) */}
        <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-[#160a16] p-5 sm:p-6 shadow-2xl">
          
          <div className="mb-4">
            <span className="text-[0.65rem] font-bold tracking-widest text-rose-400 uppercase">
              {selectedCity.region} • Polo de {selectedCity.primaryArea.toUpperCase()}
            </span>
            <h3 className="font-display text-2xl text-white mt-1">
              {selectedCity.name} ({selectedCity.state})
            </h3>
            <p className="mt-2 text-xs text-rose-100/80 leading-relaxed">
              {selectedCity.description}
            </p>
          </div>

          {/* Pontos de Interesse Educacionais na Cidade */}
          <div className="mb-5 border-t border-white/10 pt-4">
            <h4 className="text-xs font-semibold text-white mb-2.5 flex items-center gap-1.5">
              <BookOpen size={14} className="text-rose-300" />
              <span>Tópicos de Estudo</span>
            </h4>
            <div className="flex flex-col gap-2">
              {selectedCity.hubs.map((hub) => (
                <div key={hub.id} className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <strong className="text-rose-100">{hub.name}</strong>
                    <span className="rounded bg-rose-500/20 px-1.5 py-0.5 text-[0.55rem] font-bold uppercase text-rose-300">
                      {hub.area}
                    </span>
                  </div>
                  <p className="text-[0.65rem] text-rose-200/60 leading-tight">
                    {hub.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Missões Narrativas */}
          {cityMissions.length > 0 && (
            <div className="mb-5 border-t border-white/10 pt-4">
              <h4 className="text-xs font-semibold text-white mb-2.5 flex items-center gap-1.5">
                <Sword size={14} className="text-rose-300" />
                <span>Missões de Estudo</span>
              </h4>
              <div className="flex flex-col gap-2">
                {cityMissions.map((mission) => {
                  const isBoss = mission.difficulty === "Boss" || mission.id.includes("boss");
                  return (
                    <button 
                      key={mission.id} 
                      onClick={() => onSelectCityForStudy(selectedCity.id, mission)}
                      className={`text-left rounded-xl border p-2.5 transition cursor-pointer hover:scale-[1.02] ${
                        isBoss 
                          ? "border-amber-500/50 bg-gradient-to-r from-amber-950/40 to-transparent hover:border-amber-400" 
                          : "border-white/5 bg-gradient-to-r from-rose-950/20 to-transparent hover:border-rose-500/30"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xl ${isBoss ? "animate-pulse" : ""}`}>{mission.icon}</span>
                        <div>
                          <strong className={`text-xs block leading-tight ${isBoss ? "text-amber-400 font-black" : "text-white"}`}>
                            {mission.title}
                          </strong>
                          <span className="text-[0.6rem] font-bold uppercase text-amber-400">
                            XP: {mission.rewards.xp} • Milhas: {mission.rewards.milhas}
                          </span>
                        </div>
                      </div>
                      <p className={`text-[0.65rem] leading-tight ${isBoss ? "text-amber-200/80" : "text-rose-200/60"}`}>
                        {mission.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Ações: Estudar na Cidade Atual OU Viajar para Cidade Selecionada */}
          <div className="border-t border-white/10 pt-4">
            {isCurrentCity ? (
              <button
                type="button"
                onClick={() => onSelectCityForStudy(selectedCity.id)}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 py-3 text-sm font-bold text-white shadow-lg shadow-rose-500/25 hover:scale-102 transition cursor-pointer"
              >
                <Sparkles size={16} />
                <span>Estudar Todos os Tópicos Deste Módulo</span>
              </button>
            ) : canTravel ? (
              <div className="flex flex-col gap-2">
                <span className="text-xs text-rose-200/70 font-medium">Requisitos para desbloquear:</span>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleTravelByBus}
                    className="flex flex-col items-center justify-center p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-emerald-500/20 hover:border-emerald-500/40 transition cursor-pointer"
                  >
                    <BookOpen size={20} className="text-emerald-400 mb-1" />
                    <span className="text-xs font-bold text-white">Bolsa Estudo</span>
                    <span className="text-[0.65rem] text-emerald-300">R$ {directConnection.busCost}</span>
                    <span className="text-[0.6rem] text-rose-200/50">Lento</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleTravelByPlane}
                    className="flex flex-col items-center justify-center p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-sky-500/20 hover:border-sky-500/40 transition cursor-pointer"
                  >
                    <Zap size={20} className="text-sky-400 mb-1" />
                    <span className="text-xs font-bold text-white">Acesso Expresso</span>
                    <span className="text-[0.65rem] text-sky-300">{directConnection.flightMiles} milhas</span>
                    <span className="text-[0.6rem] text-rose-200/50">Imediato</span>
                  </button>
                </div>

                {travelError && (
                  <p className="mt-2 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle size={14} />
                    <span>{travelError}</span>
                  </p>
                )}
              </div>
            ) : (
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center text-xs text-rose-200/50">
                Não há rota direta de {currentCity?.name} para {selectedCity.name}. Viaje primeiro para uma capital conectada!
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
