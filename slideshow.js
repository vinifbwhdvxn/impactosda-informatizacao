let slideAtual = 1; // Controla qual slide está sendo exibido (começa no 1)

// Mostra o slide inicial quando a página carrega
mostrarSlide(slideAtual);

// Função para mudar de slide (avançar ou voltar)
function mudarSlide(direcao) {
    // 'direcao' pode ser 1 (próximo) ou -1 (anterior)
    mostrarSlide(slideAtual += direcao);
}

// Função para ir diretamente para um slide específico
function irparaslide(numeroSlide) {
    mostrarSlide(slideAtual = numeroSlide);
}

// Função principal que controla a exibição dos slides
function mostrarSlide(numeroSlide) {
    let i;
    
    // Pega todos os elementos com classe "slide"
    let slides = document.getElementsByClassName("slide");
    
    // Pega todos os elementos com classe "ponto" (indicadores)
    let pontos = document.getElementsByClassName("ponto");
    
    // Se o número do slide for maior que o total de slides, volta para o primeiro
    if (numeroSlide > slides.length) {
        slideAtual = 1;
    }
    
    // Se o número do slide for menor que 1, vai para o último slide
    if (numeroSlide < 1) {
        slideAtual = slides.length;
    }
    
    // Esconde todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove a classe "ativo" de todos os pontos indicadores
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" ativo", "");
    }
    
    // Mostra o slide atual (subtrai 1 porque arrays começam em 0)
    slides[slideAtual - 1].style.display = "block";
    
    // Adiciona a classe "ativo" ao ponto indicador correspondente
    pontos[slideAtual - 1].className += " ativo";
}