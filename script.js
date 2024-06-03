function calculateLove() {
    let name1 = document.getElementById('name1').value.trim();
    let name2 = document.getElementById('name2').value.trim();

    if (name1 === "" || name2 === "") {
        alert("Por favor, ingrese ambos nombres.");
        return;
    }

    let loveScore = getLoveScore();

    let progressBar = document.getElementById('progress');
    let lovePercentageText = document.getElementById('love-percentage');

    progressBar.style.width = loveScore + "%";
    lovePercentageText.innerText = "El nivel de amor es: " + loveScore + "%";
}

function getLoveScore() {
    // Genera un puntaje de amor completamente aleatorio entre 0 y 100
    return Math.floor(Math.random() * 101);
}

function resetForm() {
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
    document.getElementById('progress').style.width = '0';
    document.getElementById('love-percentage').innerText = '';
}
