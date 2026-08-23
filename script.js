const varnaPhotos = ["images/varna/varna-01.webp", "images/varna/varna-02.webp", "images/varna/varna-03.webp", "images/varna/varna-04.webp", "images/varna/varna-05.webp", "images/varna/varna-06.webp", "images/varna/varna-07.webp", "images/varna/varna-08.webp", "images/varna/varna-09.webp", "images/varna/varna-10.webp", "images/varna/varna-11.webp", "images/varna/varna-12.webp", "images/varna/varna-13.webp", "images/varna/varna-14.webp", "images/varna/varna-15.webp", "images/varna/varna-16.webp", "images/varna/varna-17.webp", "images/varna/varna-18.webp", "images/varna/varna-19.webp", "images/varna/varna-20.webp", "images/varna/varna-21.webp", "images/varna/varna-22.webp", "images/varna/varna-23.webp", "images/varna/varna-24.webp", "images/varna/varna-25.webp", "images/varna/varna-26.webp"];
const goldenPhotos = ["images/golden/golden-01.webp", "images/golden/golden-02.webp", "images/golden/golden-03.webp", "images/golden/golden-04.webp", "images/golden/golden-05.webp", "images/golden/golden-06.webp", "images/golden/golden-07.webp", "images/golden/golden-08.webp", "images/golden/golden-09.webp", "images/golden/golden-10.webp", "images/golden/golden-11.webp", "images/golden/golden-12.webp", "images/golden/golden-13.webp", "images/golden/golden-14.webp", "images/golden/golden-15.webp", "images/golden/golden-16.webp", "images/golden/golden-17.webp", "images/golden/golden-18.webp", "images/golden/golden-19.webp", "images/golden/golden-20.webp", "images/golden/golden-21.webp", "images/golden/golden-22.webp", "images/golden/golden-23.webp", "images/golden/golden-24.webp", "images/golden/golden-25.webp", "images/golden/golden-26.webp", "images/golden/golden-27.webp", "images/golden/golden-28.webp", "images/golden/golden-29.webp", "images/golden/golden-30.webp", "images/golden/golden-31.webp", "images/golden/golden-32.webp", "images/golden/golden-33.webp", "images/golden/golden-34.webp", "images/golden/golden-35.webp", "images/golden/golden-36.webp", "images/golden/golden-37.webp", "images/golden/golden-38.webp", "images/golden/golden-39.webp", "images/golden/golden-40.webp", "images/golden/golden-41.webp", "images/golden/golden-42.webp", "images/golden/golden-43.webp", "images/golden/golden-44.webp", "images/golden/golden-45.webp", "images/golden/golden-46.webp", "images/golden/golden-47.webp", "images/golden/golden-48.webp", "images/golden/golden-49.webp", "images/golden/golden-50.webp", "images/golden/golden-51.webp", "images/golden/golden-52.webp", "images/golden/golden-53.webp", "images/golden/golden-54.webp", "images/golden/golden-55.webp", "images/golden/golden-56.webp", "images/golden/golden-57.webp", "images/golden/golden-58.webp", "images/golden/golden-59.webp", "images/golden/golden-60.webp", "images/golden/golden-61.webp", "images/golden/golden-62.webp", "images/golden/golden-63.webp", "images/golden/golden-64.webp", "images/golden/golden-65.webp"];

let activePhotos = [];
let activeIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function renderGallery(id, photos, label) {
  const root = document.getElementById(id);
  photos.forEach((src, index) => {
    const figure = document.createElement('figure');
    figure.className = 'photo';
    const img = document.createElement('img');
    img.src = src;
    img.alt = `${label} — fotografia ${index + 1}`;
    img.loading = index < 4 ? 'eager' : 'lazy';
    img.decoding = 'async';
    figure.appendChild(img);
    figure.addEventListener('click', () => openLightbox(photos, index));
    root.appendChild(figure);
  });
}

function openLightbox(photos, index) {
  activePhotos = photos; activeIndex = index;
  lightboxImg.src = activePhotos[activeIndex];
  lightbox.showModal();
  document.body.style.overflow = 'hidden';
}
function move(step) {
  activeIndex = (activeIndex + step + activePhotos.length) % activePhotos.length;
  lightboxImg.src = activePhotos[activeIndex];
}
function closeBox() { lightbox.close(); document.body.style.overflow = ''; }

document.querySelector('.lightbox-close').addEventListener('click', closeBox);
document.querySelector('.lightbox-prev').addEventListener('click', () => move(-1));
document.querySelector('.lightbox-next').addEventListener('click', () => move(1));
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeBox(); });
document.addEventListener('keydown', e => {
  if (!lightbox.open) return;
  if (e.key === 'ArrowLeft') move(-1);
  if (e.key === 'ArrowRight') move(1);
  if (e.key === 'Escape') closeBox();
});

renderGallery('varna-gallery', varnaPhotos, 'Varna');
renderGallery('golden-gallery', goldenPhotos, 'Nisipurile de Aur');
