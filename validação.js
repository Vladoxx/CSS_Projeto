function validação() {
    var nome, email, assunto, mensagem, expresão;
    nome = document.getElementById("nome").value;
    email = document.getElementById("email").value;
    assunto = document.getElementById("assunto").value;
    mensagem = document.getElementById("mensagem").value;
    expresão = /\w+@\w+\.+[a-z]/;

    if(nome === "" || email === "" || assunto === "" || mensagem === "") {
        alert("Todos os campos são obrigatórios");
        return false;
    }
    else if(nome.length>20) {
        alert("O nome é muito longo");
        return false;
    }   
    else if(email.length>100) {
        alert("O email é muito longo");
        return false;
    }
    else if(!expresão.test(email)) {
        alert("O email não é valido")
    }
    else if(assunto.length>50) {
        alert("O assunto é muito longo");
        return false;
    }
    else if(mensagem.length>200) {
        alert("O mensagem é muito longo");
        return false;
    }
}

/*Fin da Validaçao do Formulario*/

let apiBase = 'https://api.github.com/'
let user = 'USERNAME'
let endpoint = `users/${user}/repos`

let requestUrl = apiBase + endpoint

function displayRepos(repos) {
    let container = document.querySelector('#repos')
    
    for ( let repo of repos ) {
        let card = document.createElement('a')
        card.textContent = repo.name
        card.href = repo.link
        card.target = '_blank'
        card.rel = 'noopener'
        card.classList.add('card')
        container.appendChild(card)
    }
    
}

fetch(requestUrl)
.then(response => {
    if (response.ok) {
        return response.json()
    }
})
.then(data => {
    let repos = []
    data.forEach(repo => {
        repos.push({
            name: repo.name,
            link: repo.html_url
        })
    })
    displayRepos(repos)
})