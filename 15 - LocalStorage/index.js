const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || [];
  const checkAllButton = document.querySelector('.check-all');
  const uncheckAllButton = document.querySelector('.uncheck-all');
  const resetButton = document.querySelector('.reset');

  function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
      text,
      done: false
    }
    
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
  }

  function checkAllItems() {
    items.forEach(item => {
      item.done = true;
    });
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
  }

  function unCheckAllItems() {
    items.forEach(item => {
      item.done = false;
    });
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
  }

  function reset() {
    localStorage.removeItem('items');
    location.reload();
  }

  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index="${i}" id="item-${i}" ${plate.done ? "checked" : ""}/>
          <label for="item-${i}">${plate.text}</label>
        </li>
      `;
    }).join('');
  }

  function toggleDone(e) {
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }

  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);
  checkAllButton.addEventListener('click', checkAllItems);
  uncheckAllButton.addEventListener('click', unCheckAllItems);
  resetButton.addEventListener('click', reset);
  populateList(items, itemsList);