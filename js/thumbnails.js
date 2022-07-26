const thumbnailPictureElement = document.querySelector ('.pictures');
const thumbnailPictureTemplate = document.querySelector ('#picture').content.querySelector('.picture');

const createThumbnail = ({ url, likes, comments }) => {
  const thumbnailElement = thumbnailPictureTemplate.cloneNode(true);

  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;

  thumbnailPictureElement.appendChild(thumbnailElement);
};

const renderThumbnails = (thumbnails) => {
  thumbnails.forEach((thumbnail) => {
    createThumbnail(thumbnail);
    //на каждый thumbnail повесить обработчик клика, который инициализирует попап с комментариями в который передаш thubnail данные
  });
};

const removeThumbnails = () => {
  const thumbnails = document.querySelectorAll('.picture');
  thumbnails.forEach((thumbnail) => thumbnail.remove());
};

export { renderThumbnails, removeThumbnails };
