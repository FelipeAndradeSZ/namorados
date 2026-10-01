/**
 * DESTINO 1000 — Motor de Áudio Procedural (Web Audio API)
 * Efeitos sonoros suaves, acolhedores e otimizados para sessões longas de estudo.
 * Zero latência, 100% sintetizado localmente no navegador, sem consumo de dados móveis.
 */

class DestinoSoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
  }

  _cleanupNode(osc, gain) {
    osc.onended = () => {
      try {
        osc.disconnect();
        gain.disconnect();
      } catch {
        // Silently ignore
      }
    };
  }

  /**
   * Acorde triunfal suave ao acertar uma questão
   */
  playSuccess() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    // Arpejo cálido em Fá Maior (F4, A4, C5, F5)
    const notes = [349.23, 440.00, 523.25, 698.46];
    let startTime = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const t = startTime + idx * 0.07;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.12, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      this._cleanupNode(osc, gain);

      osc.start(t);
      osc.stop(t + 0.48);
    });
  }

  /**
   * Som de reflexão e acolhimento ao analisar um erro
   */
  playReflect() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(440, t); // A4
    osc.frequency.exponentialRampToValueAtTime(329.63, t + 0.28); // E4

    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.08, t + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    this._cleanupNode(osc, gain);

    osc.start(t);
    osc.stop(t + 0.42);
  }

  /**
   * Efeito de carimbo ou conquista de postal
   */
  playStamp() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(587.33, t); // D5
    osc.frequency.exponentialRampToValueAtTime(880, t + 0.15); // A5

    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.14, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    this._cleanupNode(osc, gain);

    osc.start(t);
    osc.stop(t + 0.28);
  }

  /**
   * Clique tátil suave de interface
   */
  playClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(700, t);

    gain.gain.setValueAtTime(0.04, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    this._cleanupNode(osc, gain);

    osc.start(t);
    osc.stop(t + 0.05);
  }

  cleanup() {
    if (this.ctx && this.ctx.state !== "closed") {
      this.ctx.close().catch(() => {});
      this.ctx = null;
    }
  }
}

export const destinoAudio = new DestinoSoundEngine();
