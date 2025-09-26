#!/usr/bin/env python3
"""
Script para corrigir problemas de tradução no site Chacal.me
"""

import os
import re
import json
from pathlib import Path

def check_script_inclusion():
    """Verifica se o script language-switcher.js está incluído em todas as páginas"""
    print("🔍 Verificando inclusão do script language-switcher.js...")
    
    html_files = list(Path('.').rglob('*.html'))
    missing_script = []
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            if 'language-switcher.js' not in content:
                missing_script.append(str(html_file))
        except Exception as e:
            print(f"❌ Erro ao ler {html_file}: {e}")
    
    if missing_script:
        print(f"❌ {len(missing_script)} arquivos sem o script:")
        for file in missing_script:
            print(f"   - {file}")
        return False
    else:
        print(f"✅ Todos os {len(html_files)} arquivos HTML têm o script incluído")
        return True

def check_script_file():
    """Verifica se o arquivo language-switcher.js existe e tem conteúdo"""
    print("\n🔍 Verificando arquivo language-switcher.js...")
    
    script_path = Path('language-switcher.js')
    if not script_path.exists():
        print("❌ Arquivo language-switcher.js não encontrado")
        return False
    
    try:
        with open(script_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if len(content) < 1000:
            print("❌ Arquivo language-switcher.js parece estar vazio ou corrompido")
            return False
            
        print(f"✅ Arquivo language-switcher.js encontrado ({len(content)} caracteres)")
        return True
        
    except Exception as e:
        print(f"❌ Erro ao ler language-switcher.js: {e}")
        return False

def check_meta_tags():
    """Verifica se as meta tags estão corretas"""
    print("\n🔍 Verificando meta tags...")
    
    main_page = Path('page.html')
    if not main_page.exists():
        print("❌ Arquivo page.html não encontrado")
        return False
    
    try:
        with open(main_page, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Verificar meta description
        meta_desc = re.search(r'<meta name="description" content="([^"]*)"', content)
        if not meta_desc:
            print("❌ Meta description não encontrada")
            return False
            
        description = meta_desc.group(1)
        if 'Unfixed Studio' in description:
            print("✅ Meta description encontrada (inglês)")
        elif 'Chacal' in description:
            print("✅ Meta description encontrada (português)")
        else:
            print("⚠️ Meta description encontrada mas conteúdo não reconhecido")
            
        return True
        
    except Exception as e:
        print(f"❌ Erro ao verificar meta tags: {e}")
        return False

def create_simple_test_page():
    """Cria uma página de teste simples para verificar o seletor"""
    print("\n🔧 Criando página de teste simples...")
    
    test_content = '''<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste Chacal - Seletor de Idioma</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .test { margin: 20px 0; padding: 15px; border: 1px solid #ddd; }
        .status { padding: 10px; margin: 10px 0; border-radius: 5px; }
        .success { background: #d4edda; color: #155724; }
        .error { background: #f8d7da; color: #721c24; }
    </style>
</head>
<body>
    <h1>Teste do Seletor de Idioma</h1>
    
    <div class="test">
        <h2>Navegação</h2>
        <p>Home | About | Work | Blog | Contact</p>
    </div>
    
    <div class="test">
        <h2>Botões</h2>
        <p>Get in touch | View all | Read more</p>
    </div>
    
    <div class="test">
        <h2>Descrição</h2>
        <p>Unfixed Studio is a creative agency that specializes in delivering innovative digital solutions.</p>
    </div>
    
    <div id="status" class="status">Verificando...</div>
    
    <script src="./language-switcher.js"></script>
    
    <script>
        setTimeout(() => {
            const status = document.getElementById('status');
            const selector = document.querySelector('.chacal-language-selector');
            
            if (selector) {
                status.textContent = '✅ Seletor de idioma funcionando!';
                status.className = 'status success';
            } else {
                status.textContent = '❌ Seletor de idioma não encontrado';
                status.className = 'status error';
            }
        }, 2000);
    </script>
</body>
</html>'''
    
    try:
        with open('teste-simples.html', 'w', encoding='utf-8') as f:
            f.write(test_content)
        print("✅ Página de teste criada: teste-simples.html")
        return True
    except Exception as e:
        print(f"❌ Erro ao criar página de teste: {e}")
        return False

def main():
    """Função principal"""
    print("🚀 Verificação e Correção do Seletor de Idioma - Chacal.me")
    print("=" * 60)
    
    # Verificações
    script_ok = check_script_file()
    inclusion_ok = check_script_inclusion()
    meta_ok = check_meta_tags()
    
    # Criar página de teste
    test_ok = create_simple_test_page()
    
    print("\n" + "=" * 60)
    print("📊 RESUMO DA VERIFICAÇÃO:")
    print(f"   Script file: {'✅' if script_ok else '❌'}")
    print(f"   Script inclusion: {'✅' if inclusion_ok else '❌'}")
    print(f"   Meta tags: {'✅' if meta_ok else '❌'}")
    print(f"   Test page: {'✅' if test_ok else '❌'}")
    
    if all([script_ok, inclusion_ok, meta_ok, test_ok]):
        print("\n🎉 Tudo parece estar funcionando corretamente!")
        print("\n📝 PRÓXIMOS PASSOS:")
        print("   1. Abra 'teste-simples.html' no navegador")
        print("   2. Verifique se o seletor de idioma aparece no canto superior direito")
        print("   3. Teste a troca entre português e inglês")
        print("   4. Se funcionar, o problema pode ser específico do site Framer")
    else:
        print("\n⚠️ Alguns problemas foram encontrados. Verifique os erros acima.")
    
    print("\n💡 DICAS:")
    print("   - O seletor aparece como um botão fixo no canto superior direito")
    print("   - Se não aparecer, verifique o console do navegador (F12)")
    print("   - O site Framer pode demorar para carregar completamente")

if __name__ == "__main__":
    main()