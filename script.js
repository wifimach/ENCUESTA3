// Variables para llevar cuenta de los votos
let votes = { 'Irving': 0, 'Juan Carlos': 0, 'Gabriel': 0, 'Santos': 0 };

// Función para sumar votos y actualizar la tabla
function addVote(name) {
    votes[name]++;
    document.getElementById(name.toLowerCase().replace(' ', '') + 'Votes').innerText = votes[name];
}

// Función para guardar los votos en LocalStorage
function saveVotes() {
    localStorage.setItem('votes', JSON.stringify(votes));
    alert('Votos guardados correctamente.');
}

// Función para limpiar los votos y actualizar la tabla
function clearVotes() {
    votes = { 'Irving': 0, 'Juan Carlos': 0, 'Gabriel': 0, 'Santos': 0 };
    updateTable();
}

// Función para actualizar la tabla con los votos actuales
function updateTable() {
    document.getElementById('irvingVotes').innerText = votes['Irving'];
    document.getElementById('jCarlosVotes').innerText = votes['J Carlos'];
    document.getElementById('gabrielVotes').innerText = votes['Gabriel'];
    document.getElementById('santosVotes').innerText = votes['Santos'];
}

// Cargar votos guardados si existen
window.onload = function() {
    const savedVotes = localStorage.getItem('votes');
    if (savedVotes) {
        votes = JSON.parse(savedVotes);
        updateTable();
    }
}
// JavaScript Document