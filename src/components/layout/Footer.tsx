import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white py-10 mt-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap gap-y-3 justify-center">
          <li className="mx-3">
            <Link to="/" className="text-mfp-gray hover:text-mfp-blue">
              Contador de calorias
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/blog" className="text-mfp-gray hover:text-mfp-blue">
              Blog
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/termos" className="text-mfp-gray hover:text-mfp-blue">
              Termos
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/privacidade" className="text-mfp-gray hover:text-mfp-blue">
              Privacidade
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/contato" className="text-mfp-gray hover:text-mfp-blue">
              Contato
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/api" className="text-mfp-gray hover:text-mfp-blue">
              API
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/vagas" className="text-mfp-gray hover:text-mfp-blue">
              Vagas
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/feedback" className="text-mfp-gray hover:text-mfp-blue">
              Feedback
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/comunidade" className="text-mfp-gray hover:text-mfp-blue">
              Regras da comunidade
            </Link>
          </li>
          <li className="mx-3">
            <button className="text-mfp-gray hover:text-mfp-blue">
              Preferências de cookies
            </button>
          </li>
          <li className="mx-3">
            <Link to="/privacidade-california" className="text-mfp-gray hover:text-mfp-blue">
              Opções de privacidade da Califórnia
            </Link>
          </li>
        </ul>

        <div className="mt-8 text-center">
          <select
            className="border border-gray-300 rounded py-2 px-4 text-mfp-gray bg-white"
            aria-label="language-selector"
          >
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="pt" selected>Português (Brasil)</option>
            <option value="it">Italiano</option>
            <option value="nb">Norsk</option>
            <option value="nl">Nederlands</option>
            <option value="ru">Pусский</option>
            <option value="sv">Svensk</option>
            <option value="da">Dansk</option>
            <option value="ko">한국어</option>
            <option value="ja">日本語</option>
            <option value="zh-CN">中文(简体)</option>
            <option value="zh-TW">中文(台灣)</option>
          </select>
        </div>

        <div className="mt-4 text-center">
          <p className="text-mfp-gray">© 2025 Rc-Fitness, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
