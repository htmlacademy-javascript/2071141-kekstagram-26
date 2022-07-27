import { removeThumbnails, renderThumbnails } from './thumbnails.js';
import { debounce, shuffle } from './utils.js';

const MAX_COUNT_RANDOM_THUMBNAIL = 10;

const FilterValue = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filter = document.querySelector('.img-filters');
const filterBtns = filter.querySelectorAll('.img-filters__button');

let thumbnails = [];

const changeFilter = (evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    filterBtns.forEach((btn) => btn.classList.remove('img-filters__button--active'));
    evt.target.classList.add('img-filters__button--active');
    removeThumbnails();

    switch(evt.target.id) {
      case FilterValue.DEFAULT:
        renderThumbnails(thumbnails);
        break;
      case FilterValue.RANDOM:
        renderThumbnails(shuffle(thumbnails.slice()).slice(0, MAX_COUNT_RANDOM_THUMBNAIL));
        break;
      case FilterValue.DISCUSSED:
        renderThumbnails(thumbnails.slice().sort((firstPhoto, secondPhoto) => secondPhoto.comments.length - firstPhoto.comments.length));
        break;
    }
  }
};

export const initFilters = (data) => {
  thumbnails = data;
  filter.classList.remove('img-filters--inactive');
  filter.addEventListener('click', debounce(changeFilter));
};
