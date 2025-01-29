import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
        C'est quoi SM-CONNECT?
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Plateforme unifiée pour les stocks et les activités de vente au détail
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button className="text-base">Commencer maintenant</Button>
        <Button 
          variant="link" 
          className="text-base"
          onClick={() => window.location.href = "https://calendly.com/votre-lien"}
        >
          Réserver une démo
        </Button>
      </div>
    </div>
  );
};

export default Hero;