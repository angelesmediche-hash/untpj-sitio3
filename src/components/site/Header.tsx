import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CONTACTO } from "@/lib/site-data";
import logo from "@/assets/logo-untpj.png";

const NAV = [
  { to: "/sindicato", label: "El sindicato" },
  { to: "/derechos", label: "Tus derechos" },
  { to: "/beneficios", label: "Beneficios" },
  { to: "/apoyo", label: "Apoyo" },
  { to: "/noticias", label: "Noticias" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ink text-ink-foreground">
        <div className="container-x flex flex-wrap items-center justify-between gap-2 py-2 text-[0.72rem]">
          <p className="text-ink-muted">
            Línea 24/7 para casos urgentes · exclusiva para personal afiliado e invitado
          </p>
          <a
            href={`tel:${CONTACTO.tel247}`}
            className="inline-flex items-center gap-2 font-display font-bold tracking-wide text-accent transition-opacity hover:opacity-80"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            56 1991 5155
          </a>
        </div>
      </div>

      <div className="border-b border-line bg-background/90 backdrop-blur-md">
        <div className="container-x flex items-center justify-between gap-6 py-4">
          <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex size-11 items-center justify-center bg-background p-1 shadow-sm">
              <img src={logo} alt="UNTPJ" className="h-full w-full object-contain" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-extrabold tracking-tight">
                UNTPJ
              </span>
              <span className="block text-[0.68rem] text-muted-foreground">
                Unión Nacional de Trabajadores del Poder Judicial
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Principal">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative py-1 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/afiliacion"
              className="hidden bg-primary px-5 py-3 font-display text-xs font-extrabold tracking-[0.14em] text-primary-foreground uppercase lift hover:bg-ink sm:inline-flex"
            >
              Afíliate
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className="flex size-11 items-center justify-center border border-line xl:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-line bg-background xl:hidden" aria-label="Móvil">
            <div className="container-x flex flex-col py-2">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/60 py-3 font-display text-lg font-bold tracking-tight"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/afiliacion"
                onClick={() => setOpen(false)}
                className="mt-4 mb-4 bg-primary px-5 py-4 text-center font-display text-xs font-extrabold tracking-[0.14em] text-primary-foreground uppercase"
              >
                Afíliate a UNTPJ
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
