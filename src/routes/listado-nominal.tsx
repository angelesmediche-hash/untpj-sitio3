import { createFileRoute } from "@tanstack/react-router";
import { DocumentoPagina } from "@/components/site/DocumentoPagina";

// Página oculta: no está en el menú ni en el sitemap y lleva noindex. Se comparte por QR/enlace.
export const Route = createFileRoute("/listado-nominal")({
  head: () => ({
    meta: [
      { title: "Listado nominal de electores para la iniciativa ciudadana — UNTPJ" },
      {
        name: "description",
        content:
          "Descarga e imprime el formato de listado nominal de electores para adherirte a la iniciativa ciudadana de reforma a la Ley de Carrera Judicial.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: "https://www.untpj.com/listado-nominal" }],
  }),
  component: Page,
});

function Page() {
  return (
    <DocumentoPagina
      eyebrow="Iniciativa ciudadana"
      titulo="Listado nominal de electores"
      descripcion="Formato para adherirte con tu firma a la iniciativa ciudadana de reforma a la Ley de Carrera Judicial del Poder Judicial de la Federación y a la Ley Orgánica del Poder Judicial de la Federación, planteada por el ciudadano Sergio Gustavo Infante López."
      pdf="/documentos/listado-nominal-de-electores.pdf"
      vista="/documentos/vista-listado.jpg"
      vistaAlt="Formato de listado nominal de electores con columnas de nombre, número de credencial de elector y firma"
      paginas="PDF de 1 página, tamaño carta"
      etiquetaBoton="Abrir el formato (PDF)"
      notas={[
        "Imprime la hoja en tamaño carta y a una sola cara.",
        "Después de firmar y llenar el formato, adjunta copia simple de tu credencial de elector por ambos lados.",
        "No llenes la columna de numeración ni agregues más columnas. El formato está diseñado para 30 personas por hoja.",
      ]}
      contactos={["55 1321 2925", "56 1991 5155"]}
    />
  );
}
