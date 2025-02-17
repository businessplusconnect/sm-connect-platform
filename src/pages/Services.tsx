
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, ArrowRight, BarChart3, ShoppingCart, Warehouse, Calculator, Settings, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Gestion des ventes & facturation",
    icon: ShoppingCart,
    features: [
      "Création et suivi des devis, bons de commande, factures et règlements",
      "Statistiques et tableaux de bord en temps réel",
      "Suivi du chiffre d'affaires et des soldes clients"
    ]
  },
  {
    title: "Gestion des achats & fournisseurs",
    icon: BarChart3,
    features: [
      "Suivi des commandes, réceptions et retours fournisseurs",
      "Analyse des achats et règlements fournisseurs",
      "Optimisation des coûts grâce aux statistiques avancées"
    ]
  },
  {
    title: "Gestion des stocks & inventaire",
    icon: Warehouse,
    features: [
      "Suivi des articles, familles et marques",
      "Gestion des entrées et sorties de stock",
      "Tableaux de bord pour une vision claire et précise"
    ]
  },
  {
    title: "Trésorerie & Comptabilité simplifiée",
    icon: Calculator,
    features: [
      "Gestion des comptes et caisses",
      "Suivi des règlements et états de compte",
      "Exportation des données (CSV, PDF, Excel) pour la comptabilité"
    ]
  },
  {
    title: "Personnalisation & automatisation",
    icon: Settings,
    features: [
      "Générateur d'état pour personnaliser vos documents",
      "Import & Export de données pour faciliter la migration",
      "Intégration avec des outils tiers (API disponible en version Pro)"
    ]
  },
  {
    title: "Hébergement cloud sécurisé",
    icon: Cloud,
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
      <main className="flex-grow pt-20 md:pt-24 bg-gradient-to-b from-[#D3E4FD] to-white">
        <div className="container mx-auto px-4">
          {/* Hero Section - Amélioré pour mobile */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Nos Services – Gérez votre entreprise en toute simplicité avec SM-Connect
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                SM-Connect est une solution 100 % cloud, sécurisée et intuitive, conçue pour optimiser la gestion de votre entreprise. 
                Que vous soyez une TPE, PME ou un grand compte, nous vous proposons une solution complète pour gagner du temps, 
                améliorer votre productivité et centraliser vos opérations.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/f808848a-5eca-4c61-b2b1-03681a06f1ca.png"
                alt="Services SM-Connect"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Services Grid - Amélioré avec grandes icônes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <service.icon className="w-16 h-16 text-primary" />
                  </div>
                  <CardTitle className="text-center text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2.5"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Section - Amélioré pour mobile */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img 
                src="/lovable-uploads/704d0baf-3c88-4149-99d0-6f94a6b3562e.png"
                alt="Faire confiance à SM-Connect"
                className="w-full rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center lg:text-left">✨ Pourquoi nous faire confiance ?</h2>
              <div className="space-y-4">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="text-gray-600 flex-1">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section - Amélioré pour mobile */}
          <div className="text-center bg-white p-6 md:p-8 rounded-lg border">
            <h2 className="text-xl md:text-2xl font-bold mb-4">📞 Contactez-nous dès maintenant !</h2>
            <p className="text-gray-600 mb-6">
              Vous souhaitez en savoir plus ou tester SM-Connect ?<br />
              Contactez-nous via notre formulaire ou par email pour une démo gratuite !
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button size="lg" className="gap-2 w-full md:w-auto">
                Essayer gratuitement <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 w-full md:w-auto">
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
