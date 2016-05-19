var piataItems = itemsInStorage();
var piataList = document.getElementById("piataList");

function processNewItem() {
  var newEntry = document.getElementById("mancare");
  if (newEntry.value.length != 0) {
   var newItem = {
    name: newEntry.value,
    id: Math.random().toString()
   };
   piataItems.push(newItem);
   localStorage.setItem('items', JSON.stringify(piataItems));
   addListItem(newItem, piataList);
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
    var itemId = givenItem["id"];
    var itemName = givenItem["name"];
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
    inputItem.value = itemName;
    listItem.appendChild(inputItem);
    listItem.appendChild(deleteButton);
    listItem.appendChild(saveButton);
    list.appendChild(listItem);

    deleteButton.addEventListener("click", function() {
      removeItem(this, saveButton, givenItem, list);
    });

    inputItem.addEventListener("input", function(){});

    saveButton.addEventListener("click", function() {
      for (var i = 0; i < piataItems.length; i++) {
        var item = piataItems[i];
        if(item["id"] === inputItem["id"]){
            item["name"] = inputItem.value;
            localStorage.setItem('items', JSON.stringify(piataItems));
        }
      }
    });
  }
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


