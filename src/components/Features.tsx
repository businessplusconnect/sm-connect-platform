
import {
  Users,
  FolderKanban,
  Calendar,
  FileText,
  MessageSquare,
  BarChart3,
  Monitor,
  ShoppingCart,
  Package,
  CreditCard,
} from "lucide-react";

const features = [
  { icon: Users, title: "HR Management" },
  { icon: FolderKanban, title: "Project Management" },
  { icon: Calendar, title: "Employee Scheduling" },
  { icon: FileText, title: "Sales Documents" },
  { icon: MessageSquare, title: "Customer Communication" },
  { icon: BarChart3, title: "BI & Dashboard" },
  { icon: Monitor, title: "Customer Display" },
  { icon: ShoppingCart, title: "POS System" },
  { icon: Package, title: "Stocktake App" },
  { icon: CreditCard, title: "Erply Payments" },
];

const Features = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos services d'applications</h2>
          <p className="text-gray-600">Des solutions intégrées pour tous vos besoins professionnels</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center group"
            >
              <div className="p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium text-gray-900">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
