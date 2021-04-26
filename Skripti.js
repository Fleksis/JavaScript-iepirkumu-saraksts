const fullLodzins = document.getElementById('lodzinjs')
let jaunsLogi = []

window.addEventListener('load', () => {
    jaunsLogi = JSON.parse(localStorage.getItem("jaunsLogi") || "[]");
    console.log(jaunsLogi)
    render();
});

document.getElementById('jaunaPrece').addEventListener('click', () => {
    fullLodzins.style.display = 'block';

});

document.getElementById('PrecesPoga').addEventListener('click', () => {
    fullLodzins.style.display = 'none';

    let jaunsLogs = {Nosaukums: nosaukums.value, Daudzums: daudzums.value, Cena: cena.value};

    nosaukums.value = " ";
    daudzums.value = " ";
    cena.value = " ";

    jaunsLogi.push(jaunsLogs);

    render();
});

function render() {
    let biblioteka = document.getElementById('biblioteka');
    biblioteka.innerHTML = "";

    for(let i = 0; i < jaunsLogi.length; i++) {
        let jaunsLogs = `
        <div class="jaunsLogs">
            <h4>Nosaukums: ${jaunsLogi[i].Nosaukums}</h4>
            <h4>Daudzums: ${jaunsLogi[i].Daudzums}</h4>
            <h4>Cena: ${jaunsLogi[i].Cena}</h4>
        </div>`;

        biblioteka.innerHTML += jaunsLogs;
    }

    localStorage.setItem("jaunsLogi", JSON.stringify(jaunsLogi));
}