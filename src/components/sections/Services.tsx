import { ChevronRight } from "lucide-react";
import service1 from "@/assets/gallery/1.jpeg";
import service2 from "@/assets/gallery/2.jpeg";
import service3 from "@/assets/gallery/3.jpeg";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

const services = [
  {
    title: "Metal Furniture Fabrication",
    subtitle:
      "Custom metal furniture designed for both residential and commercial spaces",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, rem?",
    description:
      "Naša firma je specijalizovana za proizvodnju visokokvalitetnog nameštaja od metala, namenjenog kako privatnim tako i poslovnim prostorima. Svaki komad koji izrađujemo spoj je savršenog dizajna, izuzetne izdržljivosti i vrhunskog zanatskog umeća. Bilo da opremаte dom, restoran, kancelariju ili dvorište, naši proizvodi će uneti trajnu eleganciju i karakter u svaki prostor. Zajedno ćemo kreirati komade koji traju generacijama.",
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
    img: service1,
    href: "/service1",
  },
  {
    title: "Metal Furniture Fabrication",
    subtitle:
      "Custom metal furniture designed for both residential and commercial spaces",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, rem?",
    description:
      "Naša firma je specijalizovana za proizvodnju visokokvalitetnog nameštaja od metala, namenjenog kako privatnim tako i poslovnim prostorima. Svaki komad koji izrađujemo spoj je savršenog dizajna, izuzetne izdržljivosti i vrhunskog zanatskog umeća. Bilo da opremаte dom, restoran, kancelariju ili dvorište, naši proizvodi će uneti trajnu eleganciju i karakter u svaki prostor. Zajedno ćemo kreirati komade koji traju generacijama.",
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
    img: service2,
    href: "/service2",
  },
  {
    title: "Metal Furniture Fabrication",
    subtitle:
      "Custom metal furniture designed for both residential and commercial spaces",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, rem?",
    description:
      "Naša firma je specijalizovana za proizvodnju visokokvalitetnog nameštaja od metala, namenjenog kako privatnim tako i poslovnim prostorima. Svaki komad koji izrađujemo spoj je savršenog dizajna, izuzetne izdržljivosti i vrhunskog zanatskog umeća. Bilo da opremаte dom, restoran, kancelariju ili dvorište, naši proizvodi će uneti trajnu eleganciju i karakter u svaki prostor. Zajedno ćemo kreirati komade koji traju generacijama.",
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
    img: service3,
    href: "/service3",
  },
];

export const Services = () => {
  return (
    <section id="drones" className="bg-muted/50 ">
      <div className="container mx-auto ">
        <h1 className="text-center py-12 md:py-16 text-4xl md:text-5xl font-bold text-[#246cb4]">
          Šta nudimo?
        </h1>
        <p className="text-xl font-normal text-[#246cb4]">
          Firma AD-Mont se bavi izradom čeličnih konstrukcija za montažne
          objekte, proizvodnjom nameštaja od metala, izradom kapija i ograda od
          čelika i aluminijuma. Takođe se bavimo uslužnim sečenjem lima CNC
          Plazmom, kao i radioničarskom pripremom i zavarivanjem cevovoda za
          industrijska postrojenja TIG postupkom.
        </p>
        {services.map((service, index) => (
          <div
            className={cn(
              "flex flex-col items-center gap-8 py-12 md:py-16",
              (index + 1) % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            <div className="md:w-1/2">
              <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>
              <p className="text-muted-foreground mb-6">{service.info}</p>
              <ul className="space-y-2">
                {service.dots.map((dot, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-[#246cb4]" />
                    <span>{dot}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={service.href}
                className="mt-6 bg-[#246cb4] hover:bg-[#355472]"
              >
                Više informacija...
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src={service.img}
                alt="Professional mapping drone"
                className="h-[500px] w-full object-cover object-center rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
