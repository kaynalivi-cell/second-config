import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-serif font-bold">Ristorante</span>
              <span className="text-2xl font-serif font-light text-primary-500"> Elegante</span>
            </div>
            <p className="text-neutral-400 mb-4 max-w-md">
              Há mais de 30 anos oferecendo o melhor da autêntica culinária italiana. 
              Receitas tradicionais, ingredientes premium e um ambiente acolhedor para você 
              e sua família.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/cardapio" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Cardápio
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/reservas" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Reservas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-500" />
                <span className="text-sm">Rua Augusta, 1234<br />Jardins - São Paulo, SP</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary-500" />
                <span className="text-sm">(11) 3456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary-500" />
                <span className="text-sm">contato@ristoranteelegante.com.br</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-500" />
                <span className="text-sm">Segunda a Sábado: 12h - 23h<br />Domingo: 12h - 22h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ristorante Elegante. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
