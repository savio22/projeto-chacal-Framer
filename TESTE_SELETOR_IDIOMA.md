# 🌐 Teste do Seletor de Idioma - Chacal.me

## 🎯 Como Testar o Seletor de Idioma

### **1. Página de Teste Simples**
Abra o arquivo `teste-simples.html` no seu navegador para testar o seletor de idioma em um ambiente controlado.

### **2. Site Principal**
Abra o arquivo `page.html` no seu navegador para testar no site principal.

## 🔍 O que Procurar

### **Localização do Seletor**
- ✅ **Posição**: Canto superior direito da tela
- ✅ **Aparência**: Botão branco com bordas arredondadas
- ✅ **Texto**: Mostra "PT" ou "EN" em maiúsculas
- ✅ **Seta**: Seta para baixo que gira ao abrir

### **Funcionalidade**
- ✅ **Clique**: Abre dropdown com opções PT/EN
- ✅ **Troca**: Muda o idioma ao clicar em uma opção
- ✅ **Persistência**: Lembra a escolha entre sessões
- ✅ **Meta Tags**: Atualiza descrições para SEO

## 🚨 Problemas Comuns e Soluções

### **Problema: Seletor não aparece**
**Possíveis causas:**
- Site Framer ainda não carregou completamente
- Script não foi carregado
- Erro no console do navegador

**Soluções:**
1. Aguarde 5-10 segundos após carregar a página
2. Verifique o console do navegador (F12)
3. Recarregue a página
4. Teste com `teste-simples.html` primeiro

### **Problema: Seletor aparece mas não funciona**
**Possíveis causas:**
- Conflito com outros scripts
- Erro JavaScript

**Soluções:**
1. Verifique o console do navegador (F12)
2. Teste em modo incógnito
3. Desative extensões do navegador

### **Problema: Traduções não aparecem**
**Possíveis causas:**
- Site Framer usa React e renderiza dinamicamente
- Conteúdo não está nas traduções

**Soluções:**
1. Aguarde alguns segundos após trocar o idioma
2. Recarregue a página
3. Verifique se o texto está nas traduções

## 🔧 Debug e Verificação

### **Console do Navegador (F12)**
Procure por estas mensagens:
- ✅ `🌐 Chacal Language Switcher inicializado`
- ❌ Erros JavaScript em vermelho

### **Elementos do DOM**
Verifique se estes elementos existem:
- ✅ `.chacal-language-selector`
- ✅ `.chacal-language-button`
- ✅ `.chacal-language-dropdown`

### **LocalStorage**
Verifique se a preferência está salva:
- ✅ `chacal-language: "pt"` ou `"en"`

## 📱 Teste em Diferentes Dispositivos

### **Desktop**
- ✅ Chrome, Firefox, Safari, Edge
- ✅ Diferentes resoluções de tela

### **Mobile**
- ✅ iOS Safari
- ✅ Android Chrome
- ✅ Diferentes orientações

## 🎨 Personalização

### **Posição do Seletor**
Para mudar a posição, edite o arquivo `language-switcher.js`:
```javascript
const CONFIG = {
    selectorPosition: 'fixed', // ou 'relative'
    selectorTop: '20px',       // distância do topo
    selectorRight: '20px',     // distância da direita
    selectorZIndex: 9999       // camada (z-index)
};
```

### **Estilo do Seletor**
Para personalizar a aparência, edite os estilos CSS no arquivo `language-switcher.js`.

## 📊 Status do Teste

### **Checklist de Verificação**
- [ ] Seletor aparece no canto superior direito
- [ ] Botão mostra idioma atual (PT/EN)
- [ ] Dropdown abre ao clicar
- [ ] Opções PT e EN estão disponíveis
- [ ] Troca de idioma funciona
- [ ] Preferência é salva no localStorage
- [ ] Meta tags são atualizadas
- [ ] Funciona em diferentes navegadores
- [ ] Funciona em dispositivos móveis

### **Resultado Esperado**
Se todos os itens estiverem marcados, o seletor de idioma está funcionando perfeitamente!

## 🚀 Próximos Passos

1. **Teste Local**: Verifique se funciona localmente
2. **Deploy**: Faça o deploy no Vercel
3. **Teste Online**: Verifique se funciona no site online
4. **Feedback**: Colete feedback de usuários

## 💡 Dicas Importantes

- O seletor pode demorar alguns segundos para aparecer
- Site Framer usa React, então o conteúdo é renderizado dinamicamente
- As traduções são aplicadas após o carregamento completo
- O seletor é responsivo e funciona em todos os dispositivos

---

**Se encontrar problemas, verifique o console do navegador (F12) para mais detalhes!**