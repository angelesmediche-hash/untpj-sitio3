import { createFileRoute } from "@tanstack/react-router";
import { DocumentoPagina } from "@/components/site/DocumentoPagina";

// Página oculta: no está en el menú ni en el sitemap y lleva noindex. Se comparte por QR/enlace.
export const Route = createFileRoute("/iniciativa-ciudadana")({
  head: () => ({
    meta: [
      { title: "Iniciativa ciudadana de reforma a la Ley de Carrera Judicial — UNTPJ" },
      {
        name: "description",
        content:
          "Consulta y descarga la propuesta de iniciativa ciudadana con proyecto de decreto de reforma a la Ley de Carrera Judicial y a la Ley Orgánica del Poder Judicial de la Federación.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: "https://www.untpj.com/iniciativa-ciudadana" }],
  }),
  component: Page,
});

function Page() {
  return (
    <DocumentoPagina
      eyebrow="Iniciativa ciudadana"
      titulo="Propuesta de iniciativa ciudadana de reforma a la Ley de Carrera Judicial"
      descripcion="Propuesta de proyecto de decreto por el que se reforman y derogan diversas disposiciones de la Ley de Carrera Judicial del Poder Judicial de la Federación y de la Ley Orgánica del Poder Judicial de la Federación, presentada el 12 de noviembre de 2026 por el ciudadano Sergio Gustavo Infante López ante la Comisión de Justicia de la Cámara de Diputados."
      pdf="/documentos/iniciativa-ciudadana-reforma-carrera-judicial.pdf"
      vista="/documentos/vista-iniciativa.jpg"
      vistaAlt="Primera página de la propuesta de iniciativa ciudadana de reforma a la Ley de Carrera Judicial"
      paginas="PDF de 13 páginas"
      etiquetaBoton="Abrir la iniciativa (PDF)"
    />
  );
}
