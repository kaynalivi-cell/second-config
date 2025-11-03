# 🍕 Ristorante Elegante - Site de Restaurante Italiano

Site completo de restaurante italiano desenvolvido com **Next.js 14**, **TypeScript** e **Tailwind CSS**.

## ✨ Características

### Funcionalidades Principais
- 🍽️ **Cardápio Digital** completo com categorias
- 🔍 **Filtros Avançados** por categoria, preço e restrições alimentares
- 📱 **Design Responsivo** para todos os dispositivos
- 🎨 **Interface Elegante** com tema gastronômico
- 🖼️ **Fotos de Alta Qualidade** dos pratos
- 📋 **Páginas de Detalhes** com ingredientes e informações nutricionais
- 📧 **Sistema de Reservas** integrado
- ℹ️ **Página Sobre** o restaurante e equipe
- ⏰ **Informações de Horário** e localização

### Categorias do Cardápio
- Entradas
- Pratos Principais
- Massas
- Sobremesas
- Bebidas

### Badges e Filtros
- Vegetariano
- Vegano
- Sem Glúten
- Picante
- Especial do Chef

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utility-first
- **Lucide React** - Ícones modernos
- **Next/Image** - Otimização de imagens

## 📦 Instalação

### 1. Extrair os arquivos

Extraia o projeto para uma pasta de sua escolha.

### 2. Instalar dependências

```bash
cd ristorante-elegante
npm install
```

### 3. Rodar o projeto

```bash
npm run dev
```

O site estará disponível em: `http://localhost:3000`

## 🌐 Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
ristorante-elegante/
├── app/
│   ├── page.tsx              # Página inicial (Home)
│   ├── cardapio/
│   │   ├── page.tsx          # Listagem do cardápio
│   │   └── [id]/
│   │       └── page.tsx      # Detalhes do prato
│   ├── sobre/
│   │   └── page.tsx          # Sobre o restaurante
│   ├── contato/
│   │   └── page.tsx          # Contato e reservas
│   ├── layout.tsx            # Layout principal
│   └── globals.css           # Estilos globais
├── components/
│   ├── Navbar.tsx            # Barra de navegação
│   ├── Footer.tsx            # Rodapé
│   └── DishCard.tsx          # Card de prato
├── data/
│   └── dishes.ts             # Dados do cardápio
├── types.ts                  # Tipos TypeScript
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🎨 Personalização

### Modificar o Cardápio

Edite o arquivo: `data/dishes.ts`

Exemplo de um prato:
```typescript
{
  id: '1',
  name: 'Nome do Prato',
  description: 'Descrição detalhada',
  category: 'entrada', // ou 'principal', 'massa', 'sobremesa', 'bebida'
  price: 42,
  image: 'URL_DA_IMAGEM',
  ingredients: ['Ingrediente 1', 'Ingrediente 2'],
  allergens: ['Glúten', 'Laticínios'],
  badges: ['vegetariano', 'sem-gluten'],
  preparationTime: 20,
  calories: 320,
  featured: true,
}
```

### Alterar Cores

Edite o arquivo: `tailwind.config.ts`

```typescript
colors: {
  primary: {
    // Suas cores personalizadas aqui
  },
}
```

### Modificar Informações do Restaurante

- **Nome e Logo**: `components/Navbar.tsx` e `components/Footer.tsx`
- **Textos da Home**: `app/page.tsx`
- **História**: `app/sobre/page.tsx`
- **Contato**: `app/contato/page.tsx` e `components/Footer.tsx`

## 🔧 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin SEU_REPOSITORIO_GITHUB
git push -u origin main
```

2. Acesse [vercel.com](https://vercel.com)
3. Importe seu repositório do GitHub
4. Configure (Next.js é detectado automaticamente)
5. Deploy!

### Outras Plataformas

O projeto também pode ser deployado em:
- **Netlify**
- **AWS Amplify**
- **Cloudflare Pages**

## 📝 Próximos Passos

Sugestões para expandir o projeto:

1. **Backend e Banco de Dados**
   - Sistema real de reservas
   - Banco de dados (PostgreSQL, MongoDB)
   - Sistema de pedidos online
   - Painel administrativo

2. **Funcionalidades Avançadas**
   - Carrinho de compras
   - Sistema de avaliações
   - Programa de fidelidade
   - Newsletter
   - Chat online

3. **Integrações**
   - Google Maps real
   - Sistema de pagamento
   - Integração com delivery (iFood, Rappi)
   - Sistema de e-mail

4. **SEO e Performance**
   - Metadata otimizada
   - Sitemap
   - Schema.org para restaurantes
   - Analytics

## 🐛 Troubleshooting

### Erro: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Imagens não carregam
Verifique se as URLs das imagens do Unsplash estão funcionando. Se necessário, substitua por imagens locais na pasta `public/`.

### Erro de TypeScript
```bash
npm run build
```
Isso mostrará os erros de tipo que precisam ser corrigidos.

## 📄 Licença

Este projeto foi criado para fins educacionais e de portfólio.

## 🤝 Contribuindo

Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Melhorar a documentação
- Enviar pull requests

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através do formulário no site.

---

**Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS**

**Buon Appetito! 🇮🇹**
