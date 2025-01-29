import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-12 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">
        Simplifiez votre gestion d'entreprise avec SM-CONNECT
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Une suite complète d'applications pour gérer efficacement votre entreprise : CRM, eCommerce, Comptabilité, et plus encore.
      </p>
      <div className="flex justify-center gap-4">
        <Button onClick={() => navigate("/pricing")} variant="default" size="lg">
          Réserver une démo
        </Button>
        <Button variant="outline" size="lg">
          En savoir plus
        </Button>
      </div>
    </section>
  );
};

export default Hero;