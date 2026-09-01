import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Gallery, PageHero, Section } from "@/components/site/Bits";
import { NOTICIAS } from "@/lib/site-data";

import heroPadre from "@/assets/noticia-padre-09.jpg";
import padre01 from "@/assets/noticia-padre-01.jpg";
import padre02 from "@/assets/noticia-padre-02.jpg";
import padre03 from "@/assets/noticia-padre-03.jpg";
import padre04 from "@/assets/noticia-padre-04.jpg";
import padre05 from "@/assets/noticia-padre-05.jpg";
import padre06 from "@/assets/noticia-padre-06.jpg";
import padre07 from "@/assets/noticia-padre-07.jpg";
import padre08 from "@/assets/noticia-padre-08.jpg";
import padre10 from "@/assets/noticia-padre-10.jpg";
import padreDecalogo from "@/assets/noticia-padre-decalogo.jpg";

import heroNinez from "@/assets/noticia-ninez-02.jpg";
import ninez01 from "@/assets/noticia-ninez-01.jpg";
import ninez03 from "@/assets/noticia-ninez-03.jpg";
import ninez04 from "@/assets/noticia-ninez-04.jpg";
import ninez05 from "@/assets/noticia-ninez-05.jpg";

const MEDIA: Record<string, { hero: string; gallery: { src: string; alt: string }[] }> = {
  "dia-del-padre": {
    hero: heroPadre,
    gallery: [
      { src: padreDecalogo, alt: "Decálogo de los Derechos de Paternidad del PJF" },
      { src: padre06, alt: "Convivencia del Día del Padre, arco de globos" },
      { src: padre07, alt: "Convivencia del Día del Padre" },
      { src: padre01, alt: "Convivencia del Día del Padre" },
      { src: padre02, alt: "Convivencia del Día del Padre" },
      { src: padre10, alt: "Convivencia del Día del Padre" },
      { src: padre03, alt: "Entrega de obsequios, Día del Padre" },
      { src: padre04, alt: "Torneo deportivo, Día del Padre" },
      { src: padre05, alt: "Torneo deportivo, Día del Padre" },
      { src: padre08, alt: "Torneo deportivo, Día del Padre" },
    ],
  },
  "dia-de-la-ninez": {
    hero: heroNinez,
    gallery: [
      { src: ninez01, alt: "Celebración del Día de la Niñez" },
      { src: ninez03, alt: "Celebración del Día de la Niñez" },
      { src: ninez04, alt: "Celebración del Día de la Niñez" },
      { src: ninez05, alt: "Entrega de obsequios, Día de la Niñez" },
    ],
  },
};

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const noticia = NOTICIAS.find((n) => n.slug === params.slug);
    if (!noticia) throw notFound();
    return noticia;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.titulo} — UNTPJ` },
          { name: "description", content: loaderData.resumen },
          { property: "og:title", content: `${loaderData.titulo} — UNTPJ` },
          { property: "og:description", content: loaderData.resumen },
        ]
      : [],
  }),
  component: NoticiaDetallePage,
});

function NoticiaDetallePage() {
  const noticia = Route.useLoaderData();
  const media = MEDIA[noticia.slug];

  return (
    <>
      <PageHero
        eyebrow="Noticias"
        title={noticia.titulo}
        intro={`${noticia.fecha} · ${noticia.autor}`}
        image={media?.hero}
        imageAlt={noticia.titulo}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 font-display text-xs font-extrabold tracking-[0.14em] text-muted-foreground uppercase hover:text-primary"
          >
            <ArrowLeft className="size-3.5" />
            Todas las noticias
          </Link>

          <div className="mt-8 space-y-5">
            {noticia.cuerpo.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>

        {media ? (
          <div className="mx-auto mt-16 max-w-5xl">
            <p className="eyebrow mb-6 text-primary">Galería</p>
            <Gallery images={media.gallery} />
          </div>
        ) : null}
      </Section>
    </>
  );
}
