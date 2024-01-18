

const container = document.querySelector('#container');

for (let row =1; row <= 16; row++) {
  const rowContainer = document.createElement('div');
  rowContainer.id = 'row';
  container.appendChild(rowContainer)
  for (let column=1; column <=16; column++) {
    const div = document.createElement('div');
    div.id = 'cell';
    rowContainer.appendChild(div);
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = 'black';
    })
  };
};