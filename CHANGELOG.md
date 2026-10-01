# Changelog — Nosso Universo

Todas as alterações notáveis deste projeto serão documentadas neste arquivo.
O formato é baseado no [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [1.2.0] — 2026-10-01

### 🛡️ Segurança de Nível Bancário & DevSecOps (P0)
* **Prevenção Definitiva de DOM XSS no Mapa (`SEC-01`):** Implementada função de sanitização de strings (`escapeHtml`) para todos os dados dinâmicos do Firestore (`location`, `description`, `time`), impedindo injeção de HTML/scripts no Leaflet (`divIcon` e `bindPopup`).
* **Blindagem Total do Firestore & Autenticação Anônima (`SEC-02`):** Adicionada autenticação anônima obrigatória (`firebase/auth`) com portão de prontidão (`authReady`). Criado o arquivo `firestore.rules` com regras restritivas que exigem autenticação e validam tipos e tamanhos de campos para as coleções `checklist`, `days` e `activities`.
* **Content Security Policy Restritiva (`SEC-04`):** Adicionada meta tag CSP completa no `index.html` com proteção de recursos (`default-src 'self'`, `connect-src` apenas para Firebase, CARTO e Nominatim), além de `X-Content-Type-Options: nosniff` e `Referrer-Policy: strict-origin-when-cross-origin`.
* **Suporte a Variáveis de Ambiente para CARTO (`SEC-03`):** Configurado `import.meta.env.VITE_CARTO_API_KEY` com fallback retrocompatível.
* **URLs de Mapa Restritas a HTTPS (`SEC-05`):** `getSafeMapsUrl` agora rejeita protocolos inseguros `http://` para eliminar avisos de conteúdo misto.
* **Quality Gate de Dependências no CI/CD:** Adicionado passo `npm audit --audit-level=critical` no GitHub Actions (`deploy.yml`) para barrar qualquer vulnerabilidade crítica de dependência antes do deploy.

### ⚙️ Resiliência & Zero Vazamentos de Memória (P1)
* **Correção de Loop e Timers Órfãos no Mapa de Voo (`LEAK-01`):** Em `FlightMap.jsx`, o timer de inicialização e o loop de animação (`requestAnimationFrame`) agora são rastreados e cancelados imediatamente no desmonte do componente, prevenindo erros de runtime e consumo fantasma de CPU.
* **Desacoplamento do Loop de Animação do Jogo (`LEAK-02`):** Em `TravelGame.jsx`, o estágio do voo foi desacoplado da lista de dependências do `useEffect`, garantindo que o loop do canvas funcione a 60 FPS contínuos sem desmontagens mid-gameplay.
* **Coleta de Lixo dos Nós de Áudio (`LEAK-03`):** Implementado `osc.onended` com `disconnect()` automático em todos os osciladores e amplificadores do sintetizador Web Audio (`audioEngine.js` e `MusicPlayer.jsx`). O `AudioContext` do jogo agora é devidamente fechado (`cleanup()`) ao sair da tela.

### ⚡ Otimização & Performance Máxima (P2)
* **Code-Splitting das Seções Pesadas (`PERF-02`):** `TripSection` (Leaflet) e `TripPlannerSection` (Firebase) agora são carregadas sob demanda com `React.lazy` e `Suspense`. O bundle inicial foi reduzido em **mais de 700 kB**, acelerando drasticamente o carregamento inicial.
* **Prevenção de CLS na Hero (`PERF-03`):** Adicionadas dimensões explícitas (`width`, `height`) e `decoding="async"` na foto principal para zerar o deslocamento de layout (Cumulative Layout Shift).
* **Carregamento Assíncrono de Fontes (`PERF-04`):** Google Fonts agora utilizam carregamento não-bloqueante (`rel="preload"` + media swap) eliminando bloqueio de renderização do FCP.
* **Limpeza de Assets Mortos:** Removidas imagens mock não utilizadas (`src/assets/moments/` e `6.jpeg`), economizando espaço no repositório.
* **Desativação Explícita de Source Maps:** Configurado `sourcemap: false` no `vite.config.js`.

### ♿ Acessibilidade WCAG Nível A & AAA (P3)
* **Textos Alternativos na Galeria (`A11Y-01`):** Adicionado `alt={moment.title}` nas fotografias da galeria.
* **Rótulos Acessíveis para Leitores de Tela (`A11Y-02` / `A11Y-07`):** Adicionados atributos `aria-label` e `placeholder` acessíveis em todos os botões de ícone do checklist, roteiro e botão de carinho flutuante.
* **Semântica de Checkbox (`A11Y-03` / `A11Y-05`):** Adicionados `role="checkbox"`, `aria-checked`, `tabIndex={0}` e tratamento de teclado (`Enter`/`Space`) aos itens do checklist.
* **Diálogos Modais Acessíveis & Tecla Escape (`A11Y-06`):** Adicionados `role="dialog"` e `aria-modal="true"` ao menu mobile e à modal da galeria, com fechamento acessível pela tecla `Escape`.
* **Respeito a Movimento Reduzido (`A11Y-08`):** `ExperienceProvider` e CSS global agora detectam e respeitam as preferências do sistema operacional (`prefers-reduced-motion: reduce`) e usam `scrollbar-gutter: stable` para evitar saltos de tela.

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
