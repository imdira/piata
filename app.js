var piataItems = itemsInStorage();
function processNewItem() { 
  var myItem = document.getElementById("mancare");
  if (myItem.value.length != 0) {
   piataItems.push(myItem.value);
   localStorage.setItem('items', JSON.stringify(piataItems));
   addListItem(myItem.value);
 }
 else {
   alert("Pune ceva acolo!");
 }
};

function itemsInStorage() {
  if (localStorage.getItem('items')) {
    return JSON.parse(localStorage.getItem('items'));
  }
  else return [];
}

function addListItem(newItem) {
  if (document.getElementById(newItem)) {
    alert("Alo, baga alteceva, deja ai pus " + newItem + ".");
  }
  else {
    var deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "x";
    deleteButton.class = "deleteButton";
    var piataList = document.getElementById("piataList");
    var newElement = document.createElement("p");
    newElement.id = newItem;
    var newContent = document.createTextNode(newItem);
    newElement.appendChild(newContent);
    newElement.appendChild(deleteButton);
    piataList.appendChild(newElement);
    deleteButton.addEventListener("click", function() {
      removeItem(newItem);
    });
  }
};

function removeItem(givenItem) {
  var index = piataItems.indexOf(givenItem);
  if (index > -1) {
    piataItems.splice(index, 1);
  }
  localStorage.setItem('items', JSON.stringify(piataItems));
  document.getElementById(givenItem).remove();
};

function init(){
  piataItems = itemsInStorage();
  for (var item of piataItems) {
    addListItem(item);
  }
  document.getElementById("submit").addEventListener("click", processNewItem);
};

init();


