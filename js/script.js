// array cognomi
var cognomi = ['Bianchi', 'Rossi', 'Verdi', 'Brambilla', 'Poncia', 'Ruffoni', 'Gargantini', 'Cappi', 'Mazzucchi'];
// cognome inserito dall'utente
var cognomeUtente = prompt('Inserisci il tuo cognome');
// pusho il cognome dell'utente nell'array
cognomi.push(cognomeUtente);
// metto in ordine alfabetico l'array
cognomi.sort();
// riprendo l'ul dall'HTML
var output = document.getElementById('output-cognomi');
// ciclo for per stampare in html
for (var i = 0; i < cognomi.length; i++) {
  output.innerHTML += '<li>' + cognomi[i] + '</li>';
}

var indexUtente = cognomi.indexOf(cognomeUtente);
output.innerHTML += '<div>' + 'Ti trovi nella posizione n. ' + (indexUtente + 1) + '</div>';
