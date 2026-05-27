export const BRAND = {
  name: "Auto Mar Menor",
  shortName: "AMM",
  tagline: "Bosch Car Service · Murcia",
  phone: "+34 661 22 36 31",
  phoneDisplay: "661 22 36 31",
  whatsapp: "+34661223631",
  email: "info@automarmenor.es",
  address: {
    street: "Edif. Barnés II, Calle Mar Menor",
    locality: "Murcia",
    region: "Región de Murcia",
    postalCode: "30009",
    country: "ES",
  },
  geo: {
    lat: 37.9838,
    lng: -1.1265,
  },
  url: "https://automarmenor.es",
  hours: [
    { day: "Lunes - Viernes", time: "08:30 — 14:00 · 16:00 — 19:00" },
    { day: "Sábado", time: "09:00 — 14:00" },
    { day: "Domingo", time: "Cerrado" },
  ],
  social: {
    instagram: "https://instagram.com/automarmenor",
    facebook: "https://facebook.com/automarmenor",
    google: "https://g.page/automarmenor",
  },
};

export const STATS = [
  { value: "20", suffix: "+", label: "Años de experiencia" },
  { value: "15.000", suffix: "+", label: "Vehículos reparados" },
  { value: "4.9", suffix: "★", label: "Valoración Google" },
  { value: "140", suffix: "+", label: "Reseñas verificadas" },
];

export const SERVICES = [
  {
    id: "diagnosis",
    n: "01",
    title: "Diagnosis electrónica",
    excerpt:
      "Lectura completa de centralitas con equipos oficiales Bosch. Detectamos el problema real antes de tocar una sola pieza.",
    icon: "diagnosis",
    tags: ["OBD-II", "ECU", "Bosch KTS"],
  },
  {
    id: "frenos",
    n: "02",
    title: "Frenos",
    excerpt:
      "Pastillas, discos, líquido y ABS. Tu seguridad mide milímetros: aquí cada milímetro está calibrado.",
    icon: "brakes",
    tags: ["Pastillas", "Discos", "ABS"],
  },
  {
    id: "aceite",
    n: "03",
    title: "Aceite y filtros",
    excerpt:
      "Cambio de aceite premium con lubricantes homologados por el fabricante. Sello digital y aviso del próximo servicio.",
    icon: "oil",
    tags: ["5W30", "OEM", "Eco"],
  },
  {
    id: "neumaticos",
    n: "04",
    title: "Neumáticos",
    excerpt:
      "Montaje, equilibrado y alineación 3D. Las primeras marcas, el agarre que tu coche merece.",
    icon: "tire",
    tags: ["Alineación 3D", "Equilibrado", "TPMS"],
  },
  {
    id: "electronica",
    n: "05",
    title: "Electrónica",
    excerpt:
      "Sistemas eléctricos, baterías, alternadores y multiplexado. Diagnosticamos donde otros tiran piezas.",
    icon: "ecu",
    tags: ["Batería", "Sensores", "Cableado"],
  },
  {
    id: "revisiones",
    n: "06",
    title: "Revisiones oficiales",
    excerpt:
      "Mantenimiento según fabricante sin perder garantía. Sellamos tu libro digital o físico.",
    icon: "check",
    tags: ["Pre-ITV", "Garantía", "Sello digital"],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Diagnóstico",
    body: "Conectamos tu vehículo al equipo Bosch oficial y leemos su historial real. Sin suposiciones.",
  },
  {
    step: "02",
    title: "Presupuesto claro",
    body: "Te entregamos un presupuesto detallado, en tu idioma, sin sorpresas ni piezas innecesarias.",
  },
  {
    step: "03",
    title: "Reparación de precisión",
    body: "Técnicos certificados Bosch, recambio OEM y procesos auditados. Cada tornillo a su par.",
  },
  {
    step: "04",
    title: "Entrega y garantía",
    body: "Te lo devolvemos limpio, probado y con garantía Bosch Car Service por escrito.",
  },
];

export const DIFFERENTIATORS = [
  {
    title: "Tecnología BOSCH oficial",
    body: "Somos red Bosch Car Service: mismos equipos que un concesionario, con cercanía local.",
  },
  {
    title: "Diagnóstico real",
    body: "No cambiamos piezas a ciegas. Leemos centralitas, comparamos parámetros y vamos a la causa.",
  },
  {
    title: "Recambio OEM",
    body: "Piezas originales o de calidad equivalente. Nada de marcas blancas sin trazabilidad.",
  },
  {
    title: "Trato directo",
    body: "Hablas con el mecánico que toca tu coche. Sin intermediarios, sin tecnicismos vacíos.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ramón Gallego",
    role: "Google · verificada",
    rating: 5,
    body: "Atención muy profesional y honesta desde el primer momento. Se nota la experiencia y el cuidado en cada detalle. Precio justo y trato amable. Mi taller de referencia.",
  },
  {
    name: "Ana Hernández",
    role: "Google · verificada",
    rating: 5,
    body: "He llevado el coche esta mañana y en unas horas estaba solucionado. Mil gracias a Enrique por su profesionalidad y su simpatía. 5 estrellas me parece poco.",
  },
  {
    name: "Raquel García",
    role: "Google · verificada",
    rating: 5,
    body: "Fui por un ruido extraño en una rueda que en otros sitios no me habían podido arreglar. Enrique lo ha solucionado en menos de 10 minutos. Súper amable y profesional.",
  },
  {
    name: "José Beltrán",
    role: "Google · verificada",
    rating: 5,
    body: "Fallaba el aire acondicionado y otro taller quería cambiar el compresor, un pastizal. Aquí lo revisaron y en 1 hora perfecto. Era un sensor. Buen precio y mejor trato.",
  },
  {
    name: "Bernardino Guirao",
    role: "Google · verificada",
    rating: 5,
    body: "Mi taller de confianza. Enrique padre e hijo son unos fenómenos, trabajan bien y no son caros.",
  },
  {
    name: "Willy Anduquia",
    role: "Google · verificada",
    rating: 5,
    body: "Excelentes profesionales. Muy honestos y sinceros. Soy cliente desde hace más de tres años. Trato muy cercano y familiar. 10/10.",
  },
];

export const FAQ = [
  {
    q: "¿Pierdo la garantía del coche si reparo aquí?",
    a: "No. Al ser red Bosch Car Service oficial, cumplimos la normativa europea (Reglamento UE 461/2010) para mantener intacta tu garantía de fabricante.",
  },
  {
    q: "¿Trabajáis todas las marcas?",
    a: "Sí. Disponemos de equipos de diagnosis multimarca Bosch KTS y software actualizado para vehículos europeos, asiáticos y americanos.",
  },
  {
    q: "¿Cuánto tarda un diagnóstico?",
    a: "Una lectura de centralita y prueba dinámica tarda entre 30 y 60 minutos. Te llamamos antes de tocar nada.",
  },
  {
    q: "¿Puedo pagar a plazos?",
    a: "Sí. Disponemos de financiación sin intereses hasta 6 meses para reparaciones superiores a 300€.",
  },
];
