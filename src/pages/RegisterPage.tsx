import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { signInWithGoogle } from "../firebasee/firebase"; // Certo
import api from '../api'; 


export const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/register', {
        name,
        email,
        password
      });

      console.log('Usuário registrado com sucesso:', response.data);
    } catch (error: any) {
      if (error.response) {
        console.error('Erro ao registrar:', error.response.data);
      } else {
        console.error('Erro inesperado:', error.message);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      console.log('Usuário autenticado:', user);
      // Redirecionamento ou outra lógica aqui
    } catch (error) {
      console.error('Erro ao tentar fazer login com o Google:', error);
    }
  };

  return (
    <div className="py-12 bg-mfp-background">
      <div className="mx-auto max-w-md p-8 bg-white rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-center mb-2">Junte-se ao RC Fitness</h1>
        <p className="text-center text-mfp-gray mb-6">
          Criando uma conta, você concorda com nossos Termos e Política de Privacidade
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo de nome */}
          <div className="space-y-2">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-mfp-blue focus:border-transparent"
              required
            />
          </div>

          {/* Campo de email */}
          <div className="space-y-2">
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
            <p className="text-xs text-mfp-gray mt-1">
              Deve ter pelo menos 8 caracteres, incluindo uma letra e um número ou caractere especial
            </p>
          </div>

          {/* Botões */}
          <div className="space-y-4">
            <button
              type="submit"
              className="w-full bg-mfp-blue text-white font-semibold py-3 rounded-md hover:bg-mfp-darkBlue transition-colors"
            >
              Criar conta
            </button>

            <div className="text-center text-sm text-mfp-gray">ou</div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full bg-white text-gray-700 font-semibold py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <svg
                aria-hidden="true"
                role="graphics-symbol"
                viewBox="0 0 20 20"
                className="googleLogo"
                style={{ width: '16px', height: '16px', display: 'block', fill: 'inherit', flexShrink: 0 }}
              >
                <g>
                  <path
                    d="M19.9996 10.2297C19.9996 9.54995 19.9434 8.8665 19.8234 8.19775H10.2002V12.0486H15.711C15.4823 13.2905 14.7475 14.3892 13.6716 15.0873V17.586H16.9593C18.89 15.8443 19.9996 13.2722 19.9996 10.2297Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M10.2002 20.0003C12.9518 20.0003 15.2723 19.1147 16.963 17.5862L13.6753 15.0875C12.7606 15.6975 11.5797 16.0429 10.2039 16.0429C7.54224 16.0429 5.28544 14.2828 4.4757 11.9165H1.08301V14.4923C2.81497 17.8691 6.34261 20.0003 10.2002 20.0003Z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M4.47227 11.9163C4.04491 10.6743 4.04491 9.32947 4.47227 8.0875V5.51172H1.08333C-0.363715 8.33737 -0.363715 11.6664 1.08333 14.4921L4.47227 11.9163Z"
                    fill="#FBBC04"
                  ></path>
                  <path
                    d="M10.2002 3.95756C11.6547 3.93552 13.0605 4.47198 14.1139 5.45674L17.0268 2.60169C15.1824 0.904099 12.7344 -0.0292099 10.2002 0.000185607C6.34261 0.000185607 2.81497 2.13136 1.08301 5.51185L4.47195 8.08764C5.27795 5.71762 7.53849 3.95756 10.2002 3.95756Z"
                    fill="#EA4335"
                  ></path>
                </g>
              </svg>
              Continuar com o Google
            </button>
          </div>
        </form>

        <p className="text-center mt-6 text-mfp-gray text-sm">
          Já é membro? <Link to="/login" className="text-mfp-blue">Faça login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
