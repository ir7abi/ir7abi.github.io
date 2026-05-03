/* Mohamed Irhabi — interactions */
(function () {
  'use strict';

  // Footer year
  const yearEls = document.querySelectorAll('#year');
  yearEls.forEach(el => { el.textContent = new Date().getFullYear(); });

})();
