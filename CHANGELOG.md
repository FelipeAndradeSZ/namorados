# Changelog — Nosso Universo

Todas as alterações notáveis deste projeto serão documentadas neste arquivo.
O formato é baseado no [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [1.1.0] — 2026-09-30

### 🛡️ Segurança & Privacidade Máxima (P0)
* **Expurgo Total de Dados de Reserva Aérea:** Remoção definitiva e irrestrita do código localizador de voo de todo o repositório, histórico de logs, dados de configuração (`loveStory.js`), seções da interface (`TripSection.jsx`) e changelogs. Nenhuma informação confidencial de reserva trafega ou existe no frontend.

### 🎮 Jogo da Viagem: Expedição Amor a Bordo (`TravelGame`)
* **Novo Jogo Completo 2D Canvas (60 FPS):** Implementação de um jogo arcade temático da viagem do casal, pilotando de Ribeirão Preto (RAO) até Vitória (VIX), com conexão em Congonhas (CGH).
* **Seleção de Personagens:** Escolha entre Felipe (Piloto: +15% de velocidade e bônus no café ☕) e Beatriz (Comandante: escudo protetor estendido e mais corações 💖).
* **3 Estágios Contínuos com Parallax:**
  1. *Fase 1: Ribeirão Preto (RAO)* — Entardecer no interior paulista com canaviais e colinas.
  2. *Fase 2: São Paulo / Congonhas (CGH)* — Skyline noturno da metrópole com luzes prediais iluminadas.
  3. *Fase 3: Vitória (VIX)* — Sobrevoo das praias capixabas com Ilha do Boi, Terceira Ponte e Convento da Penha.
* **Colecionáveis & Power-ups:** Corações de Amor (+100 mi), Café Turbo (+250 mi com efeito ímã), Escudo Estelar (+200 mi com absorção de impacto), Moqueca Capixaba (+500 mi), Cartinhas de Amor e Conchas da Praia.
* **Sintetizador de Áudio Nativo (Web Audio API):** Efeitos sonoros locais de alta fidelidade (coleta, turbulência, escudo, turbo, ronco suave de turbina de avião e fanfarra romântica de vitória), funcionando 100% offline com zero downloads de arquivos pesados.
* **Controles Responsivos:** Teclas de setas / WASD / Barra de espaço para desktop, suporte a arrasto por toque/mouse e botões virtuais táteis dedicados para celulares (Subir ⬆️, Descer ⬇️ e Turbo ⚡).
* **Celebração de Vitória:** Pouso suave em Vitória com explosão de confetes, certificado de voo do casal, milhas acumuladas, persistência de recorde em `localStorage` e mensagem romântica secreta desbloqueada.
* **Pausa Inteligente da Trilha:** Ao iniciar o jogo, a trilha sonora ambiente pausa automaticamente para não colidir com o áudio do jogo.

### ⚡ Performance & Otimização
* **Remoção Completa do Three.js e Modelos 3D:** Eliminação de `@react-three/fiber`, `@react-three/drei`, `three` e modelos `.glb` pesados. O bundle foi aliviado em mais de 2 MB, reduzindo drasticamente consumo de bateria e aquecimento de GPU em smartphones.
* **Novo Chunk Isolado do Jogo:** Carregamento dinâmico do `TravelGame` sob demanda via `React.lazy` e `Suspense`.

---

## [1.0.0] — 2026-09-30

### 🚀 Novas Funcionalidades
* **Trilha Sonora Romântica (`MusicPlayer`):** Player flutuante com visualizador de ondas sonoras, suporte a streaming/MP3 local e sintetizador ambiente de acordes suaves via Web Audio API para reprodução mesmo offline.
* **Toque de Amor Interativo (`HeartBurst`):** Disparo de partículas de corações românticos flutuantes ao interagir com o site, acompanhado de contador de toques persistido em `localStorage`.
* **Navegação Contínua na Galeria de Fotos:** Modal da galeria agora suporta navegação sequencial com botões *Anterior* (`ChevronLeft`) e *Próxima* (`ChevronRight`), atalhos pelas setas do teclado (`←` e `→`) e contador de posição (`1 / 6`).
* **Suporte a PWA (Progressive Web App):** Adicionado `manifest.json`, ícone SVG e meta tags da Apple para permitir que a Beatriz instale o site como aplicativo nativo na tela de início do celular.
* **Open Graph para WhatsApp e Redes Sociais:** Pré-visualização personalizada com imagem, título e descrição afetiva ao compartilhar o link.
* **Botão "Pular Introdução":** Opção para pular imediatamente os 3.2s de carregamento inicial em acessos recorrentes.
* **Acessibilidade por Teclado:** Suporte à tecla `Escape` em todos os modais.

### 🛡️ Segurança & Privacidade
* **Prevenção de XSS no Roteiro:** Sanitização estrita de URLs de mapas (`getSafeMapsUrl`) para impedir esquemas de script maliciosos (`javascript:`).
* **Conformidade de Geocoding:** Cabeçalhos adequados e tratamento de exceções em chamadas à API do OpenStreetMap Nominatim.

### ⚡ Performance & Otimização
* **Divisão de Chunks de Terceiros (Vendor Splitting):** Configuração de `manualChunks` no Vite para isolar Framer Motion, Leaflet e Firebase.
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
