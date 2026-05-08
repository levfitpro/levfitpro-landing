import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

const LAUNCH_DATE = new Date("2026-08-15T00:00:00");

function getTimeLeft() {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative rounded-2xl flex items-center justify-center overflow-hidden border-flow"
        style={{
          width: "clamp(80px, 16vw, 120px)",
          height: "clamp(80px, 16vw, 120px)",
          background: "var(--gradient-card)",
          boxShadow: "0 0 40px hsl(var(--neon-mint) / 0.15), 0 12px 32px hsl(180 10% 2% / 0.7), inset 0 1px 0 hsl(var(--neon-mint) / 0.15)",
        }}
      >
        <div className="absolute inset-0 tech-grid-fine opacity-[0.08]" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--neon-lime) / 0.7), transparent)" }}
        />
        <div
          className="absolute inset-0 animate-shimmer pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 0%, hsl(var(--neon-mint) / 0.12) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
        />
        <span
          className="countdown-digit relative z-10"
          style={{ fontSize: "clamp(2.2rem, 6vw, 3.5rem)" }}
        >
          {display}
        </span>
        <div
          className="absolute bottom-1.5 left-1.5 w-2 h-2 pointer-events-none"
          style={{ borderBottom: "1.5px solid hsl(var(--neon-lime) / 0.7)", borderLeft: "1.5px solid hsl(var(--neon-lime) / 0.7)" }}
        />
        <div
          className="absolute bottom-1.5 right-1.5 w-2 h-2 pointer-events-none"
          style={{ borderBottom: "1.5px solid hsl(var(--neon-lime) / 0.7)", borderRight: "1.5px solid hsl(var(--neon-lime) / 0.7)" }}
        />
      </div>
      <span
        className="font-display mono text-xs font-bold uppercase tracking-[0.2em]"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span
      className="font-display font-extrabold self-start mt-6 mono animate-pulse"
      style={{
        fontSize: "clamp(1.6rem, 4.5vw, 2.6rem)",
        color: "hsl(var(--neon-lime) / 0.6)",
        lineHeight: "1",
        textShadow: "0 0 12px hsl(var(--neon-lime) / 0.5)",
      }}
    >
      :
    </span>
  );
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const { ref, isVisible } = useInView();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 glow-line" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, hsl(var(--neon-mint) / 0.1), transparent 70%), radial-gradient(ellipse 50% 40% at 50% 100%, hsl(var(--neon-lime) / 0.08), transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="font-display mono text-xs font-bold uppercase tracking-[0.25em] mb-4"
            style={{ color: "hsl(var(--neon-lime))" }}
          >
            // Contagem regressiva
          </p>
          <h2
            className="font-display font-extrabold mb-3 tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "hsl(var(--foreground))" }}
          >
            O lançamento oficial está chegando
          </h2>
          <p
            className="font-body mono text-sm mb-12"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            <span style={{ color: "hsl(var(--neon-mint))" }}>15.08.2026</span> · Quem está dentro agora, já ganhou.
          </p>

          <div
            className={`flex items-center justify-center gap-3 sm:gap-5 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <TimeBlock value={timeLeft.days} label="Dias" />
            <Colon />
            <TimeBlock value={timeLeft.hours} label="Horas" />
            <Colon />
            <TimeBlock value={timeLeft.minutes} label="Min" />
            <Colon />
            <TimeBlock value={timeLeft.seconds} label="Seg" />
          </div>

          <div
            className="mt-14 inline-flex items-center gap-2.5 px-6 py-3 rounded-full"
            style={{
              background: "hsl(var(--neon-lime) / 0.08)",
              border: "1px solid hsl(var(--neon-lime) / 0.3)",
              boxShadow: "0 0 32px hsl(var(--neon-lime) / 0.15)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "hsl(var(--neon-lime))", boxShadow: "0 0 12px hsl(var(--neon-lime))" }}
            />
            <span
              className="font-display mono font-bold text-sm uppercase tracking-wider"
              style={{ color: "hsl(var(--neon-lime))" }}
            >
              Vagas VIP fecham em breve
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
}
