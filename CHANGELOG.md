# Changelog — Nosso Universo

Todas as alterações notáveis deste projeto serão documentadas neste arquivo.
O formato é baseado no [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [1.0.0] — 2026-09-30

### 🚀 Novas Funcionalidades
* **Trilha Sonora Romântica (`MusicPlayer`):** Player flutuante com visualizador de ondas sonoras, suporte a streaming/MP3 local e sintetizador ambiente de acordes suaves via Web Audio API para reprodução mesmo offline. Pausa automática inteligente ao abrir o Mundo 3D.
* **Toque de Amor Interativo (`HeartBurst`):** Disparo de partículas de corações românticos flutuantes ao interagir com o site, acompanhado de contador de toques persistido em `localStorage`.
* **Navegação Contínua na Galeria de Fotos:** Modal da galeria agora suporta navegação sequencial com botões *Anterior* (`ChevronLeft`) e *Próxima* (`ChevronRight`), atalhos pelas setas do teclado (`←` e `→`) e contador de posição (`1 / 6`).
* **Suporte a PWA (Progressive Web App):** Adicionado `manifest.json`, ícone SVG e meta tags da Apple para permitir que a Beatriz instale o site como aplicativo nativo na tela de início do celular.
* **Open Graph para WhatsApp e Redes Sociais:** Pré-visualização personalizada com imagem, título e descrição afetiva ao compartilhar o link.
* **Botão "Pular Introdução":** Opção para pular imediatamente os 3.2s de carregamento inicial em acessos recorrentes.
* **Acessibilidade por Teclado:** Suporte à tecla `Escape` em todos os modais da experiência 2D e 3D.

### 🛡️ Segurança & Privacidade
* **Mascaramento de PNR Aéreo:** Localizador de voo `SRJDZZ` mascarado por padrão (`SR••••`) na interface pública, com botão de revelar/ocultar via ícone de olho (`Eye`/`EyeOff`).
* **Prevenção de XSS no Roteiro:** Sanitização estrita de URLs de mapas (`getSafeMapsUrl`) para impedir esquemas de script maliciosos (`javascript:`).
* **Conformidade de Geocoding:** Cabeçalhos adequados e tratamento de exceções em chamadas à API do OpenStreetMap Nominatim.

### ⚡ Performance & Otimização
* **Code Splitting Dinâmico:** Carregamento sob demanda do Three.js / R3F com `React.lazy` e `Suspense`. O bundle inicial de entrada foi reduzido de **2.05 MB para ~114 kB** (redução de 87%).
* **Divisão de Chunks de Terceiros (Vendor Splitting):** Configuração de `manualChunks` no Vite para isolar Three.js, Framer Motion, Leaflet e Firebase.
* **Eliminação de Garbage Collection Pressure:** Remoção de alocações `new THREE.Vector3` a cada frame no loop `useFrame` do Three.js, reduzindo pausas de GC em dispositivos móveis.
* **Limpeza de Assets Mortos:** Remoção de 8.6 MB de arquivos `.png` não utilizados e duplicatas redundantes.

### 🐛 Correções de Bugs
* **Crash Fatal no Leaflet:** Resolução definitiva do erro `Map container is already initialized` no `DayMap` adicionando função de limpeza `map.remove()` no unmount do React.
* **Resolução de 15 Erros do ESLint 10:** Correção de problemas de Temporal Dead Zone (hoisting de funções assíncronas), remoção de variáveis órfãs e ajuste de dependências de hooks.
* **Atualização do CARTO Basemaps:** Integração da nova chave de API raster tiles e centralização em `src/config/mapConfig.js`.

### 🔄 DevOps & CI/CD
* **Quality Gate Automatizado:** Adicionada etapa de validação `npm run lint` obrigatória antes do build no GitHub Actions.
* **Deploy Manual & Rollback Facilitado:** Habilitado `workflow_dispatch` na esteira para disparos manuais e testes de rollback.
* **Gatilho de Tags Semânticas:** Suporte a deploys automáticos em tags de release (`v*`).

---

## [0.1.0] — 2026-08-16
* Versão inicial do site celebrando o relacionamento e casamento civil de Felipe e Beatriz, com linha do tempo, galeria de fotos, contadores e planejamento da viagem a Vitória.
