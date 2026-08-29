import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { CTALink, PageHero, Section } from "@/components/site/Bits";

export const Route = createFileRoute("/derechos/seguridad-social")({
  head: () => ({
    meta: [
      { title: "Seguridad social y ahorro solidario — UNTPJ" },
      {
        name: "description",
        content:
          "Qué es el ahorro solidario, cómo inscribirte y cómo aumenta tu pensión. Descarga el formato oficial.",
      },
      { property: "og:title", content: "Seguridad social — UNTPJ" },
      {
        property: "og:description",
        content: "Orientación en materia de seguridad social y ahorro solidario para el PJF.",
      },
    ],
  }),
  component: SeguridadSocial,
});

function SeguridadSocial() {
  return (
    <>
      <PageHero
        eyebrow="Tus derechos · 03"
        title="Seguridad social"
        intro="Acceso y orientación en materia de seguridad social para las personas agremiadas."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <article className="max-w-2xl space-y-5">
            <h2 className="text-3xl md:text-4xl">Ahorro solidario</h2>
            <p className="text-muted-foreground">
              El ahorro solidario es una forma sencilla de aumentar tu pensión mientras trabajas.
              Consiste en que tú aportas voluntariamente una pequeña parte de tu sueldo (puede ser
              el 1% o el 2%), y tu dependencia también aporta una cantidad adicional por cada peso
              que ahorras. Esto permite que tu dinero crezca más rápido con el tiempo.
            </p>
            <p className="text-muted-foreground">
              Para inscribirte, solo necesitas solicitarlo en el área de Recursos Humanos de tu
              dependencia. Una vez que comienzas, tu ahorro se invierte en tu AFORE, como
              PENSIONISSSTE, lo que ayuda a generar rendimientos a largo plazo.
            </p>
            <p className="text-muted-foreground">
              Además, es un esquema flexible: puedes aumentar, disminuir o incluso cancelar tu
              aportación en cualquier momento, aunque se recomienda mantenerla constante para
              aprovechar mejor sus beneficios.
            </p>
            <p className="text-muted-foreground">
              Este ahorro forma parte de tu fondo para el retiro, por lo que podrás utilizarlo
              cuando llegue el momento de pensionarte.
            </p>
          </article>

          <aside className="h-fit border border-line bg-card p-8">
            <p className="eyebrow text-primary">Documento</p>
            <h3 className="mt-4 text-2xl">Formato de ahorro solidario</h3>
            <a
              href="https://www.untpj.com/s/FORMATO-DE-AHORRO-SOLIDARIO.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-4 font-display text-xs font-extrabold tracking-[0.14em] text-primary-foreground uppercase lift hover:bg-ink"
            >
              <Download className="size-4" aria-hidden="true" />
              Descargar formato
            </a>
            <div className="mt-8 border-t border-line pt-6">
              <CTALink to="/derechos" variant="outline">
                Centro de derechos
              </CTALink>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
