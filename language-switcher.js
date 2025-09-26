// Language Switcher for Chacal.me - Safe Version
(function() {
    'use strict';
    
    // Configurações básicas
    const CONFIG = {
        storageKey: 'chacal-language',
        defaultLanguage: 'pt'
    };
    
    // Traduções essenciais
    const TRANSLATIONS = {
        pt: {
            'Home': 'Início',
            'About': 'Sobre',
            'Work': 'Trabalhos',
            'Blog': 'Blog',
            'Contact': 'Contato',
            'Get in touch': 'Entre em contato',
            'View all': 'Ver todos',
            'Read more': 'Ler mais',
            'Learn more': 'Saiba mais',
            'Get started': 'Começar',
            'Let\'s talk': 'Vamos conversar',
            'Start a project': 'Iniciar projeto',
            'Contact Us': 'Entre em contato',
            'Creative': 'Criativo',
            'Digital': 'Digital',
            'Studio': 'Estúdio',
            'Agency': 'Agência',
            'Design': 'Design',
            'Experience': 'Experiência',
            'Innovation': 'Inovação',
            'Brand': 'Marca',
            'Website': 'Website',
            'Solution': 'Solução',
            'Portfolio': 'Portfólio',
            'Services': 'Serviços',
            'Projects': 'Projetos',
            'Our work': 'Nossos trabalhos',
            'What we do': 'O que fazemos',
            'Who we are': 'Quem somos',
            'Our team': 'Nossa equipe',
            'TERMS AND CONDITIONS': 'TERMOS E CONDIÇÕES',
            'PRIVACY POLICY': 'POLÍTICA DE PRIVACIDADE'
        },
        en: {
            'Início': 'Home',
            'Sobre': 'About',
            'Trabalhos': 'Work',
            'Blog': 'Blog',
            'Contato': 'Contact',
            'Entre em contato': 'Get in touch',
            'Ver todos': 'View all',
            'Ler mais': 'Read more',
            'Saiba mais': 'Learn more',
            'Começar': 'Get started',
            'Vamos conversar': 'Let\'s talk',
            'Iniciar projeto': 'Start a project',
            'Criativo': 'Creative',
            'Digital': 'Digital',
            'Estúdio': 'Studio',
            'Agência': 'Agency',
            'Design': 'Design',
            'Experiência': 'Experience',
            'Inovação': 'Innovation',
            'Marca': 'Brand',
            'Website': 'Website',
            'Solução': 'Solution',
            'Portfólio': 'Portfolio',
            'Serviços': 'Services',
            'Projetos': 'Projects',
            'Nossos trabalhos': 'Our work',
            'O que fazemos': 'What we do',
            'Quem somos': 'Who we are',
            'Nossa equipe': 'Our team',
            'TERMOS E CONDIÇÕES': 'TERMS AND CONDITIONS',
            'POLÍTICA DE PRIVACIDADE': 'PRIVACY POLICY'
        }
    };
    
    class SimpleLanguageSwitcher {
        constructor() {
            this.currentLanguage = this.getStoredLanguage() || CONFIG.defaultLanguage;
            this.selector = null;
            this.isInitialized = false;
            
            this.init();
        }
        
        getStoredLanguage() {
            try {
                return localStorage.getItem(CONFIG.storageKey);
            } catch (e) {
                return null;
            }
        }
        
        setStoredLanguage(lang) {
            try {
                localStorage.setItem(CONFIG.storageKey, lang);
            } catch (e) {
                console.warn('Erro ao salvar no localStorage:', e);
            }
        }
        
        init() {
            if (this.isInitialized) return;
            
            // Aguardar o carregamento da página
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this.delayedInit();
                });
            } else {
                this.delayedInit();
            }
        }
        
        delayedInit() {
            // Aguardar mais tempo para o Framer carregar
            setTimeout(() => {
                this.createLanguageSelector();
                this.applyLanguage(this.currentLanguage);
                this.isInitialized = true;
                console.log('🌐 Chacal Language Switcher inicializado');
            }, 3000);
        }
        
        createLanguageSelector() {
            // Remover seletor existente
            const existingSelector = document.querySelector('.chacal-language-selector');
            if (existingSelector) {
                existingSelector.remove();
            }
            
            // Criar container
            this.selector = document.createElement('div');
            this.selector.className = 'chacal-language-selector';
            this.selector.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            `;
            
            // Criar botão
            const button = document.createElement('button');
            button.className = 'chacal-language-button';
            button.style.cssText = `
                background: rgba(255, 255, 255, 0.95);
                border: 1px solid rgba(0, 0, 0, 0.1);
                color: #333;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                padding: 10px 16px;
                border-radius: 8px;
                transition: all 0.3s ease;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(10px);
                outline: none;
                user-select: none;
            `;
            
            button.innerHTML = `
                <span class="chacal-current-lang">${this.currentLanguage.toUpperCase()}</span>
                <span class="chacal-arrow" style="margin-left: 8px; transition: transform 0.3s ease; font-size: 12px;">▼</span>
            `;
            
            // Criar dropdown
            const dropdown = document.createElement('div');
            dropdown.className = 'chacal-language-dropdown';
            dropdown.style.cssText = `
                position: absolute;
                top: 100%;
                right: 0;
                background: white;
                border: 1px solid rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: all 0.3s ease;
                z-index: 10000;
                min-width: 140px;
                margin-top: 4px;
                overflow: hidden;
            `;
            
            dropdown.innerHTML = `
                <div class="chacal-language-option" data-lang="pt" style="padding: 12px 16px; cursor: pointer; border-bottom: 1px solid #f0f0f0; transition: background-color 0.2s ease; display: flex; align-items: center; font-size: 14px;">
                    <span style="font-size: 16px; margin-right: 8px;">🇧🇷</span>
                    <span>Português</span>
                </div>
                <div class="chacal-language-option" data-lang="en" style="padding: 12px 16px; cursor: pointer; transition: background-color 0.2s ease; display: flex; align-items: center; font-size: 14px;">
                    <span style="font-size: 16px; margin-right: 8px;">🇺🇸</span>
                    <span>English</span>
                </div>
            `;
            
            // Event listeners
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleDropdown();
            });
            
            dropdown.querySelectorAll('.chacal-language-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const lang = option.dataset.lang;
                    this.switchLanguage(lang);
                    this.hideDropdown();
                });
            });
            
            document.addEventListener('click', (e) => {
                if (!this.selector.contains(e.target)) {
                    this.hideDropdown();
                }
            });
            
            // Montar
            this.selector.appendChild(button);
            this.selector.appendChild(dropdown);
            document.body.appendChild(this.selector);
            
            this.button = button;
            this.dropdown = dropdown;
        }
        
        toggleDropdown() {
            const isVisible = this.dropdown.style.visibility === 'visible';
            if (isVisible) {
                this.hideDropdown();
            } else {
                this.showDropdown();
            }
        }
        
        showDropdown() {
            this.dropdown.style.opacity = '1';
            this.dropdown.style.visibility = 'visible';
            this.dropdown.style.transform = 'translateY(0)';
            this.button.querySelector('.chacal-arrow').style.transform = 'rotate(180deg)';
        }
        
        hideDropdown() {
            this.dropdown.style.opacity = '0';
            this.dropdown.style.visibility = 'hidden';
            this.dropdown.style.transform = 'translateY(-10px)';
            this.button.querySelector('.chacal-arrow').style.transform = 'rotate(0deg)';
        }
        
        switchLanguage(lang) {
            if (lang === this.currentLanguage) return;
            
            this.currentLanguage = lang;
            this.setStoredLanguage(lang);
            this.applyLanguage(lang);
            
            this.button.querySelector('.chacal-current-lang').textContent = lang.toUpperCase();
        }
        
        applyLanguage(lang) {
            const translations = TRANSLATIONS[lang];
            if (!translations) return;
            
            // Atualizar meta descriptions
            this.updateMetaDescriptions(translations);
            
            // Traduzir conteúdo de forma segura
            this.safeTranslateContent(translations);
        }
        
        updateMetaDescriptions(translations) {
            // Atualizar meta description
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                const currentDesc = metaDesc.getAttribute('content');
                if (currentDesc.includes('Chacal')) {
                    metaDesc.setAttribute('content', 'Unfixed Studio is a creative agency that specializes in delivering innovative digital solutions. We craft exceptional websites and digital experiences that help brands thrive in today\'s fast-paced digital landscape.');
                } else {
                    metaDesc.setAttribute('content', 'Na Chacal, transformamos ideias em experiências digitais únicas, unindo design, tecnologia e automação inteligente para gerar impacto real e resultados mensuráveis.');
                }
            }
        }
        
        safeTranslateContent(translations) {
            // Traduzir apenas elementos específicos de forma segura
            try {
                const elements = document.querySelectorAll('*');
                elements.forEach(el => {
                    if (el.textContent && el.children.length === 0) {
                        const text = el.textContent.trim();
                        if (translations[text]) {
                            el.textContent = translations[text];
                        }
                    }
                });
            } catch (e) {
                console.warn('Erro na tradução:', e);
            }
        }
    }
    
    // Inicializar de forma segura
    try {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                new SimpleLanguageSwitcher();
            });
        } else {
            new SimpleLanguageSwitcher();
        }
    } catch (e) {
        console.warn('Erro ao inicializar seletor de idioma:', e);
    }
    
})();