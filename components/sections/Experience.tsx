"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DIFFERENTIATORS } from "@/lib/data";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { Icon } from "@/components/ui/Icon";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".exp-image", {
        yPercent: -15,
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".diff-item", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".diff-grid",
          start: "top 85%",
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experiencia"
      ref={root}
      className="relative overflow-hidden bg-ink-950 py-32 md:py-44"
    >
      <div className="container-x grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="eyebrow mb-5">03 · Experiencia</div>
          <SplitReveal as="h2" className="title-2 text-white">
            Más de 20 años
          </SplitReveal>
          <SplitReveal as="h2" className="title-2 text-bone-300/80">
            cuidando coches en Murcia.
          </SplitReveal>

          <p className="mt-8 max-w-md text-bone-200/85">
            Auto Mar Menor nació como un taller de barrio. Hoy somos uno de los
            referentes Bosch Car Service de la región: mismas herramientas que un
            concesionario premium, mismo trato cercano de siempre.
          </p>
          <p className="mt-5 max-w-md text-bone-200/85">
            Nuestros técnicos forman parte de la red oficial Bosch, con certificaciones
            anuales y acceso a las últimas actualizaciones de software de diagnosis.
          </p>

          <div className="diff-grid mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2">
            {DIFFERENTIATORS.map((d, i) => (
              <div key={d.title} className="diff-item bg-ink-950 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-bosch/30 bg-bosch/10 text-bosch">
                    <Icon
                      name={["shield", "diagnosis", "check", "wrench"][i]}
                      className="h-4 w-4"
                    />
                  </span>
                  <h3 className="font-display text-lg tracking-normal text-white">
                    {d.title}
                  </h3>
                </div>
                <p className="text-sm text-bone-300">{d.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="exp-image-wrap relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.06]">
            <div
              className="exp-image absolute inset-[-10%] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/workshop.jpg'), linear-gradient(135deg, #0a0a0a 0%, #161616 100%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="flex items-end justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-300">
                    Workshop
                  </div>
                  <div className="mt-1 font-display text-2xl text-white">
                    Sede oficial Bosch
                  </div>
                </div>
                <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
                  Murcia
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
          </div>

          {/* Floating tech badge */}
          <div className="glass absolute -left-6 top-12 hidden flex-col gap-1 rounded-2xl p-5 shadow-glow md:flex">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-300">
              Equipos
            </div>
            <div className="font-display text-xl text-white">Bosch KTS · ESI[tronic]</div>
          </div>
          <div className="glass absolute -right-4 bottom-16 hidden flex-col gap-1 rounded-2xl p-5 shadow-glow md:flex">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-300">
              Garantía
            </div>
            <div className="font-display text-xl text-white">2 años Bosch</div>
          </div>
        </div>
      </div>
    </section>
  );
}
