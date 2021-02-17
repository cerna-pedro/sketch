// Query Selectors
const gridContainer = document.querySelector('.grid-container');
const gridRow = document.querySelector('.grid-row');
const clearButton = document.querySelector('#clear');
const formContainer = document.querySelector('.form-container');
const squareForm = document.querySelector('#square-form');
const popup = document.querySelector('.popup');
const numberInput = document.querySelector('#number-input');

// Functions
const clearGrid = (e) => {
  toggleClassOff();
  numberInput.value = '';
};

const toggleClassOff = () => {
  popup.classList.remove('hidden');
  formContainer.classList.remove('hidden');
  setTimeout(() => {
    numberInput.focus();
  }, 20);
};

const toggleClassOn = () => {
  popup.classList.add('hidden');
  formContainer.classList.add('hidden');
};

const checkNumberRange = () => {
  if (numberInput.value > 30) {
    numberInput.value = 30;
  }
  if (numberInput.value < 2) {
    numberInput.value = 2;
  }
};

const validateEntry = (e) => {
  const possible = '0123456789BackspaceEnter';
  if (!possible.includes(e.key)) {
    e.preventDefault();
  }
};

const exitPopup = (e) => {
  if (e.target === popup || e.key === 'Escape') {
    toggleClassOn();
  }
};

const changeColor = (e) => {
  if (!e.target.style.backgroundColor) {
    const randomRed = Math.round(Math.random() * 255);
    const randomGreen = Math.round(Math.random() * 255);
    const randomBlue = Math.round(Math.random() * 255);
    e.target.style.backgroundColor = `rgba(${randomRed},${randomGreen},${randomBlue},.3)`;
  } else {
    current_color = getComputedStyle(e.target).getPropertyValue(
      'background-color'
    );
    match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(
      current_color
    );
    if (!match[4]) {
      return;
    }
    const a = parseFloat(match[4].replace(', ', '')) + 0.1;
    e.target.style.backgroundColor = `rgba(${match[1]},${match[2]},${match[3]},${a})`;
  }
};
const createGrid = async (num = 10) => {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  let i = 0;
  while (i < num) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    for (let j = 0; j < num; j++) {
      const div = document.createElement('div');
      div.classList.add('cell');
      gridRow.append(div);
      gridContainer.append(gridRow);
      await wait();
    }
    gridContainer.append(gridRow);
    i++;
  }
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('pointerover', changeColor);
  });
};

// Event Listeners

squareForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const numberOfSquares = parseInt(e.target[0].value);
  toggleClassOn();
  createGrid(numberOfSquares);
});
clearButton.addEventListener('pointerdown', clearGrid);
numberInput.addEventListener('keydown', validateEntry);
numberInput.addEventListener('change', checkNumberRange);
popup.addEventListener('pointerdown', exitPopup);
popup.addEventListener('keydown', exitPopup);

// Helper Functions
const wait = (amount = 0) =>
  new Promise((resolve) => setTimeout(resolve, amount));

// Start App
createGrid();
