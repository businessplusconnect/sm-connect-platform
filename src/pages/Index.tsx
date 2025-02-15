
import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import WhyChoose from "@/components/WhyChoose";
import KeyFeatures from "@/components/KeyFeatures";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D3E4FD] to-white">
      <Header />
      <main>
        <HomeHero />
        <WhyChoose />
        <KeyFeatures />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
