'use strict';

var PHOTO_URL = ['photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg', 'photos/4.jpg', 'photos/5.jpg', 'photos/6.jpg', 'photos/7.jpg', 'photos/8.jpg', 'photos/9.jpg', 'photos/10.jpg', 'photos/11.jpg', 'photos/12.jpg', 'photos/13.jpg', 'photos/14.jpg', 'photos/15.jpg', 'photos/16.jpg', 'photos/17.jpg', 'photos/18.jpg', 'photos/19.jpg', 'photos/20.jpg', 'photos/21.jpg', 'photos/22.jpg', 'photos/23.jpg', 'photos/24.jpg', 'photos/25.jpg'];
var COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var DESCRIPTION = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'];
var OBJECTS_MAX = 24;
var URL_INDEX_MIN = 1;
var URL_INDEX_MAX = 25;
var LIKES_MIN = 15;
var LIKES_MAX = 200;
var AVATAR_MIN = 1;
var AVATAR_MAX = 6;
var COMMENTS_MIN = 1;
var COMMENTS_MAX = 3;
var COMMENTS_COUNT_MIN = 0;
var COMMENTS_COUNT_MAX = 500;

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

var getCommentsArray = function (array) {
  var commentsArray = [];
  for (var i = 0; i < getRandomNumber(COMMENTS_MIN,COMMENTS_MAX); i++) {
    commentsArray.push(getRandomElement(array));
  }
  return commentsArray;
};

var createPicture = function () {
	return {
		url: getRemovedElement(PHOTO_URL),
		likes: getRandomNumber(LIKES_MIN, LIKES_MAX),
		comments: getCommentsArray(COMMENTS),
		description: getRandomElement(DESCRIPTION)
	};
};

var createdPicture = createPicture()

var getPicturesArray = function () {
  var array = [];
  for (var i = 0; i < OBJECTS_MAX; i++) {
    array.push(createPicture());
  }
  return array;
};

var picturesArray = getPicturesArray();

var pictureTemplate = document.querySelector('template#picture').content.querySelector
('.picture');

var renderPicture = function (picture) {
	var template = pictureTemplate.cloneNode(true);

	var urlSrc = template.querySelector('.picture__img');
	urlSrc.setAttribute('src', picture.url);

	var pictureLikes = template.querySelector('.picture__likes');
	pictureLikes.innerHTML = picture.likes;

	var pictureComments = template.querySelector('.picture__comments');
	pictureComments.innerHTML = picture.comments.length;

	return template;
};

var pictureSlot = document.querySelector('.pictures');

var fragment = document.createDocumentFragment();
for (var i = 0; i < picturesArray.length; i++) {
	fragment.appendChild(renderPicture(picturesArray[i]));
}
pictureSlot.appendChild(fragment);

var bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');

var bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
bigPictureImg.setAttribute('src', picturesArray[0].url);

var likesCont = bigPicture.querySelector('.big-picture__social').querySelector('span');
likesCont.innerHTML = picturesArray[0].likes;

var socialCommentCount = document.querySelector('.social__comment-count')
var commentsCount = socialCommentCount.querySelector('span');
commentsCount.innerHTML = getRandomNumber(COMMENTS_COUNT_MIN,COMMENTS_COUNT_MAX);

var createSocialComment = function (picture) {
	var newComment = document.createElement('li');
	newComment.classList.add('social__comment');
	newComment.innerHTML = '<img class="social__picture" src="img/avatar-' + getRandomNumber(AVATAR_MIN,AVATAR_MAX) + '.svg" alt="Аватар комментатора фотографии" width="35" height="35">' + 
    '<p class="social__text">' + picture.comments[i] + '</p>';
    
    return newComment;
};

 var socialComment = document.querySelector('.social__comments');
 for (var i = 0; i < picturesArray[0].comments.length; i++) {
 	 socialComment.appendChild(createSocialComment(picturesArray[0]));
 }

var socialCaption = bigPicture.querySelector('.social__caption');
socialCaption.textContent = picturesArray[0].description;

socialCommentCount.classList.add('visually-hidden');
var commentsLoader = document.querySelector('.comments-loader');
commentsLoader.classList.add('visually-hidden');
