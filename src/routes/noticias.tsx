import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageHero, Section } from "@/components/site/Bits";
import { NOTICIAS } from "@/lib/site-data";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Noticias — UNTPJ" },
      {
        name: "description",
        content: "Comunicados y novedades de la Unión Nacional de Trabajadores del Poder Judicial.",
      },
      { property: "og:title", content: "Noticias — UNTPJ" },
      {
        property: "og:description",
        content: "Comunicados y novedades oficiales de la UNTPJ.",
      },
    ],
  }),
  component: NoticiasPage,
});

function NoticiasPage() {
  return (
    <>
      <PageHero
        eyebrow="Noticias"
        title="Comunicados y novedades del sindicato"
        intro="Las fotografías completas de cada publicación están disponibles en el sitio oficial."
      />
      <Section>
        <ul className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
          {NOTICIAS.map((n) => (
            <li key={n.slug} className="py-10">
              <p className="font-display text-xs font-extrabold tracking-[0.16em] text-muted-foreground uppercase">
                {n.fecha} · {n.autor}
              </p>
              <h2 className="mt-3 text-2xl leading-snug md:text-3xl">{n.titulo}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{n.cuerpo}</p>
              <a
                href={n.urlOriginal}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-display text-[0.68rem] font-extrabold tracking-[0.14em] text-primary uppercase hover:underline"
              >
                Ver publicación con fotos
                <ExternalLink className="size-3.5" strokeWidth={1.5} />
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
