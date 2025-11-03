'use client';

import { useState, useMemo } from 'react';
import { dishes } from '@/data/menu';
import DishCard from '@/components/DishCard';
import { FilterOptions } from '@/types';
import { SlidersHorizontal } from 'lucide-react';

export default function CardapioPage() {
  const [filters, setFilters] = useState<FilterOptions>({});
  const [showFilters, setShowFilters] = useState(true);

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      if (filters.category && dish.category !== filters.category) return false;
      if (filters.vegetarian && !dish.dietary.vegetarian) return false;
      if (filters.vegan && !dish.dietary.vegan) return false;
      if (filters.glutenFree && !dish.dietary.glutenFree) return false;
      if (filters.maxPrice && dish.price > filters.maxPrice) return false;
      return true;
    });
  }, [filters]);

  const categories = [
    { value: '', label: 'Todas as Categorias' },
    { value: 'entrada', label: 'Entradas' },
    { value: 'principal', label: 'Pratos Principais' },
    { value: 'massa', label: 'Massas' },
    { value: 'sobremesa', label: 'Sobremesas' },
    { value: 'bebida', label: 'Bebidas' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-neutral-50">
      <div className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Nosso Cardápio
          </h1>
          <p className="text-xl text-primary-100">
            {filteredDishes.length} {filteredDishes.length === 1 ? 'prato disponível' : 'pratos disponíveis'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtros Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl font-bold text-dark-900">Filtros</h2>
                <button
                  onClick={() => setFilters({})}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Limpar
                </button>
              </div>

              <div className="space-y-6">
                {/* Categoria */}
                <div>
                  <label className="block text-sm font-semibold text-dark-700 mb-2">
                    Categoria
                  </label>
                  <select
                    value={filters.category || ''}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value as any })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>

                {/* Preço Máximo */}
                <div>
                  <label className="block text-sm font-semibold text-dark-700 mb-2">
                    Preço Máximo: R$ {filters.maxPrice || 200}
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="200"
                    step="10"
                    value={filters.maxPrice || 200}
                    onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                  />
                  <div className="flex justify-between text-xs text-dark-600 mt-1">
                    <span>R$ 10</span>
                    <span>R$ 200</span>
                  </div>
                </div>

                {/* Opções Dietéticas */}
                <div>
                  <label className="block text-sm font-semibold text-dark-700 mb-3">
                    Restrições Alimentares
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.vegetarian || false}
                        onChange={(e) => setFilters({ ...filters, vegetarian: e.target.checked })}
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <span className="ml-2 text-dark-700">Vegetariano</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.vegan || false}
                        onChange={(e) => setFilters({ ...filters, vegan: e.target.checked })}
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <span className="ml-2 text-dark-700">Vegano</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.glutenFree || false}
                        onChange={(e) => setFilters({ ...filters, glutenFree: e.target.checked })}
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <span className="ml-2 text-dark-700">Sem Glúten</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lista de Pratos */}
          <div className="flex-1">
            {/* Toggle Filtros Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full mb-6 btn-secondary flex items-center justify-center"
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
            </button>

            {filteredDishes.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <p className="text-xl text-dark-600">
                  Nenhum prato encontrado com os filtros selecionados.
                </p>
                <button
                  onClick={() => setFilters({})}
                  className="mt-4 btn-primary"
                >
                  Limpar Filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredDishes.map((dish) => (
                  <DishCard key={dish.id} dish={dish} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
