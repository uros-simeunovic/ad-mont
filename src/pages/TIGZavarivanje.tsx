import serviceImg from "@/assets/zavarivanje/mainKonstrukcije.jpg";
import { Service } from "@/components/Service";

// Import specific images for TIG Zavarivanje gallery
import tigZavarivanje6 from "@/assets/zavarivanje/zavarivanje1.jpg";
import tigZavarivanje7 from "@/assets/zavarivanje/zavarivanje2.jpg";
import tigZavarivanje3 from "@/assets/zavarivanje/zavarivanje3.jpg";
import tigZavarivanje4 from "@/assets/zavarivanje/zavarivanje4.jpg";
import tigZavarivanje5 from "@/assets/zavarivanje/zavarivanje5.jpg";
import tigZavarivanje1 from "@/assets/zavarivanje/zavarivanje6.jpg";
import tigZavarivanje2 from "@/assets/zavarivanje/zavarivanje7.jpg";
import tigZavarivanje8 from "@/assets/zavarivanje/zavarivanje8.jpg";
import serviceImg2 from "@/assets/zavarivanje/zavarivanje2.jpeg";

const tigZavarivanjeImages = [
  tigZavarivanje1,
  tigZavarivanje2,
  serviceImg2,
  tigZavarivanje8,
  tigZavarivanje3,
  tigZavarivanje4,
  tigZavarivanje5,
  tigZavarivanje6,
  tigZavarivanje7,
];

const service3 = {
  title: "TIG Zavarivanje",
  subtitle: "Precizno TIG zavarivanje za industrijske cevovode i specijalizovane projekte",
  info: "Specijalizovani smo za TIG zavarivanje",
  description1:
    "Naša firma je specijalizovana za TIG (Tungsten Inert Gas) zavarivanje, najprecizniju metodu zavarivanja koja se koristi za izradu industrijskih cevovoda, rezervoara, opreme za prehrambenu industriju i drugih zahtevnih aplikacija. Ova tehnika obezbeđuje najviši kvalitet zavara i savršenu kontrolu procesa.",
  description2:
    "Naši zavarivači su sertifikovani za TIG zavarivanje različitih materijala uključujući nerđajući čelik, aluminijum, titanijum i druge legure. Koristimo najnoviju opremu i tehnologije kako bismo obezbedili zavare koji odgovaraju najvišim standardima kvaliteta i sigurnosti.",
  dots: [
    "TIG zavarivanje industrijskih cevovoda i rezervoara",
    "Zavarivanje nerđajućeg čelika, aluminijuma i titanijuma",
    "Precizna kontrola toplote i kvaliteta zavara",
    "Sertifikovani zavarivači i kontrola kvaliteta",
  ],
  processSteps: [
    {
      number: 1,
      title: "Priprema i planiranje",
      description:
        "Analiziramo materijale, debljinu i zahteve projekta. Pripremamo opremu i planiramo proces zavarivanja.",
    },
    {
      number: 2,
      title: "TIG zavarivanje",
      description:
        "Naši sertifikovani zavarivači izvode precizno TIG zavarivanje sa kontrolom toplote i kvaliteta zavara.",
    },
    {
      number: 3,
      title: "Kontrola kvaliteta",
      description:
        "Svaki zavar prolazi kroz rigoroznu kontrolu kvaliteta uključujući vizuelnu kontrolu i ispitivanja.",
    },
  ],
  benefits: [
    { text: "Najviši kvalitet zavara sa savršenom kontrolom procesa" },
    { text: "Mogućnost zavarivanja tankih materijala bez deformacija" },
    { text: "Izuzetna čistoća zavara bez šljakova i oksida" },
    { text: "Sertifikovani zavarivači sa dugogodišnjim iskustvom" },
    { text: "Kontrola kvaliteta prema međunarodnim standardima" },
    { text: "Pogodnost za kritične aplikacije i zahtevne materijale" },
  ],
  faqs: [
    {
      question: "Koje materijale možete zavarivati TIG metodom?",
      answer:
        "TIG metodom možemo zavarivati različite materijale uključujući nerđajući čelik, aluminijum, titanijum, legure nikla, bakar i druge metale. Ova metoda je posebno pogodna za tanke materijale i zahtevne aplikacije gde je potreban visok kvalitet zavara.",
    },
    {
      question: "Da li su vaši zavarivači sertifikovani?",
      answer:
        "Da, svi naši zavarivači su sertifikovani za TIG zavarivanje različitih materijala i debljina. Redovno obnavljamo sertifikate i pratimo najnovije standarde i tehnologije u oblasti zavarivanja.",
    },
    {
      question: "Koje vrste projekata izvode TIG zavarivanjem?",
      answer:
        "TIG zavarivanjem izvodimo različite projekte uključujući industrijski cevovodi, rezervoare, opremu za prehrambenu industriju, medicinsku opremu, aeronautičke komponente i druge zahtevne aplikacije gde je potreban visok kvalitet zavara.",
    },
    {
      question: "Koliko je precizno TIG zavarivanje?",
      answer:
        "TIG zavarivanje je najpreciznija metoda zavarivanja koja omogućava kontrolu toplote i precizno upravljanje procesom. Ovo rezultuje zavarima visokog kvaliteta sa minimalnim deformacijama i savršenom kontrolom penetracije.",
    },
    {
      question: "Da li obavljate kontrolu kvaliteta zavara?",
      answer:
        "Da, svaki zavar prolazi kroz rigoroznu kontrolu kvaliteta uključujući vizuelnu kontrolu, ispitivanja penetrantima, ultrazvučnu kontrolu i druge metode prema zahtevima projekta i standardima.",
    },
    {
      question: "Koji su prednosti TIG zavarivanja u odnosu na druge metode?",
      answer:
        "TIG zavarivanje ima brojne prednosti: najviši kvalitet zavara, mogućnost zavarivanja tankih materijala, izuzetna čistoća zavara, precizna kontrola toplote, mogućnost zavarivanja različitih materijala i savršena kontrola procesa. Ovo ga čini idealnim za kritične aplikacije.",
    },
  ],
  img: serviceImg,
  img2: serviceImg2,
  href: "/tig-zavarivanje",
};

export const TIGZavarivanje = () => {
  return <Service service={service3} galleryImages={tigZavarivanjeImages} />;
}; 