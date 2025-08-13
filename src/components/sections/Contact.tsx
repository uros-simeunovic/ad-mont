import { Phone, Mail, MapPin, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useContactForm } from "@/hooks/useContactForm";

export const Contact = () => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    errorMessage,
    handleInputChange,
    handleSubmit
  } = useContactForm();

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefon",
      details: ["+381 65 9902909"],
      description: "Pozovite nas za besplatnu konsultaciju"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["admontkrupanj@gmail.com"],
      description: "Pošaljite nam upit za vaš projekat"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresa",
      details: ["Vlade Zečevića 67", "15314 Krupanj, Srbija"],
      description: "Posetite našu radionicu"
    },
    {
      icon: <svg
        className="h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          ry="5"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="5"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
        />
        <circle
          cx="17"
          cy="7"
          r="1.2"
          fill="currentColor"
        />
      </svg>,
      title: "Instagram",
      details: ["_ad_mont_krupanj"],
      description: "Zapratite nas na Instagram-u"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kontaktirajte Nas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Spremni smo da vam pomognemo sa vašim projektom. Kontaktirajte nas
            za konsultacije i ponudu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-[#256eb6]" />
                Informacije
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Naš tim stručnjaka je uvek spreman da odgovori na vaša pitanja
                i pruži profesionalnu podršku za vaš projekat. Kontaktirajte nas
                na bilo koji način koji vam odgovara.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (info.title === "Instagram") {
                      window.open("https://www.instagram.com/_ad_mont_krupanj", "_blank");
                    }
                  }}
                  className={cn("flex items-start gap-4 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300", info.title === "Instagram" && "cursor-pointer")}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#256eb6] rounded-lg flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300">{detail}</p>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-2">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Pošaljite Nam Poruku</h3>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-500/50 rounded-lg flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <p className="text-green-400">Poruka je uspešno poslata! Odgovorićemo vam u najkraćem roku.</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-600/20 border border-red-500/50 rounded-lg flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <p className="text-red-400">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    Ime *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#256eb6] focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Vaše ime"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Prezime *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#256eb6] focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Vaše prezime"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#256eb6] focus:border-transparent text-white placeholder-gray-400"
                  placeholder="vas@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#256eb6] focus:border-transparent text-white placeholder-gray-400"
                  placeholder="+381 63 123 456"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Tip Usluge
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#256eb6] focus:border-transparent text-white"
                >
                  <option value="">Izaberite uslugu</option>
                  <option value="Metalni nameštaj">Metalni nameštaj</option>
                  <option value="Čelične konstrukcije">Čelične konstrukcije</option>
                  <option value="Ograde i kapije">Ograde i kapije</option>
                  <option value="TIG zavarivanje">TIG zavarivanje</option>
                  <option value="Ostalo">Ostalo</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Poruka *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#256eb6] focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Opisite vaš projekat ili postavite pitanje..."
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#256eb6] hover:bg-[#1e5a9a] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none"
              >
                {isSubmitting ? 'Slanje...' : 'Pošaljite Poruku'}
              </Button>
            </form>
          </div>
        </div>

        {/* Map or Additional Info */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Besplatna Konsultacija</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Naš tim će vam pružiti besplatnu konsultaciju i detaljnu ponudu za vaš projekat.
              Dolazimo na teren, analiziramo vaše potrebe i predlažemo najbolja rešenja.
            </p>
            <Button className="bg-[#256eb6] hover:bg-[#1e5a9a] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Zakažite Konsultaciju
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};
