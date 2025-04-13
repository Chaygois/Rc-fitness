import { Link } from 'react-router-dom';
import prato from "../../assets/prato.jpg"; // Imagem do prato

export const HeroSection = () => {
  return (
    <div className="relative bg-mfp-background py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center max-w-6xl"> {/* Adicionada largura máxima */}
        <div className="md:w-1/2 mb-12 md:mb-0"> {/* Aumentada a margem inferior */}
          <h1 className="text-5xl md:text-6xl font-black text-mfp-text mb-8 leading-tight"> {/* Aumentada a margem inferior */}
            Uma boa saúde começa com o que você come.
          </h1>
          <p className="text-lg md:text-xl text-mfp-gray mb-10"> {/* Aumentada a margem inferior */}
            Quer comer com mais atenção? Organize suas receitas, descubra novas ideias e planeje suas refeições de forma fácil e eficiente.
          </p>
          <div className="flex justify-center md:justify-start"> {/* Alinhamento à esquerda em telas maiores */}
            <Link
              to="/registro"
              className="w-full md:w-auto flex justify-center py-3 px-8 mfp-button-primary text-lg rounded-md" 
            >
              Comece gratuitamente
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0"> {/* Adicionada margem superior em telas pequenas */}
          <img
            src={prato}
            alt="prato"
            className="w-full max-w-md mx-auto rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;