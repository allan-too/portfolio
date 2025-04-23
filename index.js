// Simple lightbox functionality
const cards = document.querySelectorAll('.project-card a');

cards.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const imgSrc = this.querySelector('img').src;
    openLightbox(imgSrc, this.href);
  });
});

function openLightbox(imageSrc, projectUrl) {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.classList.add('lightbox-overlay');
  overlay.innerHTML = `
    <div class="lightbox-content">
      <img src="${imageSrc}" alt="Project Screenshot">
      <a href="${projectUrl}" target="_blank" rel="noopener" class="lightbox-link">Visit Project</a>
      <span class="lightbox-close">×</span>
    </div>
  `;
  document.body.appendChild(overlay);

  // Close handler
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
      overlay.remove();
    }
  });
}