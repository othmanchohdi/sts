/**
 * Star Sweat Landing — subscribe vs. buy-once plan toggle.
 * All visual state driven by a single `data-ssland-plan` attribute on
 * <html> (see ssland.css attribute selectors). This just owns the value.
 */
(function () {
  var STORAGE_KEY = 'ss-plan';
  var root = document.documentElement;

  function applyPlan(plan) {
    if (plan !== 'sub' && plan !== 'once') plan = 'sub';
    root.setAttribute('data-ssland-plan', plan);
    try {
      localStorage.setItem(STORAGE_KEY, plan);
    } catch (e) {
      /* storage unavailable (private mode, etc.) — state just won't persist */
    }
  }

  function init() {
    var saved;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      saved = null;
    }
    if (saved === 'sub' || saved === 'once') applyPlan(saved);

    document.addEventListener('click', function (event) {
      var trigger = event.target.closest('[data-ssland-plan-trigger]');
      if (!trigger) return;
      event.preventDefault();
      applyPlan(trigger.getAttribute('data-ssland-plan-trigger'));
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      var trigger = event.target.closest('[data-ssland-plan-trigger]');
      if (!trigger) return;
      event.preventDefault();
      applyPlan(trigger.getAttribute('data-ssland-plan-trigger'));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
