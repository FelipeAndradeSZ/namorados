export function AuroraBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(244,114,182,0.15),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(251,113,133,0.12),transparent_25%),radial-gradient(circle_at_50%_92%,rgba(190,24,93,0.12),transparent_35%)]" />
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="aurora aurora-three" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(20,11,20,0.42)_70%,rgba(20,11,20,0.9)_100%)]" />
    </div>
  );
}
