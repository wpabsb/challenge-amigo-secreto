//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; // Cria uma variavel do tipo lista que armazena o nome dos amigos.


// Criando uma função para adicionar amigos:

function adicionarAmigo(){
    let amigo = document.querySelector('input').value; // Definindo uma variavel para armazenar o amigo ( o amigo será igual ao 'input' do usuário. )
    if (amigo == ''){ // se a váriavel amigo for '' (estiver vazia)
        alert('Por favor, insira um amigo.'); // exibe este alerta na tela do usuário
    } 
    else { // se não estiver vazio acontecerá:
        amigos.push(amigo); // colocará o nome do amigo dentro da lista de amigos. (push = empurrar) empurra o amigo na lista.
        limparCampo(); // limpa o campo após inserir amigo.
        exibirListaDeAmigos(); // chama a função de exibir a lista de amigos.
    }
}

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
}

function exibirListaDeAmigos(){
    let lista = document.getElementById('listaAmigos'); // criamos a variavel lista para armazenar o nome dos amigos adicionados
    lista.innerHTML = ''; // limpa a lista se tiver algo antes de iniciar o programa ou ao reiniciar.
    for (let elemento = 0; elemento < amigos.length; elemento++ ){ // criando um loop para cada se elemento < quantidade de amigos, elemento++ (ou seja mais um elemento)
        let amigo = document.createElement('li'); // cria um elemento 'li' dentro do html cada vez que o código se repetir ( elemento 'li' no HTML escreve o texto de uma lista em coluna)
        amigo.textContent = amigos[elemento] // define que o conteudo do texto será igual ao elemento da lista de amigos ( nome do participante naquele indice )
        lista.appendChild(amigo); // nescessário para criar elemento "filho" de lista todas as vezes que o loop se reiniciar.
    }
}


// função para sortear amigos

function sortearAmigo(){
    if (amigos.length == 0) {
        document.getElementById('resultado').innerHTML = 'Nenhum amigo para sortear ou todos já foram sorteados'; // Se a lista de amigos estiver vazia, exibe a mensagem entre ''
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // gera um número aleatório que será usado para determinar qual amigo será sorteado, math.floor transforma em um numero inteiro, math.random() gera um numero aleatorio entre 0.1 e 1 multiplica pelo numero de amigos na lista para não ultrapassar.
    let amigoSorteado = amigos[indiceAleatorio]; // Define qual amigo será sorteado ex.: se for amigo[2] será o terceiro e etc. (terceiro pq o primeiro seria o amigo[0])
    amigos.splice(indiceAleatorio, 1); // Remove o amigo sorteado da lista para não ser sorteado novamente.
    document.getElementById('resultado').innerHTML = 'O amigo sorteado foi:' + amigoSorteado; // Envia o texto entre aspas para o HTML + O nome do amigo sorteado.
}