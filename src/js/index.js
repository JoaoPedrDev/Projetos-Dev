/* 
OBjetivo- quando clicarmos no botão temos que mostrar  a imagem de fundo correspondente

Passo 1 - dar um jeito de pegar o elemento HTML dos botões
Passo 2 - dar um jeito de identificar o clique do usuário no botão 
Passo 3 - desmarcar o botão selecionado anterior 
Passo 4 - marcar o botão clicado como se estivesse selecionada 
passo 5 - esconder a imagem anterior 
Passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

// Passo 1
    const botoesCarrossel = document.querySelectorAll('.botao');
    const imagens = document.querySelectorAll('.imagem')

// Passo 2
    botoesCarrossel.forEach((botao, indice) =>{
    botao.addEventListener('click', () =>{


        //Passo 3
        const botaoSelecionado = document.querySelector('.selecionado')
        botaoSelecionado.classList.remove('selecionado')

        //Passo 4 
        botao.classList.add('selecionado');

        //Passo 5
        const imagemAtiva = document.querySelector('.ativa') 
        imagemAtiva.classList.remove('ativa')

        //Passo 6 
        imagens[indice].classList.add('ativa')

    
    }) 
}) 




