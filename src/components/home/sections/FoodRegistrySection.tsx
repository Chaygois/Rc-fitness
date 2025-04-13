import { Link } from 'react-router-dom';
import salada from '../../assets/salada6.jpg';

export const FoodRegistrySection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Crie seu próprio livro de receitas digital.
        </h2>

        <div className="flex flex-col md:flex-row items-center">
  <div className="md:w-1/2 mb-10 md:mb-0 md:-mr-4"> {/* Adicionando margem direita negativa */}
  <p className="text-lg text-mfp-gray mb-8 max-w-lg ml-12 md:ml-40">
  Veja um detalhamento de calorias e nutrientes, compare o tamanho das porções e descubra como os alimentos que você ingere apoiam seus objetivos.
</p>
  </div>
  <div className="md:w-5/12 flex justify-center">
    <img
      src={salada}
      alt="prato"
      className="w-full max-w-md mx-auto rounded-xl shadow-2xl object-cover"
    />
  </div>
</div>
</div>
</div>
  );
};

export default FoodRegistrySection;