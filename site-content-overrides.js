(function(){
	'use strict';
	const JSON_PATH = (function(){
		// Detect relative path based on current page depth
		try {
			const path = window.location.pathname;
			const depth = (path.match(/\//g) || []).length - 1; // ignore trailing
			if (depth >= 2) return '../../chacal-content.json';
			if (depth === 1) return '../chacal-content.json';
			return './chacal-content.json';
		} catch(e) { return './chacal-content.json'; }
	})();

	function fetchJson(url){
		return fetch(url, { cache: 'no-store' }).then(r => r.json());
	}

	function setTextPreservingSpans(element, text){
		// Many Framer texts are split per-letter spans. We assign to aria-label or data attributes when possible.
		try {
			// Strategy:
			// 1) If element has aria-label, set it (Framer often reads from it) and try data-text attribute
			if (element.hasAttribute('aria-label')) {
				element.setAttribute('aria-label', text);
			}
			// 2) For elements with content split, try to map words to child wrappers
			const children = Array.from(element.children);
			if (children.length > 0 && children.every(ch => ch.textContent && ch.children.length === 0)) {
				// If all are text spans, distribute characters safely
				const chars = Array.from(text);
				for (let i=0; i<children.length; i++) {
					children[i].textContent = chars[i] ?? '';
				}
				return;
			}
			// 3) Fallback: set textContent if no children or complex structure
			element.textContent = text;
		} catch (e) {
			try { element.textContent = text; } catch(_) {}
		}
	}

	function setIfContains(selectorList, matcher, newText){
		for (const sel of selectorList) {
			const nodes = document.querySelectorAll(sel);
			for (const el of nodes) {
				const current = (el.textContent || '').trim();
				if (!current) continue;
				if (matcher(current, el)) {
					setTextPreservingSpans(el, newText);
				}
			}
		}
	}

	function updateHero(data){
		if (!data.hero) return;
		const selectors = ['h1','[data-framer-component-type="RichText"]','[data-framer-name]'];
		// Title
		setIfContains(selectors, (cur)=> /Creative|Criatividade|Criativo/i.test(cur), data.hero.title);
		// Subtitle
		setIfContains(selectors, (cur)=> cur.length > 60 && /experi[eê]ncias|experiences|digital/i.test(cur), data.hero.subtitle);
		// CTA
		setIfContains(['button','a[role="button"]','[data-framer-name]'], (cur)=> /Get started|Começar|Start a project|Iniciar projeto|Let's talk|Entre em contato/i.test(cur), data.hero.cta);
	}

	function updateAbout(data){
		if (!data.about) return;
		// Bio paragraphs
		setIfContains(['p','[data-framer-component-type="RichText"]'], (cur)=> cur.length > 100 && /anos|years|experi[eê]ncia|experience/i.test(cur), data.about.bio);
		// Philosophy/Differentiators lists
		const listSelectors = ['li','[role="listitem"]'];
		const { philosophy = [], differentiators = [], stats = [] } = data.about;
		const listTexts = [...philosophy, ...differentiators, ...stats];
		let i = 0;
		for (const sel of listSelectors) {
			const els = document.querySelectorAll(sel);
			for (const el of els) {
				if (i >= listTexts.length) break;
				const cur = (el.textContent || '').trim();
				if (cur && cur.length < 80) {
					setTextPreservingSpans(el, listTexts[i++]);
				}
			}
			if (i >= listTexts.length) break;
		}
	}

	function updateServices(data){
		if (!Array.isArray(data.services)) return;
		// Look for service cards: titles likely short; descriptions medium length
		const headings = Array.from(document.querySelectorAll('h2,h3,[role="heading"]'));
		for (const svc of data.services) {
			// find closest heading that still looks generic
			const target = headings.find(h => /Design|Estrat[eé]gia|Motion|Marketing|Brand|Desenvolvimento/i.test((h.textContent||'')));
			if (target) {
				setTextPreservingSpans(target, svc.name);
				// description element near heading
				let desc = target.nextElementSibling;
				for (let k=0; k<3 && desc; k++) {
					if (desc && desc.tagName && /P|DIV/.test(desc.tagName)) {
						const len = (desc.textContent||'').trim().length;
						if (len > 30 && len < 400) { setTextPreservingSpans(desc, svc.description); break; }
					}
					desc = desc.nextElementSibling;
				}
			}
		}
	}

	function updateProjects(data){
		if (!Array.isArray(data.projects)) return;
		// Replace project card titles if they look like placeholders
		const cards = Array.from(document.querySelectorAll('[data-framer-name], article, section'));
		let idx = 0;
		for (const proj of data.projects) {
			if (idx >= cards.length) break;
			const card = cards[idx++];
			// Title
			const h = card.querySelector('h3,h2,[role="heading"]');
			if (h) setTextPreservingSpans(h, proj.name);
			// Short blurb
			const p = card.querySelector('p');
			if (p) setTextPreservingSpans(p, `${proj.solution} • ${proj.results}`);
		}
	}

	function updateTestimonials(data){
		if (!Array.isArray(data.testimonials)) return;
		const quoteEls = document.querySelectorAll('blockquote,q,[data-framer-component-type="RichText"] p');
		let qi = 0;
		for (const t of data.testimonials) {
			const el = quoteEls[qi++];
			if (!el) break;
			setTextPreservingSpans(el, `"${t.quote}" — ${t.name}, ${t.role}`);
		}
	}

	function updateBlog(data){
		if (!Array.isArray(data.blog)) return;
		const posts = Array.from(document.querySelectorAll('article, [data-framer-name]'));
		let i = 0;
		for (const b of data.blog) {
			if (i >= posts.length) break;
			const post = posts[i++];
			const title = post.querySelector('h2,h3,[role="heading"]');
			if (title) setTextPreservingSpans(title, b.title);
			const summary = post.querySelector('p');
			if (summary) setTextPreservingSpans(summary, b.summary);
		}
	}

	function updateContact(data){
		if (!data.contact) return;
		setIfContains(['p','[data-framer-component-type="RichText"]'], (cur)=> /resultados reais|real results|proposta de valor/i.test(cur), data.contact.value_proposition);
		// Update contact links (email/WhatsApp)
		const emailLink = document.querySelector('a[href^="mailto:"]');
		if (emailLink) emailLink.setAttribute('href', `mailto:${data.contact.email}`);
		const waLink = document.querySelector('a[href*="wa.me"], a[href*="whatsapp.com"]');
		if (waLink) waLink.setAttribute('href', `https://wa.me/${data.site_info.whatsapp.replace(/\D/g,'')}`);
	}

	function runOverrides(data){
		updateHero(data);
		updateAbout(data);
		updateServices(data);
		updateProjects(data);
		updateTestimonials(data);
		updateBlog(data);
		updateContact(data);
	}

	function init(){
		const start = () => {
			fetchJson(JSON_PATH)
				.then(data => { try { runOverrides(data); } catch(e) { } })
				.catch(()=>{});
		};
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', ()=> setTimeout(start, 1500));
		} else {
			setTimeout(start, 1500);
		}
	}
	try { init(); } catch(e) {}
})();