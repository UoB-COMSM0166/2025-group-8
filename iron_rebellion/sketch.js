
let bgType;
let picturesLoader;
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

function preload() {
  picturesLoader = new PicturesLoader();
  window.bgType = picturesLoader.getBgType();
  window.mainRoleMove = true;
  window.story1Config = loadJSON("./chapter3Config.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  window.currentGameState = currentGameState;
  window.gameStates = gameStates;
  window.chapterSelector = new ChapterSelector();
  window.chapter1Story = new Chapter1Story();
  window.chapter2Story = new Chapter2Story();
  window.chapter3Story = new Chapter3Story();
  window.chapter4Story = new Chapter4Story();
}

function draw() {
  if (window.currentGameState === gameStates.CHAPTERSELECTOR) {
    chapterSeletion();
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

function chapterSeletion() {
  chapterSelector.setup();
  }

function chapter1() {
  chapter1Story.setup();
}

function chapter2() {
  chapter2Story.setup();
}

function chapter3() {
  chapter3Story.setup();
}

function chapter4() {
  chapter4Story.setup();
}

