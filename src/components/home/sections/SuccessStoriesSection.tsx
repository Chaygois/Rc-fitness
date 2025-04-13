import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  image?: string;
}

export const SuccessStoriesSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Lori',
      text: 'Agora, quando vejo amigos que estão começando a correr e se sentindo frustrados, digo a eles que se mantenham firmes, pois, cedo ou tarde, o corpo começa a responder.',
      image: 'https://ext.same-assets.com/437488152/1475092834.gif'
    },
    {
      id: 2,
      name: 'Stephanie',
      text: 'O MyFitnessPal me deu um alerta quanto à forma como eu estava me alimentando, e me fez enxergar o que era preciso para mudar.',
      image: 'https://ext.same-assets.com/437488152/1475092834.gif'
    },
    {
      id: 3,
      name: 'Eric',
      text: 'Eu incorporei naturalmente o conceito de alimentação consciente... leva de 15 a 20 minutos para que o alimento chegue até o estômago. Sabendo disso, passei a comer mais devagar.',
      image: 'https://ext.same-assets.com/437488152/1475092834.gif'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Código que você quer remover */}
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Casos de sucesso
        </h2>
        <p className="text-lg text-center text-mfp-gray mb-12 max-w-2xl mx-auto">
          Veja como o RC Fitness ajudou outras pessoas a alcançar seus objetivos de saúde e bem-estar.
        </p>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-4">
                  <div className="bg-mfp-background p-6 rounded-lg shadow-sm border border-gray-100">
                    {testimonial.image && (
                      <div className="flex justify-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2 text-center">
                      {testimonial.name === 'Lori' ? 'Ela estava ansiosa para mudar.' :
                        testimonial.name === 'Stephanie' ? 'A educação a ajudou a perder 30 libras.' :
                        'De viciada em fast food para uma consumidora consciente de alimentos saudáveis.'}
                    </h3>
                    <p className="text-mfp-gray text-center mb-4">
                      "{testimonial.text}"
                    </p>
                    <p className="text-right font-semibold">- {testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="text-mfp-blue" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="text-mfp-blue" />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(testimonial.id - 1)}
                className={`w-3 h-3 rounded-full ${
                  testimonial.id - 1 === activeIndex ? 'bg-mfp-blue' : 'bg-gray-300'
                }`}
                aria-label={`Ir para o depoimento ${testimonial.id}`}
              />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SuccessStoriesSection;