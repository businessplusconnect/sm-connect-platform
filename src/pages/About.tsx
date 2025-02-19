
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 bg-gradient-to-b from-[#D3E4FD] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">À propos de SM-Connect</h1>
            
            <div className="space-y-8">
              <section className="bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
                <p className="text-gray-600 mb-4">
                  SM-Connect est née de la volonté de simplifier la gestion quotidienne des entreprises. 
                  Notre mission est de fournir une solution complète, intuitive et accessible qui permet 
                  aux entrepreneurs de se concentrer sur leur cœur de métier.
                </p>
              </section>

              <section className="bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Notre Histoire</h2>
                <p className="text-gray-600 mb-4">
                  Fondée par une équipe passionnée d'experts en gestion d'entreprise et en technologie, 
                  SM-Connect s'est développée en écoutant les besoins réels des entrepreneurs. 
                  Notre approche centrée sur l'utilisateur nous permet d'offrir une solution qui évolue 
                  constamment pour répondre aux défis actuels des entreprises.
                </p>
              </section>

              <section className="bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Nos Valeurs</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <div>
                      <strong className="block text-lg mb-1">Innovation</strong>
                      <p className="text-gray-600">Nous innovons continuellement pour offrir les meilleures solutions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <div>
                      <strong className="block text-lg mb-1">Simplicité</strong>
                      <p className="text-gray-600">Nous croyons que la technologie doit simplifier la vie, pas la compliquer.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <div>
                      <strong className="block text-lg mb-1">Support client</strong>
                      <p className="text-gray-600">Un accompagnement personnalisé pour votre réussite.</p>
                    </div>
                  </li>
                </ul>
              </section>

              <div className="text-center">
                <Button size="lg" onClick={() => navigate("/contact")}>
                  Contactez-nous
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

export default About;
