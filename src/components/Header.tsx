import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Applications", href: "#" },
    { label: "Industries", href: "#" },
    { label: "Communauté", href: "#" },
    { label: "Tarification", href: "/pricing" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">SM-CONNECT</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href.startsWith("#") ? item.href : item.href}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="link">Se connecter</Button>
            <Button>Essai gratuit</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href.startsWith("#") ? item.href : item.href}
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2 space-y-2">
              <Button variant="link" className="w-full">
                Se connecter
              </Button>
              <Button className="w-full">Essai gratuit</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;