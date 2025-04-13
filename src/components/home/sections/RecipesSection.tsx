import { Link } from 'react-router-dom';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

interface Recipe {
  id: number;
  title: string;
  source: string;
  image: string;
  link: string;
}

export const RecipesSection = () => {
  const recipes: Recipe[] = [
    {
      id: 1,
      title: '15 cafés da manhã com menos de 300 calorias',
      source: 'Blog do RC Fitness',
      image: img1,
      link: '/blog/cafes-da-manha-300-calorias'
    },
    {
      id: 2,
      title: 'O problema dos dias fora da dieta',
      source: 'Blog do RC Fitness',
      image: img2,
      link: '/blog/problema-dias-fora-dieta'
    },
    {
      id: 3,
      title: 'Guia essencial para não ficar parado',
      source: 'Blog do RC Fitness',
      image: img3,
      link: '/blog/guia-essencial-movimento'
    }
  ];

  return (
    <div className="bg-mfp-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Receitas e inspiração
        </h2>
        <p className="text-lg text-center text-mfp-gray mb-12 max-w-2xl mx-auto">
          Obtenha receitas aprovadas por nutricionistas e dicas motivacionais de treinos de especialistas do MyFitnessPal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link key={recipe.id} to={recipe.link} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-mfp-text group-hover:text-mfp-blue transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-mfp-gray text-sm">
                    {recipe.source}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesSection;
