import Link from 'next/link';
import Image from 'next/image';
import { dishes } from '@/data/menu';
import DishCard from '@/components/DishCard';
import { UtensilsCrossed, Award, Users, ChefHat, Clock, MapPin } from 'lucide-react';

export default function HomePage() {
  const featuredDishes = dishes.filter(d => d.featured).slice(0, 6);
  
  const stats = [
    { icon: UtensilsCrossed, value: '30+', label: 'Anos de Tradição' },
    { icon: Users, value: '50k+', label: 'Clientes Satisfeitos' },
    { icon: Award, value: '15+', label: 'Prêmios Conquistados' },
    { icon: ChefHat, value: '100%', label: 'Autenticidade' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920"
          alt="Ristorante Elegante"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animation-fade-in">
            Bem-vindo ao<br />
            <span className="text-primary-400">Ristorante Elegante</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animation-fade-in">
            Sabores autênticos da Itália em cada prato. Uma experiência gastronômica inesquecível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animation-fade-in">
            <Link href="/cardapio" className="btn-primary inline-flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5 mr-2" />
              Ver Cardápio
            </Link>
            <Link href="/reservas" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 border border-white/30 inline-flex items-center justify-center">
              Fazer Reserva
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary-400" />
                <p className="text-4xl font-bold font-serif mb-2">{stat.value}</p>
                <p className="text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Pratos em Destaque</h2>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              Descubra nossa seleção especial de pratos que conquistam paladares
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/cardapio" className="btn-primary inline-block">
              Ver Cardápio Completo
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
                alt="Chef cozinhando"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="section-title mb-6">Nossa História</h2>
              <div className="space-y-4 text-dark-700 text-lg leading-relaxed">
                <p>
                  Fundado em 1993 pelo Chef Giovanni Rossi, o Ristorante Elegante nasceu 
                  do sonho de trazer a autêntica culinária italiana para São Paulo.
                </p>
                <p>
                  Com receitas passadas de geração em geração e ingredientes cuidadosamente 
                  selecionados, cada prato conta uma história de tradição e paixão pela 
                  gastronomia.
                </p>
                <p>
                  Hoje, três décadas depois, continuamos fiéis aos nossos valores: 
                  qualidade impecável, sabor autêntico e atendimento caloroso.
                </p>
              </div>
              <Link href="/sobre" className="btn-secondary inline-block mt-8">
                Conheça Nossa História
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Por Que Escolher o Ristorante Elegante?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChefHat className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-dark-900 mb-4">
                Chef Experiente
              </h3>
              <p className="text-dark-600">
                Comandado pelo renomado Chef Giovanni Rossi, com mais de 40 anos de experiência
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <UtensilsCrossed className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-dark-900 mb-4">
                Ingredientes Premium
              </h3>
              <p className="text-dark-600">
                Importamos os melhores ingredientes diretamente da Itália para garantir autenticidade
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-dark-900 mb-4">
                Premiado
              </h3>
              <p className="text-dark-600">
                Múltiplos prêmios nacionais e internacionais reconhecendo nossa excelência
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location/Hours Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Visite-nos</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Endereço</p>
                    <p className="text-primary-100">
                      Rua Augusta, 1234<br />
                      Jardins - São Paulo, SP<br />
                      CEP: 01305-100
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Horário de Funcionamento</p>
                    <p className="text-primary-100">
                      Segunda a Sábado: 12h - 23h<br />
                      Domingo: 12h - 22h
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-100 rounded-xl p-8 text-dark-900">
              <h3 className="font-serif text-2xl font-bold mb-4">Faça sua Reserva</h3>
              <p className="mb-6">
                Garanta sua mesa no melhor restaurante italiano de São Paulo
              </p>
              <Link href="/reservas" className="btn-secondary inline-block w-full text-center">
                Reservar Agora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
