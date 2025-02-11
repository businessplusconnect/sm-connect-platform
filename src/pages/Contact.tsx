
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
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

          {/* Formulaire de contact */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
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
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
