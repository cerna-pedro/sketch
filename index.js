const container = document.querySelector('.grid-container')
const clearButton = document.querySelector('#clear')

const clearGrid = () => {
  console.log('cleared');
}

clearButton.addEventListener('pointerdown', clearGrid)

const createGrid = (num = 16) => {
  let i = 0
  while (i < num**2) {
    // const margin = {
    //   top: '60px',
    //   right: '60px',
    //   bottom: '60px',
    //   left: '60px'
    // }

    const div = document.createElement('div')
    const heightOfDiv = `min-height:${num}px;background:yellow;max-width:${num}px`
    div.setAttribute('style',heightOfDiv)
    // div.setAttribute('style','background:yellow')
    // div.setAttribute('style',widthOfDiv)
    div.textContent = 'h';
    console.dir(div);
    container.append(div)
    i++

  }


}

createGrid()