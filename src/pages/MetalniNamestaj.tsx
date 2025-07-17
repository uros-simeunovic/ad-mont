import serviceImg from "@/assets/namestaj/mainNamestaj.jpg";
import { Service } from "@/components/Service";

// Import specific images for Metalni Namestaj gallery
import metalniNamestaj1 from "@/assets/namestaj/namestaj1.jpg";
import metalniNamestaj2 from "@/assets/namestaj/namestaj2.jpg";
import metalniNamestaj3 from "@/assets/namestaj/namestaj3.jpg";
import metalniNamestaj4 from "@/assets/namestaj/namestaj4.jpg";
import metalniNamestaj5 from "@/assets/namestaj/namestaj5.jpg";
import metalniNamestaj6 from "@/assets/namestaj/namestaj6.jpg";

const metalniNamestajImages = [
  metalniNamestaj1,
  metalniNamestaj2,
  metalniNamestaj3,
  metalniNamestaj4,
  metalniNamestaj5,
  metalniNamestaj6,
];

const service1 = {
  title: "Metalni Nameštaj Po Meri",
  subtitle: "Visokokvalitetan nameštaj za privatne i poslovne prostore",
  info: "Specijalizovani smo za izradu metalnog nameštaja po meri",
  description1:
    "Naša firma je specijalizovana za proizvodnju visokokvalitetnog nameštaja od metala, namenjenog kako privatnim tako i poslovnim prostorima. Svaki komad koji izrađujemo spoj je savršenog dizajna, izuzetne izdržljivosti i vrhunskog zanatskog umeća.",
  description2:
    "Bilo da opremate dom, restoran, kancelariju ili dvorište, naši proizvodi će uneti trajnu eleganciju i karakter u svaki prostor. Kombiniramo moderne tehnologije sa tradicionalnim zanatskim metodama kako bismo kreirali nameštaj koji traje generacijama.",
  dots: [
    "Izrada metalnog nameštaja po meri (stolovi, stolice, regali, kreveti, ograde, cipelarnike...)",
    "Industrijski, minimalistički i moderni stil",
    "Kombinacija metala sa drvetom, staklom ili drugim materijalima",
    "Unikatna rešenja prilagođena vašim potrebama",
  ],
  processSteps: [
    {
      number: 1,
      title: "Konsultacija i planiranje",
      description:
        "Analiziramo vaše potrebe, prostor i stil. Razvijamo detaljan plan i skice prema vašim zahtevima.",
    },
    {
      number: 2,
      title: "Izrada i zavarivanje",
      description:
        "Naši majstori precizno seku, oblikuju i zavaruju metalne komponente koristeći najnovije tehnologije.",
    },
    {
      number: 3,
      title: "Završna obrada i montaža",
      description:
        "Proizvod prolazi kroz proces završne obrade, kontrole kvaliteta i montaže prema specifikacijama.",
    },
  ],
  benefits: [
    { text: "Izuzetna izdržljivost i dugovečnost metalnih konstrukcija" },
    { text: "Precizna izrada sa tačnošću do milimetra" },
    { text: "Mogućnost prilagođavanja dimenzija i dizajna prema vašim potrebama" },
    { text: "Kombinacija metala sa drugim materijalima poput drveta i stakla" },
    { text: "Zaštita od korozije i dugotrajna estetika" },
    { text: "Industrijski kvalitet za domaću i poslovnu upotrebu" },
  ],
  faqs: [
    {
      question: "Koje vrste metala koristite za izradu nameštaja?",
      answer:
        "Koristimo različite vrste metala uključujući čelik, nerđajući čelik, aluminijum i kovano gvožđe, zavisno od namene i dizajna proizvoda. Svaki metal ima svoje prednosti i koristimo ga prema specifičnim zahtevima projekta.",
    },
    {
      question: "Koliko je otporan metalni nameštaj na koroziju?",
      answer:
        "Svi naši proizvodi prolaze kroz proces zaštite od korozije, uključujući peskarenje, grundiranje i završno farbanje ili plastifikaciju. Za spoljašnju upotrebu koristimo dodatne zaštitne slojeve koji obezbeđuju dugotrajnu zaštitu.",
    },
    {
      question: "Da li izrađujete nameštaj po meri?",
      answer:
        "Da, specijalizovani smo za izradu nameštaja po meri prema vašim specifičnim zahtevima i dimenzijama prostora. Dolazimo na teren, merimo prostor i predlažemo optimalna rešenja.",
    },
    {
      question: "Koji je rok izrade za metalni nameštaj po meri?",
      answer:
        "Rok izrade zavisi od složenosti projekta i trenutnog obima posla, ali obično se kreće od 2 do 4 nedelje. Za jednostavnije projekte možemo završiti i brže, a za kompleksnije potrebno je više vremena za kvalitetnu izradu.",
    },
    {
      question: "Da li možete kombinovati metal sa drugim materijalima?",
      answer:
        "Apsolutno! Specijalizovani smo za kombinaciju metala sa drvetom, staklom, mermerom i drugim materijalima. Ovo nam omogućava da kreiramo jedinstvene i funkcionalne komade nameštaja.",
    },
    {
      question: "Da li pružate garanciju na proizvode?",
      answer:
        "Da, svi naši proizvodi imaju garanciju kvaliteta. Pružamo garanciju na strukturu i zavarivanje, kao i na završnu obradu. Naš cilj je da budete potpuno zadovoljni našim radom.",
    },
  ],
  img: serviceImg,
  href: "/metalni-namestaj",
};

export const MetalniNamestaj = () => {
  return <Service service={service1} galleryImages={metalniNamestajImages}/>;
}; 