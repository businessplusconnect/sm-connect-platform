
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 py-8 lg:py-16">
        {/* Texte */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Gérez votre commerce en toute simplicité avec SM-Connect
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8">
            La solution cloud tout-en-un pour la gestion des ventes, achats, stocks, trésorerie et reporting
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={() => navigate("/contact")} 
              size="lg"
              className="w-full sm:w-auto"
            >
              ESSAYER GRATUITEMENT
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto"
            >
              VOIR UNE DÉMO
            </Button>
          </div>
        </div>
        
        {/* Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img 
            src="/lovable-uploads/00424dc8-77ba-4038-a86d-15443eda4c99.png"
            alt="Interface SM-CONNECT avec tableau de bord"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
