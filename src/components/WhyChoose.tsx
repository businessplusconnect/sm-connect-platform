
import { Cloud, Shield, Clock, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: Cloud,
    title: "100 % Cloud",
    description: "Accédez à vos données partout et à tout moment"
  },
  {
    icon: Clock,
    title: "Simple et rapide",
    description: "Interface intuitive, prise en main immédiate"
  },
  {
    icon: Shield,
    title: "Sécurisé & évolutif",
    description: "Protection des données, mises à jour automatiques"
  },
  {
    icon: Zap,
    title: "Gagnez du temps",
    description: "Automatisez vos tâches quotidiennes"
  }
];

const WhyChoose = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image à gauche */}
          <div className="lg:w-1/2">
            <img 
              src="/lovable-uploads/47970025-71a1-4a65-a9e0-8c4cd6ed0322.png"
              alt="Interface SM-CONNECT simple et intuitive"
              className="w-full rounded-lg"
            />
          </div>

          {/* Contenu à droite */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Pourquoi choisir SM-Connect ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <Card key={benefit.title}>
                  <CardHeader>
                    <benefit.icon className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
