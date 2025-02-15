
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const featuresData = {
  setup: {
    title: "🔧 Réglages et Paramétrage",
    features: [
      "Gestion globale des agences, dépôts et modes de paiement",
      "Configuration des commerciaux et des promotions",
      "Gestion des listes de prix de vente et affectation des catalogues",
      "Administration des clients et fournisseurs",
      "Gestion des articles : familles, marques et produits"
    ]
  },
  purchases: {
    title: "📦 Gestion des Achats",
    documents: [
      "Bons de commande et de réception fournisseur",
      "Bons de retour, factures et avoirs fournisseurs",
      "Gestion des règlements fournisseurs"
    ],
    stats: [
      "Suivi des règlements et du chiffre d'affaires achat",
      "Échéancier des paiements",
      "Historique des achats et état des factures non soldées",
      "Balance âgée des achats",
      "Tableau de bord analytique"
    ]
  },
  sales: {
    title: "🛒 Gestion des Ventes",
    documents: [
      "Création et suivi des devis et bons de commande",
      "Gestion des bons de livraison et des retours clients",
      "Facturation et gestion des avoirs",
      "Suivi des règlements clients"
    ],
    stats: [
      "État des soldes et comptes clients",
      "Suivi des règlements et chiffres d'affaires par client",
      "Historique des ventes détaillé",
      "Analyse des ventes et tableaux de bord"
    ]
  },
  inventory: {
    title: "📊 Gestion des Stocks",
    documents: [
      "Inventaire des stocks",
      "Gestion des mouvements de stock"
    ],
    stats: [
      "Suivi des mouvements historiques",
      "État du stock par date et évaluation administrative (PMP)",
      "Tableaux de bord pour une vision globale"
    ]
  },
  treasury: {
    title: "💰 Trésorerie et Configuration",
    features: [
      "Gestion des comptes et des caisses",
      "Activation et paramétrage des articles",
      "Outils avancés : import/export de données, recalcul des stocks",
      "Générateur d'état et reporting personnalisable"
    ]
  },
  benefits: {
    title: "🎯 Pourquoi choisir SM-Connect ?",
    items: [
      "Accessibilité cloud : Utilisation fluide et sécurisée sur tous vos appareils",
      "Solution complète : Un outil tout-en-un pour piloter votre activité",
      "Analyse avancée : Tableaux de bord et statistiques en temps réel",
      "Facilité d'utilisation : Interface intuitive et configuration flexible"
    ]
  }
};

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              SM-Connect – La solution complète pour la gestion commerciale
            </h1>
            <p className="text-xl text-gray-600">
              SM-Connect est une application 100 % cloud conçue pour simplifier la gestion des entreprises 
              en intégrant plusieurs modules essentiels : ventes, achats, stock, trésorerie et reporting.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-16">
            {/* Réglages */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">{featuresData.setup.title}</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="space-y-3">
                  {featuresData.setup.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">🔹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Achats */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">{featuresData.purchases.title}</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-6">
                  <h3 className="text-xl mb-4">📑 Documents :</h3>
                  <ul className="space-y-3">
                    {featuresData.purchases.documents.map((doc, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500">✅</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl mb-4">📊 Statistiques et Reporting :</h3>
                  <ul className="space-y-3">
                    {featuresData.purchases.stats.map((stat, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span>📈</span>
                        <span>{stat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Ventes */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">{featuresData.sales.title}</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-6">
                  <h3 className="text-xl mb-4">📑 Documents :</h3>
                  <ul className="space-y-3">
                    {featuresData.sales.documents.map((doc, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500">✅</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl mb-4">📊 Statistiques et Reporting :</h3>
                  <ul className="space-y-3">
                    {featuresData.sales.stats.map((stat, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span>📈</span>
                        <span>{stat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Stocks */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">{featuresData.inventory.title}</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-6">
                  <h3 className="text-xl mb-4">📑 Documents :</h3>
                  <ul className="space-y-3">
                    {featuresData.inventory.documents.map((doc, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500">✅</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl mb-4">📊 Statistiques et Reporting :</h3>
                  <ul className="space-y-3">
                    {featuresData.inventory.stats.map((stat, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span>📈</span>
                        <span>{stat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Trésorerie */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">{featuresData.treasury.title}</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="space-y-3">
                  {featuresData.treasury.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      {index === 0 && <span>💼</span>}
                      {index === 1 && <span>⚙️</span>}
                      {index === 2 && <span>🔄</span>}
                      {index === 3 && <span>📑</span>}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Avantages */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">{featuresData.benefits.title}</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="space-y-3">
                  {featuresData.benefits.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500">✅</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* CTA Final */}
            <div className="text-center bg-white p-8 rounded-lg shadow-sm mt-12">
              <p className="text-xl font-semibold mb-6">
                Avec SM-Connect, simplifiez la gestion de votre entreprise et gagnez en productivité dès aujourd'hui ! 🚀
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
