// Base de perguntas
const perguntas = [
    {
        enunciado: "Como se chama o cromossomo descondensado?",
        alternativas: ["Nucléolo", "Carioteca", "Desmossomo", "Cromatina"],
        correta: 3
    },
    {
        enunciado: "Qual a organela citoplasmática exclusiva da célula animal?",
        alternativas: ["Mitocôndrias", "Centríolo", "Peroxissomo", "Fagocitose"],
        correta: 1
    },
    {
        enunciado: "Qual órgão do sistema excretor armazena a urina?",
        alternativas: ["Ribossomo", "Bascenetes", "Bexiga", "Néfron"],
        correta: 2
    },
    {
        enunciado: "O que o DNA tem e o RNA não?",
        alternativas: ["Desoxirribose", "Ribose", "Cariolinfa", "Fuso Mitótico"],
        correta: 0
    }
];

let indice = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const header = document.querySelector("header");
const body = document.body;

function carregarPergunta() {
    if (indice >= perguntas.length) {
        header.style.display = "none";
        questionEl.innerHTML = "<strong>Quiz finalizado!</strong>";
        answersEl.innerHTML = `
                <p class="fs-4">Você acertou <strong>${score}</strong> de ${perguntas.length} perguntas.</p>
                <a href="pedido.html" class="btn btn-primary btn-lg">Próxima etapa</a>
                <button id="restartBtn" class="btn btn-secondary btn-lg">Reiniciar Quiz</button>
            `;

        // botão reiniciar
        document.getElementById("restartBtn").addEventListener("click", reiniciarQuiz);
        return;
    }

    const atual = perguntas[indice];
    questionEl.textContent = atual.enunciado;
    answersEl.innerHTML = "";

    atual.alternativas.forEach((alt, i) => {
        const btn = document.createElement("button");
        btn.className = "btn btn-pergunta btn-lg";
        btn.textContent = alt;
        btn.onclick = () => verificarResposta(i);
        answersEl.appendChild(btn);
    });
}

function verificarResposta(indiceEscolhido) {
    const atual = perguntas[indice];
    if (indiceEscolhido === atual.correta) {
        score++;
        scoreEl.textContent = score;
        animar("correct");
    } else {
        animar("wrong");
    }
    indice++;
    setTimeout(carregarPergunta, 700);
}

function animar(tipo) {
    body.classList.add(tipo);
    setTimeout(() => body.classList.remove(tipo), 500);
}

function reiniciarQuiz() {
    indice = 0;
    score = 0;
    scoreEl.textContent = score;
    carregarPergunta();
}

carregarPergunta();