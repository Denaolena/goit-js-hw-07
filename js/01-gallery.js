import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);
// console.log(markup);

gallery.addEventListener('click', onClick);
function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  //   console.log(evt.target.nodeName);

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShow: instance => {
        gallery.addEventListener('keydown', onClick);
      },
      onClose: instance => {
        gallery.removeEventListener('keydown', onClick);
      },
    }
  );
  instance.show();

  function onClick(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}
