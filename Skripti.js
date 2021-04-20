const fullLodzins = document.getElementById('lodzinjs')

document.getElementById('jaunaPrece').addEventListener('click', () => {
    fullLodzins.style.display = 'block';

})

document.getElementById('pievienotPreci').addEventListener('click', () => {
    fullLodzins.style.display = 'none';

    let gramata = {virsraksts: virsraksts.value, autors: autors.value};

    virsraksts.value = "";
    autors.value = "";

    gramatas.push(gramata);

    render()
})