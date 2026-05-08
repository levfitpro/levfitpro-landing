import { Heart, Zap, TrendingUp, Activity } from "lucide-react";

export function AppMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="absolute inset-0 rounded-[2rem] blur-3xl opacity-50 bg-gradient-brand animate-glow-mint" />
      <div
        className="absolute -inset-8 rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, hsl(var(--neon-lime) / 0.6), transparent 70%)" }}
      />

      <div className="absolute inset-0 -m-12 pointer-events-none">
        <div className="absolute inset-0 animate-ring-spin">
          <div
            className="absolute inset-0 rounded-full border opacity-30"
            style={{ borderColor: "hsl(var(--neon-mint) / 0.4)", borderStyle: "dashed" }}
          />
        </div>
        <div className="absolute inset-6 animate-ring-spin-reverse">
          <div
            className="absolute inset-0 rounded-full border-2 opacity-20"
            style={{ borderColor: "hsl(var(--neon-lime) / 0.3)", borderStyle: "dotted" }}
          />
        </div>
      </div>

      <div
        className="relative animate-float-strong rounded-3xl overflow-hidden border-2"
        style={{
          background: "hsl(var(--surface))",
          borderColor: "hsl(var(--neon-mint) / 0.35)",
          boxShadow: "0 32px 80px hsl(180 10% 2% / 0.9), 0 0 0 1px hsl(var(--neon-mint) / 0.2) inset, 0 0 60px hsl(var(--neon-mint) / 0.25)",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--neon-lime)), transparent)" }}
        />

        <div
          className="flex items-center justify-between px-5 pt-5 pb-4"
          style={{ borderBottom: "1px solid hsl(var(--neon-mint) / 0.12)" }}
        >
          <div>
            <p className="text-xs font-body" style={{ color: "hsl(var(--muted-foreground))" }}>Bom dia,</p>
            <p className="text-sm font-bold font-display" style={{ color: "hsl(var(--foreground))" }}>Rafael</p>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="text-xs px-2 py-0.5 rounded-md font-bold mono uppercase"
              style={{
                background: "hsl(var(--neon-lime) / 0.15)",
                color: "hsl(var(--neon-lime))",
                border: "1px solid hsl(var(--neon-lime) / 0.3)",
              }}
            >
              VIP
            </span>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "var(--gradient-brand)" }}
            >
              <Activity className="w-4 h-4" style={{ color: "hsl(var(--primary-foreground))" }} />
            </div>
          </div>
        </div>

        <div className="px-5 py-4">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" strokeWidth="6" stroke="hsl(var(--neon-mint) / 0.12)" />
              <circle
                cx="50" cy="50" r="42" fill="none" strokeWidth="6"
                stroke="url(#ringGrad)"
                strokeLinecap="round"
                strokeDasharray="208 264"
                style={{ filter: "drop-shadow(0 0 8px hsl(var(--neon-mint) / 0.7))" }}
              />
              <defs>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(154, 32%, 65%)" />
                  <stop offset="100%" stopColor="hsl(61, 56%, 62%)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display font-extrabold text-2xl gradient-text-static">79%</span>
              <span className="text-xs font-body mono uppercase tracking-wider" style={{ color: "hsl(var(--muted-foreground))" }}>meta</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: Heart, value: "142", label: "BPM", hsl: "154 32% 65%" },
              { icon: Zap, value: "847", label: "kcal", hsl: "61 56% 62%" },
              { icon: TrendingUp, value: "+12%", label: "força", hsl: "173 28% 55%" },
            ].map(({ icon: Icon, value, label, hsl }) => (
              <div
                key={label}
                className="rounded-xl p-2.5 flex flex-col items-center gap-0.5"
                style={{
                  background: `hsl(${hsl} / 0.1)`,
                  border: `1px solid hsl(${hsl} / 0.25)`,
                }}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: `hsl(${hsl})` }} />
                <span className="font-display font-bold text-xs" style={{ color: "hsl(var(--foreground))" }}>{value}</span>
                <span className="font-body mono uppercase" style={{ color: "hsl(var(--muted-foreground))", fontSize: "9px" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 pb-5">
          <div
            className="rounded-xl p-3"
            style={{
              background: "var(--gradient-card)",
              border: "1px solid hsl(var(--neon-mint) / 0.18)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold font-display" style={{ color: "hsl(var(--foreground))" }}>Treino atual</span>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-body mono uppercase tracking-wider"
                style={{
                  background: "hsl(var(--neon-lime) / 0.15)",
                  color: "hsl(var(--neon-lime))",
                  border: "1px solid hsl(var(--neon-lime) / 0.35)",
                  fontSize: "9px",
                }}
              >
                ativo
              </span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: "hsl(var(--neon-mint) / 0.1)" }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: "65%",
                  background: "var(--gradient-brand)",
                  boxShadow: "0 0 12px hsl(var(--neon-lime) / 0.6)",
                }}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-xs font-body mono" style={{ color: "hsl(var(--muted-foreground))" }}>Semana 3 · Dia 4</span>
              <span className="text-xs font-body mono font-bold" style={{ color: "hsl(var(--neon-lime))" }}>65%</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute -left-12 top-20 rounded-xl px-3 py-2 flex items-center gap-2 animate-float"
        style={{
          background: "hsl(var(--surface))",
          border: "1px solid hsl(var(--neon-mint) / 0.4)",
          boxShadow: "0 8px 32px hsl(180 10% 2% / 0.7), 0 0 24px hsl(var(--neon-mint) / 0.2)",
          animationDelay: "1s",
        }}
      >
        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "hsl(var(--neon-mint) / 0.18)" }}>
          <Zap className="w-3.5 h-3.5" style={{ color: "hsl(var(--neon-mint))" }} />
        </div>
        <div>
          <p className="font-display font-bold text-xs" style={{ color: "hsl(var(--foreground))" }}>+23%</p>
          <p className="font-body mono uppercase tracking-wider" style={{ color: "hsl(var(--muted-foreground))", fontSize: "8px" }}>energia</p>
        </div>
      </div>

      <div
        className="absolute -right-10 bottom-24 rounded-xl px-3 py-2 animate-float-strong"
        style={{
          background: "hsl(var(--surface))",
          border: "1px solid hsl(var(--neon-lime) / 0.45)",
          boxShadow: "0 8px 32px hsl(180 10% 2% / 0.7), 0 0 24px hsl(var(--neon-lime) / 0.25)",
          animationDelay: "2s",
        }}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(var(--neon-lime))", boxShadow: "0 0 8px hsl(var(--neon-lime))" }} />
          <span className="font-body mono text-xs font-bold uppercase tracking-wider" style={{ color: "hsl(var(--neon-lime))", fontSize: "10px" }}>VIP ativo</span>
        </div>
      </div>
    </div>
  );
}
