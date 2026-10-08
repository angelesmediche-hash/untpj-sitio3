import { createFileRoute } from "@tanstack/react-router";
import { CTALink, PageHero, Section } from "@/components/site/Bits";
import mapaPrestacionesImg from "@/assets/mapa-prestaciones-pjf.jpg";

export const Route = createFileRoute("/derechos/prestaciones")({
  head: () => ({
    meta: [
      { title: "Prestaciones legales — UNTPJ" },
      {
        name: "description",
        content:
          "Información sobre las prestaciones legales que corresponden a las personas trabajadoras del Poder Judicial de la Federación.",
      },
      { property: "og:title", content: "Prestaciones legales — UNTPJ" },
      {
        property: "og:description",
        content: "Consulta de prestaciones legales para trabajadoras y trabajadores del PJF.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.untpj.com/derechos/prestaciones" }],
  }),
  component: Prestaciones,
});

function Prestaciones() {
  return (
    <>
      <PageHero
        eyebrow="Tus derechos · 01"
        title="Prestaciones legales"
        intro="Información y recursos relacionados con las prestaciones que corresponden a las personas trabajadoras."
      />
      <Section>
        <div className="max-w-4xl space-y-8">
          <p className="text-lg text-muted-foreground">
            Resumen visual de las percepciones, prestaciones y seguridad social que corresponden a
            las personas trabajadoras del Poder Judicial de la Federación, con base en las
            Condiciones Generales de Trabajo de las Personas Servidoras Públicas del PJF
            (autorizadas en diciembre de 2025, publicadas en enero de 2026) y el Manual de
            Remuneraciones 2026 del PJF.
          </p>
          <img
            src={mapaPrestacionesImg}
            alt="Mapa mental de percepciones, prestaciones y seguridad social del Poder Judicial de la Federación"
            width={1312}
            height={1199}
            loading="lazy"
            className="w-full rounded-2xl border border-line"
          />
          <p className="text-sm text-muted-foreground">
            Las prestaciones y montos no son idénticos para todas las personas trabajadoras: varían
            según el puesto, nivel, régimen y órgano de adscripción (SCJN, Tribunal de Disciplina
            Judicial, OAJ, etc.).
          </p>
          <div>
            <CTALink to="/derechos">Volver al centro de derechos</CTALink>
          </div>
        </div>
      </Section>
    </>
  );
}
