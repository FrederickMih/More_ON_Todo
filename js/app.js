// Select the elements
const clear = document.querySelector('.clear');
const dateElement = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('input');

// Classes names
const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle-thin';
const LINE_THROUGH = 'lineThrough';

// Show today's date
const options = { weekday: 'long', month: 'short', day: 'numeric' };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString('en-US', options);

// Add to do function

function addToDo(toDo) {
  const item = `
                  <li class="item">
                     <i class="fa fa-circle-thin co" job="complete" id="0"></i>
                     <p class="text">${toDo}</p>
                     <i class="fa fa-trash de"></i>   
                  </li>
                 `;
  const position = 'beforeend';

  list.insertAdjacentHTML(position, item);
}
