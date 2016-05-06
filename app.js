var piataItems = itemsInStorage();
var piataList = document.getElementById("piataList");

function processNewItem() { 
  var myItem = document.getElementById("mancare");
  if (myItem.value.length != 0) {
   piataItems.push(myItem.value);
   localStorage.setItem('items', JSON.stringify(piataItems));
   addListItem(myItem.value, piataList);
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

function getItemIndex(givenItem, list) {
  var index = 0;
  var listItems = list.getElementsByTagName("li");
  for (var i = 0; i < listItems.length; i++) { 
    var item = listItems[i];
    if (item.textContent === givenItem) {
      return index + 1;
    }
    else {
      index ++;
    }
  }
  return -1;
}

function addListItem(newItem, list) {
  if (document.getElementById(newItem)) {
    alert("Alo, baga alteceva, deja ai pus " + newItem + ".");
  }
  else {
    var deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "x";
    deleteButton.class = "deleteButton";
    var newElement = document.createElement("li");
    newElement.id = list.getElementsByTagName("li").length + 1;
    var newContent = document.createTextNode(newItem);
    newElement.appendChild(newContent);
    newElement.appendChild(deleteButton);
    list.appendChild(newElement);
    deleteButton.addEventListener("click", function() {
      removeItem(newItem, list);
    });
  }
};

function removeItem(givenItem, list) {
  var index = piataItems.indexOf(givenItem);
  if (index > -1) {
    piataItems.splice(index, 1);
  }
  localStorage.setItem('items', JSON.stringify(piataItems));
  document.getElementById(getItemIndex(givenItem, list)).remove();
};

function init(){
  piataItems = itemsInStorage();
  for (var item of piataItems) {
    addListItem(item, piataList);
  }
  document.getElementById("submit").addEventListener("click", processNewItem);
};

init();


