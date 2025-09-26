// Language Switcher for Unfixed Studio
// Integrates with existing Framer animations

class LanguageSwitcher {
    constructor() {
        this.currentLanguage = this.getStoredLanguage() || 'pt';
        this.translations = {
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
                'Unfixed Studio is a creative agency that specializes in delivering innovative digital solutions. We craft exceptional websites and digital experiences that help brands thrive in today\'s fast-paced digital landscape.': 'Unfixed Studio é uma agência criativa que se especializa em entregar soluções digitais inovadoras. Criamos websites e experiências digitais excepcionais que ajudam marcas a prosperar no cenário digital acelerado de hoje.',
                
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
                'Unfixed Studio é uma agência criativa que se especializa em entregar soluções digitais inovadoras. Criamos websites e experiências digitais excepcionais que ajudam marcas a prosperar no cenário digital acelerado de hoje.': 'Unfixed Studio is a creative agency that specializes in delivering innovative digital solutions. We craft exceptional websites and digital experiences that help brands thrive in today\'s fast-paced digital landscape.',
                
                // Footer
                'TERMOS E CONDIÇÕES': 'TERMS AND CONDITIONS',
                'POLÍTICA DE PRIVACIDADE': 'PRIVACY POLICY',
                
                // Common phrases
                'Tem um projeto em mente? Entre em contato conosco hoje e vamos transformar sua visão em uma experiência digital que se destaque.': 'Have a project in mind? Get in touch with us today and let\'s transform your vision into a digital experience that stands out.',
                'Em Obras-Primas': 'Into Masterpieces'
            }
        };
        
        this.init();
    }
    
    getStoredLanguage() {
        return localStorage.getItem('unfixed-studio-language');
    }
    
    setStoredLanguage(lang) {
        localStorage.setItem('unfixed-studio-language', lang);
    }
    
    init() {
        this.createLanguageSelector();
        this.applyLanguage(this.currentLanguage);
        this.bindEvents();
    }
    
    createLanguageSelector() {
        // Find the navigation container
        const navContainer = document.querySelector('[data-framer-name="Navigation"]') || 
                           document.querySelector('.framer-9stb5t') ||
                           document.querySelector('footer .framer-1jpqva6');
        
        if (!navContainer) {
            console.warn('Navigation container not found');
            return;
        }
        
        // Create language selector
        const languageSelector = document.createElement('div');
        languageSelector.className = 'language-selector';
        languageSelector.style.cssText = `
            position: relative;
            display: inline-block;
            margin-left: 20px;
        `;
        
        // Create the selector button
        const selectorButton = document.createElement('button');
        selectorButton.className = 'language-button';
        selectorButton.style.cssText = `
            background: none;
            border: none;
            color: var(--token-7ab5faa8-d17b-41d2-8b42-49368cf2f4df, rgb(34, 39, 37));
            font-family: "Inter", sans-serif;
            font-size: 14px;
            font-weight: 400;
            cursor: pointer;
            padding: 8px 12px;
            border-radius: 4px;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        `;
        
        selectorButton.innerHTML = `
            <span class="current-lang">${this.currentLanguage.toUpperCase()}</span>
            <span class="arrow" style="margin-left: 8px; transition: transform 0.3s ease;">▼</span>
        `;
        
        // Create dropdown
        const dropdown = document.createElement('div');
        dropdown.className = 'language-dropdown';
        dropdown.style.cssText = `
            position: absolute;
            top: 100%;
            right: 0;
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 1000;
            min-width: 120px;
        `;
        
        dropdown.innerHTML = `
            <div class="language-option" data-lang="pt" style="padding: 12px 16px; cursor: pointer; border-bottom: 1px solid #f0f0f0; transition: background-color 0.2s ease;">
                <span style="font-weight: 600; margin-right: 8px;">🇧🇷</span>Português
            </div>
            <div class="language-option" data-lang="en" style="padding: 12px 16px; cursor: pointer; transition: background-color 0.2s ease;">
                <span style="font-weight: 600; margin-right: 8px;">🇺🇸</span>English
            </div>
        `;
        
        // Add hover effects
        selectorButton.addEventListener('mouseenter', () => {
            selectorButton.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
        });
        
        selectorButton.addEventListener('mouseleave', () => {
            selectorButton.style.backgroundColor = 'transparent';
        });
        
        // Add click handler
        selectorButton.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleDropdown();
        });
        
        // Add option click handlers
        dropdown.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('mouseenter', () => {
                option.style.backgroundColor = '#f8f8f8';
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
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!languageSelector.contains(e.target)) {
                this.hideDropdown();
            }
        });
        
        languageSelector.appendChild(selectorButton);
        languageSelector.appendChild(dropdown);
        
        // Insert into navigation
        navContainer.appendChild(languageSelector);
        
        this.selectorButton = selectorButton;
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
        this.selectorButton.querySelector('.arrow').style.transform = 'rotate(180deg)';
    }
    
    hideDropdown() {
        this.dropdown.style.opacity = '0';
        this.dropdown.style.visibility = 'hidden';
        this.dropdown.style.transform = 'translateY(-10px)';
        this.selectorButton.querySelector('.arrow').style.transform = 'rotate(0deg)';
    }
    
    switchLanguage(lang) {
        if (lang === this.currentLanguage) return;
        
        this.currentLanguage = lang;
        this.setStoredLanguage(lang);
        this.applyLanguage(lang);
        
        // Update button text
        this.selectorButton.querySelector('.current-lang').textContent = lang.toUpperCase();
    }
    
    applyLanguage(lang) {
        const translations = this.translations[lang];
        if (!translations) return;
        
        // Update meta descriptions
        this.updateMetaDescriptions(translations);
        
        // Update text content
        this.updateTextContent(translations);
        
        // Update page title if needed
        this.updatePageTitle(lang);
    }
    
    updateMetaDescriptions(translations) {
        const metaDescription = translations['Unfixed Studio is a creative agency that specializes in delivering innovative digital solutions. We craft exceptional websites and digital experiences that help brands thrive in today\'s fast-paced digital landscape.'];
        
        if (metaDescription) {
            // Update meta description
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', metaDescription);
            }
            
            // Update Open Graph description
            const ogDesc = document.querySelector('meta[property="og:description"]');
            if (ogDesc) {
                ogDesc.setAttribute('content', metaDescription);
            }
            
            // Update Twitter description
            const twitterDesc = document.querySelector('meta[name="twitter:description"]');
            if (twitterDesc) {
                twitterDesc.setAttribute('content', metaDescription);
            }
        }
    }
    
    updateTextContent(translations) {
        // Update all text nodes
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
        
        // Update specific elements that might be in attributes or special containers
        Object.keys(translations).forEach(original => {
            const translated = translations[original];
            
            // Update elements with specific text content
            const elements = document.querySelectorAll('*');
            elements.forEach(el => {
                if (el.textContent.trim() === original) {
                    el.textContent = translated;
                }
            });
        });
    }
    
    updatePageTitle(lang) {
        // Update page title based on language
        const titles = {
            pt: 'UNFIXED STUDIO',
            en: 'UNFIXED STUDIO'
        };
        
        if (titles[lang]) {
            document.title = titles[lang];
        }
    }
    
    bindEvents() {
        // Add any additional event bindings here
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
});

// Also initialize if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new LanguageSwitcher();
    });
} else {
    new LanguageSwitcher();
}