const nomes = ['Ana', 'Carla', 'Trísia'];
const idades = [22, 11, 44];
const cpfs = ["12345", "12543", '99445'];

const listaUsuariosElement = document.querySelector('#listaUsuarios');

function exibirUsuarios() {
    for (let i = 0; i < nomes.length; i++) {
        inserirUserNaLista(nomes[i], idades[i], cpfs[i]);
    }
}

function inserirUserNaLista(nome, idade, cpf) {
    const liElement = document.createElement('li');

    const spanElement = document.createElement('span');
    spanElement.textContent = `${nome}, Idade: ${idade}, CPF: ${cpf} `;
    liElement.appendChild(spanElement);

    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'X';
    botaoRemoverElement.addEventListener('click', () => {
        liElement.remove();
    });

    liElement.appendChild(botaoRemoverElement);
    listaUsuariosElement.appendChild(liElement);
}

function inserirUser() {
    const inputNomeElement = document.querySelector('#nome');
    const inputIdadeElement = document.querySelector('#idade');
    const inputCpfElement = document.querySelector('#cpf');

    const nome = inputNomeElement.value;
    const idade = inputIdadeElement.value;
    const cpf = inputCpfElement.value;

    if (nome && idade && cpf) {
        inserirUserNaLista(nome, idade, cpf);
        inputNomeElement.value = '';
        inputIdadeElement.value = '';
        inputCpfElement.value = '';
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}

exibirUsuarios();