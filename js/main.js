import { getData } from './api.js';
import { initFilters } from './filter.js';
import { modalInit } from './modal.js';
import { renderThumbnails } from './thumbnails.js';

const initApp = (data) => {
  renderThumbnails(data);
  initFilters(data);
};

getData(initApp, (error) => console.log(error));
modalInit();
