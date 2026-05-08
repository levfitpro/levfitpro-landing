import { Check, Crown } from "lucide-react";
import { useInView } from "../hooks/useInView";

const perks = [
  "Acesso antecipado exclusivo",
  "Influência direta no desenvolvimento",
  "Benefícios exclusivos no lançamento",
];

export function VIPSection() {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-section-glow)" }}
      />

      <div className="container mx-auto px-6">
        <div
          className={`relative max-w-3xl mx-auto rounded-[1.5rem] p-12 text-center border-flow transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{
            background: "var(--gradient-card)",
            boxShadow: "0 0 80px hsl(var(--neon-mint) / 0.1), 0 32px 64px hsl(180 10% 2% / 0.6)",
          }}
        >
          <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 animate-shimmer" />
          </div>

          {[
            { top: "12px", left: "12px", rotate: "0" },
            { top: "12px", right: "12px", rotate: "90" },
            { bottom: "12px", right: "12px", rotate: "180" },
            { bottom: "12px", left: "12px", rotate: "270" },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 pointer-events-none"
              style={{
                ...pos,
                transform: `rotate(${pos.rotate}deg)`,
                borderTop: "2px solid hsl(var(--neon-lime) / 0.6)",
                borderLeft: "2px solid hsl(var(--neon-lime) / 0.6)",
              }}
            />
          ))}

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center animate-glow-mint"
              style={{ background: "var(--gradient-brand)" }}
            >
              <Crown className="w-7 h-7" style={{ color: "hsl(var(--background))" }} />
            </div>

            <span
              className="font-display mono text-xs font-bold px-4 py-1.5 rounded-full tracking-[0.2em] uppercase"
              style={{
                background: "hsl(var(--neon-lime) / 0.1)",
                border: "1px solid hsl(var(--neon-lime) / 0.4)",
                color: "hsl(var(--neon-lime))",
              }}
            >
              Posição #247 / 500 vagas
            </span>

            <h2
              className="font-display font-extrabold leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", color: "hsl(var(--foreground))" }}
            >
              Poucos chegaram até aqui.
              <br />
              <span className="gradient-text">Você está entre eles.</span>
            </h2>

            <p
              className="font-body text-base max-w-xl"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              Enquanto outros ainda esperam, você já possui acesso privilegiado a tudo que vem
              por aí. Isso não é sorte — é uma escolha estratégica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-2">
              {perks.map((perk, i) => (
                <div
                  key={perk}
                  className={`flex items-center gap-2.5 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${0.3 + i * 0.18}s` }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "hsl(var(--neon-lime) / 0.18)",
                      border: "1px solid hsl(var(--neon-lime) / 0.5)",
                      boxShadow: "0 0 12px hsl(var(--neon-lime) / 0.3)",
                    }}
                  >
                    <Check className="w-3.5 h-3.5" style={{ color: "hsl(var(--neon-lime))" }} strokeWidth={3} />
                  </div>
                  <span className="font-body text-sm font-medium" style={{ color: "hsl(var(--foreground))" }}>
                    {perk}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
