import { ArrowRight, Shield } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { WHATSAPP_GROUP_URL } from "@/lib/links";

export function FinalCTA() {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, hsl(var(--neon-mint) / 0.22), hsl(var(--neon-lime) / 0.1) 40%, transparent 65%)",
        }}
      />
      <div className="absolute inset-0 tech-grid-fine opacity-[0.04] pointer-events-none" />

      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "3px",
            height: "3px",
            left: `${10 + i * 9}%`,
            bottom: `${10 + (i % 3) * 25}%`,
            background: i % 2 === 0 ? "hsl(var(--neon-lime))" : "hsl(var(--neon-mint))",
            boxShadow: `0 0 8px currentColor`,
            color: i % 2 === 0 ? "hsl(var(--neon-lime))" : "hsl(var(--neon-mint))",
            "--max-opacity": "0.6",
            "--dx": `${(i % 2 === 0 ? 1 : -1) * 30}px`,
            "--dy": `${-100 - i * 10}px`,
            animation: `particle-float ${7 + i * 0.5}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.4}s`,
          } as React.CSSProperties}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div
            className="inline-flex items-center gap-2 text-xs font-bold mono font-display uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-8"
            style={{
              border: "1px solid hsl(var(--neon-mint) / 0.45)",
              background: "hsl(var(--neon-mint) / 0.08)",
              color: "hsl(var(--neon-mint))",
              boxShadow: "0 0 24px hsl(var(--neon-mint) / 0.18)",
            }}
          >
            <Shield className="w-3 h-3" />
            Posição VIP Garantida
          </div>

          <h2
            className="font-display font-extrabold leading-[1.02] mb-6 tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
          >
            <span style={{ color: "hsl(var(--foreground))" }}>Garanta sua</span>
            <br />
            <span className="gradient-text">posição VIP agora.</span>
          </h2>

          <p
            className="font-body text-base leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Quem está aqui agora terá vantagens que não voltarão. O acesso antecipado é um privilégio — não um acidente. Entre no grupo e faça parte da construção do LevFit Pro.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary animate-glow-lime w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-display text-base"
            >
              Entrar no Grupo VIP Agora
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-semibold text-sm"
            >
              Continuar no acesso antecipado
            </a>
          </div>

          <p className="font-body mono text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
            <span style={{ color: "hsl(var(--neon-lime))" }} className="font-bold">253 vagas restantes</span>{" "}
            · Grupo fecha ao atingir 500 membros
          </p>
        </div>
      </div>
    </section>
  );
}
