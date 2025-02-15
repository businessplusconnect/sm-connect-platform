
import { Box, FileText, Wallet, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Box,
    title: "Gestion des stocks",
    description: "Suivi en temps réel des entrées/sorties"
  },
  {
    icon: FileText,
    title: "Gestion des ventes & facturation",
    description: "Créez des devis, factures et bons de commande en un clic"
  },
  {
    icon: Wallet,
    title: "Trésorerie & règlements",
    description: "Suivi des paiements et relances clients/fournisseurs"
  },
  {
    icon: BarChart,
    title: "Statistiques & tableaux de bord",
    description: "Analysez votre activité avec des rapports détaillés"
  }
];

const KeyFeatures = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Contenu à gauche */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Fonctionnalités Clés 🔥</h2>
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <feature.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              onClick={() => navigate("/features")}
              variant="outline"
              className="mt-8"
            >
              VOIR LES FONCTIONNALITÉS
            </Button>
          </div>

          {/* Image à droite */}
          <div className="lg:w-1/2">
            <img 
              src="/lovable-uploads/47970025-71a1-4a65-a9e0-8c4cd6ed0322.png"
              alt="Fonctionnalités de SM-CONNECT"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
