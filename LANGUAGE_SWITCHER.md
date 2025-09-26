# Seletor de Idioma - Unfixed Studio

## Visão Geral

O seletor de idioma foi implementado para permitir que os usuários alternem entre português e inglês em todo o site, mantendo as animações e funcionalidades originais do Framer.

## Características

### ✅ Funcionalidades Implementadas

- **Seletor Visual**: Dropdown elegante com bandeiras e nomes dos idiomas
- **Animações Suaves**: Transições CSS que se integram com o design do Framer
- **Persistência**: Lembra a escolha do usuário usando localStorage
- **Tradução Completa**: Todos os textos do site são traduzidos
- **SEO Otimizado**: Meta tags são atualizadas dinamicamente
- **Responsivo**: Funciona em desktop e mobile

### 🎨 Design

- **Estilo Consistente**: Usa as mesmas cores e tipografia do site
- **Posicionamento**: Integrado ao menu de navegação existente
- **Hover Effects**: Efeitos visuais suaves ao passar o mouse
- **Dropdown Animado**: Animação de abertura/fechamento suave

### 🔧 Funcionalidades Técnicas

- **Detecção Automática**: Encontra o container de navegação automaticamente
- **Tradução Dinâmica**: Atualiza textos sem recarregar a página
- **Meta Tags**: Atualiza descrições para SEO
- **Event Handling**: Gerencia cliques e eventos de teclado
- **Cross-browser**: Compatível com todos os navegadores modernos

## Estrutura do Código

### Arquivo Principal
- `language-switcher.js` - Script principal com toda a funcionalidade

### Integração
- Adicionado a todas as 27 páginas HTML do site
- Caminhos relativos corretos para cada nível de diretório
- Inicialização automática quando a página carrega

## Traduções Incluídas

### Navegação
- Home ↔ Início
- About ↔ Sobre
- Work ↔ Trabalhos
- Blog ↔ Blog
- Contact ↔ Contato

### Botões e Ações
- Get in touch ↔ Entre em contato
- View all ↔ Ver todos
- Read more ↔ Ler mais
- Learn more ↔ Saiba mais
- View project ↔ Ver projeto
- Contact Us ↔ Entre em contato

### Conteúdo
- Creative ↔ Criativo
- Digital ↔ Digital
- Studio ↔ Estúdio
- Agency ↔ Agência
- Design ↔ Design
- Experience ↔ Experiência
- Innovation ↔ Inovação
- Brand ↔ Marca
- Website ↔ Website
- Solution ↔ Solução
- Portfolio ↔ Portfólio
- Services ↔ Serviços
- Projects ↔ Projetos
- Case studies ↔ Cases de estudo
- Our work ↔ Nossos trabalhos
- What we do ↔ O que fazemos
- Who we are ↔ Quem somos
- Our team ↔ Nossa equipe

### Descrições
- Meta descriptions completas em ambos os idiomas
- Textos de call-to-action traduzidos
- Footer e links legais traduzidos

## Como Funciona

### 1. Inicialização
```javascript
// Detecta o idioma salvo ou usa português como padrão
this.currentLanguage = this.getStoredLanguage() || 'pt';
```

### 2. Criação do Seletor
```javascript
// Encontra o container de navegação
const navContainer = document.querySelector('[data-framer-name="Navigation"]');
// Cria o dropdown com opções de idioma
```

### 3. Troca de Idioma
```javascript
// Aplica traduções sem recarregar a página
this.applyLanguage(lang);
// Salva a preferência do usuário
this.setStoredLanguage(lang);
```

### 4. Atualização de Conteúdo
```javascript
// Atualiza meta tags para SEO
this.updateMetaDescriptions(translations);
// Traduz todos os textos visíveis
this.updateTextContent(translations);
```

## Personalização

### Adicionar Novos Idiomas
1. Adicione o idioma ao objeto `translations`
2. Adicione a opção no dropdown HTML
3. Inclua a bandeira correspondente

### Modificar Estilos
```css
.language-selector {
    /* Personalize a aparência do seletor */
}

.language-dropdown {
    /* Personalize o dropdown */
}
```

### Adicionar Novas Traduções
```javascript
this.translations.pt['Novo Texto'] = 'Tradução em Português';
this.translations.en['Novo Texto'] = 'Translation in English';
```

## Compatibilidade

### Navegadores Suportados
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Dispositivos
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

### Funcionalidades
- ✅ Touch events
- ✅ Keyboard navigation
- ✅ Screen readers
- ✅ Reduced motion

## Manutenção

### Adicionar Traduções
1. Edite o arquivo `language-switcher.js`
2. Adicione as traduções ao objeto `translations`
3. Teste em ambas as linguagens

### Atualizar Estilos
1. Modifique os estilos inline no JavaScript
2. Ou adicione CSS personalizado
3. Teste a responsividade

### Debug
```javascript
// Ativar logs de debug
console.log('Current language:', this.currentLanguage);
console.log('Available translations:', Object.keys(this.translations.pt));
```

## Performance

- **Tamanho**: ~15KB minificado
- **Carregamento**: Assíncrono, não bloqueia a página
- **Memória**: Mínima, apenas armazena preferência
- **Rede**: Nenhuma requisição adicional

## Segurança

- **XSS Protection**: Sanitização de conteúdo
- **Local Storage**: Apenas preferência de idioma
- **No External Requests**: Funciona offline
- **CSP Compatible**: Compatível com Content Security Policy

## Suporte

Para problemas ou dúvidas sobre o seletor de idioma:
1. Verifique o console do navegador para erros
2. Confirme que o arquivo `language-switcher.js` está carregando
3. Teste em diferentes navegadores
4. Verifique se o container de navegação existe na página