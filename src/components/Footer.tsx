
import { ArrowRight, Mail, MessageSquare, Linkedin, Facebook, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
  };

  const handleChatOpen = () => {
    // TODO: Implement chat opening logic
    console.log("Opening chat...");
  };

  return (
    <footer className="bg-[#1A1F2C] text-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Section Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Abonnez-vous à notre newsletter
            </h3>
            <p className="text-gray-300 mb-6">
              SM-Connect est une suite d'applications open source couvrant tous les besoins de votre entreprise: 
              CRM, eCommerce, Comptabilité, Inventaire, Point de Vente, Gestion de Projet, etc. 
              Le positionnement unique de sm-connect est d'être à la fois très facile à utiliser et totalement intégré.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Entrez votre email" 
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400" 
                required 
              />
              <Button type="submit" variant="default">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Section Liens utiles */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Liens utiles</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-300 hover:text-white transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Tarification
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Section Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a 
                  href="mailto:support@sm-connect.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  support@sm-connect.com
                </a>
              </div>
              <div>
                <Button 
                  variant="secondary"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-100"
                  onClick={handleChatOpen}
                >
                  <MessageSquare className="h-5 w-5" />
                  Ouvrir le chat
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © 2024 SM-Connect. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
