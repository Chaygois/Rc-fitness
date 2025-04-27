import front from '../../assets/front.jpg'; // Imagem do prato
export const ConnectedAppsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Organize suas receitas e construa sua experiência culinária personalizada.
        </h2>

        <p className="text-lg text-center text-mfp-gray mb-12 max-w-3xl mx-auto">
        Salve suas receitas favoritas, avalie as que mais gosta e construa sua própria coleção personalizada para um planejamento alimentar prático e delicioso. O foco é ter suas receitas ao seu alcance para você se sentir melhor e cozinhar com mais prazer.        </p>

        <div className="flex justify-center">
          <div className="w-full object-cover mb-12">
            <img
              src={front}
              alt="front"
              className="w-full h-auto rounded-lg shadow-lg"  >
              </img>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white opacity-20 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectedAppsSection;
