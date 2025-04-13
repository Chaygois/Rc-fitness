import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de login
    console.log('Login com:', { email, password });
  };

  return (
    <div className="py-12 bg-mfp-background">
      <div className="mx-auto max-w-md p-8 bg-white rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-center mb-8">Login de usuário</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo de email */}
          <div className="space-y-2">
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Endereço de e-mail"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-mfp-blue focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Campo de senha */}
          <div className="space-y-2">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-mfp-blue focus:border-transparent pr-10"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                aria-label="Mostrar senha"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-400" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
            <p className="text-right">
              <Link to="/esqueci-senha" className="text-mfp-blue text-sm">
                Esqueceu-se da senha?
              </Link>
            </p>
          </div>

          {/* Botão de login e opções de login social */}
          <div className="space-y-4">
            <button
              type="submit"
              className="w-full bg-mfp-blue text-white font-semibold py-3 rounded-md hover:bg-mfp-darkBlue transition-colors"
            >
              Entrar
            </button>

            <div className="text-center text-sm text-mfp-gray">ou</div>

            <button
              type="button"
              className="w-full bg-white text-gray-700 font-semibold py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-red-500">
                <path
                  d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM14.8 10.5H10.5V14.8C10.5 15.073 10.273 15.3 10 15.3C9.727 15.3 9.5 15.073 9.5 14.8V10.5H5.2C4.927 10.5 4.7 10.273 4.7 10C4.7 9.727 4.927 9.5 5.2 9.5H9.5V5.2C9.5 4.927 9.727 4.7 10 4.7C10.273 4.7 10.5 4.927 10.5 5.2V9.5H14.8C15.073 9.5 15.3 9.727 15.3 10C15.3 10.273 15.073 10.5 14.8 10.5Z"
                  fill="currentColor"
                />
              </svg>
              Continuar com o Google
            </button>

            <button
              type="button"
              className="w-full bg-[#3b5998] text-white font-semibold py-3 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-[#324b81] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                <path
                  d="M18.8958 0H1.10417C0.494167 0 0 0.494167 0 1.10417V18.8967C0 19.5058 0.494167 20 1.10417 20H10.6833V12.255H8.07667V9.23667H10.6833V7.01083C10.6833 4.4275 12.2608 3.02083 14.5658 3.02083C15.67 3.02083 16.6183 3.10333 16.895 3.14V5.84L15.2967 5.84083C14.0433 5.84083 13.8008 6.43667 13.8008 7.31V9.2375H16.79L16.4008 12.2558H13.8008V20H18.8975C19.5058 20 20 19.5058 20 18.8958V1.10417C20 0.494167 19.5058 0 18.8958 0Z"
                  fill="currentColor"
                />
              </svg>
              Continuar com o Facebook
            </button>
          </div>
        </form>
      </div>

      <p className="text-center mt-6 text-mfp-gray text-sm">
        Ainda não é membro? <Link to="/registro" className="text-mfp-blue">Registre-se agora!</Link>
      </p>
    </div>
  );
};

export default LoginPage;
