import { createFileRoute } from "@tanstack/react-router";
import { CTALink, PageHero, Section } from "@/components/site/Bits";
import personalConfianzaImg from "@/assets/contacto-header.jpg";

export const Route = createFileRoute("/derechos/personal-de-confianza")({
  head: () => ({
    meta: [
      { title: "Personal de confianza — UNTPJ" },
      {
        name: "description",
        content:
          "Información para el personal de confianza del Poder Judicial de la Federación que no puede afiliarse al Sindicato al 100%.",
      },
      { property: "og:title", content: "Personal de confianza — UNTPJ" },
      {
        property: "og:description",
        content: "Representación y acceso a beneficios para personal de confianza del PJF.",
      },
    ],
  }),
  component: PersonalDeConfianza,
});

function PersonalDeConfianza() {
  return (
    <>
      <PageHero
        eyebrow="Tus derechos"
        title="Personal de confianza"
        intro="Información para las personas trabajadoras del Poder Judicial de la Federación que, por su puesto, no pueden formar parte del Sindicato al 100%."
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-[1fr_1.1fr] sm:items-center">
          <div>
            <p className="text-lg text-muted-foreground">
              Representamos a personas trabajadoras del Poder Judicial de la Federación de base e
              interinas afiliadas al Sindicato, así como a personal de confianza registrado como
              invitado en el padrón respectivo.
            </p>
            <p className="mt-4 text-muted-foreground">
              Porque también eres y fuiste una persona trabajadora del Poder Judicial de la
              Federación, de igual forma tienes derecho de acceder a los bienes y servicios que
              esta organización sindical ofrece; y que si bien de momento no podemos garantizarte
              todos, haremos lo posible para que cuentes con los necesarios, ya que TODOS somos
              PJF.
            </p>
            <div className="mt-8">
              <CTALink to="/contacto">Contacto</CTALink>
            </div>
          </div>
          <img
            src={personalConfianzaImg}
            alt="Insignia de la Unión Nacional de Trabajadores del Poder Judicial sobre un escritorio"
            width={1582}
            height={1242}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </Section>
    </>
  );
}
