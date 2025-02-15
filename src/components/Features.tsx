
import {
  FileText,
  ShoppingBag,
  Package,
  Wallet,
  Settings,
  Cloud,
  BarChart3,
  Mail,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const mainServices = [
  {
    icon: FileText,
    title: "Gestion des ventes & facturation",
    features: [
      "Création et suivi des devis, bons de commande, factures et règlements",
      "Statistiques et tableaux de bord en temps réel",
      "Suivi du chiffre d'affaires et des soldes clients"
    ]
  },
  {
    icon: ShoppingBag,
    title: "Gestion des achats & fournisseurs",
    features: [
      "Suivi des commandes, réceptions et retours fournisseurs",
      "Analyse des achats et règlements fournisseurs",
      "Optimisation des coûts grâce aux statistiques avancées"
    ]
  },
  {
    icon: Package,
    title: "Gestion des stocks & inventaire",
    features: [
      "Suivi des articles, familles et marques",
      "Gestion des entrées et sorties de stock",
      "Tableaux de bord pour une vision claire et précise"
    ]
  },
  {
    icon: Wallet,
    title: "Trésorerie & Comptabilité simplifiée",
    features: [
      "Gestion des comptes et caisses",
      "Suivi des règlements et états de compte",
      "Exportation des données (CSV, PDF, Excel) pour la comptabilité"
    ]
  },
  {
    icon: Settings,
    title: "Personnalisation & automatisation",
    features: [
      "Générateur d'état pour personnaliser vos documents",
      "Import & Export de données pour faciliter la migration",
      "Intégration avec des outils tiers (API disponible en version Pro)"
    ]
  },
  {
    icon: Cloud,
    title: "Hébergement cloud sécurisé",
    features: [
      "Données sauvegardées quotidiennement",
      "Accès depuis n'importe où, sur tous vos appareils",
      "Scalabilité selon la taille de votre entreprise"
    ]
  }
];

const trustFeatures = [
  "Solution complète pour gérer votre activité de A à Z",
  "Interface intuitive et prise en main rapide",
  "Support technique réactif et assistance personnalisée",
  "Flexibilité avec plusieurs plans adaptés à vos besoins"
];

const Features = () => {
  const navigate = useNavigate();

  return (
    <div id="services-section" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            🚀 Nos Services
          </h2>
          <p className="text-xl text-gray-600">
            Gérez votre entreprise en toute simplicité avec SM-Connect
          </p>
        </div>

        {/* Pourquoi choisir SM-Connect */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">📌 Pourquoi choisir SM-Connect ?</h3>
          <p className="text-gray-600 text-lg">
            SM-Connect est une solution 100 % cloud, sécurisée et intuitive, conçue pour optimiser la gestion de votre entreprise. 
            Que vous soyez une TPE, PME ou un grand compte, nous vous proposons une solution complète pour gagner du temps, 
            améliorer votre productivité et centraliser vos opérations.
          </p>
        </div>

        {/* Services principaux */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">🔹 Nos services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={service.title} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xl font-semibold">{`${index + 1}️⃣`}</span>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
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
        </div>

        {/* Pourquoi nous faire confiance */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">✨ Pourquoi nous faire confiance ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-gray-600">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-white p-8 rounded-lg shadow-sm border">
          <h3 className="text-2xl font-semibold mb-4">📞 Contactez-nous dès maintenant !</h3>
          <p className="text-gray-600 mb-6">
            Vous souhaitez en savoir plus ou tester SM-Connect ?<br />
            Contactez-nous via notre formulaire ou par email pour une démo gratuite !
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => navigate("/contact")} className="gap-2">
              Nous contacter <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" onClick={() => window.location.href = 'mailto:support@sm-connect.com'} className="gap-2">
              <Mail className="w-4 h-4" /> Par email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
