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
const onModalCloseElementCLick = () => closeUserModal();

const onModalOpenElementChange = () => {
  modalElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentEscKeydown);
  modalCloseElement.addEventListener('click', onModalCloseElementCLick);
  addEffectsEventListeners();
};

export const modalInit = () => {
  modalOpenElement.addEventListener('change', onModalOpenElementChange);
};
