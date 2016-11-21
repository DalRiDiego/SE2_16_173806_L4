function f(){
	var o = document.getElementById("show");
	if(o.className == "premuto") {
		o.className = "";
		document.getElementById("form").className = "nascondi";
	}else{
		o.className = "premuto";
		document.getElementById("form").className = "";
	}
}

function del(){
	var h = document.getElementById("d");
	h.name = "del";
	h.value = "true";
	alert("asd");
	document.getElementById("search").submit();
}
