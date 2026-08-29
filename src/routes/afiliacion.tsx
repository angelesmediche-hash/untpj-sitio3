import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Download, Mail } from "lucide-react";
import { CTALink, Eyebrow, PageHero, Section } from "@/components/site/Bits";
import {
  CASOS_AFILIACION,
  CONTACTO,
  REQUISITOS_AFILIACION,
  BENEFICIOS_GENERALES,
  type CasoAfiliacion,
} from "@/lib/site-data";

export const Route = createFileRoute("/afiliacion")({
  head: () => ({
    meta: [
      { title: "Afíliate — UNTPJ" },
      {
        name: "description",
        content:
          "Elige tu situación sindical actual y descarga el formato de afiliación correspondiente a la UNTPJ, con instrucciones de envío.",
      },
      { property: "og:title", content: "Afíliate — UNTPJ" },
      {
        property: "og:description",
        content: "Selecciona tu caso y descarga el formato de afiliación correcto.",
      },
    ],
  }),
  component: AfiliacionPage,
});

const GRUPOS = [
  "Sin sindicato anterior",
  "Sindicato anterior: STPJF",
  "Sindicato anterior: Renovación",
] as const satisfies readonly CasoAfiliacion["grupo"][];

const TIPOS = [
  "Personal de base",
  "Personal interino",
] as const satisfies readonly CasoAfiliacion["tipoPersonal"][];

function AfiliacionPage() {
  const [grupo, setGrupo] = useState<CasoAfiliacion["grupo"] | null>(null);
  const [tipo, setTipo] = useState<CasoAfiliacion["tipoPersonal"] | null>(null);

  const caso = useMemo(
    () => CASOS_AFILIACION.find((c) => c.grupo === grupo && c.tipoPersonal === tipo) ?? null,
    [grupo, tipo],
  );

  const optionBase =
    "flex w-full items-center justify-center border px-5 py-4 text-center text-sm transition-colors sm:text-base lift";

  return (
    <>
      <PageHero
        eyebrow="Afíliate"
        title="Elige tu caso y descarga tu formato"
        intro="Selecciona tu situación sindical actual y el tipo de nombramiento que tienes. Te mostraremos el formato exacto que debes llenar y firmar."
      />

      <Section>
        <div className="mx-auto max-w-3xl border border-line bg-sand p-6 md:p-12">
          <h2 className="text-2xl md:text-3xl">1. ¿Cuál es tu situación sindical actual?</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {GRUPOS.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGrupo(g)}
                className={`${optionBase} ${
                  grupo === g
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-line bg-background hover:border-primary"
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          <h2 className="mt-10 text-2xl md:text-3xl">2. ¿Cuál es tu tipo de nombramiento?</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {TIPOS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTipo(t)}
                className={`${optionBase} ${
                  tipo === t
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-line bg-background hover:border-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {caso ? (
            <div className="mt-10 border border-primary bg-background p-6 md:p-8">
              <Eyebrow>Tu formato</Eyebrow>
              <h3 className="mt-4 text-xl leading-snug md:text-2xl">
                {caso.grupo} · {caso.tipoPersonal}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {caso.descripcion}
              </p>
              <a
                href={caso.archivo}
                download
                className="mt-6 inline-flex items-center gap-3 bg-primary px-6 py-4 font-display text-xs font-extrabold tracking-[0.14em] text-primary-foreground uppercase lift hover:bg-ink"
              >
                <Download className="size-4" strokeWidth={1.5} />
                Descargar formato en PDF
              </a>
            </div>
          ) : (
            <p className="mt-10 text-sm text-muted-foreground">
              Elige las dos opciones de arriba para ver el formato que te corresponde.
            </p>
          )}
        </div>
      </Section>

      <Section tone="sand">
        <Eyebrow>Cómo enviarlo</Eyebrow>
        <h2 className="mt-6 max-w-2xl text-4xl md:text-5xl">
          Tres pasos para completar tu trámite
        </h2>
        <div className="mt-14 grid gap-px bg-line md:grid-cols-3">
          {[
            [
              "01",
              "Descarga y llena tu formato",
              "Con letra clara, sin dejar campos en blanco. Incluye la hoja de datos generales y el aviso de privacidad firmado.",
            ],
            [
              "02",
              "Adjunta tus documentos",
              "Copia de tu credencial para votar vigente y de tu recibo de pago de salario más reciente.",
            ],
            [
              "03",
              "Envía todo por correo",
              `Escanea o fotografía todo y envíalo a ${CONTACTO.emailAfiliacion}.`,
            ],
          ].map(([n, t, d]) => (
            <div key={n} className="bg-background p-8">
              <span className="font-display text-3xl font-extrabold text-primary">{n}</span>
              <h3 className="mt-3 text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border border-line bg-background p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <div className="flex items-center gap-3">
            <Mail className="size-5 shrink-0 text-primary" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-medium">Correo de afiliación</p>
              <a
                href={`mailto:${CONTACTO.emailAfiliacion}`}
                className="text-sm text-primary hover:underline"
              >
                {CONTACTO.emailAfiliacion}
              </a>
            </div>
          </div>
          <p className="max-w-sm text-xs text-muted-foreground">
            Teléfono de afiliaciones e invitados:{" "}
            {CONTACTO.telAfiliaciones.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3")}
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>Requisitos</Eyebrow>
            <ul className="mt-6 space-y-4">
              {REQUISITOS_AFILIACION.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Con nosotros cuentas con</Eyebrow>
            <ul className="mt-6 space-y-4">
              {BENEFICIOS_GENERALES.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14">
          <CTALink to="/contacto" variant="outline">
            ¿Tienes dudas? Contáctanos
          </CTALink>
        </div>
      </Section>
    </>
  );
}
