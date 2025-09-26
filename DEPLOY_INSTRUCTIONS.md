# Instruções de Deploy no Vercel

## Pré-requisitos

1. Conta no Vercel (gratuita)
2. Repositório no GitHub (ou outro Git provider)

## Passo a Passo

### 1. Preparar o Repositório

1. Faça commit de todos os arquivos:
   ```bash
   git add .
   git commit -m "Tradução para português e configuração para Vercel"
   git push origin main
   ```

### 2. Deploy no Vercel

#### Opção A: Via Interface Web (Mais Fácil)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign up" ou "Log in"
3. Clique em "New Project"
4. Importe seu repositório do GitHub
5. O Vercel detectará automaticamente que é um site estático
6. Clique em "Deploy"

#### Opção B: Via CLI

1. Instale o Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Faça login:
   ```bash
   vercel login
   ```

3. No diretório do projeto:
   ```bash
   vercel
   ```

4. Siga as instruções:
   - Set up and deploy? `Y`
   - Which scope? (escolha sua conta)
   - Link to existing project? `N`
   - What's your project's name? `unfixed-studio`
   - In which directory is your code located? `./`

### 3. Configurações Automáticas

O arquivo `vercel.json` já está configurado com:
- ✅ Build automático para arquivos estáticos
- ✅ Cache otimizado
- ✅ Headers de performance
- ✅ Roteamento correto

### 4. Domínio Personalizado (Opcional)

1. No dashboard do Vercel, vá para "Settings" > "Domains"
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruído

## Verificação

Após o deploy, verifique:
- ✅ Site carrega corretamente
- ✅ Navegação funciona
- ✅ Animações estão funcionando
- ✅ Textos estão em português
- ✅ SEO está funcionando

## Troubleshooting

### Problema: Site não carrega
- Verifique se todos os arquivos foram commitados
- Confirme que o `vercel.json` está na raiz

### Problema: Animações não funcionam
- Verifique se os recursos do Framer estão carregando
- Confirme que não há erros no console

### Problema: Textos em inglês
- Execute novamente o script de tradução
- Verifique se as traduções foram aplicadas

## Comandos Úteis

```bash
# Ver logs do deploy
vercel logs

# Fazer novo deploy
vercel --prod

# Ver status do projeto
vercel ls
```

## Suporte

Se encontrar problemas:
1. Verifique os logs no dashboard do Vercel
2. Consulte a documentação do Vercel
3. Entre em contato com o suporte do Vercel