import { useMemo } from 'react';

export default function ParticleBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        id: i,
        left: `${(i * 7.3) % 100}%`,
        top: `${(i * 11.7) % 100}%`,
        size: 2 + (i % 4),
        duration: 12 + (i % 8),
        delay: (i % 10) * 0.4
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark opacity-100" />
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-brand-400/20 dark:bg-cyan-400/15 animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}
    </div>
  );
}
