console.log("hallo");

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	console.log("drag");
	console.log(ev.target.id);
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	console.log("drop");
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	console.log(data);
  ev.target.appendChild(document.getElementById(data));
}
