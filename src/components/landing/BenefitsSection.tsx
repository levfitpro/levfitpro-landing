import { Tag, Rocket, Brain, Lock, Gift, Users } from "lucide-react";
import { useInView } from "../hooks/useInView";

const benefits = [
  {
    icon: Gift,
    title: "Acesso Gratuito ao App",
    desc: "Use o LevFit Pro completamente grátis durante a fase VIP. Enquanto outros vão pagar R$49,90/mês, você tem acesso total sem custo.",
    hsl: "61 56% 62%",
    code: "01",
  },
  {
    icon: Rocket,
    title: "Primeiro a Testar Tudo",
    desc: "Cada nova funcionalidade chega no seu celular antes de qualquer usuário. Você molda o futuro do app com seu uso real.",
    hsl: "154 32% 65%",
    code: "02",
  },
  {
    icon: Brain,
    title: "Canal Direto com o Criador",
    desc: "Sua opinião vai direto para quem desenvolve. Sem intermediários. Seu feedback realmente muda o produto.",
    hsl: "173 28% 55%",
    code: "03",
  },
  {
    icon: Tag,
    title: "Desconto Exclusivo no Lançamento",
    desc: "Quando abrir as assinaturas, membros VIP pagam menos — para sempre. Quem chegou cedo tem esse privilégio garantido.",
    hsl: "61 56% 62%",
    code: "04",
  },
  {
    icon: Users,
    title: "Comunidade Exclusiva",
    desc: "Grupo fechado com pessoas sérias sobre saúde e performance. Conteúdo, dicas e atualizações que não chegam em nenhum outro lugar.",
    hsl: "154 32% 65%",
    code: "05",
  },
  {
    icon: Lock,
    title: "Status de Fundador",
    desc: "Seu nome na lista de early adopters do LevFit Pro. Um reconhecimento permanente por ter acreditado antes de todo mundo.",
    hsl: "173 28% 55%",
    code: "06",
  },
];

export function BenefitsSection() {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 glow-line" />
      <div className="absolute inset-0 tech-grid-fine opacity-[0.03] pointer-events-none" />
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-display mono text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: "hsl(var(--neon-mint))" }}>
            // O que você ganha sendo VIP
          </p>
          <h2
            className="font-display font-extrabold tracking-tight leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "hsl(var(--foreground))" }}
          >
            Seus benefícios como <span className="gradient-text">early adopter</span>
          </h2>
          <p className="mt-4 font-body text-base max-w-xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            Benefícios reais que você realmente vai receber. Sem promessas vazias.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {benefits.map(({ icon: Icon, title, desc, hsl, code }, i) => (
            <div
              key={title}
              className={`card-premium rounded-2xl p-7 flex flex-col gap-5 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `hsl(${hsl} / 0.15)`,
                    border: `1px solid hsl(${hsl} / 0.35)`,
                    boxShadow: `0 0 24px hsl(${hsl} / 0.2)`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: `hsl(${hsl})` }} strokeWidth={2.2} />
                </div>
                <span className="mono text-xs font-bold tracking-widest" style={{ color: `hsl(${hsl} / 0.6)` }}>
                  {code}
                </span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 tracking-tight" style={{ color: "hsl(var(--foreground))" }}>
                  {title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {desc}
                </p>
              </div>
              <div
                className="h-px w-full mt-auto"
                style={{ background: `linear-gradient(90deg, hsl(${hsl} / 0.5), transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
}
