import { ChevronRight, Wrench, Factory, Zap } from "lucide-react";
import service1 from "@/assets/namestaj/namestaj6.jpg";
import service2 from "@/assets/konstrukcije/mainCelicneKonstrukcijeKapije.jpg";
import service3 from "@/assets/zavarivanje/mainKonstrukcije.jpg";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

const services = [
  {
    title: "Metalni Nameštaj Po Meri",
    subtitle: "Visokokvalitetan nameštaj za privatne i poslovne prostore",
    icon: <Wrench className="h-8 w-8" />,
    description:
      "Izrađujemo visokokvalitetan metalni nameštaj po meri za privatne i poslovne prostore.",
          features: [
        "Stolovi, stolice, regali, kreveti, ograde",
        "Industrijski i moderni stil",
        "Kombinacija metala sa drvetom i staklom",
      ],
      benefits: [
        "Izuzetna izdržljivost i dugovečnost",
        "Precizna izrada po meri",
        "Profesionalni kvalitet",
      ],

      img: service1,
    href: "/metalni-namestaj",
  },
  {
    title: "Čelične Konstrukcije i Ograde",
    subtitle: "Trajna i sigurna rešenja za industrijske i privatne objekte",
    icon: <Factory className="h-8 w-8" />,
    description:
      "Izrađujemo čelične konstrukcije, ograde, kapije i stepeništa po meri.",
          features: [
        "Hale, magacine, nadstrešnice",
        "Metalne i aluminijumske ograde",
        "Kapije i stepeništa",
      ],
      benefits: [
        "Izrada po meri",
        "Vrhunski kvalitet",
        "Sigurna rešenja",
      ],

      img: service2,
    href: "/celicke-konstrukcije",
  },
  {
    title: "TIG Zavarivanje i Cevovodi",
    subtitle: "Precizna priprema i stručno zavarivanje za industrijska postrojenja",
    icon: <Zap className="h-8 w-8" />,
    description:
      "Specijalizovani smo za TIG zavarivanje cevovoda za industrijska postrojenja.",
    features: [
      "Priprema i zavarivanje cevovoda",
      "TIG zavarivanje za industrijska postrojenja",
      "Kontrola kvaliteta spojeva",
    ],
    benefits: [
      "Vrhunska preciznost",
      "Sertifikovani varioci",
      "Strogi standardi kvaliteta",
    ],
    img: service3,
    href: "/tig-zavarivanje",
  },
];

export const Services = () => {
  return (
    <section id="services" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4f5050] mb-4">
            Naše Usluge
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specijalizovani smo za metalne konstrukcije, nameštaj po meri i TIG zavarivanje
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center gap-12 lg:gap-16",
                (index + 1) % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-[#256eb6] to-[#1e5a9a] text-white rounded-xl shadow-lg">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#4f5050] mb-2">{service.title}</h3>
                    <p className="text-lg text-[#256eb6] font-medium leading-relaxed">{service.subtitle}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-[#4f5050]">Šta radimo:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-[#256eb6]" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-[#4f5050]">Prednosti:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#256eb6] rounded-full mt-2 shrink-0"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center gap-2 bg-[#256eb6] text-white hover:bg-[#1e5a9a] rounded-lg px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Više informacija
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[500px] object-cover object-center transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 shadow-2xl rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
