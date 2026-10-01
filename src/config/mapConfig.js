/**
 * Configuração centralizada para os serviços de mapas (CARTO Basemaps)
 */
export const CARTO_API_KEY = "cb1_45nk_1_56985091b6038abd14ebb752";

export const CARTO_DARK_TILE_URL = `https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png?key=${CARTO_API_KEY}`;

export const CARTO_TILE_OPTIONS = {
  subdomains: "abcd",
  maxZoom: 19,
};
