import { Link } from "@tanstack/react-router";
import { CONTACTO } from "@/lib/site-data";

const COLUMNS: { title: string; links: { to: string; label: string }[] }[] = [
  {
    title: "El sindicato",
    links: [
      { to: "/sindicato", label: "Quiénes somos" },
      { to: "/sindicato", label: "Comité Ejecutivo Nacional" },
      { to: "/contacto", label: "Contacto" },
    ],
  },
  {
    title: "Tus derechos",
    links: [
      { to: "/derechos", label: "Centro de derechos" },
      { to: "/derechos/prestaciones", label: "Prestaciones legales" },
      { to: "/derechos/condiciones-generales", label: "Condiciones Generales de Trabajo" },
      { to: "/derechos/seguridad-social", label: "Seguridad social" },
      { to: "/derechos/preguntas-frecuentes", label: "Preguntas frecuentes" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { to: "/beneficios", label: "Beneficios y convenios" },
      { to: "/apoyo", label: "Apoyo al trabajador" },
      { to: "/noticias", label: "Noticias" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-display text-3xl font-extrabold tracking-tight">UNTPJ</p>
            <p className="mt-2 max-w-xs text-sm text-ink-muted">
              Unión Nacional de Trabajadores del Poder Judicial. Te acompañamos hasta el final.
            </p>
            <Link
              to="/afiliacion"
              className="mt-6 inline-flex bg-accent px-6 py-3 font-display text-xs font-extrabold tracking-[0.14em] text-accent-foreground uppercase lift hover:opacity-90"
            >
              Afíliate a UNTPJ
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="eyebrow text-accent">{col.title}</h3>
                <ul className="mt-4 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="eyebrow text-accent">Contacto</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                <li>
                  <span className="block text-[0.7rem] tracking-wide uppercase">Información</span>
                  <a href={`tel:${CONTACTO.telGeneral}`} className="hover:text-ink-foreground">
                    55 1293 5538
                  </a>
                </li>
                <li>
                  <span className="block text-[0.7rem] tracking-wide uppercase">
                    Afiliaciones e invitados
                  </span>
                  <a href={`tel:${CONTACTO.telAfiliaciones}`} className="hover:text-ink-foreground">
                    55 1321 2925
                  </a>
                </li>
                <li>
                  <span className="block text-[0.7rem] tracking-wide uppercase">Línea 24/7</span>
                  <a href={`tel:${CONTACTO.tel247}`} className="hover:text-ink-foreground">
                    56 1991 5155
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACTO.email}`} className="hover:text-ink-foreground">
                    {CONTACTO.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACTO.emailAfiliacion}`}
                    className="hover:text-ink-foreground"
                  >
                    {CONTACTO.emailAfiliacion}
                  </a>
                </li>
                <li className="flex gap-4 pt-1">
                  <a
                    href={CONTACTO.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ink-foreground"
                  >
                    Instagram
                  </a>
                  <a
                    href={CONTACTO.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ink-foreground"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-14 border-t border-gold/25 pt-6 text-xs text-ink-muted">
          © {new Date().getFullYear()} Unión Nacional de Trabajadores del Poder Judicial. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}
