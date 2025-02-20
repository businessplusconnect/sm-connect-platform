
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  // Simulation d'un état de connexion (à remplacer plus tard par une vraie authentification)
  const [isLoggedIn] = useState(false);

  const navItems = [
    {
      label: "Accueil",
      href: "/"
    },
    {
      label: "Services",
      href: "/services"
    },
    {
      label: "Tarification",
      href: "/pricing"
    },
    {
      label: "Support",
      href: "/support"
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              <img 
                src="/lovable-uploads/logo-smc-colleur-77-34.png"
                alt="Interface SM-CONNECT simple et intuitive"
                className="w-full rounded-lg"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link 
                key={item.label} 
                to={item.href} 
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">

            {!isLoggedIn && (
              <>
                <Button variant="link" onClick={() => navigate("/login")}>Se connecter</Button>
                <Button onClick={() => navigate("/signup")}>S'inscrire</Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => (
              <Link
                key={item.label}
                to={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2 space-y-2">
              {isLoggedIn ? (
                <Button variant="link" className="w-full" onClick={() => navigate("/profile")}>
                  Mon Profil
                </Button>
              ) : (
                <>
                  <Button variant="link" className="w-full" onClick={() => navigate("/login")}>
                    Se connecter
                  </Button>
                  <Button className="w-full" onClick={() => navigate("/signup")}>
                    S'inscrire
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
