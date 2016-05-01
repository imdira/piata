
var prefix = "mancare-";
var piataItems = [];
document.getElementById("submit").addEventListener("click", addNewItem);

function addNewItem() { 
	var myItem = document.getElementById("mancare");
	if (myItem.value.length != 0) {
		console.log("Ok, deci cumparam si " + myItem.value + ".");
		var newKey = prefix + myItem.value;
		localStorage.setItem(newKey, myItem.value);
		updateList(newKey);
	}
	else {
		alert("Pune ceva acolo!");
	}
};

function buildList() {

	var piataList = document.getElementById("piataList");
	for (var key in localStorage) {
		if (key.substring(0,7)=="mancare") {
			var itemFromStorage = localStorage.getItem(key);
			var newElement = document.createElement("li");
			var newContent = document.createTextNode(itemFromStorage);
			newElement.appendChild(newContent);
			piataList.appendChild(newElement);
		}
	}
};

function updateList(givenKey) {
	var piataList = document.getElementById("piataList");
	var itemFromStorage = localStorage.getItem(givenKey);
	var newElement = document.createElement("li");
	var newContent = document.createTextNode(itemFromStorage);
	newElement.appendChild(newContent);
	piataList.appendChild(newElement);

};

