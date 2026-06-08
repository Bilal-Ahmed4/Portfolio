/**
 * Custom cursor and hover interactions.
 */
(function initInteractions() {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0;
  let my = 0;
  let rx = 0;
  let ry = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = `${mx}px`;
    cursor.style.top = `${my}px`;
    cursor.style.opacity = '1';
    ring.style.opacity = '1';
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = `${rx}px`;
    ring.style.top = `${ry}px`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  function bindHoverTargets() {
    document.querySelectorAll('a, button, .tool-item, .project-card').forEach((el) => {
      el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
    });
  }

  bindHoverTargets();

  document.addEventListener('siteRendered', bindHoverTargets);
})();
