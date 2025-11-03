import Image from 'next/image';
import { Award, Users, ChefHat, Heart } from 'lucide-react';

export default function SobrePage() {
  const values = [
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Amor pela culinária italiana tradicional em cada prato que servimos.',
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Ingredientes premium importados diretamente da Itália.',
    },
    {
      icon: Users,
      title: 'Família',
      description: 'Tratamos cada cliente como parte da nossa grande família italiana.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920"
          alt="Chef"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark-900/70" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Nossa História
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200">
            30 anos celebrando a autêntica culinária italiana
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Como Tudo Começou</h2>
              <div className="space-y-4 text-dark-700 text-lg leading-relaxed">
                <p>
                  Em 1993, o Chef Giovanni Rossi deixou sua terra natal na Toscana com um sonho: 
                  trazer os sabores autênticos da Itália para o Brasil. Com receitas que passaram 
                  por gerações em sua família, Giovanni abriu as portas do Ristorante Elegante 
                  em um pequeno espaço no coração de São Paulo.
                </p>
                <p>
                  O que começou como um restaurante familiar modesto rapidamente se tornou um 
                  ponto de referência na cidade, conquistando os paulistanos com pratos tradicionais, 
                  ingredientes importados e um atendimento caloroso que fazia todos se sentirem 
                  em casa.
                </p>
                <p>
                  Hoje, três décadas depois, continuamos fiéis à nossa missão original: oferecer 
                  uma experiência gastronômica inesquecível que transporta nossos clientes 
                  diretamente para as trattorias italianas.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
                alt="Restaurante"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-4xl font-bold mb-12">
            Nossa Trajetória
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold font-serif mb-2">30+</p>
              <p className="text-primary-100 text-lg">Anos de Tradição</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold font-serif mb-2">50k+</p>
              <p className="text-primary-100 text-lg">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold font-serif mb-2">15+</p>
              <p className="text-primary-100 text-lg">Prêmios Conquistados</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold font-serif mb-2">100%</p>
              <p className="text-primary-100 text-lg">Autêntico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Nossos Valores</h2>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              Os princípios que guiam nossa cozinha e nosso atendimento
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-dark-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800"
                alt="Chef Giovanni"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-primary-100 px-4 py-2 rounded-full text-primary-700 font-medium mb-4">
                Nosso Chef
              </div>
              <h2 className="font-serif text-4xl font-bold text-dark-900 mb-6">
                Chef Giovanni Rossi
              </h2>
              <div className="space-y-4 text-dark-700 text-lg leading-relaxed">
                <p>
                  Nascido em Florença, Chef Giovanni cresceu na cozinha da sua nonna, 
                  aprendendo os segredos das receitas tradicionais toscanas. Aos 20 anos, 
                  estudou na prestigiada escola de culinária Le Cordon Bleu em Paris.
                </p>
                <p>
                  Com mais de 40 anos de experiência, Giovanni trabalhou em restaurantes 
                  estrelados pelo Guia Michelin em toda a Europa antes de trazer sua 
                  expertise para o Brasil.
                </p>
                <p>
                  "Para mim, cozinhar não é apenas um trabalho - é uma forma de compartilhar 
                  amor, tradição e memórias de família. Cada prato conta uma história."
                </p>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <ChefHat className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <p className="font-bold text-dark-900">40+ anos</p>
                  <p className="text-dark-600">de experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
