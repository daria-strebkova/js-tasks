const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const list = document.querySelector("#list");

const loop = (direction, e) => {
  e.preventDefault();

  if (direction === "right") {
    list.appendChild(list.firstElementChild);
  } else {
    list.insertBefore(list.lastElementChild, list.firstElementChild);
  }
};

right.addEventListener("click", (e) => {
  loop("right", e);
});

left.addEventListener("click", (e) => {
  loop("left", e);
});

