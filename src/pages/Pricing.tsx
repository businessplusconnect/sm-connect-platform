
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, X } from "lucide-react";

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

  const comparativeFeatures = [
    { feature: "Utilisateurs", basic: "1 utilisateur", standard: "Jusqu'à 10 utilisateurs", pro: "Illimité" },
    { feature: "Gestion des ventes", basic: true, standard: true, pro: true },
    { feature: "Gestion des achats", basic: false, standard: true, pro: true },
    { feature: "Gestion des stocks", basic: false, standard: true, pro: true },
    { feature: "Gestion des clients & fournisseurs", basic: true, standard: true, pro: true },
    { feature: "Tableaux de bord & statistiques avancées", basic: false, standard: true, pro: true },
    { feature: "Gestion des paiements et trésorerie", basic: false, standard: true, pro: true },
    { feature: "Exportation des données (CSV, PDF, Excel)", basic: true, standard: true, pro: true },
    { feature: "Support technique", basic: "Email uniquement", standard: "Email & Chat", pro: "Prioritaire (Email, Chat & Téléphone)" },
    { feature: "Personnalisation avancée (branding, documents)", basic: false, standard: false, pro: true },
    { feature: "Sauvegarde & Sécurité", basic: "Quotidienne", standard: "Quotidienne", pro: "Temps réel" },
    { feature: "Accès API & Intégrations", basic: false, standard: false, pro: true },
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

          <div className="grid md:grid-cols-3 gap-8 mb-16">
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

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Comparaison détaillée des plans</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fonctionnalités</TableHead>
                    <TableHead>Basique 🚀</TableHead>
                    <TableHead>Standard ⭐</TableHead>
                    <TableHead>Professionnel 💎</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparativeFeatures.map((row) => (
                    <TableRow key={row.feature}>
                      <TableCell className="font-medium">{row.feature}</TableCell>
                      <TableCell>
                        {typeof row.basic === "boolean" ? (
                          row.basic ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )
                        ) : (
                          row.basic
                        )}
                      </TableCell>
                      <TableCell>
                        {typeof row.standard === "boolean" ? (
                          row.standard ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )
                        ) : (
                          row.standard
                        )}
                      </TableCell>
                      <TableCell>
                        {typeof row.pro === "boolean" ? (
                          row.pro ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )
                        ) : (
                          row.pro
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Quel plan choisir ?</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-2">Basique</h3>
                <p className="text-gray-600">
                  Idéal pour les petites entreprises qui veulent une gestion simple des ventes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Standard</h3>
                <p className="text-gray-600">
                  Parfait pour les PME qui ont besoin d'une gestion complète des achats, stocks et finances.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professionnel</h3>
                <p className="text-gray-600">
                  Destiné aux entreprises ayant des besoins avancés, avec des options de personnalisation et un support premium.
                </p>
              </div>
            </div>

            <div className="text-center bg-blue-50 p-6 rounded-lg">
              <p className="text-lg">
                💡 Besoin d'une solution sur mesure ? 
                <Button variant="link" onClick={() => window.location.href = '/contact'} className="text-primary">
                  Contactez-nous
                </Button> 
                pour une offre adaptée à votre activité.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
