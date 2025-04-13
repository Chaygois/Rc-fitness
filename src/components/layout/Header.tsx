import { Link } from 'react-router-dom';

export const Header = () => {
  return (
<header className="w-full max-w-screen-lg mx-auto"> {/* Adicionei max-w e mx-auto */}
  <div className="flex justify-between items-center py-5 px-8">
    <Link to="/" className="text-3xl font-bold text-mfp-blue">
      RCFITNESS
    </Link>

    <div className="flex gap-4 items-center">
      <Link to="/login" className="text-mfp-blue font-medium">
        Entrar
      </Link>
      <Link to="/registro" className="bg-mfp-blue text-white py-2 px-5 rounded-md hover:bg-mfp-darkBlue transition-colors">
        Registre-se
      </Link>
    </div>
  </div>
      {/* Navegação secundária */}
      </header>
  );
};

export default Header;
