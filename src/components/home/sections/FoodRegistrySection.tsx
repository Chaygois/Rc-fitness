import { Link } from 'react-router-dom';
import salada from '../../assets/recipes.png';

export const FoodRegistrySection = () => {
  return (
    <div className="bg-white pt-32 pb-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-28">
          Crie um Livro de Receitas Digital Personalizado e Alcance seus Objetivos!
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-0">
          {/* Texto */}
          <div className="md:w-1/2 pr-0">
            <p className="text-2xl text-center text-mfp-gray mb-10 md:mb-0 ms-9">
              Controle sua alimentação de perto! Detalhes de calorias e nutrientes, comparação de porções e insights sobre como cada receita contribui para a sua saúde e bem-estar.
            </p>
          </div>

          {/* Imagem */}
          <div className="md:w-1/2 pl-0 flex justify-center">
            <img
              src={salada}
              alt="prato"
              className="w-full max-w-md rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodRegistrySection;