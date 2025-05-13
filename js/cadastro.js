// cadastro
const botao = document.getElementById("btnCadastrar");
let usuarios = [];

// cadastrar
botao.addEventListener('click',
    function (){
        const usuario = {
            login: document.getElementById('login').value,
            senha: document.getElementById('senha').value
        }
        usuarios.push(usuario);
            let listaUsuarios = JSON.stringify(usuarios);
            localStorage.setItem("usuarios", listaUsuarios);
            listar();
    }
);

function listar(){
    const listaUsuarioCad = JSON.parse(localStorage.getItem("usuarios")) || [];
    console.log(listaUsuarioCad);
    const tabelaListaUsuarios = document.getElementById('listaUsuario');
    tabelaListaUsuarios.innerHTML = "";

    listaUsuarioCad.forEach((usuario, index) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${usuario.login}</td>
            <td>${usuario.senha}</td>
            <td>
                <button onclick"excluirUsuario(${index})">Remover</button>
            </td>
        `;
        tabelaListaUsuarios.appendChild(linha);
    });
}

listar();