import { MAX_COMMENT_LENGTH } from './mocks.js';

const userForm = document.querySelector('.img-upload__form');
const commentForm = document.querySelector('.text__description');
const hashtagForm = document.querySelector('.text__hashtags');

const pristine = new Pristine(userForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__form__error'
});

const checkCommentLength = (commentsValue) => commentsValue.length <= MAX_COMMENT_LENGTH;

checkCommentLength(commentForm);

pristine.addValidator(commentForm,
  checkCommentLength,
  `Должно быть не более ${ MAX_COMMENT_LENGTH } символов`);

//Проверка,что поле хэш-тега пустое

// pristine.addValidator(hashtagForm,
//   '',
//   'Добавьте свой хэштег');

userForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

export {commentForm, hashtagForm};
