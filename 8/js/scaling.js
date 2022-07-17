const Scale = {
  MIN : 25,
  MAX : 100,
  DEFAULT : 100,
  STEP : 25
};

const imgUploadPreview = document.querySelector('.img-upload__preview img');
const imgUploadScale = document.querySelector('.img-upload__scale');
const scaleControlDecrease = imgUploadScale.querySelector('.scale__control--smaller');
const scaleControlIncrease = imgUploadScale.querySelector('.scale__control--bigger');
const scaleControlValue = imgUploadScale.querySelector('.scale__control--value');


let control = Scale.DEFAULT;
scaleControlValue.value = `${control}`;

const onScaleButtonIncrease = () => {
  if (control + Scale.STEP < Scale.MAX) {
    control += Scale.STEP;
  } else {
    control = Scale.MAX;
  }
  scaleControlValue.value = `${control}%`;
  imgUploadPreview.style.transform = `scale(${control / 100})`;
};

const onScaleButtonDecrease = () => {
  if (control - Scale.STEP > Scale.MIN) {
    control -= Scale.STEP;
  } else {
    control = Scale.MIN;
  }
  scaleControlValue.value = `${control}%`;
  imgUploadPreview.style.transform = `scale(${control / 100})`;
};

scaleControlIncrease.addEventListener('click', onScaleButtonIncrease);
scaleControlDecrease.addEventListener('click', onScaleButtonDecrease);

export { imgUploadPreview };

// При нажатии на кнопки .scale__control--smaller и .scale__control--bigger должно изменяться значение поля .scale__control--value;
// Значение должно изменяться с шагом в 25. Например, если значение поля установлено в 50%, после нажатия на «+», значение должно стать равным 75%. Максимальное значение — 100%, минимальное — 25%. Значение по умолчанию — 100%;
// При изменении значения поля .scale__control--value изображению внутри .img-upload__preview должен добавляться соответствующий стиль CSS, который с помощью трансформации scale задаёт масштаб. Например, если в поле стоит значение 75%, то в стиле изображения должно быть написано transform: scale(0.75).
