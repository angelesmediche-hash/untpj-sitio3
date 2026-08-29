import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

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
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-line bg-sand">
      <div className="container-x py-20 md:py-28">
        <div className="rise max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl">{title}</h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{intro}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  tone = "base",
}: {
  children: ReactNode;
  className?: string;
  tone?: "base" | "sand" | "ink";
}) {
  const toneClass =
    tone === "ink" ? "bg-ink text-ink-foreground" : tone === "sand" ? "bg-sand" : "bg-background";
  return (
    <section className={`${toneClass} ${className}`}>
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
