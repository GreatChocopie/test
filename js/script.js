var buttonOpen = document.querySelector(".feedback-button");
var popup = document.querySelector(".modal");

function open(evt) {
  if (popup.classList.contains("modal--opened")) {
    console.log("already opened map");
    evt.preventDefault();
    return false;
  }
  console.log("opening map");
  evt.preventDefault();
  evt.stopPropagation();
  popup.classList.add("modal--opened");
  document.addEventListener("click", close);
}

function elemHasParent(elem, needle) {
  while (elem != null) {
    elem = elem.parentNode;
    if (elem == needle) return true;
  }
  return false;
}

function close(evt) {
  console.log("close start");
  console.log(evt.target);
  var target = evt.target;
  if (!elemHasParent(target, popup)) {
    console.log("closing map");
    evt.preventDefault();
    popup.classList.remove("modal--opened");
    document.removeEventListener("click", close);
    console.log("listener removed");
  } else {
    console.log("close - wrong elem, do nothing");
  }
}

buttonOpen.addEventListener("click", open);
