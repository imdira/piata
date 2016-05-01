var piataItems = itemsInStorage();

function addNewItem() { 
  var myItem = document.getElementById("mancare");
  if (myItem.value.length != 0) {
   piataItems.push(myItem.value);
   localStorage.setItem('items', JSON.stringify(piataItems));
   updateList(myItem.value);
 }
 else {
   alert("Pune ceva acolo!");
 }
};

document.getElementById("submit").addEventListener("click", addNewItem);

function itemsInStorage() {
  if (localStorage.getItem('items')) {
    return JSON.parse(localStorage.getItem('items'));
  }
  else return [];
}

function buildList() {
  var piataList = document.getElementById("piataList");
  if (piataItems.length != 0) {
    for (var item in piataItems) {
     var newElement = document.createElement("li");
     var newContent = document.createTextNode(piataItems[item]);
     newElement.appendChild(newContent);
     piataList.appendChild(newElement);
   }
 }
};

function updateList(newItem) {
  var piataList = document.getElementById("piataList");
  var newElement = document.createElement("li");
  var newContent = document.createTextNode(newItem);
  newElement.appendChild(newContent);
  piataList.appendChild(newElement);

};


