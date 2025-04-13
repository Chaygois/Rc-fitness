import { Link } from 'react-router-dom';

export const CTASection = () => {
  return (
    <div className="bg-mfp-blue py-16">
      <div className="container mx-auto px-4 text-center">
        <Link
          to="/registro"
          className="mfp-button-accent text-lg font-bold py-4 px-8 uppercase tracking-wider"
        >
          Inicie agora mesmo sua jornada
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
