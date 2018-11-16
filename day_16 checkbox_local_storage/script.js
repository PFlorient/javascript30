 const addItems = document.querySelector('.add-items');
 const itemList = document.querySelector('.liste');
 const items = [];

 function addItem(e) {
     e.preventDefault();
     const text = (this.querySelector('[name=item]')).value;
     const item = {
         text,
         done: false
     };

     items.push(item);
     populateList(items, itemList);
     this.reset();
 }

 function populateList(plates = [], platesList) {
     platesList.innerHTML = plates.map((plate, i) => {
         return `
         <li>
            <label for="">${plate.text}</label>
         </li>
         `;
     }).join('');
 }

 addItems.addEventListener('submit', addItem)