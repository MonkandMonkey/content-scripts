function show_element(e){
	if(!e){
	 var e = window.event;
	}
	//Get the DOM element being clicked.
	var targ = e.target;
	targ.style.backgroundColor = "orange";
	//Get the tagName of the element.
	var tname = targ.tagName;
	alert(tname);
	targ.style.backgroundColor = "white";
	
}
function getFocus(){
	document.addEventListener('click',show_element);
}
getFocus();

