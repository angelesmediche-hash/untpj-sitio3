import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, ExternalLink, Mail, X, Download, ZoomIn } from "lucide-react";
import { Eyebrow, PageHero, Section } from "@/components/site/Bits";
import { CONTACTO, CONVENIOS_DETALLE, GUIAS_ESTUDIO, type Convenio } from "@/lib/site-data";

import imgStudio520 from "@/assets/convenio-studio-520.jpg";
import imgGerelVet from "@/assets/convenio-gerel-vet-1.jpg";
import imgSpaCosmedic from "@/assets/convenio-spa-cosmedic.jpg";
import imgGabrielaGay from "@/assets/convenio-gabriela-gay.jpg";
import imgKatiaPortillo from "@/assets/convenio-katia-portillo.jpg";
import imgOrchidLaw from "@/assets/convenio-orchid-law.jpg";
import imgReencontrandome from "@/assets/convenio-reencontrandome-nutricion.jpg";
import imgProvidmedic from "@/assets/convenio-providmedic.jpg";
import imgEleveTravel from "@/assets/convenio-eleve-travel.jpg";
import imgIkonicMoments from "@/assets/convenio-ikonic-moments.jpg";
import imgBlancDental from "@/assets/convenio-blanc-dental.jpg";
import imgTerapiasIntegrales from "@/assets/convenio-terapias-spa.jpg";
import imgArantxaGaray from "@/assets/convenio-arantxa-garay.jpg";
import imgGoodLife from "@/assets/convenio-good-life.jpg";
import imgGestorVehicular from "@/assets/convenio-gestor.jpg";
import imgAcupunturaSamali from "@/assets/convenio-acupuntura-samali.jpg";
import imgLaBarra from "@/assets/convenio-la-barra.jpg";
import imgReencontrandomePsicologia from "@/assets/convenio-reencontrandome-psicologia.jpg";
import imgKingDavid from "@/assets/convenio-king-david.jpg";
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
  "good-life": imgGoodLife,
  "gestor-vehicular": imgGestorVehicular,
  "acupuntura-samali": imgAcupunturaSamali,
  "la-barra": imgLaBarra,
  "reencontrandome-psicologia": imgReencontrandomePsicologia,
  "king-david-tours": imgKingDavid,
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
    links: [{ rel: "canonical", href: "https://www.untpj.com/beneficios" }],
  }),
  component: BeneficiosPage,
});

const CATEGORIAS = [
  "Todos",
  ...Array.from(new Set(CONVENIOS_DETALLE.map((c) => c.categoria))).sort((a, b) =>
    a.localeCompare(b, "es"),
  ),
] as const;

function ConvenioCard({
  convenio,
  onExpand,
}: {
  convenio: Convenio;
  onExpand: (c: Convenio) => void;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-background lift hover:lift-hover">
      <button
        type="button"
        onClick={() => onExpand(convenio)}
        aria-label={`Ver convenio completo: ${convenio.nombre}`}
        className="relative aspect-[3/4] w-full overflow-hidden rounded-t-2xl bg-muted"
      >
        <img
          src={IMAGENES[convenio.imagen]}
          alt={convenio.nombre}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/40 group-hover:opacity-100"
        >
          <span className="flex items-center gap-2 bg-background px-4 py-2 font-display text-[0.68rem] font-extrabold tracking-[0.14em] text-ink uppercase">
            <ZoomIn className="size-3.5" strokeWidth={1.5} />
            Ver completo
          </span>
        </span>
      </button>
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

function ConvenioLightbox({
  convenio,
  onClose,
}: {
  convenio: Convenio;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const fileName = `${convenio.id}.jpg`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={convenio.nombre}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-background"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
          <div className="min-w-0">
            <p className="eyebrow text-primary">{convenio.categoria}</p>
            <h3 className="truncate text-lg leading-snug">{convenio.nombre}</h3>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={IMAGENES[convenio.imagen]}
              download={fileName}
              className="flex items-center gap-2 border border-line px-3 py-2 font-display text-[0.65rem] font-extrabold tracking-[0.14em] uppercase hover:border-primary hover:text-primary"
            >
              <Download className="size-3.5" strokeWidth={1.5} />
              Descargar
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="flex size-9 items-center justify-center border border-line hover:border-primary hover:text-primary"
            >
              <X className="size-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
        <div className="overflow-auto bg-muted">
          <img
            src={IMAGENES[convenio.imagen]}
            alt={convenio.nombre}
            className="mx-auto max-h-[75vh] w-auto object-contain"
          />
        </div>
        <div className="border-t border-line px-5 py-4">
          <p className="text-sm font-medium text-primary">{convenio.descuento}</p>
          <p className="mt-1 text-xs text-muted-foreground">{convenio.contacto}</p>
        </div>
      </div>
    </div>
  );
}

function BeneficiosPage() {
  const [categoria, setCategoria] = useState<(typeof CATEGORIAS)[number]>("Todos");
  const [expanded, setExpanded] = useState<Convenio | null>(null);
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
          className="scroll-mt-32 grid gap-0 overflow-hidden rounded-2xl border border-primary bg-sand md:grid-cols-2"
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
            <ConvenioCard key={c.id} convenio={c} onExpand={setExpanded} />
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">
          Algunos convenios (óptica, gestoría vehicular, escuela de natación, churrería, entre
          otros) están firmados o en proceso de firma pero aún no cuentan con material gráfico para
          publicar aquí. Se agregarán en cuanto estén disponibles.
        </p>
      </Section>

      {expanded ? (
        <ConvenioLightbox convenio={expanded} onClose={() => setExpanded(null)} />
      ) : null}
    </>
  );
}
