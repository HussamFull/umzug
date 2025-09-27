/**
 * هذا الكود مأخوذ من ملف الجافاسكريبت الأصلي لتهيئة وظائف البورتفوليو (Isotope, GLightbox, Swiper)
 * تم تعديله ليصبح دالة قابلة للاستدعاء في بيئة React.
 *
 * ملاحظة: هذا الكود يفترض أن المكتبات (Isotope, GLightbox, Swiper, AOS)
 * متاحة عالمياً (مثل window.Isotope) لأنها مستوردة بالطريقة التقليدية.
 */


// دوال المساعدة (مستخرجة من الكود الأصلي)
const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}

// الدالة الرئيسية لتهيئة مكونات البورتفوليو
export const initializePortfolioAssets = () => {
    
    // 1. تهيئة Isotope والتصفية (Portfolio isotope and filter)
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer && typeof window.Isotope !== 'undefined') {
      let portfolioIsotope = new window.Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        
        // تحديث AOS بعد اكتمال الترتيب
        portfolioIsotope.on('arrangeComplete', function() {
          if (typeof window.AOS !== 'undefined') window.AOS.refresh();
        });
      }, true);
    }

    // 2. تهيئة Lightbox (Initiate portfolio lightbox)
    // تأكد من أن GLightbox متاح عالمياً (window.GLightbox)
    if (typeof window.GLightbox !== 'undefined') {
      const portfolioLightbox = window.GLightbox({
        selector: '.portfolio-lightbox'
      });
    }

    // 3. تهيئة سلايدر تفاصيل البورتفوليو (Portfolio details slider)
    // تأكد من أن Swiper متاح عالمياً (window.Swiper)
    if (typeof window.Swiper !== 'undefined') {
      new window.Swiper('.portfolio-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });
    }
};