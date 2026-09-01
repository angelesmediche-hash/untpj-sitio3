import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, ExternalLink, Mail } from "lucide-react";
import { Eyebrow, PageHero, Section } from "@/components/site/Bits";
import { CONTACTO, CONVENIOS_DETALLE, GUIAS_ESTUDIO, type Convenio } from "@/lib/site-data";

import imgStudio520 from "@/assets/convenio-studio-520.jpg";
import imgGerelVet from "@/assets/convenio-gerel-vet-1.jpg";
import imgSpaCosmedic from "@/assets/convenio-spa-cosmedic.jpg";
import imgGabrielaGay from "@/assets/convenio-gabriela-gay.jpg";
import imgKatiaPortillo from "@/assets/convenio-katia-portillo.jpg";
import imgOrchidLaw from "@/assets/convenio-orchid-law.jpg";
import imgReencontrandome from "@/assets/convenio-reencontrandome.jpg";
import imgProvidmedic from "@/assets/convenio-providmedic.jpg";
import imgEleveTravel from "@/assets/convenio-eleve-travel.jpg";
import imgIkonicMoments from "@/assets/convenio-ikonic-moments.jpg";
import imgBlancDental from "@/assets/convenio-blanc-dental.jpg";
import imgTerapiasIntegrales from "@/assets/convenio-terapias-integrales.jpg";
import imgArantxaGaray from "@/assets/convenio-arantxa-garay.jpg";
import guiaEstudioImg from "@/assets/guia-de-estudio.jpg";
import beneficiosHeroImg from "@/assets/beneficios-escritorio.jpg";

const IMAGENES: Record<string, string> = {
  "studio-520": imgStudio520,
  "gerel-vet-1": imgGerelVet,
  "spa-cosmedic": imgSpaCosmedic,
  "gabriela-gay": imgGabrielaGay,
  "katia-portillo": imgKatiaPortillo,
  "orchid-law": imgOrchidLaw,
  reencontrandome: imgReencontrandome,
  providmedic: imgProvidmedic,
  "eleve-travel": imgEleveTravel,
  "ikonic-moments": imgIkonicMoments,
  "blanc-dental": imgBlancDental,
  "terapias-integrales": imgTerapiasIntegrales,
  "arantxa-garay": imgArantxaGaray,
};

export const Route = createFileRoute("/beneficios")({
  head: () => ({
    meta: [
      { title: "Beneficios y convenios — UNTPJ" },
      {
        name: "description",
        content:
          "Guías de estudio y convenios vigentes con descuentos exclusivos para las personas afiliadas a la UNTPJ.",
      },
      { property: "og:title", content: "Beneficios y convenios — UNTPJ" },
      {
        property: "og:description",
        content: "Convenios de salud, belleza, viajes, educación y más para personas afiliadas.",
      },
    ],
  }),
  component: BeneficiosPage,
});

const CATEGORIAS = [
  "Todos",
  ...Array.from(new Set(CONVENIOS_DETALLE.map((c) => c.categoria))),
] as const;

function ConvenioCard({ convenio }: { convenio: Convenio }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-line bg-background lift hover:lift-hover">
      <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
        <img
          src={IMAGENES[convenio.imagen]}
          alt={convenio.nombre}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-primary">{convenio.categoria}</p>
        <h3 className="mt-3 text-xl leading-snug">{convenio.nombre}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {convenio.resumen}
        </p>
        <p className="mt-4 text-sm font-medium text-primary">{convenio.descuento}</p>
        <p className="mt-1 text-xs text-muted-foreground">{convenio.contacto}</p>
        {convenio.pdf ? (
          <a
            href={convenio.pdf}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-display text-[0.68rem] font-extrabold tracking-[0.14em] text-primary uppercase hover:underline"
          >
            Ver catálogo completo
            <ExternalLink className="size-3.5" strokeWidth={1.5} />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function BeneficiosPage() {
  const [categoria, setCategoria] = useState<(typeof CATEGORIAS)[number]>("Todos");
  const lista = useMemo(
    () => CONVENIOS_DETALLE.filter((c) => categoria === "Todos" || c.categoria === categoria),
    [categoria],
  );

  return (
    <>
      <PageHero
        eyebrow="Beneficios"
        title="Convenios que sí se negocian de forma colectiva"
        intro="Cada beneficio se publica con sus condiciones completas. Si un convenio no está aquí, no está vigente."
        image={beneficiosHeroImg}
        imageAlt="Escritorio de despacho jurídico con balanza, birrete y libros de derecho"
      />

      <Section>
        <div
          id="guias-de-estudio"
          className="scroll-mt-32 grid gap-0 overflow-hidden border border-primary bg-sand md:grid-cols-2"
        >
          <div className="p-8 md:p-12">
            <BookOpen className="size-10 shrink-0 text-primary" strokeWidth={1.3} />
            <h2 className="mt-5 text-2xl md:text-3xl">{GUIAS_ESTUDIO.titulo}</h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              {GUIAS_ESTUDIO.texto}
            </p>
            <a
              href={`mailto:${CONTACTO.email}?subject=${encodeURIComponent("Solicito mis guías de estudio")}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Mail className="size-4" strokeWidth={1.5} />
              {GUIAS_ESTUDIO.llamado}
            </a>
          </div>
          <img
            src={guiaEstudioImg}
            alt="Planeación de estudio con notas adhesivas de colores"
            width={1200}
            height={675}
            loading="lazy"
            className="min-h-64 w-full object-cover md:order-last"
          />
        </div>
      </Section>

      <Section id="convenios" tone="sand">
        <Eyebrow>Convenios vigentes</Eyebrow>
        <h2 className="mt-6 max-w-2xl text-4xl md:text-6xl">
          Descuentos exclusivos para agremiados
        </h2>

        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIAS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategoria(c)}
              className={`border px-4 py-2 font-display text-[0.68rem] font-extrabold tracking-[0.14em] uppercase transition-colors ${
                categoria === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-line bg-background text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((c) => (
            <ConvenioCard key={c.id} convenio={c} />
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">
          Algunos convenios (óptica, gestoría vehicular, escuela de natación, churrería, entre
          otros) están firmados o en proceso de firma pero aún no cuentan con material gráfico para
          publicar aquí. Se agregarán en cuanto estén disponibles.
        </p>
      </Section>
    </>
  );
}
