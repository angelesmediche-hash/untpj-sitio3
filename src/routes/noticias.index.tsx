import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/site/Bits";
import { NOTICIAS } from "@/lib/site-data";
import heroImg from "@/assets/noticia-papa-2026.jpg";
import thumbPadre from "@/assets/noticia-papa-2026.jpg";
import thumbNinez from "@/assets/noticia-ninez-02.jpg";

export const Route = createFileRoute("/noticias/")({
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
  component: NoticiasIndexPage,
});

const THUMBS: Record<string, string> = {
  "dia-del-padre": thumbPadre,
  "dia-de-la-ninez": thumbNinez,
};

function NoticiasIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Noticias"
        title="Comunicados y novedades del sindicato"
        intro="Lo que hemos vivido en comunidad, con las fotografías de cada evento."
        image={heroImg}
        imageAlt="Convivencia del Día del Padre organizada por la UNTPJ"
        imagePosition="center 55%"
      />
      <Section>
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          {NOTICIAS.map((n) => (
            <Link
              key={n.slug}
              to="/noticias/$slug"
              params={{ slug: n.slug }}
              className="group block overflow-hidden border border-line bg-background lift hover:lift-hover"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                <img
                  src={THUMBS[n.slug]}
                  alt={n.titulo}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="font-display text-xs font-extrabold tracking-[0.16em] text-muted-foreground uppercase">
                  {n.fecha}
                </p>
                <h2 className="mt-3 text-2xl leading-snug">{n.titulo}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{n.resumen}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-[0.7rem] font-extrabold tracking-[0.16em] text-primary uppercase">
                  Leer más <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
