const container = document.querySelector('#container');

function createGrid(size) {
  const subContainer = document.createElement('div');
  subContainer.id = 'subcontainer';
  container.appendChild(subContainer);
  for (let row =1; row <= size; row++) {
    const rowContainer = document.createElement('div');
    rowContainer.id = 'row';
    subContainer.appendChild(rowContainer)

    for (let column=1; column <= size; column++) {
      const div = document.createElement('div');
      div.id = 'cell';
      rowContainer.appendChild(div);
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = 'black';
      })
    };
  };
};

createGrid(16);

const btn = document.querySelector('button')
btn.addEventListener('click', () => {
  const input = prompt("Enter a size between 1 and 100: ");
  container.removeChild(document.querySelector('#subcontainer'));
  createGrid(input);
});