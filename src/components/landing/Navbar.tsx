import { Menu } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_GROUP_URL } from "@/lib/links";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "hsl(var(--background) / 0.75)",
        backdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid hsl(var(--neon-mint) / 0.1)",
      }}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo-navbar.png" alt="LevFit Pro" className="h-9 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Benefícios", "Comunidade", "Lançamento"].map((item) => (
            
              key={item}
              href="#"
              className="font-body mono text-sm transition-colors duration-200 uppercase tracking-wider"
              style={{ color: "hsl(var(--muted-foreground))", fontSize: "12px" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "hsl(var(--neon-lime))")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "hsl(var(--muted-foreground))")
              }
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <span
            className="font-display mono text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
            style={{
              background: "hsl(var(--neon-lime) / 0.1)",
              border: "1px solid hsl(var(--neon-lime) / 0.4)",
              color: "hsl(var(--neon-lime))",
            }}
          >
            ● VIP Ativo
          </span>
          
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-1.5 px-5 py-2 rounded-lg font-display text-sm"
          >
            Área VIP
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg"
          style={{
            background: "hsl(var(--surface))",
            border: "1px solid hsl(var(--border))",
            color: "hsl(var(--foreground))",
          }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{
            background: "hsl(var(--background) / 0.95)",
            borderBottom: "1px solid hsl(var(--neon-mint) / 0.15)",
          }}
        >
          {["Benefícios", "Comunidade", "Lançamento"].map((item) => (
            
              key={item}
              href="#"
              className="font-body mono text-sm uppercase tracking-wider"
              style={{ color: "hsl(var(--foreground))", fontSize: "12px" }}
            >
              {item}
            </a>
          ))}
          
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg font-display text-sm"
          >
            Acessar Área VIP
          </a>
        </div>
      )}
    </nav>
  );
}
