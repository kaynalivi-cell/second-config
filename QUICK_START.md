# 🚀 Início Rápido - Ristorante Elegante

## Passos para rodar o projeto:

### 1️⃣ Instalar Dependências
```bash
npm install
```

### 2️⃣ Rodar em Desenvolvimento
```bash
npm run dev
```

Acesse: **http://localhost:3000**

---

## 📋 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar em produção
npm start

# Verificar erros
npm run lint
```

---

## 🎯 Estrutura do Site

### Páginas:
- **/** - Home com hero e pratos em destaque
- **/cardapio** - Cardápio completo com filtros
- **/cardapio/[id]** - Detalhes do prato
- **/sobre** - História do restaurante
- **/contato** - Reservas e contato

### Arquivos Importantes:
- **data/dishes.ts** - Cardápio (adicione/edite pratos aqui)
- **app/page.tsx** - Página inicial
- **components/** - Componentes reutilizáveis
- **tailwind.config.ts** - Configuração de cores

---

## 🍕 Personalizando o Cardápio

### Adicionar um Novo Prato:

Edite `data/dishes.ts` e adicione:

```typescript
{
  id: '99',
  name: 'Pizza Margherita',
  description: 'Pizza clássica napolitana',
  category: 'principal',
  price: 55,
  image: 'URL_DA_IMAGEM',
  ingredients: ['Massa', 'Molho', 'Mozzarella', 'Manjericão'],
  badges: ['vegetariano'],
  preparationTime: 25,
  featured: false,
}
```

---

## 🎨 Mudar Cores

Edite `tailwind.config.ts`:

```typescript
primary: {
  500: '#f0701a', // Cor principal
  600: '#e15410',
  700: '#bb3e10',
}
```

---

## 📤 Deploy Rápido

```bash
# 1. Git
git init
git add .
git commit -m "Restaurante completo"
git push

# 2. Vercel.com
# Importe o repositório
# Deploy automático!
```

---

## 💡 Dicas

- Imagens vêm do Unsplash (precisa de internet)
- Hot reload ativado (mudanças aparecem automaticamente)
- Use Ctrl+C para parar o servidor
- Teste em modo mobile (F12 no navegador)

---

**Buon Appetito! 🇮🇹**
