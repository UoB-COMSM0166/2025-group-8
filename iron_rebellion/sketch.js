
let bgType;
let bgSetter;
let picturesLoader;
let currentBg;
let currentGameState = 0;
let gameStates = {
  CHAPTERSELECTOR: 0,
  CHAPTER1: 1,
  CHAPTER2: 2,
  CHAPTER3: 3,
  CHAPTER4: 4,
  GAMEOVER: 5,
  CHPATER1WIN: 6,
  CHPATER2WIN: 7,
  CHPATER3WIN: 8,
  CHPATER4WIN: 9,
};

window.bgType = bgType;
window.bgSetter = bgSetter;
window.picturesLoader = picturesLoader;
window.currentBg = currentBg;
window.currentGameState = currentGameState;
window.gameStates = gameStates;

function preload() {
  picturesLoader = new PicturesLoader();
  window.bgType = picturesLoader.getBgType();
  window.currentBg = window.bgType.CHAPTERSELECTOR;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // bgSetter = new BgSetter();
  // bgSetter.drawBg(window.currentBg);
}

function draw() {
  if (window.currentGameState === gameStates.CHAPTERSELECTOR) {
    chapterSeletor();
  } else if (window.currentGameState === gameStates.CHAPTER1) {
    chapter1();
  } else if (window.currentGameState === gameStates.CHAPTER2) {
    chapter2();
  } else if (window.currentGameState === gameStates.CHAPTER3) {
    chapter3();
  } else if (window.currentGameState === gameStates.CHAPTER4) {
    chapter4();
  } else if (window.currentGameState === gameStates.CHPATER1WIN) {
    chapter1Win();
  } else if (window.currentGameState === gameStates.CHPATER2WIN) {
    chapter2Win();
  } else if (window.currentGameState === gameStates.CHPATER3WIN) {
    chapter3Win();
  } else if (window.currentGameState === gameStates.CHPATER4WIN) {
    chapter4Win();
  } else if (window.currentGameState === gameStates.GAMEOVER) {
    gameOver();
  }
}

function chapterSeletor() {
  window.bgSetter.drawBg(window.currentBg);
  let chapterSelector = new ChapterSelector();
  chapterSelector.placeButtons();
}

