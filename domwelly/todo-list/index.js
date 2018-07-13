const todoList = document.getElementsByTagName("li");
const i;
for (i = 0; i < todoList.length; i++) {
  const button = document.createElement("button");
  const txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
  todoList[i].appendChild(button);
}

const close = document.getElementsByClassName("close");
const i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}

const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("output").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  const button = document.createElement("button");
  const txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
  li.appendChild(button);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
}