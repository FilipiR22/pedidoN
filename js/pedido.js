document.addEventListener("DOMContentLoaded", () => {
    const btnNao = document.getElementById("btn-nao");
    const btnSim = document.getElementById("btn-sim");
    const btnCoracoes = document.getElementById("coracoes");

    if (!btnNao || !btnSim) return;

    // Função para mover o botão "Não" pela tela inteira
    function moverNao() {
        const larguraMax = window.innerWidth - btnNao.offsetWidth;
        const alturaMax = window.innerHeight - btnNao.offsetHeight;

        const x = Math.random() * larguraMax;
        const y = Math.random() * alturaMax;

        btnNao.style.position = "fixed";
        btnNao.style.left = `${x}px`;
        btnNao.style.top = `${y}px`;
        btnNao.style.zIndex = 1000;
    }

    btnNao.addEventListener("mouseenter", moverNao);
    btnNao.addEventListener("click", moverNao);

    // Função para criar corações
    function gerarCoracoes(qtd) {
        for (let i = 0; i < qtd; i++) {
            const coracao = document.createElement("span");
            coracao.textContent = "❤️";
            coracao.classList.add("coracao");

            // posição aleatória na tela
            coracao.style.left = `${Math.random() * (window.innerWidth - 30)}px`;
            coracao.style.top = `${Math.random() * (window.innerHeight - 30)}px`;
            coracao.style.fontSize = `${12 + Math.random() * 24}px`; // tamanhos variados
            coracao.style.zIndex = 999;

            document.body.appendChild(coracao);

            // remove após a animação
            coracao.addEventListener("animationend", () => {
                coracao.remove();
            });
        }
    }

    // // Clique no "Sim" gera corações automaticamente
    btnSim.addEventListener("click", () => gerarCoracoes(80));

    // Botão dentro do modal também gera corações
    if (btnCoracoes) {
        btnCoracoes.addEventListener("click", () => gerarCoracoes(50));
    }
    const musica = document.getElementById('musica');
    
    btnSim.addEventListener('click', () => {
        // Espera o modal abrir pra tocar a música
        setTimeout(() => {
            musica.currentTime = 20; // começa do segundo 20
            musica.play();
        }, 300); // delay pequeno pra garantir que o modal abriu
    });
});

