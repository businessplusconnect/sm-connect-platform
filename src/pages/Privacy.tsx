
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 bg-gradient-to-b from-[#D3E4FD] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Politique de Confidentialité</h1>
            
            <div className="space-y-8">
              <section className="bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Protection de vos données</h2>
                <p className="text-gray-600 mb-4">
                  La protection de vos données personnelles est une priorité pour SM-Connect. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons 
                  et protégeons vos informations lorsque vous utilisez notre service.
                </p>
              </section>

              <section className="bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Données collectées</h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p>Informations de compte (nom, email, entreprise)</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p>Données d'utilisation du service</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p>Informations techniques (adresse IP, navigateur)</p>
                  </li>
                </ul>
              </section>

              <section className="bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Utilisation des données</h2>
                <p className="text-gray-600 mb-4">
                  Nous utilisons vos données uniquement pour :
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p>Fournir et améliorer nos services</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p>Assurer la sécurité de votre compte</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p>Communiquer avec vous concernant votre compte</p>
                  </li>
                </ul>
              </section>

              <section className="bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Sécurité des données</h2>
                <p className="text-gray-600">
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles 
                  appropriées pour protéger vos données contre tout accès, modification, 
                  divulgation ou destruction non autorisés.
                </p>
              </section>

              <section className="bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-gray-600">
                  Pour toute question concernant notre politique de confidentialité, 
                  vous pouvez nous contacter à : privacy@sm-connect.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
