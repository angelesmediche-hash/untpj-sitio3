import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, CTALink } from "@/components/site/Bits";
import { NOTA_247 } from "@/lib/site-data";

export const Route = createFileRoute("/derechos/preguntas-frecuentes")({
  head: () => ({
    meta: [
      { title: "Preguntas frecuentes — UNTPJ" },
      {
        name: "description",
        content:
          "Dudas frecuentes sobre afiliación, línea 24/7, capacitación, descuentos y servicios de la UNTPJ.",
      },
      { property: "og:title", content: "Preguntas frecuentes — UNTPJ" },
      {
        property: "og:description",
        content: "Respuestas rápidas con la información oficial disponible de la UNTPJ.",
      },
    ],
  }),
  component: Faq,
});

const FAQ = [
  {
    q: "¿Quién puede usar la línea 24/7?",
    a: NOTA_247,
  },
  {
    q: "¿Qué casos atiende la línea urgente?",
    a: "Casos urgentes clasificados como actas administrativas, riesgo de cese, hostigamiento laboral o sexual.",
  },
  {
    q: "¿Qué necesito para recibir atención urgente y personalizada?",
    a: "Enviar foto de tu credencial (afiliado o invitado), tu nombre completo y tu área de trabajo. Horario de atención: 09:00 a 18:00, teléfono 561 991 5155.",
  },
  {
    q: "¿Cómo accedo a los cursos de capacitación?",
    a: "El requisito es estar en el padrón de afiliados o invitados. Los cursos son presenciales y en línea.",
  },
  {
    q: "¿Cómo uso los descuentos en bienes y servicios?",
    a: "Solo presenta tu credencial de afiliación o invitado al momento de solicitar el servicio o producto.",
  },
  {
    q: "¿A dónde envío mis documentos de afiliación?",
    a: "En un solo correo a afiliate@untpj.com, adjuntando también tu último recibo de salario y una foto de tu INE.",
  },
  {
    q: "¿El personal de confianza puede participar?",
    a: "Sí, como personal invitado. Deberá llenar el formato correspondiente, para lo cual puede contactar al número telefónico de afiliaciones.",
  },
];

function Faq() {
  return (
    <>
      <PageHero
        eyebrow="Tus derechos · 04"
        title="Preguntas frecuentes"
        intro="Respuestas construidas únicamente con la información oficial publicada por la UNTPJ."
      />
      <Section>
        <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl font-bold tracking-tight">
                {item.q}
                <span className="mt-1 shrink-0 text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <CTALink to="/contacto">¿Otra duda? Contáctanos</CTALink>
        </div>
      </Section>
    </>
  );
}
