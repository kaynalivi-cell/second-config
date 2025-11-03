'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, UtensilsCrossed, Phone, Clock } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Cardápio', href: '/cardapio' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Reservas', href: '/reservas' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center">
              <UtensilsCrossed className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-serif font-bold text-dark-900">Ristorante</span>
              <span className="text-2xl font-serif font-light text-primary-600"> Elegante</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-dark-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 text-sm text-dark-600">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Seg-Sáb: 12h-23h</span>
              </div>
            </div>
            <Link href="/reservas" className="btn-primary">
              Fazer Reserva
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-700 hover:text-primary-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-dark-700 hover:text-primary-600 hover:bg-primary-50 px-3 py-2 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2 text-sm text-dark-600 space-y-1">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Seg-Sáb: 12h-23h</span>
              </div>
            </div>
            <Link
              href="/reservas"
              className="block w-full text-center btn-primary mt-4"
              onClick={() => setIsOpen(false)}
            >
              Fazer Reserva
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
