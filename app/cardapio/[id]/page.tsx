'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { dishes } from '@/data/menu';
import { Clock, Leaf, Flame, ArrowLeft, AlertCircle } from 'lucide-react';

export default function DishDetailPage({ params }: { params: { id: string } }) {
  const dish = dishes.find(d => d.id === params.id);

  if (!dish) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <div className="pt-20 min-h-screen bg-neutral-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/cardapio" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao Cardápio
          </Link>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative h-[60vh] bg-black">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {dish.dietary.vegetarian && (
                  <span className="badge-vegetarian">
                    <Leaf className="w-3 h-3 mr-1" />
                    Vegetariano
                  </span>
                )}
                {dish.dietary.vegan && (
                  <span className="badge-vegan">
                    <Leaf className="w-3 h-3 mr-1" />
                    Vegano
                  </span>
                )}
                {dish.dietary.glutenFree && (
                  <span className="badge-glutenfree">Sem Glúten</span>
                )}
                {dish.dietary.spicy && (
                  <span className="badge-spicy">
                    <Flame className="w-3 h-3 mr-1" />
                    Picante
                  </span>
                )}
                {dish.featured && (
                  <span className="badge bg-accent-100 text-accent-800">Destaque</span>
                )}
              </div>

              <h1 className="font-serif text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                {dish.name}
              </h1>

              <p className="text-dark-700 text-lg leading-relaxed mb-6">
                {dish.description}
              </p>

              <div className="flex items-center gap-6 text-dark-600">
                <div className="text-4xl font-bold text-primary-600 font-serif">
                  {formatPrice(dish.price)}
                </div>
                {dish.prepTime && (
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Tempo de preparo: {dish.prepTime} minutos</span>
                  </div>
                )}
              </div>
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="font-serif text-2xl font-bold text-dark-900 mb-6">
                Ingredientes
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {dish.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                    <span className="text-dark-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Allergens */}
            {dish.allergens && dish.allergens.length > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-dark-900 mb-2">Alergênicos</h3>
                    <p className="text-dark-700">
                      Este prato contém: {dish.allergens.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Order Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
              <h3 className="font-serif text-2xl font-bold text-dark-900 mb-6">
                Faça seu Pedido
              </h3>
              
              <div className="space-y-4 mb-6">
                <p className="text-dark-600">
                  Para realizar seu pedido ou fazer uma reserva, entre em contato conosco:
                </p>
                <div className="space-y-2 text-dark-700">
                  <p className="font-semibold">Telefone:</p>
                  <a href="tel:+551134567890" className="text-primary-600 hover:text-primary-700">
                    (11) 3456-7890
                  </a>
                </div>
                <div className="space-y-2 text-dark-700">
                  <p className="font-semibold">WhatsApp:</p>
                  <a href="https://wa.me/5511987654321" className="text-primary-600 hover:text-primary-700">
                    (11) 98765-4321
                  </a>
                </div>
              </div>

              <Link href="/reservas" className="w-full btn-primary block text-center mb-4">
                Fazer Reserva
              </Link>
              <Link href="/cardapio" className="w-full btn-secondary block text-center">
                Ver Mais Pratos
              </Link>

              <div className="mt-6 pt-6 border-t border-neutral-200">
                <p className="text-sm text-dark-600">
                  <strong>Horário de funcionamento:</strong><br />
                  Seg-Sáb: 12h - 23h<br />
                  Dom: 12h - 22h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
