(function () {
  const selectors = [
    'img[src*="dimohame.jpg"]',
    'img[src*="medium_dimohame.jpg"]',
    'div[style*="dimohame.jpg"]'
  ];

  const removeElements = () => {
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
  };

  removeElements();

  let attempts = 0;
  const interval = setInterval(() => {
    removeElements();
    attempts++;
    if (attempts > 10) clearInterval(interval);
  }, 500);
})();

(function () {
  const selectors = [
    'a[style*="dimohame.jpg"]',
    'div[style*="dimohame.jpg"]',
    'img[src*="dimohame.jpg"]'
  ];

  const removeElements = () => {
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
  };

  removeElements();

  let attempts = 0;
  const interval = setInterval(() => {
    removeElements();
    attempts++;
    if (attempts > 10) clearInterval(interval);
  }, 500);
})();