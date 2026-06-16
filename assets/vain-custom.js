/**
 * Vain Shades — Custom JavaScript
 * Bold & Editorial. Atlanta Luxury Eyewear.
 * ============================================================ */

'use strict';

/* ============================================================
   SCROLL REVEAL ANIMATION
   ============================================================ */
const vsReveal = {
  init() {
    const elements = document.querySelectorAll('.vs-reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
  },
};

/* ============================================================
   HEADER — SCROLL STATE
   ============================================================ */
const vsHeader = {
  init() {
    const header = document.querySelector('.header');
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 60) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  },
};

/* ============================================================
   CART DRAWER — ENHANCED ANIMATION
   ============================================================ */
const vsCartDrawer = {
  drawer: null,
  overlay: null,

  init() {
    this.drawer = document.querySelector('cart-drawer');
    if (!this.drawer) return;

    // Enhance open/close with smoother animation
    const observer = new MutationObserver(() => {
      if (this.drawer.classList.contains('is-empty')) {
        document.body.classList.remove('overflow-hidden-tablet');
      }
    });

    observer.observe(this.drawer, {
      attributes: true,
      attributeFilter: ['class'],
    });
  },
};

/* ============================================================
   PRODUCT CARD — HOVER IMAGE SWAP
   ============================================================ */
const vsProductCards = {
  init() {
    const cards = document.querySelectorAll('.card-wrapper[data-second-image]');
    cards.forEach((card) => {
      const primaryImg = card.querySelector('.card__media img:first-child');
      const secondSrc = card.dataset.secondImage;

      if (!primaryImg || !secondSrc) return;

      const secondImg = new Image();
      secondImg.src = secondSrc;
      secondImg.className = 'card__secondary-img';
      secondImg.style.cssText = `
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.4s ease;
      `;

      const mediaEl = card.querySelector('.card__media');
      if (mediaEl) {
        mediaEl.style.position = 'relative';
        mediaEl.appendChild(secondImg);

        card.addEventListener('mouseenter', () => {
          primaryImg.style.opacity = '0';
          secondImg.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
          primaryImg.style.opacity = '1';
          secondImg.style.opacity = '0';
        });
      }
    });
  },
};

/* ============================================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================================ */
const vsSmoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  },
};

/* ============================================================
   NEWSLETTER — UX ENHANCEMENT
   ============================================================ */
const vsNewsletter = {
  init() {
    const forms = document.querySelectorAll('.vs-newsletter__form, .email-signup-banner form');
    forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        const input = form.querySelector('input[type="email"], .vs-newsletter__input');
        if (input && !input.value.trim()) {
          e.preventDefault();
          input.focus();
          input.style.borderColor = '#BC3F19';
          setTimeout(() => {
            input.style.borderColor = '';
          }, 2000);
        }
      });
    });
  },
};

/* ============================================================
   ANNOUNCEMENT BAR — LOOPING MARQUEE
   ============================================================ */
const vsMarquee = {
  init() {
    const container = document.querySelector('.announcement-bar') || document.querySelector('.utility-bar');
    if (!container) return;

    const messages = [
      'SEE THE WORLD DIFFERENTLY',
      'VAIN SHADES — STATEMENT EYEWEAR. BOLD. GLAMOROUS. UNAPOLOGETIC.',
      'FREE EXPRESS SHIPPING ON ALL ORDERS OVER $150',
      'BORN IN ATLANTA. BUILT FOR THE BOLD.'
    ];

    const repeatedText = messages.map(m => `<span>${m}</span>`).join(' &nbsp;&bull;&nbsp; ');

    container.innerHTML = `
      <div class="vs-marquee">
        <div class="vs-marquee__content">
          ${repeatedText}
        </div>
        <div class="vs-marquee__content" aria-hidden="true">
          ${repeatedText}
        </div>
      </div>
    `;
  }
};

/* ============================================================
   COLLECTION SHOWCASE — PARALLAX HINT
   ============================================================ */
const vsParallax = {
  init() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const heroes = document.querySelectorAll('.vs-hero__media img, .banner__media img');
    if (!heroes.length) return;

    const onScroll = () => {
      const scrolled = window.scrollY;
      heroes.forEach((img) => {
        const parent = img.closest('.vs-hero, .banner');
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        const offset = (rect.top * 0.3).toFixed(2);
        img.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  },
};

/* ============================================================
   QUICK ADD BUTTON REVEAL ON MOBILE TAP
   ============================================================ */
const vsQuickAdd = {
  init() {
    if (window.matchMedia('(hover: none)').matches) {
      // Touch device — show quick-add on tap
      document.querySelectorAll('.vain-card').forEach((card) => {
        card.addEventListener('touchstart', () => {
          card.classList.add('is-touched');
        }, { passive: true });

        document.addEventListener('touchstart', (e) => {
          if (!card.contains(e.target)) {
            card.classList.remove('is-touched');
          }
        }, { passive: true });
      });
    }
  },
};

/* ============================================================
   SECTION BACKGROUND — COLOR SCHEME OVERRIDE
   ============================================================ */
const vsColorScheme = {
  init() {
    // Force Vain Shades background colors on Dawn color scheme sections
    const schemeBg = {
      'color-scheme-1': '#E9EEF3',
      'color-scheme-2': '#D8DFE8',
    };

    document.querySelectorAll('[class*="color-scheme-"]').forEach((el) => {
      for (const [cls, bg] of Object.entries(schemeBg)) {
        if (el.classList.contains(cls)) {
          el.style.setProperty('--vs-section-bg', bg);
        }
      }
    });
  },
};

/* ============================================================
   VAIN CARD — QUICK ADD TO CART (for custom snippet)
   ============================================================ */
const vsVainCard = {
  init() {
    document.addEventListener('click', async (e) => {
      const btn = e.target.closest('.vain-card__quick-add[data-variant-id]');
      if (!btn) return;

      e.preventDefault();
      const variantId = btn.dataset.variantId;
      if (!variantId) return;

      const originalText = btn.textContent;
      btn.textContent = 'Adding...';
      btn.disabled = true;

      try {
        const response = await fetch(window.routes?.cart_add_url || '/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: variantId, quantity: 1 }),
        });

        if (!response.ok) throw new Error('Add to cart failed');

        btn.textContent = '✓ Added';
        btn.style.backgroundColor = '#0C1A2B';

        // Trigger cart drawer open
        const cartDrawerToggle = document.querySelector('[data-cart-drawer-toggle]');
        if (cartDrawerToggle) cartDrawerToggle.click();

        // Dispatch cart update event for Dawn
        document.dispatchEvent(new CustomEvent('cart:refresh', { bubbles: true }));

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.backgroundColor = '';
          btn.disabled = false;
        }, 2500);
      } catch (err) {
        btn.textContent = 'Error – Retry';
        btn.disabled = false;
        setTimeout(() => {
          btn.textContent = originalText;
        }, 2000);
      }
    });
  },
};

/* ============================================================
   INIT ALL MODULES
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  vsReveal.init();
  vsHeader.init();
  vsCartDrawer.init();
  vsProductCards.init();
  vsSmoothScroll.init();
  vsNewsletter.init();
  vsMarquee.init();
  vsParallax.init();
  vsQuickAdd.init();
  vsColorScheme.init();
  vsVainCard.init();

  // Re-init reveals on Shopify section updates (Theme Editor)
  document.addEventListener('shopify:section:load', () => {
    vsMarquee.init();
    vsReveal.init();
    vsProductCards.init();
    vsVainCard.init();
  });
});
