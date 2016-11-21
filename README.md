# SE2_16_173806_L4
Esercizio su node.js
Gestione delgi impiegati

Vengono utilizzate le seguenti librerie di npm:
    - body-parser
    - express
    - url
    - bind

Il file server.js è il file che contiene il programma Node.js che lancia il server in ascolto su 127.0.0.1 sulla porta 8080
La cartella web/ contiene:
	- css/style.css: File con lo stile css utilizzato per la pagina
	- js/script.js: File con funzioni javascript utilizzate dalla pagina per il controllo dei campi e invio dei form dopo il controllo
	- index.tpl: File template che contiene il codice della pagina

TEST:
Per testare l'appicazione basta lanciare server.js da node: 
> node server.js

Collegarsi poi da un Browser qualsiasi sullo stesso computer all'indirizzo 127.0.0.1:8080/

Clickando sul pulsante "Show/Hide form" il form viene reso visibile oppure invisibile.
Quando esso viene nascosto verrà cancellato il contenuto dei campi del form.

Dopo aver compilato i campi del form, cliccando sul pulsante "Modify" essi vengono inviati al server.
Se l'id esiste, vengono sovrascritti i dati vecchi con quelli nuovi, mentre se non esiste esso viene aggiunto.
Se l'id non esiste, viene assegnato un id che è maggiore di 1 di quello più grande.

Clickando sul pulsante "find employee", se il relativo campo è stato inserito viene ricercato se il corrispondente id
è stato inserito precedentemente, e quindi vengono visualizzati i dati, oppure i campi saranno vuoti.
Se il campo non è stato inserito il form viene nascosto.

Clickando sul pulsante "delete employee" viene settato un campo hidden che indica che l'id ricercato va eliminato.

NOTE:
all'inizio non è presente nessun impiegato
