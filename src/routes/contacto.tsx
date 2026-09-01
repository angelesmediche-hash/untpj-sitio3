import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import { Eyebrow, PageHero, Section } from "@/components/site/Bits";
import { CONTACTO } from "@/lib/site-data";
import contactoHeroImg from "@/assets/contacto-header.jpg";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — UNTPJ" },
      {
        name: "description",
        content:
          "Escríbenos: información general, afiliación, convenios o representación en tu centro de trabajo.",
      },
      { property: "og:title", content: "Contacto — UNTPJ" },
      {
        property: "og:description",
        content: "Canales de contacto del sindicato del Poder Judicial.",
      },
    ],
  }),
  component: ContactoPage,
});

const schema = z.object({
  nombre: z.string().trim().min(2, "Escribe tu nombre").max(100, "Nombre demasiado largo"),
  email: z.string().trim().email("Correo no válido").max(255),
  mensaje: z.string().trim().min(10, "Cuéntanos un poco más").max(1000, "Máximo 1000 caracteres"),
});

function formatTel(t: string) {
  return t.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3");
}

function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.issues[0]?.message ?? "Revisa los datos");
      return;
    }
    setForm({ nombre: "", email: "", mensaje: "" });
    toast.success("Mensaje enviado", { description: "Te responderemos en días hábiles." });
  };

  const field =
    "h-11 w-full border border-line bg-background px-4 text-sm focus:border-primary focus:outline-none";

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos"
        intro="Información general, afiliación, convenios o representación en tu centro de trabajo."
        image={contactoHeroImg}
        imageAlt="Escritorio con la insignia de la Unión Nacional de Trabajadores del Poder Judicial"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Canales directos</Eyebrow>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 text-primary" strokeWidth={1.5} />
                <span>
                  <a href={`mailto:${CONTACTO.email}`} className="hover:underline">
                    {CONTACTO.email}
                  </a>{" "}
                  — información general
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 text-primary" strokeWidth={1.5} />
                <span>
                  <a href={`mailto:${CONTACTO.emailAfiliacion}`} className="hover:underline">
                    {CONTACTO.emailAfiliacion}
                  </a>{" "}
                  — afiliación
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 text-primary" strokeWidth={1.5} />
                {formatTel(CONTACTO.telGeneral)} — información
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 text-primary" strokeWidth={1.5} />
                {formatTel(CONTACTO.telAfiliaciones)} — afiliaciones
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 text-primary" strokeWidth={1.5} />
                {formatTel(CONTACTO.tel247)} — línea 24/7 para afiliados
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-primary" strokeWidth={1.5} />
                Sitio oficial:{" "}
                <a
                  href={CONTACTO.sitio}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {CONTACTO.sitio}
                </a>
              </li>
            </ul>
            <ul className="mt-6 flex gap-4 text-sm">
              <li>
                <a
                  href={CONTACTO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={CONTACTO.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 border border-line bg-sand p-8">
            <div>
              <label className="mb-1.5 block text-sm" htmlFor="nombre">
                Nombre completo
              </label>
              <input
                id="nombre"
                className={field}
                maxLength={100}
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm" htmlFor="email">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                className={field}
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm" htmlFor="mensaje">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={6}
                maxLength={1000}
                className="w-full border border-line bg-background p-4 text-sm focus:border-primary focus:outline-none"
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="h-11 w-full bg-primary font-display text-xs font-extrabold tracking-[0.14em] text-primary-foreground uppercase lift hover:bg-ink"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
