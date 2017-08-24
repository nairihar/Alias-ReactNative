import {Actions} from 'react-native-router-flux';

let words = require('./data/words');

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let allWords = shuffle(JSON.parse(JSON.stringify(words)));
let usedWords = [];

export function getAllWords () {
  return shuffle(words);
}

export function resetWords () {
  allWords = shuffle(JSON.parse(JSON.stringify(words)));
  usedWords = [];
}

export function getRandomWords (length_of_words) {
  if(length_of_words > allWords.length) {
    //alert('used all words.');
    resetWords();
  };
  let _words = [];
  let _number;
  while(true) {
    _number = Math.floor(Math.random() * allWords.length);
    //if(_words.indexOf(allWords[_number]) === -1) {
      _words.push(allWords[_number]);
      usedWords.push(allWords[_number]);
      allWords.splice(_number, 1);
    //}

    if(_words.length === length_of_words) {
      break;
    }
  }
  return _words;
};
