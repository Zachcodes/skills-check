let form = document.querySelector('form');
form.addEventListener('submit', addTodo);
function addTodo(e) {
  e.preventDefault();
  let input = document.getElementById('form-input');
  let li = document.createElement('li');
  li.innerText = input.value;
  let button = document.createElement('button');
  button.addEventListener('click', removeTodo);
  button.innerText = 'X';
  li.append(button);
  form.append(li);
  input.value = '';
}

function removeTodo(e) {
  let parentNode = e.target.parentNode;
  parentNode.remove();
}
