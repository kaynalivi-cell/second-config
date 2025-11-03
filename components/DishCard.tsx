import Image from 'next/image';
import Link from 'next/link';
import { Dish } from '@/types';
import { Clock, Leaf, Flame } from 'lucide-react';

interface DishCardProps {
  dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const getCategoryLabel = (category: string) => {
    const categories: Record<string, string> = {
      entrada: 'Entrada',
      principal: 'Prato Principal',
      massa: 'Massa',
      sobremesa: 'Sobremesa',
      bebida: 'Bebida',
    };
    return categories[category] || category;
  };

  return (
    <Link href={`/cardapio/${dish.id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg card-hover cursor-pointer h-full flex flex-col">
        {/* Imagem */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {getCategoryLabel(dish.category)}
            </span>
          </div>
          {dish.featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-accent-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Destaque
              </span>
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Badges Dietéticos */}
          <div className="flex flex-wrap gap-2 mb-3">
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
          </div>

          {/* Nome */}
          <h3 className="text-xl font-serif font-semibold text-dark-900 mb-2">
            {dish.name}
          </h3>

          {/* Descrição */}
          <p className="text-dark-600 text-sm mb-4 line-clamp-3 flex-1">
            {dish.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
            <div className="text-2xl font-bold text-primary-600 font-serif">
              {formatPrice(dish.price)}
            </div>
            {dish.prepTime && (
              <div className="flex items-center text-dark-600 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                <span>{dish.prepTime} min</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
