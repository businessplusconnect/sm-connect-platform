
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Ici la logique de réinitialisation du mot de passe
    console.log("Password reset requested for:", email);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-[#D3E4FD] to-white py-20">
        <div className="w-full max-w-md mx-auto p-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Mot de passe oublié ?</h1>
              <p className="text-gray-600">
                Entrez votre email pour réinitialiser votre mot de passe
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="nom@exemple.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Réinitialiser le mot de passe
                </Button>

                <div className="text-center mt-4">
                  <Link to="/login" className="text-primary hover:underline">
                    Retour à la connexion
                  </Link>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <p className="text-green-600 mb-4">
                  Si un compte existe avec cet email, vous recevrez un lien de réinitialisation.
                </p>
                <Link to="/login" className="text-primary hover:underline">
                  Retour à la connexion
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
