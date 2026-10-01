/**
 * Game Web Audio API Sound Synthesizer
 * 100% Client-side, zero latency, zero external downloads.
 */
class GameAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.engineNode = null;
    this.engineGain = null;
  }

  init() {
    if (!this.ctx) {
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
    if (this.engineGain) {
      this.engineGain.gain.setValueAtTime(muted ? 0 : 0.03, this.ctx?.currentTime || 0);
    }
  }

  _cleanupOnEnd(osc, gain) {
    osc.onended = () => {
      try {
        osc.disconnect();
        gain.disconnect();
      } catch {
        // Silently ignore already disconnected nodes
      }
    };
  }

  playHeart() {
    if (this.isMuted || !this.ctx) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(587.33, now); // D5
    osc.frequency.exponentialRampToValueAtTime(880.0, now + 0.12); // A5

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.18, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    this._cleanupOnEnd(osc, gain);

    osc.start(now);
    osc.stop(now + 0.3);
  }

  playTurbo() {
    if (this.isMuted || !this.ctx) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.35);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.15, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    this._cleanupOnEnd(osc, gain);

    osc.start(now);
    osc.stop(now + 0.5);
  }

  playShield() {
    if (this.isMuted || !this.ctx) return;
    this.init();
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      const now = this.ctx.currentTime + idx * 0.06;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.14, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      this._cleanupOnEnd(osc, gain);

      osc.start(now);
      osc.stop(now + 0.28);
    });
  }

  playSpecial() {
    if (this.isMuted || !this.ctx) return;
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      const now = this.ctx.currentTime + idx * 0.08;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.16, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      this._cleanupOnEnd(osc, gain);

      osc.start(now);
      osc.stop(now + 0.38);
    });
  }

  playHit() {
    if (this.isMuted || !this.ctx) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.25);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    this._cleanupOnEnd(osc, gain);

    osc.start(now);
    osc.stop(now + 0.3);
  }

  playWin() {
    if (this.isMuted || !this.ctx) return;
    this.init();
    // Fanfarra triunfal romântica
    const melody = [
      { f: 523.25, d: 0.18 }, // C5
      { f: 659.25, d: 0.18 }, // E5
      { f: 783.99, d: 0.18 }, // G5
      { f: 1046.5, d: 0.45 }, // C6
      { f: 880.0, d: 0.2 },  // A5
      { f: 1046.5, d: 0.6 },  // C6
    ];

    let t = this.ctx.currentTime;
    melody.forEach(({ f, d }) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(f, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.exponentialRampToValueAtTime(0.22, t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, t + d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      this._cleanupOnEnd(osc, gain);

      osc.start(t);
      osc.stop(t + d + 0.05);

      t += d * 0.85;
    });
  }

  playGameOver() {
    if (this.isMuted || !this.ctx) return;
    this.init();
    const notes = [440, 415.3, 392, 349.23];
    let t = this.ctx.currentTime;
    notes.forEach((f) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(f, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.exponentialRampToValueAtTime(0.12, t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      this._cleanupOnEnd(osc, gain);

      osc.start(t);
      osc.stop(t + 0.32);

      t += 0.25;
    });
  }

  startEngineHum() {
    if (this.engineNode || !this.ctx) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(75, now);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(220, now);

      gain.gain.setValueAtTime(this.isMuted ? 0 : 0.03, now);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      this.engineNode = osc;
      this.engineGain = gain;
    } catch {
      // Ignorar caso navegador bloqueie
    }
  }

  stopEngineHum() {
    if (this.engineNode) {
      try {
        this.engineNode.stop();
        this.engineNode.disconnect();
      } catch {
        // Silently ignore node already stopped
      }
      this.engineNode = null;
      this.engineGain = null;
    }
  }

  cleanup() {
    this.stopEngineHum();
    if (this.ctx && this.ctx.state !== "closed") {
      this.ctx.close().catch(() => {});
      this.ctx = null;
    }
  }
}

export const gameAudio = new GameAudioEngine();
