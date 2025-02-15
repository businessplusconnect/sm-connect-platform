
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Gestion des ventes & facturation",
    features: [
      "Création et suivi des devis, bons de commande, factures et règlements",
      "Statistiques et tableaux de bord en temps réel",
      "Suivi du chiffre d'affaires et des soldes clients"
    ]
  },
  {
    title: "Gestion des achats & fournisseurs",
    features: [
      "Suivi des commandes, réceptions et retours fournisseurs",
      "Analyse des achats et règlements fournisseurs",
      "Optimisation des coûts grâce aux statistiques avancées"
    ]
  },
  {
    title: "Gestion des stocks & inventaire",
    features: [
      "Suivi des articles, familles et marques",
      "Gestion des entrées et sorties de stock",
      "Tableaux de bord pour une vision claire et précise"
    ]
  },
  {
    title: "Trésorerie & Comptabilité simplifiée",
    features: [
      "Gestion des comptes et caisses",
      "Suivi des règlements et états de compte",
      "Exportation des données (CSV, PDF, Excel) pour la comptabilité"
    ]
  },
  {
    title: "Personnalisation & automatisation",
    features: [
      "Générateur d'état pour personnaliser vos documents",
      "Import & Export de données pour faciliter la migration",
      "Intégration avec des outils tiers (API disponible en version Pro)"
    ]
  },
  {
    title: "Hébergement cloud sécurisé",
    features: [
      "Données sauvegardées quotidiennement",
      "Accès depuis n'importe où, sur tous vos appareils",
      "Scalabilité selon la taille de votre entreprise"
    ]
  }
];

const trustPoints = [
  "Solution complète pour gérer votre activité de A à Z",
  "Interface intuitive et prise en main rapide",
  "Support technique réactif et assistance personnalisée",
  "Flexibilité avec plusieurs plans adaptés à vos besoins"
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 bg-gradient-to-b from-[#D3E4FD] to-white">
        <div className="container mx-auto px-4">
          {/* Hero Section - Modified to be side by side */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold mb-4 text-left">
                Nos Services – Gérez votre entreprise en toute simplicité avec SM-Connect
              </h1>
              <p className="text-xl text-gray-600 text-left">
                SM-Connect est une solution 100 % cloud, sécurisée et intuitive, conçue pour optimiser la gestion de votre entreprise. 
                Que vous soyez une TPE, PME ou un grand compte, nous vous proposons une solution complète pour gagner du temps, 
                améliorer votre productivité et centraliser vos opérations.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/f808848a-5eca-4c61-b2b1-03681a06f1ca.png"
                alt="Services SM-Connect"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Section - Changed image */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/704d0baf-3c88-4149-99d0-6f94a6b3562e.png"
                alt="Faire confiance à SM-Connect"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8">✨ Pourquoi nous faire confiance ?</h2>
              <div className="space-y-4">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-gray-600">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white p-8 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold mb-4">📞 Contactez-nous dès maintenant !</h2>
            <p className="text-gray-600 mb-6">
              Vous souhaitez en savoir plus ou tester SM-Connect ?<br />
              Contactez-nous via notre formulaire ou par email pour une démo gratuite !
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="gap-2">
                Essayer gratuitement <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Mail className="w-4 h-4" /> Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
