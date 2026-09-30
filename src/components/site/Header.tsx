import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { CONTACTO } from "@/lib/site-data";
import logo from "@/assets/logo-untpj.png";

type NavChild = { to: string; hash?: string; label: string };
type NavItem = { to: string; label: string; children?: NavChild[] };

const NAV: NavItem[] = [
  {
    to: "/sindicato",
    label: "El sindicato",
    children: [
      { to: "/sindicato", hash: "quienes-somos", label: "Quiénes somos" },
      { to: "/sindicato", hash: "organizacion", label: "Comité Ejecutivo Nacional" },
      { to: "/sindicato/transparencia", label: "Transparencia" },
    ],
  },
  {
    to: "/derechos",
    label: "Tus derechos",
    children: [
      { to: "/derechos/prestaciones", label: "Prestaciones legales" },
      { to: "/derechos/condiciones-generales", label: "Condiciones Generales de Trabajo" },
      { to: "/derechos/seguridad-social", label: "Seguridad social" },
      { to: "/derechos/preguntas-frecuentes", label: "Preguntas frecuentes" },
      { to: "/derechos/personal-de-confianza", label: "Personal de confianza" },
    ],
  },
  {
    to: "/beneficios",
    label: "Beneficios",
    children: [
      { to: "/beneficios", hash: "guias-de-estudio", label: "Guías de estudio" },
      { to: "/beneficios", hash: "convenios", label: "Convenios" },
    ],
  },
  { to: "/apoyo", label: "Apoyo" },
  { to: "/noticias", label: "Noticias" },
  { to: "/contacto", label: "Contacto" },
];

// TODO: quitar este aviso después de octubre (mes de sensibilización sobre el
// cáncer de mama). Se puede cerrar y recuerda la elección en este navegador.
const CANCER_MAMA_DISMISS_KEY = "untpj-aviso-cancer-mama-2026";

function CancerMamaBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = window.localStorage.getItem(CANCER_MAMA_DISMISS_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-pink-600 to-rose-500 text-white">
      <div className="container-x flex items-center justify-between gap-3 py-2 text-[0.72rem]">
        <Link
          to="/beneficios"
          hash="convenios"
          className="flex min-w-0 items-center gap-2 font-semibold hover:underline"
        >
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="size-4 shrink-0 rounded-sm object-contain"
          />
          <span aria-hidden="true">🎗️</span>
          <span className="hidden truncate sm:inline">
            Octubre, mes de sensibilización sobre el cáncer de mama — conoce el convenio de Check
            Up Ginecológico
          </span>
          <span className="truncate sm:hidden">
            Octubre: prevención contra el cáncer de mama →
          </span>
        </Link>
        <button
          type="button"
          onClick={() => {
            window.localStorage.setItem(CANCER_MAMA_DISMISS_KEY, "1");
            setVisible(false);
          }}
          aria-label="Cerrar aviso"
          className="shrink-0 opacity-80 hover:opacity-100"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <CancerMamaBanner />
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
            <span className="flex size-11 items-center justify-center rounded-xl bg-background p-1 shadow-sm">
              <img src={logo} alt="UNTPJ" className="h-full w-full rounded-md object-contain" />
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
            {NAV.map((item) =>
              item.children ? (
                <div key={item.to} className="group relative">
                  <Link
                    to={item.to}
                    className="relative flex items-center gap-1.5 py-1 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary"
                    activeProps={{ className: "text-primary" }}
                  >
                    {item.label}
                    <ChevronDown
                      className="size-3.5 transition-transform duration-200 group-hover:rotate-180"
                      aria-hidden="true"
                    />
                  </Link>
                  <div className="invisible absolute top-full left-1/2 z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="border border-line bg-background py-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.to + (child.hash ?? "")}
                          to={child.to}
                          hash={child.hash}
                          className="block px-5 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-sand hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="relative py-1 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              ),
            )}
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
                <div key={item.to} className="border-b border-line/60 py-3">
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block font-display text-lg font-bold tracking-tight"
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="mt-2 flex flex-col gap-2 border-l border-line pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.to + (child.hash ?? "")}
                          to={child.to}
                          hash={child.hash}
                          onClick={() => setOpen(false)}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
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
