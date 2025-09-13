import serviceImg from "@/assets/konstrukcije/mainCelicneKonstrukcijeKapije.jpg";
import { Service } from "@/components/Service";

import celicneKonstrukcije1 from "@/assets/konstrukcije/kapije1.jpg";
import celicneKonstrukcije2 from "@/assets/konstrukcije/kapije2.jpg";
import celicneKonstrukcije3 from "@/assets/konstrukcije/kapije3.jpg";
import celicneKonstrukcije4 from "@/assets/konstrukcije/kapije4.jpg";
import celicneKonstrukcije5 from "@/assets/konstrukcije/kapije5.jpg";
import celicneKonstrukcije6 from "@/assets/konstrukcije/kapije6.jpg";
import nadstresnica1 from "@/assets/konstrukcije/nadstresnica1.jpg";
import nadstresnica2 from "@/assets/konstrukcije/nadstresnica2.jpg";
import stepeniste1 from "@/assets/konstrukcije/stepeniste1.jpg";
import stepeniste2 from "@/assets/konstrukcije/stepeniste2.jpg";
import serviceImg2 from "@/assets/konstrukcije/konstrukcije2.jpeg";

const celicneKonstrukcijeImages = [
  celicneKonstrukcije1,
  celicneKonstrukcije2,
  celicneKonstrukcije3,
  celicneKonstrukcije4,
  celicneKonstrukcije5,
  celicneKonstrukcije6,
  nadstresnica1,
  nadstresnica2,
  stepeniste1,
  stepeniste2,
];

const service2 = {
  title: "Čelične Konstrukcije",
  subtitle: "Izrada i montaža čeličnih konstrukcija za industriju i građevinarstvo",
  info: "Specijalizovani smo za izradu čeličnih konstrukcija",
  description1:
    "Naša firma je lider u izradi i montaži čeličnih konstrukcija, pružajući kompleksna rešenja za industrijske objekte, skladišta, hangare, mostove i druge građevinske projekte. Kombiniramo najnovije tehnologije sa iskustvom naših stručnjaka kako bismo obezbedili sigurnost, izdržljivost i kvalitet.",
  description2:
    "Svaki projekat pristupamo individualno, analiziramo specifične zahteve i razvijamo optimalna rešenja koja odgovaraju vašim potrebama i budžetu. Naši inženjeri i majstori rade sa preciznošću kako bi svaka konstrukcija bila savršeno izvedena i u skladu sa svim standardima.",
  dots: [
    "Izrada i montaža čeličnih konstrukcija (industrijski objekti, skladišta, hangari, mostovi...)",
    "Projektovanje i statički proračuni",
    "Kontrola kvaliteta i ispitivanja",
    "Kompleksna rešenja za sve vrste građevinskih projekata",
  ],
  processSteps: [
    {
      number: 1,
      title: "Projektovanje i planiranje",
      description:
        "Naši inženjeri analiziramo zahteve, izrađujemo projekte i statičke proračune prema vašim specifikacijama.",
    },
    {
      number: 2,
      title: "Izrada i zavarivanje",
      description:
        "Precizno seku, oblikuju i zavaruju čelične elemente koristeći najnovije tehnologije i kontrolu kvaliteta.",
    },
    {
      number: 3,
      title: "Montaža i završna obrada",
      description:
        "Profesionalna montaža na lokaciji, završna obrada i kontrola kvaliteta prema standardima.",
    },
  ],
  benefits: [
    { text: "Izuzetna nosivost i stabilnost čeličnih konstrukcija" },
    { text: "Dugovečnost i otpornost na spoljašnje uticaje" },
    { text: "Brza montaža i mogućnost proširenja" },
    { text: "Ekonomska efikasnost u odnosu na druge materijale" },
    { text: "Savremeni dizajn i estetski izgled" },
    { text: "Kompatibilnost sa drugim građevinskim materijalima" },
  ],
  faqs: [
    {
      question: "Koje vrste čeličnih konstrukcija izrađujete?",
      answer:
        "Izrađujemo sve vrste čeličnih konstrukcija uključujući industrijski objekti, skladišta, hangare, mostove, nadstrešnice, stepeništa, platforme i druge specijalizovane konstrukcije. Svaki projekat pristupamo individualno prema vašim specifičnim zahtevima.",
    },
    {
      question: "Da li izrađujete projekte i statičke proračune?",
      answer:
        "Da, naša firma ima sopstveni tim inženjera koji izrađuje projekte i statičke proračune za sve vrste čeličnih konstrukcija. Obezbeđujemo kompletnu dokumentaciju u skladu sa važećim standardima i propisima.",
    },
    {
      question: "Koliko traje izrada čelične konstrukcije?",
      answer:
        "Rok izrade zavisi od složenosti projekta, veličine konstrukcije i trenutnog obima posla. Za manje projekte potrebno je 3-6 nedelja, a za veće i kompleksnije konstrukcije 2-6 meseci. Uvek vas informišemo o tačnom roku tokom planiranja.",
    },
    {
      question: "Da li pružate garanciju na čelične konstrukcije?",
      answer:
        "Da, sve naše čelične konstrukcije imaju garanciju kvaliteta. Pružamo garanciju na strukturu, zavarivanje i završnu obradu. Naš cilj je da obezbedimo dugotrajnu i sigurnu konstrukciju koja će služiti generacijama.",
    },
    {
      question: "Koje vrste čelika koristite?",
      answer:
        "Koristimo različite vrste čelika uključujući S235, S355, nerđajući čelik i druge specijalizovane vrste prema zahtevima projekta. Izbor materijala zavisi od namene konstrukcije, spoljašnjih uslova i tehničkih zahteva.",
    },
    {
      question: "Da li obavljate montažu na lokaciji?",
      answer:
        "Da, obavljamo kompletnu montažu čeličnih konstrukcija na lokaciji. Naš tim stručnjaka ima iskustvo u montaži svih vrsta konstrukcija i obezbeđuje preciznu i sigurnu izvedbu prema projektu.",
    },
  ],
  img: serviceImg,
  img2: serviceImg2,
  href: "/celicne-konstrukcije",
};

export const CelicneKonstrukcije = () => {
  return <Service service={service2} galleryImages={celicneKonstrukcijeImages} />;
}; 