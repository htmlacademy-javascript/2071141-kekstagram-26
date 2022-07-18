import { createMultiplePosts } from './mocks.js';

const similarPictureElement = document.querySelector ('.pictures');
const similarPictureTemplate = document.querySelector ('#picture').content.querySelector('.picture');

const similarPictures = createMultiplePosts();

similarPictures.forEach(({ url, likes, comments }) => {
  const pictureElement = similarPictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  similarPictureElement.appendChild(pictureElement);
});
