import { createFileRoute } from "@tanstack/react-router";
import { CTALink, PageHero, Pending, Section } from "@/components/site/Bits";

export const Route = createFileRoute("/sindicato/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparencia — UNTPJ" },
      {
        name: "description",
        content: "Información de transparencia de la Unión Nacional de Trabajadores del Poder Judicial.",
      },
      { property: "og:title", content: "Transparencia — UNTPJ" },
      {
        property: "og:description",
        content: "Próximamente: información de transparencia de la UNTPJ.",
      },
    ],
  }),
  component: Transparencia,
});

function Transparencia() {
  return (
    <>
      <PageHero
        eyebrow="El sindicato"
        title="Transparencia"
        intro="Información institucional y de rendición de cuentas de la UNTPJ."
      />
      <Section>
        <div className="max-w-3xl space-y-8">
          <p className="text-lg text-muted-foreground">Próximamente.</p>
          <Pending note="Esta sección publicará la información de transparencia de la UNTPJ una vez que se libere." />
          <div>
            <CTALink to="/sindicato">Volver al sindicato</CTALink>
          </div>
        </div>
      </Section>
    </>
  );
}
