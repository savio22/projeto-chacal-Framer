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
            // Forçar português como idioma padrão, sem UI
            this.currentLanguage = 'pt';
            this.selector = null;
            this.isInitialized = false;
            this.mobileInjectionDone = false;
            this.menuObserver = null;
            
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
                // Força PT e não cria UI
                try { this.setStoredLanguage && this.setStoredLanguage('pt'); } catch(e) {}
                this.currentLanguage = 'pt';
                this.applyLanguage('pt');
                this.isInitialized = true;
                console.log('🌐 Tradução forçada para PT ativa');
                // Observar mudanças no DOM para manter PT
                this.startObserver();
            }, 3000);
        }
        
        startObserver() {
            try {
                if (this._mo) return;
                const applyPT = () => {
                    try { this.applyLanguage('pt'); } catch(e) {}
                };
                this._mo = new MutationObserver(() => {
                    applyPT();
                });
                this._mo.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
                // Reaplicar periodicamente como fallback
                this._interval = setInterval(applyPT, 4000);
            } catch (e) {}
        }

        createLanguageSelector() {
            // Intencionalmente vazio: sem UI
        }
        
        onResize() {
            // Ao mudar de viewport, tentar (re)injetar no menu mobile
            this.tryIntegrateIntoMobileMenu();
        }
        
        isMobileViewport() {
            return window.matchMedia('(max-width: 809px)').matches;
        }
        
        tryIntegrateIntoMobileMenu() {
            // Apenas em mobile tentamos mover para o menu
            if (!this.isMobileViewport()) {
                // Mostrar botão flutuante no desktop
                if (this.selector) this.selector.style.display = '';
                this.disconnectMenuObserver();
                this.mobileInjectionDone = false;
                return;
            }
            
            // Tenta injetar imediatamente
            const injected = this.injectIntoMobileNavIfPresent();
            if (injected) {
                // Oculta o botão flutuante no mobile se injeção ok
                if (this.selector) this.selector.style.display = 'none';
                this.mobileInjectionDone = true;
                this.disconnectMenuObserver();
                return;
            }
            
            // Se ainda não encontrou, observar o DOM por alguns segundos para quando o menu abrir
            this.observeMenuOpenAndInject();
        }
        
        observeMenuOpenAndInject() {
            if (this.menuObserver) return; // já observando
            let attempts = 0;
            const maxAttempts = 40; // ~20s em 500ms
            this.menuObserver = new MutationObserver(() => {
                if (attempts++ > maxAttempts) {
                    this.disconnectMenuObserver();
                    return;
                }
                const ok = this.injectIntoMobileNavIfPresent();
                if (ok) {
                    if (this.selector) this.selector.style.display = 'none';
                    this.mobileInjectionDone = true;
                    this.disconnectMenuObserver();
                }
            });
            this.menuObserver.observe(document.body, { childList: true, subtree: true });
        }
        
        disconnectMenuObserver() {
            if (this.menuObserver) {
                try { this.menuObserver.disconnect(); } catch (e) {}
                this.menuObserver = null;
            }
        }
        
        injectIntoMobileNavIfPresent() {
            try {
                if (document.querySelector('[data-chacal-lang-mobile]')) return true; // já inserido
                const navContainer = this.findLikelyMobileNavContainer();
                if (!navContainer) return false;
                const mobileControls = this.createMobileLanguageControls();
                navContainer.appendChild(mobileControls);
                return true;
            } catch (e) {
                return false;
            }
        }
        
        findLikelyMobileNavContainer() {
            // 1) Preferir elementos semânticos
            let nav = document.querySelector('nav[role="navigation"], nav, [role="navigation"]');
            if (nav && this.isLikelyMenuContainer(nav)) return nav;
            
            // 2) Heurística baseada em links de navegação comuns
            const navTexts = [
                'Home','Início','About','Sobre','Work','Trabalhos','Blog','Contact','Contato','Services','Serviços','Projects','Projetos'
            ];
            const anchors = Array.from(document.querySelectorAll('a'))
                .filter(a => {
                    if (!a || !a.textContent) return false;
                    const text = a.textContent.trim();
                    if (!text) return false;
                    const match = navTexts.some(t => text === t || text.includes(t));
                    if (!match) return false;
                    // Ignorar links invisíveis
                    const rect = a.getBoundingClientRect();
                    return rect.width > 0 && rect.height > 0;
                });
            if (anchors.length === 0) return null;
            
            const containerScores = new Map();
            const candidateParents = new Set();
            for (const a of anchors) {
                let parent = a.parentElement;
                let depth = 0;
                while (parent && depth < 6) {
                    candidateParents.add(parent);
                    parent = parent.parentElement;
                    depth++;
                }
            }
            for (const el of candidateParents) {
                const links = el.querySelectorAll('a');
                let score = 0;
                links.forEach(l => {
                    const t = (l.textContent || '').trim();
                    if (navTexts.some(nt => t === nt || t.includes(nt))) score += 1;
                });
                if (score >= 3 && this.isLikelyMenuContainer(el)) {
                    containerScores.set(el, score);
                }
            }
            if (containerScores.size === 0) return null;
            // Escolher o de maior score; em empate, o mais alto na tela
            let best = null;
            let bestScore = -1;
            for (const [el, score] of containerScores.entries()) {
                if (score > bestScore) {
                    best = el; bestScore = score;
                } else if (score === bestScore && best) {
                    const r1 = best.getBoundingClientRect();
                    const r2 = el.getBoundingClientRect();
                    if (r2.top < r1.top) best = el;
                }
            }
            return best;
        }
        
        isLikelyMenuContainer(el) {
            try {
                const rect = el.getBoundingClientRect();
                const styles = window.getComputedStyle(el);
                const z = parseInt(styles.zIndex || '0', 10) || 0;
                const pos = styles.position;
                // Menu móvel geralmente é fixo/absoluto com z-index alto ou perto do topo
                const positionOk = pos === 'fixed' || pos === 'sticky' || pos === 'absolute';
                const topOk = rect.top < window.innerHeight * 0.4; // aparece na parte superior
                return (positionOk && z >= 10) || topOk;
            } catch (e) {
                return false;
            }
        }
        
        createMobileLanguageControls() {
            const container = document.createElement('div');
            container.setAttribute('data-chacal-lang-mobile', 'true');
            container.style.cssText = '
                margin-top: 12px;
                padding: 8px 0;
                border-top: 1px solid rgba(0,0,0,0.08);
            ';
            
            const label = document.createElement('div');
            label.textContent = 'Idioma';
            label.style.cssText = '
                font-size: 14px;
                font-weight: 600;
                margin-bottom: 8px;
                opacity: 0.8;
            ';
            
            const row = document.createElement('div');
            row.style.cssText = 'display:flex; gap:8px;';
            
            const btnPT = document.createElement('button');
            btnPT.type = 'button';
            btnPT.textContent = 'Português';
            btnPT.style.cssText = '
                padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.12);
                background: rgba(255,255,255,0.9); color: #111; font-weight: 600; font-size: 13px;
            ';
            btnPT.addEventListener('click', (e) => { e.stopPropagation(); this.switchLanguage('pt'); });
            
            const btnEN = document.createElement('button');
            btnEN.type = 'button';
            btnEN.textContent = 'English';
            btnEN.style.cssText = '
                padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.12);
                background: rgba(255,255,255,0.9); color: #111; font-weight: 600; font-size: 13px;
            ';
            btnEN.addEventListener('click', (e) => { e.stopPropagation(); this.switchLanguage('en'); });
            
            row.appendChild(btnPT);
            row.appendChild(btnEN);
            container.appendChild(label);
            container.appendChild(row);
            return container;
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
            // Sem alternância pública; sempre PT
            if (lang !== 'pt') lang = 'pt';
            if (lang === this.currentLanguage) return;
            this.currentLanguage = 'pt';
            try { this.setStoredLanguage && this.setStoredLanguage('pt'); } catch(e) {}
            this.applyLanguage('pt');
        }
        
        applyLanguage(lang) {
            const translations = TRANSLATIONS[lang];
            if (!translations) return;
            
            // Atualizar meta/atributo lang conforme idioma escolhido
            this.updateMetaAndLang(lang);
            
            // Traduzir conteúdo de forma segura
            this.safeTranslateContent(translations);
        }
        
        updateMetaAndLang(lang) {
            try {
                // Definir atributo lang do documento
                document.documentElement.setAttribute('lang', lang);
                
                // Descrições por idioma
                const PT_DESC = 'Na Chacal, transformamos ideias em experiências digitais únicas, unindo design, tecnologia e automação inteligente para gerar impacto real e resultados mensuráveis.';
                const EN_DESC = 'At Chacal, we transform ideas into unique digital experiences, combining design, technology, and intelligent automation to drive real impact and measurable results.';
                const content = lang === 'en' ? EN_DESC : PT_DESC;
                
                // meta[name="description"]
                let metaDesc = document.querySelector('meta[name="description"]');
                if (!metaDesc) {
                    metaDesc = document.createElement('meta');
                    metaDesc.setAttribute('name', 'description');
                    document.head.appendChild(metaDesc);
                }
                metaDesc.setAttribute('content', content);
                
                // OpenGraph/Twitter
                const ogDesc = document.querySelector('meta[property="og:description"]');
                if (ogDesc) ogDesc.setAttribute('content', content);
                const twDesc = document.querySelector('meta[name="twitter:description"]');
                if (twDesc) twDesc.setAttribute('content', content);
            } catch (e) {
                // Silenciosamente ignorar
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