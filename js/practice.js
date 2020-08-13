
const ul = document.getElementById('ul-item');
const form = document.getElementById('form-add');
const search = document.getElementById('itsearch');

const del = document.getElementById('del');

// add item

form.addEventListener('submit', adds);
function adds(e) {
    e.preventDefault();

    // get value of input fireld for add 
    let addItem = document.getElementById('add').value;

    // create li element

    let li = document.createElement('li');
    li.className = 'item-list'

    // append value of input field to li
    li.appendChild(document.createTextNode(addItem));

    // repeat for button

    let button = document.createElement('button');

    button.className = 'btn btn-danger';

    button.appendChild(document.createTextNode('delete'));

    li.appendChild(button);

    ul.appendChild(li);
}


// delete item

ul.addEventListener('click', deleted)

function deleted(e){
    if (e.target.classList.contains('btn-danger')){
        if(confirm('Are you sure?')); {
            let li = e.target.parentElement;
            ul.removeChild(li)
        }
    }
}


// filter content

search.addEventListener('keyup', filtered);

function filtered(e){
   let cont = e.target.value.toLowerCase;

    // get all li items

    let lis = ul.getElementsByTagName('li');

    // convert to an array
    Array.from(lis).forEach(function(items){
        let text = items.firstChild.textContent.toLowerCase();
        if (text.indexOf(cont) != -1){
            items.style.display = 'block';
        }else {
            items.style.display = 'none';
        }
    });
  
};