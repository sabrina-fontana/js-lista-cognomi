// array cognomi
var cognomi = ['Bianchi', 'Rossi', 'Verdi', 'Brambilla', 'Poncia', 'Ruffoni', 'Gargantini', 'Cappi', 'Mazzucchi', 'Viola', 'Monaci'];
// cognome inserito dall'utente
var cognomeUtente = prompt('Inserisci il tuo cognome');
// pusho il cognome dell'utente nell'array
cognomi.push(cognomeUtente);
// metto in ordine alfabetico l'array
cognomi.sort();

var output = document.getElementById('output-cognomi');
var outputIndex = document.getElementById('output-index');
// ciclo for per stampare in html
for (var i = 0; i < cognomi.length; i++) {
  output.innerHTML += '<li id="li-' + i + '">' + cognomi[i] + '</li>';
}

var indexUtente = cognomi.indexOf(cognomeUtente);

var position = document.getElementById('li-' + indexUtente);

position.innerHTML += ' Ti trovi nella posizione ' + (indexUtente + 1);

position.style.color = 'red';

var button = document.getElementById('button');
var ciao = document.getElementById('ciao');

button.addEventListener('click',
  function() {
    var nome = prompt('Come ti chiami?');
    var sesso = prompt('Sei maschio o femmina?');
    if (sesso === 'maschio') {
      ciao.style.display = 'block';
      ciao.className = 'blue';
      ciao.innerHTML += nome;
    } else if (sesso === 'femmina') {
      ciao.style.display = 'block';
      ciao.className = 'pink';
      ciao.innerHTML += nome;
    } 
  }
)
