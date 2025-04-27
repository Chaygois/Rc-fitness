// HeroSection.tsx
import { Link } from 'react-router-dom';
import prato from "../../assets/prato.jpg";

export const HeroSection = () => {
  return (
    <div className="relative bg-mfp-background py-16 md:py-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center max-w-6xl">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-black text-mfp-text mb-8 leading-tight">
            Uma boa saúde começa com o que você come.
          </h1>
          <p className="text-lg md:text-xl text-mfp-gray mb-10">
            Quer comer com mais atenção? Organize suas receitas, descubra novas ideias e planeje suas refeições de forma fácil e eficiente.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/registro"
              className="w-full md:w-auto flex justify-center py-3 px-8 mfp-button-primary text-lg rounded-md relative z-50"
            >
              Comece agora gratuitamente
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0 flex justify-center">
          <img
            src={prato}
            alt="Uma pessoa sorrindo segura um prato de salada"
            className="w-full max-w-md rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;