import { isEscapeKey } from './utils.js';
import { addEffectsEventListeners, removeEffectsEventListeners } from './effects.js';
// import { commentForm, hashtagForm } from './validation.js';

const modalElement = document.querySelector('.img-upload__overlay');
const modalOpenElement = document.querySelector('#upload-file');
const modalCloseElement = document.querySelector('.img-upload__cancel');

const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function closeUserModal() {
  modalElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentEscKeydown);
  removeEffectsEventListeners();
}

const onModalOpenElementChange = () => {
  modalElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentEscKeydown);
  addEffectsEventListeners();
};

const onModalCloseElementCLick = () => closeUserModal();

modalOpenElement.addEventListener('change', onModalOpenElementChange);
modalCloseElement.addEventListener('click', onModalCloseElementCLick);