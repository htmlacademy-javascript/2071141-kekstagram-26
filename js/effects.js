const Scale = {
  MIN : 25,
  MAX : 100,
  DEFAULT : 100,
  STEP : 25
};

const imagePreview = document.querySelector('.img-upload__preview img');
const imageScale = document.querySelector('.img-upload__scale');
const scaleControlDecrease = imageScale.querySelector('.scale__control--smaller');
const scaleControlIncrease = imageScale.querySelector('.scale__control--bigger');
const scaleControlValue = imageScale.querySelector('.scale__control--value');

const effectsList = document.querySelector('.effects__list');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');

imgUploadEffectLevel.classList.add('hidden');

let control = Scale.DEFAULT;
scaleControlValue.value = control;

const onUpScaleButtonClick = () => {
  control = Math.min(control + Scale.STEP, Scale.MAX);
  scaleControlValue.value = control;
  imagePreview.style.transform = `scale(${control / 100})`;
};

const onDownScaleButtonClick = () => {
  control = Math.max(control - Scale.STEP, Scale.MIN);
  scaleControlValue.value = control;
  imagePreview.style.transform = `scale(${control / 100})`;
};

const onFilterClick = (evt) => {
  imagePreview.className = `effects__preview--${evt.target.value}`;
};

const addEffectsEventListeners = () => {
  scaleControlIncrease.addEventListener('click', onUpScaleButtonClick);
  scaleControlDecrease.addEventListener('click', onDownScaleButtonClick);
  effectsList.addEventListener('click', onFilterClick);
};

const removeEffectsEventListeners = () => {
  scaleControlIncrease.removeEventListener('click', onUpScaleButtonClick);
  scaleControlDecrease.removeEventListener('click', onDownScaleButtonClick);
  effectsList.removeEventListener('click', onFilterClick);
};

export {addEffectsEventListeners , removeEffectsEventListeners };
