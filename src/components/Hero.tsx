
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 py-16">
        {/* Texte à gauche */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-4xl font-bold mb-6">
            Simplifiez votre gestion d'entreprise avec SM-CONNECT
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Une suite complète d'applications pour gérer efficacement votre entreprise : CRM, eCommerce, Comptabilité, et plus encore.
          </p>
          <div className="flex gap-4">
            <Button onClick={() => navigate("/contact")} variant="default" size="lg">
              Réserver une démo
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate("/contact")}>
              En savoir plus
            </Button>
          </div>
        </div>
        
        {/* Image à droite */}
        <div className="lg:w-1/2">
          <img 
            src="/lovable-uploads/47970025-71a1-4a65-a9e0-8c4cd6ed0322.png" 
            alt="Interface SM-CONNECT"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
