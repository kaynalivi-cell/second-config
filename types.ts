export type DishCategory = 'entrada' | 'principal' | 'massa' | 'sobremesa' | 'bebida';

export interface Dish {
  id: string;
  name: string;
  description: string;
  category: DishCategory;
  price: number;
  image: string;
  ingredients: string[];
  allergens?: string[];
  dietary: {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    spicy: boolean;
  };
  featured: boolean;
  prepTime?: number;
}

export interface FilterOptions {
  category?: DishCategory;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  maxPrice?: number;
}
