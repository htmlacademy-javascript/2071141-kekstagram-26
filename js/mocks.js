import {getRandomPositiveInteger} from './utils.js';
import {getRandomArrayElement} from './utils.js';

const NAMES =[
  'Орфей',
  'Василий',
  'kiLLswitch99',
  '0-0',
  'Робототехник3000',
  'Антон'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Пляж',
  'Спортивный автомобиль',
  'Азиатская еда',
  'Краб',
  'Кексуши',
  'Обувь'
];

const MAX_POSTS_COUNT = 25;

const firstId = {
  comments: 0,
  posts: 0,
};

const generateId = (key) => {
  firstId[key] += 1;
  return firstId[key];
};


const createComment = () => ({
  id: generateId('comments'),
  name: getRandomArrayElement(NAMES),
  message: getRandomArrayElement(MESSAGES),
  avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
});

const createPost = () => ({
  id: generateId('posts'),
  url: `photos/${getRandomPositiveInteger(1,25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: Array.from({length:getRandomPositiveInteger(1, 6)}, createComment),
});

const createMultiplePosts = Array.from({length: MAX_POSTS_COUNT}, createPost);

export {createMultiplePosts};
