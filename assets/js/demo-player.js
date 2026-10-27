// Click a .demo-card to play its full demo (data-video) in a lightbox.
(function () {
  var modal, player;

  function build() {
    modal = document.createElement('div');
    modal.className = 'demo-modal';
    modal.innerHTML = '<button class="demo-close" aria-label="Close">&times;</button>' +
      '<video controls playsinline preload="none"></video>';
    player = modal.querySelector('video');
    modal.addEventListener('click', function (e) {
      if (e.target === modal || e.target.className === 'demo-close') close();
    });
    document.body.appendChild(modal);
  }

  function open(card) {
    if (!modal) build();
    var thumb = card.querySelector('img, video');
    player.poster = thumb ? (thumb.getAttribute('poster') || thumb.getAttribute('src')) : '';
    player.src = card.getAttribute('data-video');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    var p = player.play();
    if (p && p.catch) p.catch(function () {});
  }

  function close() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    player.pause();
    player.removeAttribute('src');
    player.load();
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) close();
  });

  document.querySelectorAll('.demo-card').forEach(function (card) {
    card.addEventListener('click', function () { open(card); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(card); }
    });
  });

  // Respect reduced-motion: keep looping teasers paused on their poster.
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.demo-card video.demo-preview').forEach(function (v) {
      v.removeAttribute('autoplay'); v.pause();
    });
  }
})();
