import {isEscapeKey} from './utils.js';
// import { commentForm, hashtagForm } from './validation.js';

const findModalElement = document.querySelector('.img-upload__overlay');
const findModalOpenElement = document.querySelector('#upload-file');
const findModalCloseElement = document.querySelector('.img-upload__cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeUserModal();
  }
};

const openUserModal = () => {
  findModalElement.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscKeydown);
};

const closeUserModal =  () => {
  findModalElement.classList.add('hidden');
  findModalElement.value = '';

  document.removeEventListener('keydown', onPopupEscKeydown);
};

findModalOpenElement.addEventListener('change', openUserModal);

findModalCloseElement.addEventListener('click', closeUserModal);
