import {getRandomPositiveInteger, getRandomArrayElement} from './utils.js';

const NAMES = [
  'user1',
  'user2',
  'user3',
  'user4',
  'user5',
  'user6'
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
const MAX_COMMENT_LENGTH = 140;

const UrlId = {
  MIN:1,
  MAX:25
};

const LikesCount = {
  MIN:15,
  MAX:200
};

const AvatarId = {
  MIN: 0,
  MAX: 6
};

const CommentsCount = {
  MIN: 0,
  MAX: 6
};

const createComment = (index) => ({
  id: index,
  name: getRandomArrayElement(NAMES),
  message: getRandomArrayElement(MESSAGES),
  avatar: `img/avatar-${getRandomPositiveInteger(AvatarId.MIN,AvatarId.MAX)}.svg`,
});

const createPost = (index) => ({
  id: index,
  url: `photos/${getRandomPositiveInteger(UrlId.MIN, UrlId.MAX)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(LikesCount.MIN,LikesCount.MAX),
  comments: new Array(getRandomPositiveInteger(CommentsCount.MIN, CommentsCount.MAX)).fill('').map((_, indexComment) => createComment(indexComment + 1)),
});

const createMultiplePosts = () => new Array(MAX_POSTS_COUNT).fill('').map((_, index) => createPost(index + 1));

export {createMultiplePosts, MAX_COMMENT_LENGTH};
