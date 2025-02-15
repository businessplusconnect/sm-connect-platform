
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Grâce à SM-Connect, nous avons divisé notre temps de gestion par 2. Superbe solution !",
    author: "Sophie M.",
    role: "Gérante d'un magasin",
    stars: 5
  },
  {
    quote: "Interface intuitive et support réactif. Exactement ce dont nous avions besoin !",
    author: "Pierre D.",
    role: "Directeur commercial",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Témoignages Clients</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-lg mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-gray-600">
                <span className="font-semibold">{testimonial.author}</span>
                <span className="mx-2">•</span>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="text-primary hover:underline">
            VOIR PLUS D'AVIS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
