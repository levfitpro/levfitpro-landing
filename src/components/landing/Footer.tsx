import { Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_GROUP_URL, INSTAGRAM_URL } from "@/lib/links";

const socials = [
  { icon: Instagram, href: INSTAGRAM_URL, label: "Instagram", hsl: "154 32% 65%" },
  { icon: MessageCircle, href: WHATSAPP_GROUP_URL, label: "WhatsApp", hsl: "61 56% 62%" },
];

export function Footer() {
  return (
    <footer
      className="relative py-10 overflow-hidden"
      style={{ borderTop: "1px solid hsl(var(--border))" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img src="/logo-footer.png" alt="LevFit Pro" className="h-8 w-auto" />
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label, hsl }) => (
              
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "hsl(var(--surface))",
                  border: "1px solid hsl(var(--border))",
                  color: "hsl(var(--muted-foreground))",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = `hsl(${hsl} / 0.6)`;
                  el.style.color = `hsl(${hsl})`;
                  el.style.boxShadow = `0 0 24px hsl(${hsl} / 0.3)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "hsl(var(--border))";
                  el.style.color = "hsl(var(--muted-foreground))";
                  el.style.boxShadow = "none";
                }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="font-body mono text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            © 2026 LevFit Pro · Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
