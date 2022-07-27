import { isEscapeKey } from './utils.js';

const MAX_COMMENT_QUANTITY = 5;

const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const bigPicturePreview = document.querySelector ('.big-picture__preview');
const closeBtn = document.querySelector('.big-picture__cancel');
const commentsBtn = bigPicturePreview.querySelector('.comments-loader');
const commentsLengthInfo = bigPicturePreview.querySelector('.social__comment-count');
const commentsList = bigPicturePreview.querySelector('.social__comments');

let comments = [];
let countRenderedComment = MAX_COMMENT_QUANTITY;

const getCommentTemplate = ({avatar, message, name}) => `<li class="social__comment">
  <img class="social__picture" src="${avatar}" alt="Аватар ${name}" width="35" height="35">
  <p class="social__text">${message}</p>
</li>
`;

const onCommentsBtnClick = (evt) => {
  evt.preventDefault();
  countRenderedComment += MAX_COMMENT_QUANTITY;
  renderComments();
};

const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  closeBigPicture();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function renderComments() {
  const commentsListItems = commentsList.querySelectorAll('li');
  commentsLengthInfo.textContent = `${Math.min(countRenderedComment, comments.length)} из ${comments.length} комментариев`;
  commentsListItems.forEach((item) => item.remove());
  comments.slice(0, countRenderedComment).forEach((comment) => commentsList.insertAdjacentHTML('beforeend', getCommentTemplate(comment)));

  if (comments.length < MAX_COMMENT_QUANTITY || countRenderedComment >= comments.length) {
    commentsBtn.classList.add('hidden');
    commentsBtn.removeEventListener('click', onCommentsBtnClick);
  }
}

function closeBigPicture() {
  body.classList.remove('modal-open');
  bigPicturePreview.classList.add('hidden');
  overlay.classList.add('hidden');
  closeBtn.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  countRenderedComment = MAX_COMMENT_QUANTITY;
  commentsBtn.removeEventListener('click', onCommentsBtnClick);
}

const renderBigPicture = (url, likes, data, description) => {
  comments = data;
  bigPicturePreview.querySelector('.big-picture__img img').src = url;
  bigPicturePreview.querySelector('.likes-count').textContent = likes;
  bigPicturePreview.querySelector('.social__caption').textContent = description;

  body.classList.add('modal-open');
  bigPicturePreview.classList.remove('hidden');
  overlay.classList.remove('hidden');
  commentsBtn.classList.remove('hidden');

  closeBtn.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);

  if (comments.length > 0) {
    commentsBtn.addEventListener('click', onCommentsBtnClick);
    renderComments();
  } else {
    commentsBtn.classList.add('hidden');
    commentsLengthInfo.classList.add('hidden');
  }
};

export {renderBigPicture};
