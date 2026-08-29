import { createFileRoute } from "@tanstack/react-router";
import { CTALink, PageHero, Pending, Section } from "@/components/site/Bits";

export const Route = createFileRoute("/derechos/condiciones-generales")({
  head: () => ({
    meta: [
      { title: "Condiciones Generales de Trabajo — UNTPJ" },
      {
        name: "description",
        content:
          "Marco que regula la relación laboral entre las y los trabajadores del Poder Judicial y la institución.",
      },
      { property: "og:title", content: "Condiciones Generales de Trabajo — UNTPJ" },
      {
        property: "og:description",
        content: "Consulta las Condiciones Generales de Trabajo aplicables al PJF.",
      },
    ],
  }),
  component: Condiciones,
});

function Condiciones() {
  return (
    <>
      <PageHero
        eyebrow="Tus derechos · 02"
        title="Condiciones Generales de Trabajo"
        intro="El marco que regula la relación laboral entre las personas trabajadoras del Poder Judicial y la institución."
      />
      <Section>
        <div className="max-w-3xl space-y-8">
          <p className="text-lg text-muted-foreground">Próximamente.</p>
          <Pending note="Esta sección alojará el texto y los documentos de las Condiciones Generales de Trabajo." />
          <div>
            <CTALink to="/derechos">Volver al centro de derechos</CTALink>
          </div>
        </div>
      </Section>
    </>
  );
}
