import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Scale,
  HeartHandshake,
  BookOpen,
  Tag,
  Phone,
  FileText,
  ShieldCheck,
  PartyPopper,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import apoyoImg from "@/assets/apoyo.jpg";
import thumbPadre from "@/assets/noticia-padre-09.jpg";
import thumbNinez from "@/assets/noticia-ninez-02.jpg";
import { CTALink, Eyebrow, Section } from "@/components/site/Bits";
import { CONTACTO, NOTA_247, NOTICIAS } from "@/lib/site-data";

const THUMBS: Record<string, string> = {
  "dia-del-padre": thumbPadre,
  "dia-de-la-ninez": thumbNinez,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UNTPJ — Unión Nacional de Trabajadores del Poder Judicial" },
      {
        name: "description",
        content:
          "Sindicato que defiende los derechos de las y los trabajadores del Poder Judicial: apoyo permanente, línea 24/7, capacitación, prestaciones y comunidad.",
      },
      { property: "og:title", content: "UNTPJ — Te acompañamos hasta el final" },
      {
        property: "og:description",
        content:
          "Defensa laboral, acompañamiento, capacitación y beneficios para trabajadoras y trabajadores del Poder Judicial.",
      },
    ],
  }),
  component: Home,
});

const QUE_HACEMOS = [
  {
    icon: Scale,
    title: "Defendemos tus derechos",
    text: "Apoyo permanente para proteger tu seguridad laboral y acompañamiento hasta el final de cualquier procedimiento.",
    to: "/derechos",
  },
  {
    icon: HeartHandshake,
    title: "Te acompañamos",
    text: "Línea abierta de comunicación y atención directa en casos urgentes como actas administrativas, cese u hostigamiento.",
    to: "/apoyo",
  },
  {
    icon: BookOpen,
    title: "Impulsamos tu desarrollo",
    text: "Guías de estudio a tu disposición como persona afiliada, para seguir creciendo profesionalmente.",
    to: "/beneficios",
    hash: "guias-de-estudio",
  },
  {
    icon: Tag,
    title: "Creamos comunidad",
    text: "Convenios y descuentos exclusivos en salud, belleza, viajes, educación y más.",
    to: "/beneficios",
  },
] as const;

