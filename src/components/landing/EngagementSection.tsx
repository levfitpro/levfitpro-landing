import { Instagram, MessageCircle, Star, Share2, ArrowRight } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { WHATSAPP_GROUP_URL, INSTAGRAM_URL } from "@/lib/links";

const actions = [
  {
    icon: MessageCircle,
    title: "Entre no grupo exclusivo",
    desc: "O grupo VIP é onde tudo acontece primeiro — novidades, atualizações e conteúdo exclusivo.",
    hsl: "61 56% 62%",
    href: WHATSAPP_GROUP_URL,
  },
  {
    icon: Instagram,
    title: "Siga no Instagram",
    desc: "Fique por dentro de cada novidade do LevFit Pro antes de qualquer um. @levfitpro",
    hsl: "154 32% 65%",
    href: INSTAGRAM_URL,
  },
  {
    icon: Star,
    title: "Envie feedbacks reais",
    desc: "Sua opinião tem peso real. Cada feedback vai direto para quem desenvolve o app.",
    hsl: "173 28% 55%",
    href: WHATSAPP_GROUP_URL,
  },
  {
    icon: Share2,
    title: "Compartilhe seus resultados",
    desc: "Seu depoimento inspira e fortalece a comunidade. Mostre o que o LevFit Pro fez por você.",
    hsl: "61 56% 62%",
    href: WHATSAPP_GROUP_URL,
  },
];

export function EngagementSection() {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 20% 50%, hsl(var(--neon-mint) / 0.08), transparent 70%)" }}
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
          <div className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <p className="font-display mono text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: "hsl(var(--neon-lime))" }}>
              // Sua participação
            </p>
            <h2
              className="font-display font-extrabold mb-6 leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "hsl(var(--foreground))" }}
            >
              Seu papel dentro <span className="gradient-text">do LevFit Pro</span>
            </h2>
            <p className="font-body text-base leading-relaxed mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
              Não somos só um app — somos uma comunidade construída por quem chegou cedo, com quem acreditou antes. Cada membro importa e cada feedback conta.
            </p>
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display text-sm"
            >
              Fazer parte ativamente
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-col gap-3">
            {actions.map(({ icon: Icon, title, desc, hsl, href }, i) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-start gap-4 rounded-xl p-4 transition-all duration-500 relative overflow-hidden ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
                style={{
                  transitionDelay: `${0.2 + i * 0.14}s`,
                  background: "hsl(var(--surface))",
                  border: "1px solid hsl(var(--border))",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `hsl(${hsl} / 0.5)`;
                  e.currentTarget.style.boxShadow = `0 0 32px hsl(${hsl} / 0.18)`;
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--border))";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `hsl(${hsl} / 0.12)`,
                    border: `1px solid hsl(${hsl} / 0.25)`,
                    boxShadow: `0 0 16px hsl(${hsl} / 0.15)`,
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: `hsl(${hsl})` }} strokeWidth={2.3} />
                </div>
                <div className="flex-1">
                  <p className="font-display font-bold text-sm mb-1 tracking-tight" style={{ color: "hsl(var(--foreground))" }}>{title}</p>
                  <p className="font-body text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>{desc}</p>
                </div>
                <span className="mono text-xs font-bold opacity-30" style={{ color: `hsl(${hsl})` }}>0{i + 1}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
