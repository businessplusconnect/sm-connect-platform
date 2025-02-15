
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 py-16">
        {/* Texte à gauche */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-4xl font-bold mb-6">
            Gérez votre commerce en toute simplicité avec SM-Connect
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            La solution cloud tout-en-un pour la gestion des ventes, achats, stocks, trésorerie et reporting
          </p>
          <div className="flex gap-4">
            <Button onClick={() => navigate("/contact")} size="lg">
              ESSAYER GRATUITEMENT
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate("/contact")}>
              VOIR UNE DÉMO
            </Button>
          </div>
        </div>
        
        {/* Image à droite */}
        <div className="lg:w-1/2">
          <img 
            src="/lovable-uploads/bbb786d1-7c8f-4faf-bba2-fe099da2a725.png"
            alt="Interface SM-CONNECT avec tableau de bord"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
