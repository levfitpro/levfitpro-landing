import { ArrowRight, Sparkles } from "lucide-react";
import { AppMockup } from "./AppMockup";
import { WHATSAPP_GROUP_URL } from "@/lib/links";

export function HeroSection() {
  return (
    <section className="hero-bg noise-overlay relative min-h-screen flex items-center">
      <div className="absolute inset-0 tech-grid pointer-events-none" />

      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + (i % 4)}px`,
            height: `${2 + (i % 4)}px`,
            left: `${5 + i * 5.5}%`,
            top: `${10 + ((i * 19) % 75)}%`,
            background: i % 3 === 0 ? "hsl(var(--neon-lime))" : "hsl(var(--neon-mint))",
            boxShadow: `0 0 ${4 + (i % 3) * 4}px currentColor`,
            color: i % 3 === 0 ? "hsl(var(--neon-lime))" : "hsl(var(--neon-mint))",
            "--max-opacity": `${0.3 + (i % 4) * 0.15}`,
            "--dx": `${(i % 2 === 0 ? 1 : -1) * (30 + i * 4)}px`,
            "--dy": `${-60 - i * 6}px`,
            animation: `particle-float ${8 + i * 0.6}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.3}s`,
          } as React.CSSProperties}
        />
      ))}

      {[...Array(5)].map((_, i) => (
        <div
          key={`stream-${i}`}
          className="absolute top-0 h-32"
          style={{
            left: `${15 + i * 18}%`,
            width: "1px",
            background: `linear-gradient(180deg, transparent, hsl(${i % 2 === 0 ? "var(--neon-mint)" : "var(--neon-lime)"} / 0.6), transparent)`,
            animation: `data-stream ${5 + i * 1.2}s linear infinite`,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-7">
          <div className="animate-fade-in-up">
            <span
              className="inline-flex items-center gap-2 text-xs font-bold font-display px-4 py-1.5 rounded-full uppercase tracking-[0.18em] animate-badge-glow mono"
              style={{ color: "hsl(var(--neon-lime))" }}
            >
              <Sparkles className="w-3 h-3" />
              Acesso Antecipado · Grupo VIP
            </span>
          </div>

          <h1
            className="font-display font-extrabold leading-[0.98] animate-fade-in-up delay-200 tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 6.5vw, 5rem)" }}
          >
            <span style={{ color: "hsl(var(--foreground))" }}>Você entrou</span>
            <br />
            <span className="gradient-text">antes de todos.</span>
          </h1>

          <p
            className="font-body leading-relaxed max-w-md animate-fade-in-up delay-300"
            style={{ color: "hsl(var(--muted-foreground))", fontSize: "1.08rem" }}
          >
            Você agora faz parte do acesso antecipado — um grupo limitado que está{" "}
            <span style={{ color: "hsl(var(--foreground))" }}>ajudando a moldar</span>{" "}
            o futuro do LevFit Pro. O app de fitness mais personalizado do Brasil.
          </p>

          <div className="flex flex-wrap gap-3 animate-fade-in-up delay-400">
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary animate-glow-lime inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display text-sm"
            >
              Entrar no Grupo VIP
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-semibold text-sm"
            >
              Ver benefícios exclusivos
            </a>
          </div>

          <div className="flex items-center gap-4 animate-fade-in-up delay-500">
            <div className="flex -space-x-2.5">
              {["v", "c", "m", "r"].map((letter, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center font-display font-bold text-xs"
                  style={{
                    borderColor: "hsl(var(--background))",
                    background: i % 2 === 0 ? `hsl(154 32% ${55 + i * 4}%)` : `hsl(61 56% ${55 + i * 4}%)`,
                    color: "hsl(var(--background))",
                  }}
                >
                  {letter.toUpperCase()}
                </div>
              ))}
            </div>
            <p className="font-body text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
              <span style={{ color: "hsl(var(--neon-lime))" }} className="font-bold mono">247</span>{" "}
              early adopters já estão dentro
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-fade-in-up delay-300">
          <AppMockup />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 glow-line-thick" />
    </section>
  );
}
