// autenticacao login

const botao = document.getElementById('entrar');
botao.addEventListener('click',
    function (){
        const usuario = JSON.parse(localStorage.getItem("usuarios")) || [];

        const login = usuario.find(user => user.login === login && user.senha === senha);

        

    }


);