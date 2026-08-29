import { createFileRoute } from "@tanstack/react-router";
import { Mailbox, Phone } from "lucide-react";
import { CTALink, Eyebrow, PageHero, Section } from "@/components/site/Bits";
import { BUZONES, BUZON_NOTA, CONTACTO, NOTA_247 } from "@/lib/site-data";

export const Route = createFileRoute("/apoyo")({
  head: () => ({
    meta: [
      { title: "Apoyo al Trabajador — UNTPJ" },
      {
        name: "description",
        content:
          "Línea de atención 24/7 y buzones de necesidades y quejas para personas afiliadas a la UNTPJ.",
      },
      { property: "og:title", content: "Apoyo al Trabajador — UNTPJ" },
      {
        property: "og:description",
        content: "Línea 24/7 y buzones de necesidades y quejas para personas afiliadas.",
      },
    ],
  }),
  component: ApoyoPage,
});

function ApoyoPage() {
  return (
    <>
      <PageHero
        eyebrow="Apoyo al Trabajador"
        title="Aquí te escuchamos y te acompañamos"
        intro="Línea de atención 24/7 y buzones para dar seguimiento a tu caso."
      />

      <Section>
        <div
          id="atencion-24-7"
          className="scroll-mt-32 grid gap-10 border border-primary bg-sand p-8 md:grid-cols-[auto_1fr] md:items-center md:p-12"
        >
          <Phone className="size-12 text-primary" strokeWidth={1.3} />
          <div>
            <h2 className="text-2xl md:text-3xl">Línea de atención 24/7</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Para atender casos urgentes clasificados como actas administrativas, cese,
              hostigamiento laboral o sexual. Exclusiva para personal afiliado e invitado (personal
              de confianza) que conste en el padrón respectivo.
            </p>
            <a
              href={`tel:${CONTACTO.tel247}`}
              className="mt-5 inline-flex items-center gap-3 bg-accent px-7 py-5 font-display text-xl font-extrabold tracking-tight text-accent-foreground lift hover:opacity-90"
            >
              <Phone className="size-5" aria-hidden="true" />
              56 1991 5155
            </a>
            <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
              {NOTA_247}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <div id="buzon" className="scroll-mt-32">
          <div className="flex items-center gap-4">
            <Mailbox className="size-8 shrink-0 text-primary" strokeWidth={1.3} />
            <h2 className="text-2xl md:text-3xl">Buzón de necesidades y quejas</h2>
          </div>

          <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
            {BUZONES.map((b) => (
              <div key={b.titulo} className="bg-background p-7">
                <h3 className="text-lg leading-snug text-primary">{b.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.texto}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 border border-dashed border-line bg-background p-6 text-xs leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Nota: </span>
            {BUZON_NOTA}
          </p>

          <div className="mt-10">
            <CTALink to="/contacto">Contáctanos</CTALink>
          </div>
        </div>
      </Section>
    </>
  );
}
