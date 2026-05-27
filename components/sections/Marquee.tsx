import { ScrollMarquee } from "@/components/ui/ScrollMarquee";

export function Marquee() {
  return (
    <section className="border-y border-white/[0.06] bg-ink-900 py-8">
      <ScrollMarquee
        items={[
          "Bosch Car Service",
          "Diagnosis Oficial",
          "Tecnología Alemana",
          "Mecánica de Precisión",
          "Murcia",
        ]}
      />
    </section>
  );
}
