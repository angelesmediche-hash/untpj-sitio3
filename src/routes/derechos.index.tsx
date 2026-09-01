import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Scale, FileText, ShieldCheck, HelpCircle, Users } from "lucide-react";
import { PageHero, Section, Eyebrow, CTALink } from "@/components/site/Bits";
import heroImg from "@/assets/derechos-juzgado.jpg";

export const Route = createFileRoute("/derechos/")({
  head: () => ({
    meta: [
      { title: "Tus derechos — UNTPJ" },
      {
        name: "description",
        content:
          "Centro de consulta de derechos laborales: prestaciones legales, Condiciones Generales de Trabajo, seguridad social y preguntas frecuentes.",
      },
      { property: "og:title", content: "Tus derechos — UNTPJ" },
      {
        property: "og:description",
        content: "Encuentra rápido la información laboral que necesitas como trabajador del PJF.",
      },
    ],
  }),
  component: DerechosIndex,
});

const CATEGORIAS = [
  {
    icon: FileText,
    n: "01",
    title: "Prestaciones legales",
    text: "Las prestaciones que corresponden a las personas trabajadoras en el ejercicio de sus derechos laborales.",
    to: "/derechos/prestaciones",
  },
  {
    icon: Scale,
    n: "02",
    title: "Condiciones Generales de Trabajo",
    text: "El marco que regula la relación laboral entre las y los trabajadores del Poder Judicial y la institución.",
    to: "/derechos/condiciones-generales",
  },
  {
    icon: ShieldCheck,
    n: "03",
    title: "Seguridad social",
    text: "Ahorro solidario y orientación en materia de seguridad social.",
    to: "/derechos/seguridad-social",
  },
  {
    icon: HelpCircle,
    n: "04",
    title: "Preguntas frecuentes",
    text: "Dudas comunes sobre afiliación, atención urgente, capacitación y beneficios.",
    to: "/derechos/preguntas-frecuentes",
  },
  {
    icon: Users,
    n: "05",
    title: "Personal de confianza",
    text: "Información para quienes, por su puesto, no pueden afiliarse al Sindicato al 100%.",
    to: "/derechos/personal-de-confianza",
  },
] as const;

function DerechosIndex() {
  return (
    <>
      <PageHero
        eyebrow="Tus derechos"
        title="¿Qué estás buscando?"
        intro="Un solo lugar para consultar la información laboral que necesitas como persona trabajadora del Poder Judicial de la Federación."
        image={heroImg}
        imageAlt="Personal del Poder Judicial de la Federación trabajando en un juzgado"
      />

      <Section>
        <div className="grid gap-px bg-line md:grid-cols-2">
          {CATEGORIAS.map((c) => (
            <Link
              key={c.n}
              to={c.to}
              className="group bg-background p-10 lift hover:bg-sand md:p-14"
            >
              <div className="flex items-center justify-between">
                <c.icon className="size-7 text-primary" aria-hidden="true" />
                <span className="font-display text-sm font-extrabold text-muted-foreground">
                  {c.n}
                </span>
              </div>
              <h2 className="mt-8 text-3xl md:text-4xl">{c.title}</h2>
              <p className="mt-4 max-w-md text-muted-foreground">{c.text}</p>
              <span className="mt-8 inline-flex items-center gap-2 font-display text-[0.7rem] font-extrabold tracking-[0.16em] text-primary uppercase">
                Explorar
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <Eyebrow>Información útil</Eyebrow>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <h2 className="text-4xl md:text-5xl">
            Si tu caso es urgente, la asesoría comienza con una llamada.
          </h2>
          <p className="text-ink-muted">
            Recibe orientación personalizada en derechos laborales, responsabilidades
            administrativas y otras áreas del derecho. Algunas asesorías pueden requerir cita
            previa.
          </p>
        </div>
        <div className="mt-10">
          <CTALink to="/apoyo" variant="accent">
            Apoyo al trabajador
          </CTALink>
        </div>
      </Section>
    </>
  );
}
