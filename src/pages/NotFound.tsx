import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "hsl(var(--background))" }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ color: "hsl(var(--foreground))" }}>404</h1>
        <p className="text-xl mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>Página não encontrada</p>
        <a href="/" style={{ color: "hsl(var(--neon-lime))" }}>Voltar ao início</a>
      </div>
    </div>
  );
};
export default NotFound;
