import { Award, Users, Clock, CheckCircle } from "lucide-react";

export const About = () => {
  const stats = [
    {
      icon: <Award className="h-8 w-8" />,
      number: "15+",
      label: "Godina Iskustva",
      description: "Dugogodišnje iskustvo u metalnoj industriji"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "500+",
      label: "Zadovoljnih Klijenata",
      description: "Uspešno završenih projekata"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "24/7",
      label: "Podrška",
      description: "Dostupni smo za vaše projekte"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      number: "100%",
      label: "Garancija",
      description: "Kvalitet i pouzdanost"
    }
  ];

  const values = [
    {
      title: "Kvalitet",
      description: "Svaki proizvod prolazi kroz strogu kontrolu kvaliteta pre isporuke"
    },
    {
      title: "Pouzdanost",
      description: "Ispunjavamo sve rokove i obećanja koja damo klijentima"
    },
    {
      title: "Inovacija",
      description: "Koristimo najnovije tehnologije i metode u izradi"
    },
    {
      title: "Profesionalizam",
      description: "Tim stručnjaka sa sertifikatima i bogatim iskustvom"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4f5050] mb-6">
            O Nama
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            AD-Mont je firma sa dugogodišnjim iskustvom u izradi čeličnih konstrukcija, 
            metalnog nameštaja i zavarivanju. Naša misija je da pružimo vrhunske usluge 
            koje kombinuju kvalitet, inovaciju i pouzdanost.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#256eb6] text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#4f5050] mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-[#4f5050] mb-8">
              Naše Vrednosti
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#256eb6]/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-[#256eb6]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#4f5050] mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#256eb6] to-[#1e5a9a] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              Zašto Izabrati AD-Mont?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5" />
                <span>Vrhunski kvalitet izrade sa modernim tehnologijama</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5" />
                <span>Sertifikovani varioci sa bogatim iskustvom</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5" />
                <span>Izrada po meri prema vašim zahtevima</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5" />
                <span>Garancija kvaliteta i pouzdanost</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5" />
                <span>Brza izrada i poštovanje rokova</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}; 