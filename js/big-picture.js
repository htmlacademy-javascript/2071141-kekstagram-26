import { isEscapeKey } from './utils.js';

const MAX_COMMENT_QUANTITY = 5;

const body = document.querySelector('body');
const bigPicture = document.querySelector ('.big-picture');
const bigPictureImg = document.querySelector ('.big-picture__img');

// const closeBigPicture = document.querySelector ('');
const likesCount = document.querySelector ('.likes-count');
const commentsCount = document.querySelector ('.comments-count');
const socialComments = document.querySelector ('.social__comments');
const socialCaption = document.querySelector ('.social__caption');

const renderBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

export {renderBigPicture};
