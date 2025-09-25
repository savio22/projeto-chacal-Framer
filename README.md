# UNFIXED STUDIO

Um site moderno e responsivo criado com React, TypeScript, Vite e Framer Motion, baseado no design exportado do Framer.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool rápida e moderna
- **Framer Motion** - Biblioteca de animações para React
- **Tailwind CSS** - Framework CSS utilitário
- **React Router** - Roteamento para aplicações React

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Navbar.tsx      # Navegação principal
│   ├── Hero.tsx        # Seção hero
│   ├── About.tsx       # Seção sobre
│   ├── Services.tsx    # Seção serviços
│   ├── Portfolio.tsx   # Seção portfólio
│   ├── Contact.tsx     # Seção contato
│   └── Footer.tsx      # Rodapé
├── styles/             # Estilos CSS
│   └── globals.css     # Estilos globais
├── assets/             # Recursos estáticos
├── utils/              # Utilitários
├── App.tsx             # Componente principal
└── main.tsx            # Ponto de entrada
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd projeto-chacal-6d1ac-main
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse o projeto**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção localmente
- `npm run lint` - Executa o linter

## 🎨 Características do Design

- **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves** - Animações fluidas com Framer Motion
- **Tipografia Moderna** - Fontes Instrument Serif e Inter
- **Tema Escuro** - Design elegante com tema escuro
- **Navegação Suave** - Scroll suave entre seções
- **Interatividade** - Elementos interativos e hover effects

## 🚀 Deploy no Vercel

### Deploy Automático

1. **Conecte o repositório ao Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Importe este repositório

2. **Configure o projeto**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Root Directory: `.` (raiz do projeto)

3. **Deploy**
   - Clique em "Deploy"
   - O Vercel fará o build e deploy automaticamente

### Deploy Manual

1. **Build do projeto**
   ```bash
   npm run build
   ```

2. **Instale o Vercel CLI**
   ```bash
   npm i -g vercel
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- **Desktop** (1200px+)
- **Tablet** (810px - 1199px)
- **Mobile** (até 809px)

## 🎯 Seções do Site

1. **Hero** - Apresentação principal com call-to-action
2. **About** - Informações sobre a empresa e estatísticas
3. **Services** - Lista de serviços oferecidos
4. **Portfolio** - Galeria de projetos com filtros
5. **Contact** - Formulário de contato e informações
6. **Footer** - Links e informações adicionais

## 🔧 Personalização

### Cores
As cores podem ser personalizadas no arquivo `tailwind.config.js`:
```javascript
colors: {
  'framer-black': '#000000',
  'framer-white': '#ffffff',
  'framer-gray': '#666666',
}
```

### Fontes
As fontes estão configuradas no `tailwind.config.js` e no `globals.css`:
- Instrument Serif (títulos)
- Inter (texto geral)
- Manrope (elementos especiais)

### Animações
As animações podem ser personalizadas nos componentes usando Framer Motion.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests

## 📞 Contato

- **Email**: hello@unfixedstudio.com
- **Website**: [unfixedstudio.com](https://unfixedstudio.com)

---

Desenvolvido com ❤️ pela UNFIXED STUDIO