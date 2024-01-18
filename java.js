const container = document.querySelector('#container');

function createGrid(size) {

  for (let row =1; row <= size; row++) {
    const rowContainer = document.createElement('div');
    rowContainer.id = 'row';
    container.appendChild(rowContainer)

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