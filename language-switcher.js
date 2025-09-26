// Language Switcher for Chacal.me
// Enhanced version for Framer sites with React rendering

(function() {
    'use strict';
    
    // Configurações
    const CONFIG = {
        storageKey: 'chacal-language',
        defaultLanguage: 'pt',
        selectorPosition: 'fixed', // fixed ou relative
        selectorTop: '20px',
        selectorRight: '20px',
        selectorZIndex: 9999
    };
    
    // Traduções
    const TRANSLATIONS = {
        pt: {
            // Navigation
            'Home': 'Início',
            'About': 'Sobre',
            'Work': 'Trabalhos',
            'Blog': 'Blog',
            'Contact': 'Contato',
            
            // Buttons
            'Get in touch': 'Entre em contato',
            'View all': 'Ver todos',
            'Read more': 'Ler mais',
            'Learn more': 'Saiba mais',
            'See all': 'Ver todos',
            'View project': 'Ver projeto',
            'View case study': 'Ver case study',
            'Get started': 'Começar',
            'Let\'s talk': 'Vamos conversar',
            'Start a project': 'Iniciar projeto',
            'Contact Us': 'Entre em contato',
            
            // Content
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
            'Case studies': 'Cases de estudo',
            'Our work': 'Nossos trabalhos',
            'What we do': 'O que fazemos',
            'Who we are': 'Quem somos',
            'Our team': 'Nossa equipe',
            
            // Descriptions
            'Unfixed Studio is a creative agency that specializes in delivering innovative digital solutions. We craft exceptional websites and digital experiences that help brands thrive in today\'s fast-paced digital landscape.': 'Na Chacal, transformamos ideias em experiências digitais únicas, unindo design, tecnologia e automação inteligente para gerar impacto real e resultados mensuráveis.',
            
            // Footer
            'TERMS AND CONDITIONS': 'TERMOS E CONDIÇÕES',
            'PRIVACY POLICY': 'POLÍTICA DE PRIVACIDADE',
            
            // Common phrases
            'Have a project in mind? Get in touch with us today and let\'s transform your vision into a digital experience that stands out.': 'Tem um projeto em mente? Entre em contato conosco hoje e vamos transformar sua visão em uma experiência digital que se destaque.',
            'Into Masterpieces': 'Em Obras-Primas'
        },
        en: {
            // Navigation
            'Início': 'Home',
            'Sobre': 'About',
            'Trabalhos': 'Work',
            'Blog': 'Blog',
            'Contato': 'Contact',
            
            // Buttons
            'Entre em contato': 'Get in touch',
            'Ver todos': 'View all',
            'Ler mais': 'Read more',
            'Saiba mais': 'Learn more',
            'Ver projeto': 'View project',
            'Ver case study': 'View case study',
            'Começar': 'Get started',
            'Vamos conversar': 'Let\'s talk',
            'Iniciar projeto': 'Start a project',
            
            // Content
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
            'Cases de estudo': 'Case studies',
            'Nossos trabalhos': 'Our work',
            'O que fazemos': 'What we do',
            'Quem somos': 'Who we are',
            'Nossa equipe': 'Our team',
            
            // Descriptions
            'Na Chacal, transformamos ideias em experiências digitais únicas, unindo design, tecnologia e automação inteligente para gerar impacto real e resultados mensuráveis.': 'Unfixed Studio is a creative agency that specializes in delivering innovative digital solutions. We craft exceptional websites and digital experiences that help brands thrive in today\'s fast-paced digital landscape.',
            
            // Footer
            'TERMOS E CONDIÇÕES': 'TERMS AND CONDITIONS',
            'POLÍTICA DE PRIVACIDADE': 'PRIVACY POLICY',
            
            // Common phrases
            'Tem um projeto em mente? Entre em contato conosco hoje e vamos transformar sua visão em uma experiência digital que se destaque.': 'Have a project in mind? Get in touch with us today and let\'s transform your vision into a digital experience that stands out.',
            'Em Obras-Primas': 'Into Masterpieces'
        }
    };
    
    // Classe principal
    class ChacalLanguageSwitcher {
        constructor() {
            this.currentLanguage = this.getStoredLanguage() || CONFIG.defaultLanguage;
            this.selector = null;
            this.isInitialized = false;
            this.retryCount = 0;
            this.maxRetries = 10;
            
            this.init();
        }
        
        getStoredLanguage() {
            try {
                return localStorage.getItem(CONFIG.storageKey);
            } catch (e) {
                console.warn('Erro ao acessar localStorage:', e);
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
                    this.waitForFramerAndInit();
                });
            } else {
                this.waitForFramerAndInit();
            }
        }
        
        waitForFramerAndInit() {
            const checkFramer = () => {
                // Verificar se o Framer carregou
                const framerLoaded = window.React || 
                                   document.querySelector('[data-framer-name]') ||
                                   document.querySelector('.framer-9stb5t') ||
                                   document.querySelector('script[src*="framer"]');
                
                if (framerLoaded || this.retryCount >= this.maxRetries) {
                    setTimeout(() => {
                        this.createLanguageSelector();
                        this.applyLanguage(this.currentLanguage);
                        this.isInitialized = true;
                        console.log('🌐 Chacal Language Switcher inicializado');
                    }, 1000);
                } else {
                    this.retryCount++;
                    setTimeout(checkFramer, 500);
                }
            };
            checkFramer();
        }
        
        createLanguageSelector() {
            // Remover seletor existente se houver
            const existingSelector = document.querySelector('.chacal-language-selector');
            if (existingSelector) {
                existingSelector.remove();
            }
            
            // Criar container do seletor
            this.selector = document.createElement('div');
            this.selector.className = 'chacal-language-selector';
            this.selector.style.cssText = `
                position: ${CONFIG.selectorPosition};
                top: ${CONFIG.selectorTop};
                right: ${CONFIG.selectorRight};
                z-index: ${CONFIG.selectorZIndex};
                display: inline-block;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            `;
            
            // Criar botão do seletor
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
                border-radius: 12px;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                text-transform: uppercase;
                letter-spacing: 0.5px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
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
                border-radius: 12px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px) scale(0.95);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                z-index: 10000;
                min-width: 160px;
                margin-top: 8px;
                overflow: hidden;
            `;
            
            dropdown.innerHTML = `
                <div class="chacal-language-option" data-lang="pt" style="padding: 14px 18px; cursor: pointer; border-bottom: 1px solid rgba(0, 0, 0, 0.05); transition: background-color 0.2s ease; display: flex; align-items: center; font-size: 14px; font-weight: 500;">
                    <span style="font-size: 18px; margin-right: 12px;">🇧🇷</span>
                    <span>Português</span>
                </div>
                <div class="chacal-language-option" data-lang="en" style="padding: 14px 18px; cursor: pointer; transition: background-color 0.2s ease; display: flex; align-items: center; font-size: 14px; font-weight: 500;">
                    <span style="font-size: 18px; margin-right: 12px;">🇺🇸</span>
                    <span>English</span>
                </div>
            `;
            
            // Adicionar efeitos hover ao botão
            button.addEventListener('mouseenter', () => {
                button.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                button.style.transform = 'translateY(-2px)';
                button.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                button.style.transform = 'translateY(0)';
                button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            });
            
            // Adicionar handler de clique
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleDropdown();
            });
            
            // Adicionar handlers das opções
            dropdown.querySelectorAll('.chacal-language-option').forEach(option => {
                option.addEventListener('mouseenter', () => {
                    option.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                });
                
                option.addEventListener('mouseleave', () => {
                    option.style.backgroundColor = 'transparent';
                });
                
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const lang = option.dataset.lang;
                    this.switchLanguage(lang);
                    this.hideDropdown();
                });
            });
            
            // Fechar dropdown ao clicar fora
            document.addEventListener('click', (e) => {
                if (!this.selector.contains(e.target)) {
                    this.hideDropdown();
                }
            });
            
            // Montar o seletor
            this.selector.appendChild(button);
            this.selector.appendChild(dropdown);
            
            // Inserir no DOM
            document.body.appendChild(this.selector);
            
            // Salvar referências
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
            this.dropdown.style.transform = 'translateY(0) scale(1)';
            this.button.querySelector('.chacal-arrow').style.transform = 'rotate(180deg)';
        }
        
        hideDropdown() {
            this.dropdown.style.opacity = '0';
            this.dropdown.style.visibility = 'hidden';
            this.dropdown.style.transform = 'translateY(-10px) scale(0.95)';
            this.button.querySelector('.chacal-arrow').style.transform = 'rotate(0deg)';
        }
        
        switchLanguage(lang) {
            if (lang === this.currentLanguage) return;
            
            this.currentLanguage = lang;
            this.setStoredLanguage(lang);
            this.applyLanguage(lang);
            
            // Atualizar texto do botão
            this.button.querySelector('.chacal-current-lang').textContent = lang.toUpperCase();
            
            // Feedback visual
            this.button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.button.style.transform = 'scale(1)';
            }, 150);
        }
        
        applyLanguage(lang) {
            const translations = TRANSLATIONS[lang];
            if (!translations) return;
            
            // Atualizar meta descriptions
            this.updateMetaDescriptions(translations);
            
            // Atualizar conteúdo da página
            this.updatePageContent(translations);
        }
        
        updateMetaDescriptions(translations) {
            const metaDescription = translations['Unfixed Studio is a creative agency that specializes in delivering innovative digital solutions. We craft exceptional websites and digital experiences that help brands thrive in today\'s fast-paced digital landscape.'];
            
            if (metaDescription) {
                // Atualizar meta description
                const metaDesc = document.querySelector('meta[name="description"]');
                if (metaDesc) {
                    metaDesc.setAttribute('content', metaDescription);
                }
                
                // Atualizar Open Graph description
                const ogDesc = document.querySelector('meta[property="og:description"]');
                if (ogDesc) {
                    ogDesc.setAttribute('content', metaDescription);
                }
                
                // Atualizar Twitter description
                const twitterDesc = document.querySelector('meta[name="twitter:description"]');
                if (twitterDesc) {
                    twitterDesc.setAttribute('content', metaDescription);
                }
            }
        }
        
        updatePageContent(translations) {
            // Aguardar um pouco para garantir que o React renderizou
            setTimeout(() => {
                // Atualizar todos os nós de texto
                const walker = document.createTreeWalker(
                    document.body,
                    NodeFilter.SHOW_TEXT,
                    null,
                    false
                );
                
                let node;
                while (node = walker.nextNode()) {
                    const text = node.textContent.trim();
                    if (translations[text]) {
                        node.textContent = translations[text];
                    }
                }
                
                // Atualizar elementos específicos
                Object.keys(translations).forEach(original => {
                    const translated = translations[original];
                    
                    // Atualizar elementos com texto específico
                    const elements = document.querySelectorAll('*');
                    elements.forEach(el => {
                        if (el.textContent && el.textContent.trim() === original) {
                            el.textContent = translated;
                        }
                    });
                });
            }, 500);
        }
    }
    
    // Inicializar quando a página carregar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new ChacalLanguageSwitcher();
        });
    } else {
        new ChacalLanguageSwitcher();
    }
    
    // Expor globalmente para debug
    window.ChacalLanguageSwitcher = ChacalLanguageSwitcher;
    
})();