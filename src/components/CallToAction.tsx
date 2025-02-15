
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Prêt à simplifier la gestion de votre entreprise ?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Essayez gratuitement dès aujourd'hui !
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" onClick={() => navigate("/contact")}>
            ESSAYER GRATUITEMENT
          </Button>
          <Button variant="outline" size="lg" onClick={() => navigate("/contact")}>
            CONTACTEZ-NOUS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
