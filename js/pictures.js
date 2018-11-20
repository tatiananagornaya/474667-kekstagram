'use strict';

var PHOTO_URL = ['photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg', 'photos/4.jpg', 'photos/5.jpg', 'photos/6.jpg', 'photos/7.jpg', 'photos/8.jpg', 'photos/9.jpg', 'photos/10.jpg', 'photos/11.jpg', 'photos/12.jpg', 'photos/13.jpg', 'photos/14.jpg', 'photos/15.jpg', 'photos/16.jpg', 'photos/17.jpg', 'photos/18.jpg', 'photos/19.jpg', 'photos/20.jpg', 'photos/21.jpg', 'photos/22.jpg', 'photos/23.jpg', 'photos/24.jpg', 'photos/25.jpg']
var COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var DESCRIPTION = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'];
var OBJECTS_MAX = 24;
var URL_INDEX_MIN = 1;
var URL_INDEX_MAX = 25;
var LIKES_MIN = 15;
var LIKES_MAX = 200;

var shuffleArray = function (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

var getRemovedElement = function (array) {
  var shuffledArray = shuffleArray(array);
  var random = shuffledArray[Math.floor(Math.random() * shuffledArray.length)];
  return shuffledArray.splice(random, 1);
};

var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var createPhotoPost = function {
	return {
		url: getRemovedElement(PHOTO_URL),
		likes: getRandomNumber(15, 200),
		comments: getRandomElement(COMMENTS),
		description: getRandomElement(DESCRIPTION)
	};
};

var getPhotoPostArray = function () {
  var array = [];
  for (var i = 0; i < OBJECTS_MAX; i++) {
    array.push(createProductCard());
  }
  return array;
};

var PhotoPostArray = getPhotoPostArray();

