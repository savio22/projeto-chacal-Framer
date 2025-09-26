# Chacal.me

**Chacal** é a marca digital de Sávio Aglio de Morais, um criador que une estratégia, criatividade e tecnologia para transformar ideias em experiências digitais únicas. Especializado em design, desenvolvimento e automação inteligente.

## Sobre o Projeto

Este é um site estático exportado do Framer, completamente personalizado para a marca **Chacal**, com seletor de idioma (português/inglês) e otimizado para deploy no Vercel.

## Estrutura do Projeto

```
/
├── page.html              # Página inicial
├── about/                 # Página sobre
├── work/                  # Portfólio de trabalhos
├── blog/                  # Blog
├── contact/               # Página de contato
├── privacy/               # Política de privacidade
├── terms/                 # Termos de uso
├── package.json           # Configuração do projeto
├── vercel.json           # Configuração do Vercel
└── README.md             # Este arquivo
```

## Deploy no Vercel

### Opção 1: Deploy via Git (Recomendado)

1. Faça push deste repositório para o GitHub
2. Conecte o repositório ao Vercel
3. O Vercel detectará automaticamente a configuração e fará o deploy

### Opção 2: Deploy via CLI

1. Instale o Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Faça login no Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

### Opção 3: Deploy via Interface Web

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe este repositório
4. Configure as opções de build (já configuradas no `vercel.json`)
5. Clique em "Deploy"

## Configurações

- **Build Command**: Não necessário (site estático)
- **Output Directory**: `/` (raiz)
- **Install Command**: Não necessário

## Características

- ✅ Site estático otimizado
- ✅ **Personalizado para Chacal** (Sávio Aglio de Morais)
- ✅ **Seletor de idioma** (Português/Inglês)
- ✅ **Conteúdo completo**: 10 projetos, 6 serviços, 10 artigos
- ✅ Configurado para Vercel
- ✅ SEO otimizado
- ✅ Responsivo
- ✅ Animações preservadas

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Framer (exportado)
- Vercel (hosting)

## Seletor de Idioma

O site inclui um seletor de idioma elegante que permite alternar entre português e inglês:

- **Localização**: Integrado ao menu de navegação
- **Funcionalidade**: Troca dinâmica sem recarregar a página
- **Persistência**: Lembra a escolha do usuário
- **SEO**: Atualiza meta tags automaticamente
- **Animações**: Mantém as animações originais do Framer

Para mais detalhes, consulte [LANGUAGE_SWITCHER.md](./LANGUAGE_SWITCHER.md).

## Contato

Para mais informações sobre a **Chacal**:

- **Email**: chacalorg@hotmail.com
- **WhatsApp**: +55 (32) 9 9981-9211
- **LinkedIn**: linkedin.com/in/savioaglio
- **Site**: chacal.me

## Documentação

- [LANGUAGE_SWITCHER.md](./LANGUAGE_SWITCHER.md) - Documentação do seletor de idioma
- [CHACAL_SITE_INFO.md](./CHACAL_SITE_INFO.md) - Informações completas do site
- [DEPLOY_INSTRUCTIONS.md](./DEPLOY_INSTRUCTIONS.md) - Instruções de deploy
- [CHANGELOG.md](./CHANGELOG.md) - Histórico de alterações