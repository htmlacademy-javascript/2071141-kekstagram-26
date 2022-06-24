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
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const URL_MIN = 1;
const URL_MAX = 25;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const COMMENTS_MIN = 1;
const COMMENTS_MAX = 6;

const createComment = (index) => ({
  id: index,
  name: getRandomArrayElement(NAMES),
  message: getRandomArrayElement(MESSAGES),
  avatar: `img/avatar-${getRandomPositiveInteger(AVATAR_MIN,AVATAR_MAX)}.svg`,
});

const createPost = (index) => ({
  id: index,
  url: `photos/${getRandomPositiveInteger(URL_MIN,URL_MAX)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
  comments: new Array(getRandomPositiveInteger(COMMENTS_MIN,COMMENTS_MAX)).fill('').map((_,index) => createComment(index + 1)),
});

const createMultiplePosts = new Array(MAX_POSTS_COUNT).fill('').map((_,index) => createPost(index + 1));

export {createMultiplePosts};
