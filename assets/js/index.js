document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('site-header');
    let lastScrollTop = 0;
    const eightyvh = window.innerHeight * 0.8;

    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop < eightyvh) {
        header.classList.add('header-hidden');
        header.classList.remove('header-visible');
      } 
      // Once scroll passes 80vh, show and stick the header
      else {
        header.classList.remove('header-hidden');
        header.classList.add('header-visible');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  });