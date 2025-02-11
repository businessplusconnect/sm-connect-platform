
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, Video, Users, Handshake, MessageSquare, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    companySize: "",
    question: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Ici vous pourrez ajouter la logique d'envoi du formulaire
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactCards = [
    {
      title: "Appelez ou planifiez une vidéoconférence",
      description: "Contactez-nous directement",
      icon: <Phone className="h-6 w-6" />,
      secondaryIcon: <Video className="h-6 w-6" />,
    },
    {
      title: "Rencontrer un expert",
      description: "Pour évaluer votre projet et obtenir une démonstration personnalisée",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Devenez partenaire",
      description: "Planifiez un rendez-vous avec un Partner Manager",
      icon: <Handshake className="h-6 w-6" />,
    },
    {
      title: "Demandez des développements personnalisés",
      description: "Vous avez besoin de contacter des développeurs ?",
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      title: "Demandes de support",
      description: "Vous avez besoin d'aide ? Vous avez une question ?",
      icon: <HelpCircle className="h-6 w-6" />,
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 bg-gradient-to-b from-[#D3E4FD] to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Nous contacter</h1>
            <p className="text-xl text-gray-600">Choisissez la meilleure façon de nous contacter</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            {/* Formulaire de contact (gauche) */}
            <div className="lg:w-7/12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Vous cherchez quelque chose ?</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Numéro de téléphone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Société</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companySize">Votre taille d'entreprise</Label>
                    <Select 
                      onValueChange={(value) => 
                        setFormData({...formData, companySize: value})
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez la taille" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employés</SelectItem>
                        <SelectItem value="11-50">11-50 employés</SelectItem>
                        <SelectItem value="51-200">51-200 employés</SelectItem>
                        <SelectItem value="201-500">201-500 employés</SelectItem>
                        <SelectItem value="500+">500+ employés</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="question">Question *</Label>
                    <Textarea
                      id="question"
                      name="question"
                      required
                      value={formData.question}
                      onChange={handleChange}
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Envoyer
                  </Button>

                  <p className="text-sm text-gray-500 mt-4">
                    Nous traiterons vos données à caractère personnel de la manière décrite dans notre Politique vie privée, pour répondre à vos questions et vous fournir plus d'informations sur nos produits et nos services.
                  </p>
                </form>
              </div>
            </div>

            {/* Section des cartes de contact (droite) */}
            <div className="lg:w-5/12">
              <h2 className="text-2xl font-bold mb-6">Comment pouvons-nous vous aider ?</h2>
              <div className="space-y-4">
                {contactCards.map((card, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        {card.icon}
                        {card.secondaryIcon && card.secondaryIcon}
                      </div>
                      <CardTitle className="text-lg mb-1">{card.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {card.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
