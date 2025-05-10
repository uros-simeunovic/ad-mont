import serviceImg from "@/assets/gallery/11.jpeg";
import { Service } from "@/components/Service";

const service2 = {
  title: "Wood furniture",
  subtitle:
    "Custom metal furniture designed for both residential and commercial spaces",
  info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, rem?",
  description1:
    "Naša firma je specijalizovana za proizvodnju visokokvalitetnog nameštaja od metala, namenjenog kako privatnim tako i poslovnim prostorima. Svaki komad koji izrađujemo spoj je savršenog dizajna, izuzetne izdržljivosti i vrhunskog zanatskog umeća. Bilo da opremate dom, restoran, kancelariju ili dvorište, naši proizvodi će uneti trajnu eleganciju i karakter u svaki prostor. Zajedno ćemo kreirati komade koji traju generacijama.",
  description2:
    "Bilo da opremate dom, restoran, kancelariju ili dvorište, naši proizvodi će uneti trajnu eleganciju i karakter u svaki prostor. Zajedno ćemo kreirati komade koji traju generacijama.",
  dots: [
    "Lorem ipsum dolor sit.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit.",
    "Lorem ipsum dolor sit amet.",
  ],
  processSteps: [
    {
      number: 1,
      title: "Planiranje i priprema",
      description:
        "Analiziramo vaše zahteve, razvijamo detaljan plan i pripremamo potrebne materijale i alate.",
    },
    {
      number: 2,
      title: "Izrada i zavarivanje",
      description:
        "Naši majstori precizno seku, oblikuju i zavaruju metalne komponente prema specifikacijama.",
    },
    {
      number: 3,
      title: "Završna obrada i isporuka",
      description:
        "Proizvod prolazi kroz proces završne obrade, kontrole kvaliteta i priprema se za isporuku.",
    },
  ],
  benefits: [
    { text: "Izuzetna izdržljivost i dugovečnost metalnih konstrukcija" },
    { text: "Precizna izrada sa tačnošću do milimetra" },
    {
      text: "Mogućnost prilagođavanja dimenzija i dizajna prema vašim potrebama",
    },
    {
      text: "Kombinacija metala sa drugim materijalima poput drveta i stakla",
    },
  ],
  faqs: [
    {
      question: "Koje vrste metala koristite za izradu nameštaja?",
      answer:
        "Koristimo različite vrste metala uključujući čelik, nerđajući čelik, aluminijum i kovano gvožđe, zavisno od namene i dizajna proizvoda.",
    },
    {
      question: "Koliko je otporan metalni nameštaj na koroziju?",
      answer:
        "Svi naši proizvodi prolaze kroz proces zaštite od korozije, uključujući peskarenje, grundiranje i završno farbanje ili plastifikaciju, što im obezbeđuje dugotrajnu zaštitu.",
    },
    {
      question: "Da li izrađujete nameštaj po meri?",
      answer:
        "Da, specijalizovani smo za izradu nameštaja po meri prema vašim specifičnim zahtevima i dimenzijama prostora.",
    },
    {
      question: "Koji je rok izrade za metalni nameštaj po meri?",
      answer:
        "Rok izrade zavisi od složenosti projekta i trenutnog obima posla, ali obično se kreće od 2 do 4 nedelje.",
    },
  ],
  img: serviceImg,
  href: "/service1",
};

export const Service2 = () => {
  return <Service service={service2} />;
};
