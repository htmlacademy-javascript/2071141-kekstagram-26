import { isEscapeKey } from './utils.js';

const TITLE_LOAD_ERROR = 'Ошибка загрузки данных';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successPopup = successTemplate.cloneNode(true);
const errorPopup = errorTemplate.cloneNode(true);

let activeModal = null;

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const onDocumentClick = (evt) => {
  if (evt.target.closest('.error__inner') && !evt.target.classList.contains('error__button')) {
    return;
  }

  if (evt.target.closest('.success__inner') && !evt.target.classList.contains('success__button')) {
    return;
  }

  evt.preventDefault();
  closeModal();
};

function closeModal() {
  activeModal.remove();
  activeModal = null;
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onDocumentClick);
}

export const openErrorMessage = (isLoadError = false) => {
  if (isLoadError) {
    const errorPopupTitle = errorPopup.querySelector('.error__title');
    const errorPopupBtn = errorPopup.querySelector('.error__button');
    errorPopupTitle.textContent = TITLE_LOAD_ERROR;
    errorPopupBtn.remove();
  }

  document.body.appendChild(errorPopup);
  activeModal = errorPopup;
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);
};

export const openSuccessMessage = () => {
  document.body.appendChild(successPopup);
  activeModal = successPopup;
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);
};
