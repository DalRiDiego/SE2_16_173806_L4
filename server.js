var http = require('http');
var express = require('express');
var util = require('util');
var bodyParser = require('body-parser');



var app = express();
app.set('port',(process.env.PORT || 8080)); //ascolta la porta 8080
app.use(bodyParser.urlencoded({ extended: false }));

//vettore dei dati
var employees = [];

app.use(express.static(__dirname + '/web')); // serve per il collegamento di js e css

app.get("/",function (request,response){//GET utilizzato per ottenere un lavoratore o per eliminarne uno
	var template= {
		id:'',
		name:'',
		surname:'',
		level:'',
		salary:''
	};
	
	var url_parts = url.parse(request.url, true);
    var getVar = url_parts.query;
	var id=getVar.id;
	var del=getVar.del;

	if (id !== null) { //se un id e' stato passato
		// cerco l'id
		var i=0;
		for (i=0 ; i<employees.length ; i++){
			if(employees[i].id == id){//trovato l'id
				break;
			}
		}
		if(del=="true"){
			// cancello
			delete employees[i];
			employees.sort();
			employees.pop();
		}else{
			//preparo per restituirlo
			if(i<employees.length){
				template=employees[i];
			}
		}
	}

	bind.toFile('web/index.tpl',template,function (data){
		//invio del risultato
		var headers = {};
		headers["Access-Control-Allow-Origin"] = "*"; //for cross enviroment request
		headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";//methods allowed to responce
		headers["Access-Control-Allow-Credentials"] = false;
		headers["Access-Control-Max-Age"] = '86400'; // 24 hours
		headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; //type of headers answer
		headers["Content-Type"] = "text/html";//format response
    	response.writeHead(200, headers);
        
        response.end(data);
	});
});


app.post('/',function (request,response){//POST utilizzato per aggiungere o modificare un lavoratore
	var template= {
		id:'',
		name:'',
		surname:'',
		level:'',
		salary:''
	};

	//cerco di leggere i dati
	if ( typeof request.body !== 'undefined' && request.body)
	{
		if ( typeof request.body.id !== 'undefined' && request.body.id)
			template.id = request.body.id;
		if ( typeof request.body.name !== 'undefined' && request.body.name)
			template.name = request.body.name;
		if ( typeof request.body.surname !== 'undefined' && request.body.surname)
			template.surname = request.body.surname;
		if ( typeof request.body.level !== 'undefined' && request.body.level)
			template.level = request.body.level;
		if ( typeof request.body.salary !== 'undefined' && request.body.salary)
			template.salary = request.body.salary;
	}

	//aggiunta/modifica utente
	var i=0;
	for (i=0 ; i<employees.length ; i++){//cerco se esiste gia' l'id
		if(employees[i].id == template.id){//trovato l'id
			break;
		}
	}
	if(i<employees.length){//se ne ho trovato uno lo modifico
		employees[i].name=template.name;
		employees[i].surname=template.surname;
		employees[i].level=template.level;
		employees[i].salary=template.salary;
	}else{//ne aggiungo uno nuovo
		if(template.id==''){
			if(employees.length == 0){//se e' il primo ad essere aggiunto
				template.id=1;
			}else{
				template.id=1+employees[employees.length-1].id;
			}
		}
		employees.push(template);		
	}
	template.fun='f()';//aggiungo il fatto di postrare il form all'inizio
	bind.toFile('web/index.tpl',template,function (data){
	var headers = {};
    headers["Access-Control-Allow-Origin"] = "*"; //for cross enviroment request
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";//methods allowed to responce
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; //type of headers
    //answer
    headers["Content-Type"] = "text/html";//format response
    response.writeHead(200, headers);
        response.end(data);
	});
});

app.listen(8080,'127.0.0.1');
console.log("Server running on port 8080...");
