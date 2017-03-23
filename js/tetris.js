// Розміри масиву клітинок по осях

var MAX_Y = 20;
var MAX_X = 10;

// Масив можливих фігур

var FIGURES = [
  [ // https://upload.wikimedia.org/wikipedia/commons/7/7b/Tetris_S.svg
    [false, true, true],
    [true, true, false]
  ],
  [ // https://upload.wikimedia.org/wikipedia/commons/3/33/Tetris_Z.svg
    [true, true, false],
    [false, true, true]
  ],
  [ // https://upload.wikimedia.org/wikipedia/commons/8/82/Tetris_O.svg
    [true, true],
    [true, true]
  ],
  [ // https://upload.wikimedia.org/wikipedia/commons/f/f4/Tetris_I.svg
    [true, true, true, true]
  ],
  [ // https://upload.wikimedia.org/wikipedia/commons/9/91/Tetris_T.svg
    [true, true, true],
    [false, true, false]
  ],
  [ // https://upload.wikimedia.org/wikipedia/commons/8/81/Tetris_L.svg
    [true, true, true],
    [true, false, false]
  ],
  [ // https://upload.wikimedia.org/wikipedia/commons/2/25/Tetris_J.svg
    [true, true, true],
    [false, false, true]
  ]
];

// Змінна, в якій зберігається стан всіх клітинок на ігровому полі.
// Потрібно згенерувати двовимірний масив розміру MAX_X на MAX_Y за допомогою функції "generateWall()".
var wall = [];

// Функція, яка ініціалізує старт роботи скрипта на сторінці.
// Всередині цієї функції потрібно викликати всі функції, які будуть починати роботу тетріса.
function init() {
  // замінити цей коментар власним кодом
}

// Функція, яка будує розмітку для тетріса.
// В циклі будує ігрове поле розміру MAX_X на MAX_Y.
function createWall() {
  // замінити цей коментар власним кодом
}

// Функція, яка ініціалізує початковий стан ігрового поля і заповнює масив "wall" пустими клітинками.
// Можна(і птрібно) використати "Array.prototype.push()".
function generateWallArray() {

}

// Функція, яка будує одну лінію ігрового поля і повертає її.
// Використати в функції "generateWallArray()".
function generateLineArray() {
  return // ← тут потрібно повернути одновимірний масив розміру MAX_X
}

init();
