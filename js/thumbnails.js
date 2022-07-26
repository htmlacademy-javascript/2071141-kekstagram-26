// import { renderBigPicture } from '/.big-PictureInPictureWindow.js';

const thumbnailPictureElement = document.querySelector ('.pictures');
const thumbnailPictureTemplate = document.querySelector ('#picture').content.querySelector('.picture');

const createThumbnail = ({ url, likes, comments }) => {
  const thumbnailElement = thumbnailPictureTemplate.cloneNode(true);

  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;

  thumbnailPictureElement.appendChild(thumbnailElement);

  thumbnailElement.addEventListener ('click', (evt) => {
    evt.preventDefault();
    console.log('Клик по фото');
    // renderBigPicture(picture);
  });

};

const renderThumbnails = (thumbnails) => {
  thumbnails.forEach((thumbnail) => {
    createThumbnail(thumbnail);
  });
};

const removeThumbnails = () => {
  const thumbnails = document.querySelectorAll('.picture');
  thumbnails.forEach((thumbnail) => thumbnail.remove());
};

export { renderThumbnails, removeThumbnails };
