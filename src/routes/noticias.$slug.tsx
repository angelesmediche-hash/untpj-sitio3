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

import qepdHumbertoImg from "@/assets/noticia-qepd-humberto-orozco.jpg";
import fiestasPatriasImg from "@/assets/noticia-fiestas-patrias-2026.jpg";
import fiestasGrupalImg from "@/assets/noticia-fiestas-patrias-grupal.jpg";
import fiestasCuatroImg from "@/assets/noticia-fiestas-patrias-cuatro-personas.jpg";
import fiestasPanoramicaImg from "@/assets/noticia-fiestas-patrias-panoramica.jpg";
import fiestasMesaImg from "@/assets/noticia-fiestas-patrias-mesa.jpg";
import fiestasPlaticandoImg from "@/assets/noticia-fiestas-patrias-platicando.jpg";
import visitaPrincipalImg from "@/assets/noticia-visita-juzgado-principal.jpg";
import visitaAudienciaImg from "@/assets/noticia-visita-juzgado-audiencia.jpg";
import visitaOradorImg from "@/assets/noticia-visita-juzgado-orador.jpg";
import visitaSalaImg from "@/assets/noticia-visita-juzgado-sala.jpg";
import visitaMostradorImg from "@/assets/noticia-visita-juzgado-mostrador.jpg";
import visitaPanoramicaImg from "@/assets/noticia-visita-juzgado-panoramica.jpg";
import tribunalPrincipalImg from "@/assets/noticia-visita-tribunal-principal.jpg";
import tribunalPasilloImg from "@/assets/noticia-visita-tribunal-pasillo.jpg";
import tribunalOradoresImg from "@/assets/noticia-visita-tribunal-oradores.jpg";
import tribunalVertical1Img from "@/assets/noticia-visita-tribunal-vertical-1.jpg";
import tribunalVertical2Img from "@/assets/noticia-visita-tribunal-vertical-2.jpg";
import tribunalVertical3Img from "@/assets/noticia-visita-tribunal-vertical-3.jpg";

const MEDIA: Record<
  string,
  { hero?: string; bodyImage?: string; gallery: { src: string; alt: string }[] }
> = {
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
  "qepd-humberto-orozco-calderon": {
    bodyImage: qepdHumbertoImg,
    gallery: [],
  },
  "convivencia-fiestas-patrias-2026": {
    bodyImage: fiestasPatriasImg,
    gallery: [],
  },
  "celebracion-fiestas-patrias-2026": {
    bodyImage: fiestasGrupalImg,
    gallery: [
      { src: fiestasCuatroImg, alt: "Convivencia de Fiestas Patrias, plática entre compañeros" },
      { src: fiestasPanoramicaImg, alt: "Convivencia de Fiestas Patrias, vista de los toldos" },
      { src: fiestasMesaImg, alt: "Convivencia de Fiestas Patrias, mesa con antojitos mexicanos" },
      { src: fiestasPlaticandoImg, alt: "Convivencia de Fiestas Patrias, compañeros conviviendo" },
    ],
  },
  "visita-tercer-tribunal-colegiado-trabajo-san-lazaro": {
    bodyImage: tribunalPrincipalImg,
    gallery: [
      {
        src: tribunalPasilloImg,
        alt: "Representantes de la UNTPJ platicando con trabajadoras y trabajadores en el pasillo del Tercer Tribunal Colegiado en Materia de Trabajo",
      },
      {
        src: tribunalOradoresImg,
        alt: "Sindicato del Poder Judicial presentando sus propuestas en el Tercer Tribunal Colegiado en Materia de Trabajo del Primer Circuito",
      },
      {
        src: tribunalVertical1Img,
        alt: "Visita del sindicato UNTPJ al Tercer Tribunal Colegiado en Materia de Trabajo, sede San Lázaro",
      },
      {
        src: tribunalVertical2Img,
        alt: "Trabajadoras y trabajadores del Poder Judicial escuchando al sindicato durante la visita al tribunal colegiado",
      },
      {
        src: tribunalVertical3Img,
        alt: "Compañeras y compañeros del Poder Judicial recibiendo información del sindicato en el Tercer Tribunal Colegiado",
      },
    ],
  },
  "visita-juzgado-segundo-distrito-civil-san-lazaro": {
    bodyImage: visitaPrincipalImg,
    gallery: [
      {
        src: visitaAudienciaImg,
        alt: "Trabajadoras y trabajadores del Poder Judicial escuchando al sindicato en el Juzgado Segundo de Distrito en Materia Civil",
      },
      {
        src: visitaOradorImg,
        alt: "Representante del sindicato del Poder Judicial presentando sus propuestas en un juzgado de distrito",
      },
      {
        src: visitaSalaImg,
        alt: "Visita del sindicato UNTPJ al Juzgado Segundo de Distrito en Materia Civil, sede San Lázaro",
      },
      {
        src: visitaMostradorImg,
        alt: "Compañeras y compañeros del Poder Judicial leyendo información del sindicato en el mostrador del juzgado",
      },
      {
        src: visitaPanoramicaImg,
        alt: "Vista del juzgado durante la visita del sindicato del Poder Judicial en la Ciudad de México",
      },
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
    links: loaderData
      ? [{ rel: "canonical", href: `https://www.untpj.com/noticias/${loaderData.slug}` }]
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
        intro={noticia.fecha}
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

          {media?.bodyImage ? (
            <img
              src={media.bodyImage}
              alt={noticia.titulo}
              loading="lazy"
              className="mx-auto mt-8 w-full max-w-md rounded-2xl border border-line"
            />
          ) : null}

          <div className="mt-8 space-y-5">
            {noticia.cuerpo.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>

        {media && media.gallery.length > 0 ? (
          <div className="mx-auto mt-16 max-w-5xl">
            <p className="eyebrow mb-6 text-primary">Galería</p>
            <Gallery images={media.gallery} />
          </div>
        ) : null}
      </Section>
    </>
  );
}
