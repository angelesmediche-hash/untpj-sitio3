import { createFileRoute } from "@tanstack/react-router";
import { CTALink, PageHero, Pending, Section } from "@/components/site/Bits";

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
        <div className="max-w-3xl space-y-8">
          <p className="text-lg text-muted-foreground">Próximamente.</p>
          <Pending note="Esta sección publicará el detalle oficial de las prestaciones legales una vez que la UNTPJ lo libere." />
          <div>
            <CTALink to="/derechos">Volver al centro de derechos</CTALink>
          </div>
        </div>
      </Section>
    </>
  );
}
