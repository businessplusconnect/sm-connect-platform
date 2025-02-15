import { ArrowRight, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
  };
  return <footer className="bg-gray-50 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Section Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Trouvez-nous n'importe où</h3>
            <div className="space-y-4">
              <p className="text-gray-400 mx-0 px-[12px] my-0">SM-Connect est une application entièrement hébergée dans le cloud, garantissant accessibilité, performance et sécurité optimales.</p>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                <a href="mailto:support@sm-connect.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                  support@sm-connect.com
                </a>
              </div>
            </div>
          </div>

          {/* Section Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Abonnez-vous à notre newsletter
            </h3>
            <p className="text-gray-600 mb-6">SM-Connect est une suite d'applications open source couvrant tous les besoins de votre entreprise: CRM, eCommerce, Comptabilité, Inventaire, Point de Vente, Gestion de Projet, etc. Le positionnement unique de sm-connect est d'être à la fois très facile à utiliser et totalement intégré.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input type="email" placeholder="Entrez votre email" className="flex-1" />
              <Button type="submit" variant="ghost" size="icon">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © 2025 sm-connect. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;