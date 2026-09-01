import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, PageHero, Section } from "@/components/site/Bits";
import { COMITE } from "@/lib/site-data";
import heroImg from "@/assets/sindicato-equipo.jpg";

export const Route = createFileRoute("/sindicato")({
  head: () => ({
    meta: [
      { title: "El sindicato — UNTPJ" },
      {
        name: "description",
        content:
          "Quiénes somos, representación y Comité Ejecutivo Nacional de la Unión Nacional de Trabajadores del Poder Judicial.",
      },
      { property: "og:title", content: "El sindicato — UNTPJ" },
      {
        name: "og:description",
        content: "Conoce la organización, representación y estructura de la UNTPJ.",
      },
      {
        property: "og:description",
        content: "Conoce la organización, representación y estructura de la UNTPJ.",
      },
    ],
  }),
  component: Sindicato,
});

function Sindicato() {
  return (
    <>
      <PageHero
        eyebrow="El sindicato"
        title="Una organización que representa tus derechos."
        intro="Somos tu nueva opción de sindicato, un proyecto con personas comprometidas con darte herramientas para mejorar tu carrera, línea abierta de comunicación cuando lo necesites y apoyo hasta el final de cualquier procedimiento."
        image={heroImg}
        imageAlt="Equipo de la UNTPJ reunido"
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>Índice</Eyebrow>
            <ul className="mt-6 space-y-2 font-display text-sm font-bold tracking-tight">
              <li>
                <a href="#quienes-somos" className="hover:text-primary">
                  Quiénes somos
                </a>
              </li>
              <li>
                <a href="#organizacion" className="hover:text-primary">
                  Organización
                </a>
              </li>
              <li>
                <Link to="/sindicato/transparencia" className="hover:text-primary">
                  Transparencia
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-16">
            <article id="quienes-somos" className="scroll-mt-32">
              <h2 className="text-3xl md:text-4xl">Quiénes somos</h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Somos un grupo de trabajadores que, durante años, hemos visto injusticias y
                situaciones que muchos compañeros han tenido que enfrentar en solitario. Por eso
                decidimos construir un sindicato con un propósito claro: defender tus derechos y
                acompañarte en cada etapa de tu vida laboral.
              </p>
              <ul className="mt-8 space-y-4 border-t border-line pt-8">
                {[
                  "Apoyo permanente para proteger tu seguridad laboral.",
                  "Cursos y capacitaciones para impulsar tu desarrollo profesional.",
                  "Línea de atención 24/7 para casos urgentes clasificados como actas administrativas, cese, hostigamiento laboral o sexual.",
                  "Eventos deportivos, recreativos, culturales y descuentos en bienes y servicios que se indiquen en el sitio y en nuestras redes sociales.",
                ].map((t) => (
                  <li key={t} className="flex gap-4">
                    <span className="mt-2 size-1.5 shrink-0 bg-primary" aria-hidden="true" />
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </article>

          </div>
        </div>
      </Section>

      <Section tone="sand" className="scroll-mt-32">
        <div id="organizacion" className="scroll-mt-32">
          <Eyebrow>Organización</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-4xl md:text-6xl">Comité Ejecutivo Nacional</h2>
          <div className="mt-14 grid gap-px bg-line md:grid-cols-2 xl:grid-cols-3">
            {COMITE.map((m, i) => (
              <article
                key={`${m.cargo}-${i}`}
                className="border-t-2 border-t-transparent bg-background p-7 lift hover:border-t-gold hover:bg-card"
              >
                <p className="eyebrow text-primary">{m.cargo}</p>
                <h3 className="mt-4 text-xl">{m.nombre}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{m.puesto}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
