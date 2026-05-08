import { useInView } from "../hooks/useInView";

export function VisionSection() {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, hsl(var(--neon-mint) / 0.12), hsl(var(--neon-lime) / 0.06) 50%, transparent 70%)",
        }}
      />

      <svg
        className="absolute left-0 top-1/2 -translate-y-1/2 opacity-25 hidden lg:block animate-ring-spin"
        width="320" height="320" viewBox="0 0 260 260" fill="none"
      >
        <circle cx="130" cy="130" r="120" stroke="url(#vGrad1)" strokeWidth="0.5" strokeDasharray="3 6" />
        <circle cx="130" cy="130" r="80" stroke="url(#vGrad1)" strokeWidth="0.8" />
        <circle cx="130" cy="130" r="40" stroke="url(#vGrad1)" strokeWidth="1" strokeDasharray="2 4" />
        <defs>
          <linearGradient id="vGrad1" x1="0" y1="0" x2="260" y2="260">
            <stop stopColor="hsl(154, 32%, 65%)" />
            <stop offset="1" stopColor="hsl(61, 56%, 62%)" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-25 hidden lg:block animate-ring-spin-reverse"
        width="320" height="320" viewBox="0 0 260 260" fill="none"
      >
        <circle cx="130" cy="130" r="120" stroke="url(#vGrad2)" strokeWidth="0.5" />
        <circle cx="130" cy="130" r="80" stroke="url(#vGrad2)" strokeWidth="0.8" strokeDasharray="4 8" />
        <circle cx="130" cy="130" r="40" stroke="url(#vGrad2)" strokeWidth="1" />
        <defs>
          <linearGradient id="vGrad2" x1="0" y1="0" x2="260" y2="260">
            <stop stopColor="hsl(61, 56%, 62%)" />
            <stop offset="1" stopColor="hsl(173, 28%, 55%)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p
            className="font-display mono text-xs font-bold uppercase tracking-[0.25em] mb-8"
            style={{ color: "hsl(var(--neon-mint))" }}
          >
            // Visão de futuro
          </p>

          <blockquote>
            <p
              className="font-display font-extrabold leading-[1.05] mb-5 tracking-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.6rem)",
                color: "hsl(var(--foreground))",
              }}
            >
              Você não está apenas{" "}
              <span className="gradient-text">testando um app.</span>
            </p>
            <p
              className="font-display font-bold tracking-tight"
              style={{
                fontSize: "clamp(1.5rem, 3.2vw, 2.4rem)",
                color: "hsl(var(--muted-foreground))",
              }}
            >
              Você está participando da construção{" "}
              <span style={{ color: "hsl(var(--foreground))" }}>de algo grande.</span>
            </p>
          </blockquote>

          <div className="mt-10 flex justify-center">
            <div
              className="h-0.5 w-48 origin-center"
              style={{
                background: "var(--gradient-brand)",
                boxShadow: "0 0 16px hsl(var(--neon-mint) / 0.5)",
                animation: isVisible ? "line-grow 1.5s ease-out 0.5s both" : undefined,
              }}
            />
          </div>

          <p
            className="mt-8 font-body text-base leading-relaxed max-w-lg mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            O LevFit Pro vai redefinir como pessoas se relacionam com saúde e performance.
            E você já está dentro — com vantagens que nenhum usuário futuro terá.
          </p>
        </div>
      </div>
    </section>
  );
}