const BENEFICIOS = [
  {
    icon: FileText,
    title: "Prestaciones legales",
    text: "Información y recursos relacionados con tus prestaciones.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad social",
    text: "Ahorro solidario y orientación para tu retiro.",
  },
  {
    icon: Tag,
    title: "Descuentos y beneficios",
    text: "Convenios en bienes y servicios presentando tu credencial.",
  },
  {
    icon: PartyPopper,
    title: "Actividades",
    text: "Eventos deportivos, recreativos y culturales.",
  },
] as const;

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <img
          src={heroImg}
          alt="Trabajadoras y trabajadores del Poder Judicial de la Federación reunidos en un pasillo institucional"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30"
          aria-hidden="true"
        />
        <div className="relative container-x flex min-h-[82vh] flex-col justify-end py-24">
          <div className="rise max-w-3xl">
            <p className="eyebrow text-accent">Representación laboral · PJF</p>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-8xl">
              Unión Nacional de Trabajadores del Poder Judicial
            </h1>
            <p className="mt-8 font-display text-2xl font-semibold tracking-tight text-accent md:text-3xl">
              Te acompañamos hasta el final.
            </p>
            <p className="mt-6 max-w-xl text-base text-ink-muted md:text-lg">
              Somos un grupo de trabajadores que, durante años, hemos visto injusticias y
              situaciones que muchos compañeros han tenido que enfrentar en solitario. Por eso
              decidimos construir un sindicato con un propósito claro: defender tus derechos y
              acompañarte en cada etapa de tu vida laboral.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTALink to="/afiliacion" variant="accent">
                Afíliate <ArrowRight className="size-4" />
              </CTALink>
              <Link
                to="/derechos"
                className="inline-flex items-center gap-2 border border-ink-muted/50 px-6 py-4 font-display text-xs font-extrabold tracking-[0.14em] text-ink-foreground uppercase lift hover:bg-ink-foreground hover:text-ink"
              >
                Conoce tus derechos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-b border-line bg-primary py-3 text-primary-foreground">
        <div className="marquee flex w-max gap-10 font-display text-xs font-extrabold tracking-[0.2em] uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              <span>Apoyo permanente</span>
              <span>·</span>
              <span>Línea 24/7</span>
              <span>·</span>
              <span>Guías de estudio</span>
              <span>·</span>
              <span>Convenios y descuentos</span>
              <span>·</span>
              <span>Te acompañamos hasta el final</span>
              <span>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* QUÉ HACEMOS */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <Eyebrow>I · Qué hacemos</Eyebrow>
            <h2 className="mt-6 text-4xl md:text-5xl">Cerca de ti en cada etapa.</h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Somos tu nueva opción de sindicato: un proyecto con personas comprometidas con darte
              herramientas para mejorar tu carrera, línea abierta de comunicación cuando lo
              necesites y apoyo hasta el final de cualquier procedimiento.
            </p>
          </div>
          <div className="grid gap-px bg-line sm:grid-cols-2">
            {QUE_HACEMOS.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                hash={"hash" in item ? item.hash : undefined}
                className="group bg-background p-8 lift hover:lift-hover"
              >
                <item.icon className="size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-6 text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-[0.7rem] font-extrabold tracking-[0.16em] text-primary uppercase">
                  Explorar
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* APOYO 24/7 */}
      <section className="bg-ink text-ink-foreground">
        <div className="grid lg:grid-cols-2">
          <img
            src={apoyoImg}
            alt="Trabajadora del Poder Judicial recibiendo orientación y acompañamiento"
            width={1408}
            height={1008}
            loading="lazy"
            className="h-full min-h-[22rem] w-full object-cover"
          />
          <div className="container-x py-20 md:py-28">
            <p className="eyebrow text-accent">II · Apoyo 24/7</p>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Cuando el caso es urgente, no lo enfrentas solo.
            </h2>
            <p className="mt-6 text-ink-muted">
              Línea de atención 24/7 para casos urgentes clasificados como actas administrativas,
              cese, hostigamiento laboral o sexual.
            </p>
            <a
              href={`tel:${CONTACTO.tel247}`}
              className="mt-8 inline-flex items-center gap-3 bg-accent px-7 py-5 font-display text-xl font-extrabold tracking-tight text-accent-foreground lift hover:opacity-90"
            >
              <Phone className="size-5" aria-hidden="true" />
              56 1991 5155
            </a>
            <p className="mt-6 max-w-xl text-xs leading-relaxed text-ink-muted">{NOTA_247}</p>
            <div className="mt-8">
              <Link
                to="/apoyo"
                className="inline-flex items-center gap-2 font-display text-[0.7rem] font-extrabold tracking-[0.16em] text-accent uppercase"
              >
                Ver todo el apoyo al trabajador <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRESTACIONES Y BENEFICIOS */}
      <Section>
        <Eyebrow>III · Prestaciones y beneficios</Eyebrow>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl text-4xl md:text-6xl">Lo que obtienes al formar parte.</h2>
          <CTALink to="/beneficios" variant="outline">
            Ver beneficios
          </CTALink>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFICIOS.map((b) => (
            <article key={b.title} className="border border-line bg-card p-8 lift hover:lift-hover">
              <b.icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-6 text-xl">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* NOTICIAS */}
      <Section tone="sand">
        <Eyebrow>IV · Noticias y actualidad</Eyebrow>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl text-4xl md:text-6xl">Lo último de la UNTPJ.</h2>
          <CTALink to="/noticias" variant="outline">
            Ver todo
          </CTALink>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {NOTICIAS.map((n) => (
            <Link
              key={n.slug}
              to="/noticias/$slug"
              params={{ slug: n.slug }}
              className="group block overflow-hidden border border-line bg-background lift hover:lift-hover"
            >
              <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                <img
                  src={THUMBS[n.slug]}
                  alt={n.titulo}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="eyebrow text-primary">
                  {n.fecha} · {n.autor}
                </p>
                <h3 className="mt-4 text-2xl">{n.titulo}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{n.resumen}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-[0.7rem] font-extrabold tracking-[0.16em] uppercase">
                  Leer más <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* AFÍLIATE */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x py-24 text-center md:py-32">
          <p className="eyebrow text-primary-foreground/70">VI · Afiliación</p>
          <h2 className="mx-auto mt-6 max-w-4xl text-5xl md:text-7xl">Forma parte de la UNTPJ.</h2>
          <p className="mx-auto mt-6 max-w-xl text-primary-foreground/80">
            Súmate a una organización que defiende tus derechos y te acompaña en cada etapa de tu
            vida laboral.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/afiliacion"
              className="inline-flex items-center gap-2 bg-accent px-8 py-5 font-display text-sm font-extrabold tracking-[0.14em] text-accent-foreground uppercase lift hover:opacity-90"
            >
              Afíliate a UNTPJ <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 border border-primary-foreground/40 px-8 py-5 font-display text-sm font-extrabold tracking-[0.14em] uppercase lift hover:bg-primary-foreground hover:text-primary"
            >
              Hablar con nosotros
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
