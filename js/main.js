import { getData } from './api.js';
import { initFilters } from './filter.js';
import { openErrorMessage } from './messages.js';
import { modalInit } from './modal.js';
import { renderThumbnails } from './thumbnails.js';

const initApp = (data) => {
  renderThumbnails(data);
  initFilters(data);
};

getData(initApp, openErrorMessage);
modalInit();
