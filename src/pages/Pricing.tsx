import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const Pricing = () => {
  const [billingType, setBillingType] = useState<"monthly" | "annual">("annual");

  const plans = [
    {
      name: "Basique",
      description: "Gère tout le travail de l'équipe dans un seul espace",
      price: billingType === "annual" ? "5" : "7",
      totalPrice: "50",
      features: [
        "Gestion des ventes",
        "Gestion des clients & fournisseurs",      
        "Exportation des données (CSV, PDF, Excel, Email)",
        "Support technique",
        "Sauvegarde & Sécurité"
      ]
    },
    {
      name: "Standard",
      description: "Collaborez et optimisez le travail de votre équipe",
      price: billingType === "annual" ? "8" : "10",
      totalPrice: "80",
      popular: true,
      features: [
        "Tout du plan Basique",
        "Vue calendrier et Gantt",
        "Vidéo forfait standard"
      ]
    },
    {
      name: "Pro",
      description: "Rationalisez vos processus de travail complexes de manière optimale",
      price: billingType === "annual" ? "10" : "12",
      totalPrice: "100",
      features: [
        "Tout du plan Standard",
        "Tableaux privés",
        "Vidéo forfait pro"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 bg-gradient-to-b from-[#D3E4FD] to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Boostez votre travail d'équipe.<br />
              Commencez gratuitement.
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Tableaux et processus de travail illimités / Aucune carte de crédit nécessaire
            </p>
            <p className="text-lg font-medium mb-4">
              Choisissez un produit pour commencer :
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant={billingType === "monthly" ? "default" : "outline"}
                onClick={() => setBillingType("monthly")}
              >
                Mensuel
              </Button>
              <Button
                variant={billingType === "annual" ? "default" : "outline"}
                onClick={() => setBillingType("annual")}
              >
                Annuel
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                      Le plus utilisé
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}€</span>
                    <span className="text-gray-600"> utilisateur / mois</span>
                    {billingType === "annual" && (
                      <div className="text-sm text-gray-600 mt-1">
                        Total : {plan.totalPrice}€ / an (facturé chaque année)
                      </div>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Essai gratuit</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
