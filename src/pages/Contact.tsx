
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, Video, Users, Handshake, MessageSquare, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const contactCards = [
    {
      title: "Appelez ou planifiez une vidéoconférence",
      description: "Contactez-nous directement",
      icon: <Phone className="h-6 w-6" />,
      secondaryIcon: <Video className="h-6 w-6" />,
      action: "Planifier un appel"
    },
    {
      title: "Rencontrer un expert",
      description: "Pour évaluer votre projet et obtenir une démonstration personnalisée",
      icon: <Users className="h-6 w-6" />,
      action: "Prendre rendez-vous"
    },
    {
      title: "Devenez partenaire",
      description: "Planifiez un rendez-vous avec un Partner Manager",
      icon: <Handshake className="h-6 w-6" />,
      action: "Devenir partenaire"
    },
    {
      title: "Demandez des développements personnalisés",
      description: "Vous avez besoin de contacter des développeurs ?",
      icon: <MessageSquare className="h-6 w-6" />,
      action: "Contacter l'équipe"
    },
    {
      title: "Demandes de support",
      description: "Vous avez besoin d'aide ? Vous avez une question ?",
      icon: <HelpCircle className="h-6 w-6" />,
      action: "Obtenir de l'aide"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 bg-gradient-to-b from-[#D3E4FD] to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Comment pouvons-nous vous aider ?</h1>
            <p className="text-xl text-gray-600">Choisissez une option ci-dessous pour nous contacter</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactCards.map((card, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {card.icon}
                    {card.secondaryIcon && card.secondaryIcon}
                  </div>
                  <CardTitle className="text-xl mb-2">{card.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {card.description}
                  </CardDescription>
                  <Button className="w-full">{card.action}</Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
