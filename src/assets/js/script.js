// DECLARANDO UM ARRAY DE IMAGENS

let imagens = [
    'src/assets/img/BombardilloCrocodillo.webp',
    'src/assets/img/todos.webp',
    'src/assets/img/hidespot.webp',
];


// DECLARANDO AS VARIAVEIS
let index = 0;
let tempo = 3000;

// CRIANDO A FUNÇÃO DO SLIDESHOW

function slideShow() {
    document.getElementById('image').src = imagens[index];
    index++;
    // VERIFICAR QUANTIDADE DE IMAGENS
    if (index == imagens.length) {
        index = 0;
    }
    setTimeout("slideShow()", tempo)
}
// EXECUTA A FUNÇÃO
slideShow();