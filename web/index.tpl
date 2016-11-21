<!DOCTYPE HTML>
<html>
<head>
	<title> Employee Manager </title>
	<link rel="stylesheet" href="css/style.css"/>
	<script type="text/javascript" src="js/script.js" > </script>
	
<head>
<body>
	<h1> Employee Manager System</h1>
	<form id="search" method="GET" action="/">
		<label>id:</label>
		<input type="number" id="idsearch" name="id" placeholder="Employee id" />
		<input type="hidden" id="d" value="false" />
		<input type="submit" id="find" value="find employee"/>
		<button id="delete" onclick="del()" >delete employee</button> 
	</form><br> <br>
	
	<button id="show" onclick="f()">Show/Hide form</button>
	
	<form id="form" method="POST" action="/" class="nascondi" >
		<label>ID:</label> <input type="number" id="id" name="id" placeholder="Employee id" value="(:id:)"/> <br/>
		<label>Name:</label> <input type="text" id="name" name="name" placeholder="Employee name" value="(:name:)"/> <br/>
		<label>Surname:</label> <input type="text" id="surname" name="surname" placeholder="Employee surname" value="(:surname:)"/> <br/>
		<label>Level:</label> <input type="number" id="level" name="level" placeholder="Employee level" value="(:level:)"/> <br/>
		<label>Salary:</label> <input type="number" id="salary" name="salary" placeholder="Employee salary" value="(:salary:)"/> <br/>
		<input type="submit" id="invia" value="Modifica dati"/>
	</form>
	<script>
		(:fun:)
	</script>
</body>
</html>
