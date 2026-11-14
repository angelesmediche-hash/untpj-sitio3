import { Download, ExternalLink } from "lucide-react";
import { Eyebrow } from "@/components/site/Bits";

type Props = {
  eyebrow: string;
  titulo: string;
  descripcion: string;
  pdf: string;
  vista: string;
  vistaAlt: string;
  paginas: string;
  etiquetaBoton: string;
  notas?: string[];
  contactos?: string[];
};

/** Página sencilla para ver y descargar un PDF desde el celular (sin menú propio, pensada para llegar por QR). */
export function DocumentoPagina({
  eyebrow,
  titulo,
  descripcion,
  pdf,
  vista,
  vistaAlt,
  paginas,
  etiquetaBoton,
  notas,
  contactos,
}: Props) {
  const boton =
    "flex min-h-14 w-full items-center justify-center gap-3 px-6 py-4 text-center font-display text-sm font-extrabold tracking-[0.1em] uppercase lift";
  return (
    <section className="bg-background">
      <div className="container-x py-10 md:py-20">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-3xl leading-tight md:text-5xl">{titulo}</h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">{descripcion}</p>

          <div className="mt-8 grid gap-3">
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={`${boton} bg-cta text-cta-foreground hover:bg-ink`}
            >
              <ExternalLink className="size-5" aria-hidden="true" />
              {etiquetaBoton}
            </a>
            <a href={pdf} download className={`${boton} border border-primary text-primary`}>
              <Download className="size-5" aria-hidden="true" />
              Descargar PDF
            </a>
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground">{paginas}</p>

          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={etiquetaBoton}
            className="mt-8 block overflow-hidden rounded-2xl border border-line bg-sand lift"
          >
            <img
              src={vista}
              alt={vistaAlt}
              width={935}
              height={1210}
              loading="eager"
              className="h-auto w-full"
            />
          </a>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Vista previa de la primera página. Toca la imagen para abrir el documento completo.
          </p>

          {notas && notas.length > 0 && (
            <div className="mt-10 rounded-2xl border border-line bg-sand p-6">
              <h2 className="text-xl">Instrucciones</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base">
                {notas.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
              {contactos && contactos.length > 0 && (
                <>
                  <h3 className="mt-6 text-base font-bold">Contacto</h3>
                  <ul className="mt-2 space-y-2">
                    {contactos.map((t) => (
                      <li key={t}>
                        <a
                          href={`tel:+52${t.replace(/\s/g, "")}`}
                          className="inline-flex min-h-11 items-center text-lg font-semibold text-primary underline"
                        >
                          {t}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
