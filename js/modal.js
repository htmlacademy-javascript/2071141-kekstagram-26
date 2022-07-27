import { isEscapeKey } from './utils.js';
import { addEffectsEventListeners, removeEffectsEventListeners } from './effects.js';
import { sendData } from './api.js';
import { openErrorMessage, openSuccessMessage } from './messages.js';

const SCALE_VALUE_MAX = 100;

const modalElement = document.querySelector('.img-upload__overlay');
const modalOpenElement = document.querySelector('#upload-file');
const modalCloseElement = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const scaleControl = form.querySelector('input.scale__control');

const imagePreview = document.querySelector('.img-upload__preview img');

const resetForm = () => {
  form.reset();
  imagePreview.style.transform = `scale(${SCALE_VALUE_MAX / 100})`;
  scaleControl.value = SCALE_VALUE_MAX;
};

const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
    resetForm();
  }
};

function closeUserModal() {
  modalElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentEscKeydown);
  removeEffectsEventListeners();
}

const onModalCloseElementCLick = () => {
  closeUserModal();
  resetForm();
};

const successSendHandler = () => {
  closeUserModal();
  resetForm();
  openSuccessMessage();
};

const errorSendHandler = () => {
  closeUserModal();
  openErrorMessage();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  sendData(successSendHandler, errorSendHandler, new FormData(form));
};

const openUserModal = () => {
  modalElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentEscKeydown);
  modalCloseElement.addEventListener('click', onModalCloseElementCLick);
  form.addEventListener('submit', onFormSubmit);
};

const onModalOpenElementChange = () => {
  openUserModal();
  addEffectsEventListeners();
};

export const modalInit = () => {
  modalOpenElement.addEventListener('change', onModalOpenElementChange);
};
