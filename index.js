const gridContainer = document.querySelector('.grid-container');
const gridRow = document.querySelector('.grid-row');
const clearButton = document.querySelector('#clear');
const formContainer = document.querySelector('.form-container');
const squareForm = document.querySelector('#square-form');
const popup = document.querySelector('.popup');
const numberInput = document.querySelector('#number-input');

const clearGrid = (e) => {
  toggleClassOff()
  createNewGrid(e);
};

const toggleClassOff = () => {
  popup.classList.remove('hidden');
  formContainer.classList.remove('hidden');
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
  const possible = '0123456789Backspace';
  if (!possible.includes(e.key)) {
    e.preventDefault();
  }
};

const createNewGrid = (e) => {
  numberInput.value = ''
  squareForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const numberOfSquares = parseInt(e.target[0].value);
    console.log(numberOfSquares);
    toggleClassOn()
    createGrid(numberOfSquares);
  });
};
clearButton.addEventListener('pointerdown', clearGrid);
numberInput.addEventListener('keydown', validateEntry);
numberInput.addEventListener('change', checkNumberRange);

const wait = (amount = 0) =>
  new Promise((resolve) => setTimeout(resolve, amount));

const createGrid = async (num = 16) => {
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
};

createGrid();
