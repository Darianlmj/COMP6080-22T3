const loginButton = document.getElementById("login-button");
const pageForms = document.querySelectorAll(".page-form");
const toDoForm = document.querySelectorAll(".page-form")[1];
const loginForm = document.querySelectorAll(".page-form")[0];
const toDoInput = document.getElementById('to-do');

pageForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});

loginButton.addEventListener("click", () => {
  localStorage.setItem("token", "my token");
  toDoForm.style.display = "inline-block";
  loginForm.style.display = "none";
});

toDoForm.addEventListener('submit', () => {
  if (document.getElementById('to-do-list') === null) {
    const toDoList = document.createElement('div');
    toDoList.id = 'to-do-list';
    toDoForm.appendChild(toDoList);
  }

  const toDoItemContainer = document.createElement('div');
  toDoItemContainer.className = 'to-do-item-container';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  const toDoItem = document.createElement('p');
  toDoItem.innerText = toDoInput.value;


  toDoItemContainer.appendChild(checkbox);
  toDoItemContainer.appendChild(toDoItem);

  document.getElementById('to-do-list').appendChild(toDoItemContainer);
});


