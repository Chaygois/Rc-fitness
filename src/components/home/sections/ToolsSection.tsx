import image from '../../assets/front2.png';
export const ToolsSection = () => {
  return (
    <div className="bg-mfp-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          As ferramentas para suas metas
        </h2>

        <p className="text-lg text-center text-mfp-gray mb-12 max-w-2xl mx-auto">
          Está tentando perder peso, tonificar o corpo, organizar sua dieta? Nós fornecemos os recursos certos para chegar lá.
        </p>
        <div className="flex flex-col md:flex-row items-center">
        <img
          src={image}
          alt="prato"
          className="w-full object-cover mb-12"
        />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Crie, edite e calcule suas calorias. </h3>
            <p className="text-mfp-gray">
              Manter um diário alimentar ajuda você a compreender seus hábitos, aumentando a probabilidade de atingir suas metas.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Registros simplificados.</h3>
            <p className="text-mfp-gray">
            Salve suas receitas favoritas e avalie as que você mais gosta para construir seu próprio livro de receitas personalizado.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Compartilhe suas receitas e avalie as de outros usuários.</h3>
            <p className="text-mfp-gray">
            Descubra novas ideias na comunidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
