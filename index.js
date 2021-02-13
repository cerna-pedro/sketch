const gridContainer = document.querySelector('.grid-container');
const gridRow = document.querySelector('.grid-row');
const clearButton = document.querySelector('#clear');

const clearGrid = () => {
  console.log('cleared');
  createGrid()
};

const wait = (amount = 0) => new Promise(resolve=> setTimeout(resolve, amount))

clearButton.addEventListener('pointerdown', clearGrid);

const createGrid = async (num = 16) => {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild)

  }
  let i = 0;
  while (i < num) {
    const gridRow = document.createElement('div')
    gridRow.classList.add('grid-row')
    for (let j = 0; j < num; j++) {
      const div = document.createElement('div');
      div.classList.add('cell');
      gridRow.append(div);
      gridContainer.append(gridRow);
      await wait(1)
    }
    gridContainer.append(gridRow);
    i++;
  }
};

createGrid();
