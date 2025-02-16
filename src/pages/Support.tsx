
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock, MessageSquare, FileQuestion, Activity, Search } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Support = () => {
  const [ticketId, setTicketId] = useState("");

  const handleEmailSupport = () => {
    window.location.href = "mailto:support@sm-connect.com";
  };

  const handleTicketSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implémenter la recherche de ticket
    console.log("Recherche du ticket:", ticketId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 bg-gradient-to-b from-[#D3E4FD] to-white">
        <div className="container mx-auto px-4">
          {/* Section d'accueil */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Support SM-Connect</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bienvenue sur le support de SM-Connect ! Besoin d'aide ? Vous pouvez discuter avec notre assistance, 
              consulter notre documentation ou créer un ticket.
            </p>
          </div>

          {/* Cartes d'options de support */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Chat en Direct
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Discutez en temps réel avec notre équipe de support pour obtenir une aide immédiate.
                </p>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="w-full">Démarrer le chat</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Chat Support</SheetTitle>
                    </SheetHeader>
                    <div className="mt-4">
                      {/* Placeholder pour le chat */}
                      <p className="text-gray-600">Le chat sera bientôt disponible...</p>
                    </div>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileQuestion className="h-5 w-5 text-primary" />
                  Centre d'Aide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Consultez notre documentation détaillée et nos guides d'utilisation.
                </p>
                <Button variant="outline" className="w-full">
                  Accéder au centre d'aide
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Statut du Système
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Vérifiez l'état de nos services en temps réel.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-600">Tous les systèmes opérationnels</span>
                </div>
                <Button variant="outline" className="w-full">
                  Voir le statut détaillé
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Section Suivi de Ticket */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                Suivi de Ticket
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTicketSearch} className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Entrez votre numéro de ticket"
                  value={ticketId}
                  onChange={(e) => setTicketId(e.target.value)}
                  className="flex-grow"
                />
                <Button type="submit">Rechercher</Button>
              </form>
            </CardContent>
          </Card>

          {/* Section Informations de Contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Email Support</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Envoyez-nous un email pour une assistance détaillée
                </p>
                <Button onClick={handleEmailSupport} className="w-full">
                  Contacter par email
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Support Téléphonique</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  +33 (0)1 23 45 67 89
                </p>
                <Button variant="outline" className="w-full">
                  Appeler maintenant
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Horaires</h3>
                </div>
                <p className="text-gray-600">
                  Lundi - Vendredi<br />
                  9h00 - 18h00<br />
                  Heure de Paris (GMT+1)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
