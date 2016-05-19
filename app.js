var piataItems = itemsInStorage();
console.log("You currently have this in storage:" + JSON.stringify(piataItems));
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

function addListItem(givenItem, list) {
  if (document.getElementById(givenItem)) {
    alert("Alo, baga alteceva, deja ai pus " + givenItem + ".");
  }
  else {
    var itemId = Math.random();
    var deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "x";
    deleteButton.class = "deleteButton";
    deleteButton.setAttribute('data-parentId', itemId);

    var saveButton = document.createElement("input");
    saveButton.type = "button";
    saveButton.value = "save";
    saveButton.class = "saveButton";
    saveButton.setAttribute('data-parentId', itemId);


    var listItem = document.createElement("li");
    var inputItem = document.createElement("input");
    inputItem.id = itemId;
    inputItem.value = givenItem;
    listItem.appendChild(inputItem);
    listItem.appendChild(deleteButton);
    listItem.appendChild(saveButton);
    list.appendChild(listItem);

    deleteButton.addEventListener("click", function() {
      removeItem(this, saveButton, givenItem, list);
    });

    inputItem.addEventListener("input", function(){});

    saveButton.addEventListener("click", function() {
      var i = piataItems.indexOf(givenItem);
      piataItems[i] = inputItem.value;
      console.log("Replaced " + piataItems[i] + " with " + inputItem.value);
    });
  }
};

function updateItem(saveButton, givenItem, list) {

};

function removeItem(deleteButton, saveButton, givenItem, list) {
  var index = piataItems.indexOf(givenItem);
  if (index > -1) {
    piataItems.splice(index, 1);
  }
  localStorage.setItem('items', JSON.stringify(piataItems));
  document.getElementById(deleteButton.getAttribute("data-parentId")).remove();
  deleteButton.remove();
  saveButton.remove();
};

function init(){
  piataItems = itemsInStorage();
  for (var item of piataItems) {
    addListItem(item, piataList);
  }
  document.getElementById("submit").addEventListener("click", processNewItem);
};

init();


