/**
 * Funzione per mostrare e nascondere il form dei dati.
 * Inoltre cancella i dati contenuti quando viene nascosto
*/
function f(){
	var o = document.getElementById("show");
	if(o.className == "premuto") {
		o.className = "";
		document.getElementById("form").className = "nascondi";
		document.getElementById("id").value="";
		document.getElementById("name").value="";
		document.getElementById("surname").value="";
		document.getElementById("level").value="";
		document.getElementById("salary").value="";
	}else{
		o.className = "premuto";
		document.getElementById("form").className = "";
	}
}

/**
 * Funzione per settare il campo hidden che permette la cancellazione dal server del dato
*/
function del(){
	var h = document.getElementById("d");
	h.name = "del";
	h.value = "true";
	document.getElementById("search").submit();
}

function send(){
	var elem=["name","surname","level","salary"];
	
	var test = true;
	var i=0;
	for (i=0 ; i<elem.length && test; i++){
		var o = document.getElementById(elem[i]);
		test = test && (o.value != "");
	}

	test = test && !isNaN(document.getElementById("level").value);
	test = test && !isNaN(document.getElementById("salary").value);
	if(test){
		document.getElementById("form").submit();
	}
}
