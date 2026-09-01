import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/logo-untpj.png";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3 text-primary">
      <span className="inline-block h-px w-8 bg-primary" aria-hidden="true" />
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
}) {
  if (image) {
    return (
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <img
          src={image}
          alt={imageAlt ?? ""}
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20"
          aria-hidden="true"
        />
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80"
        />
        <Seal
          size={140}
          className="absolute top-8 right-6 hidden opacity-90 md:top-10 md:right-10 md:block"
        />
        <div className="relative container-x flex min-h-[46vh] flex-col justify-end py-16 md:min-h-[52vh] md:py-24">
          <div className="rise max-w-3xl">
            <p className="eyebrow flex items-center gap-3 text-accent">
              <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="mt-6 text-5xl md:text-7xl">{title}</h1>
            {intro && <p className="mt-6 max-w-2xl text-lg text-ink-muted md:text-xl">{intro}</p>}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-line bg-ink text-ink-foreground">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 font-display text-[16rem] leading-none font-extrabold text-ink-foreground/[0.04] select-none md:text-[22rem]"
      >
        {eyebrow.charAt(0)}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary"
      />
      <div className="relative container-x py-20 md:py-28">
        <div className="rise max-w-4xl">
          <p className="eyebrow flex items-center gap-3 text-accent">
            <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-6 text-5xl md:text-7xl">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg text-ink-muted md:text-xl">{intro}</p>}
        </div>
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  tone = "base",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "base" | "sand" | "ink";
  id?: string;
}) {
  const toneClass =
    tone === "ink" ? "bg-ink text-ink-foreground" : tone === "sand" ? "bg-sand" : "bg-background";
  return (
    <section id={id} className={`scroll-mt-32 ${toneClass} ${className}`}>
      <div className="container-x py-20 md:py-28">{children}</div>
    </section>
  );
}

export function CTALink({
  to,
  children,
  variant = "solid",
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "accent";
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-4 font-display text-xs font-extrabold tracking-[0.14em] uppercase lift";
  const styles =
    variant === "outline"
      ? "border border-current text-current hover:bg-foreground hover:text-background"
      : variant === "accent"
        ? "bg-accent text-accent-foreground hover:opacity-90"
        : "bg-primary text-primary-foreground hover:bg-ink";
  return (
    <Link to={to} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export function Pending({ note }: { note?: string }) {
  return (
    <div className="border border-dashed border-line bg-muted/50 p-6">
      <p className="eyebrow text-muted-foreground">[Contenido pendiente]</p>
      <p className="mt-2 text-sm text-muted-foreground">
        {note ?? "Este espacio está reservado para información oficial de la UNTPJ."}
      </p>
    </div>
  );
}

export function Gallery({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`overflow-hidden bg-muted lift hover:lift-hover ${
            i === 0 ? "col-span-2 aspect-[16/10] sm:col-span-2" : "aspect-square"
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

/**
 * Sello institucional circular: escudo al centro, rodeado de texto en arco.
 * Pensado como detalle decorativo (marca de agua, esquina de sección),
 * no como logotipo funcional del header.
 */
export function Seal({
  size = 176,
  tone = "gold",
  topText = "UNIÓN NACIONAL DE TRABAJADORES DEL PODER JUDICIAL",
  bottomText = "PODER JUDICIAL DE LA FEDERACIÓN · MÉXICO ·",
  className = "",
}: {
  size?: number;
  tone?: "gold" | "ink";
  topText?: string;
  bottomText?: string;
  className?: string;
}) {
  const ringColor = tone === "gold" ? "var(--color-gold)" : "currentColor";
  const uid = topText.slice(0, 4) + bottomText.slice(0, 4) + tone;
  const r = 46;
  const cx = 50;
  const cy = 50;

  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <defs>
          <path id={`seal-top-${uid}`} d={`M ${cx - r},${cy} a ${r},${r} 0 1,1 ${r * 2},0`} />
          <path id={`seal-bottom-${uid}`} d={`M ${cx + r},${cy} a ${r},${r} 0 1,1 ${-r * 2},0`} />
        </defs>
        <circle
          cx={cx}
          cy={cy}
          r={48}
          fill="none"
          stroke={ringColor}
          strokeWidth={0.5}
          opacity={0.9}
        />
        <circle
          cx={cx}
          cy={cy}
          r={34}
          fill="none"
          stroke={ringColor}
          strokeWidth={0.5}
          opacity={0.6}
        />
        <text fontSize={4.1} letterSpacing="0.16em" fill={ringColor} className="font-display">
          <textPath href={`#seal-top-${uid}`} startOffset="50%" textAnchor="middle">
            {topText}
          </textPath>
        </text>
        <text fontSize={4.1} letterSpacing="0.16em" fill={ringColor} className="font-display">
          <textPath href={`#seal-bottom-${uid}`} startOffset="50%" textAnchor="middle">
            {bottomText}
          </textPath>
        </text>
      </svg>
      <img
        src={logo}
        alt=""
        className="absolute top-1/2 left-1/2 w-[38%] -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </div>
  );
}
