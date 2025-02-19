
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { User, Mail, Calendar } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    nom: "",
    email: "",
    dateInscription: ""
  });

  // Simuler la récupération des données utilisateur
  useEffect(() => {
    // TODO: Remplacer par la vraie récupération des données
    setUserData({
      nom: "John Doe",
      email: "john@exemple.com",
      dateInscription: new Date().toLocaleDateString()
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-start justify-center bg-gradient-to-b from-[#D3E4FD] to-white py-20 px-4">
        <Card className="w-full max-w-2xl mt-16">
          <CardHeader>
            <h1 className="text-2xl font-bold text-center">Mon Profil</h1>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <User className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Nom complet</p>
                  <p className="font-medium">{userData.nom}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <Mail className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{userData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <Calendar className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Date d'inscription</p>
                  <p className="font-medium">{userData.dateInscription}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Button 
                variant="outline"
                onClick={() => navigate("/")}
              >
                Retour à l'accueil
              </Button>
              <Button 
                onClick={() => navigate("/edit-profile")}
              >
                Modifier le profil
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
