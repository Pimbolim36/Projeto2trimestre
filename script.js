const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O jogador amador naldo pereira dos santos ou como conhecidos pelos amigos naldino, ele tem um sonho de ser jogador profissional e tem um objetivo fazer um gol na final da copa do mundo pela seleçao brasileira. agr com 22 anos, depois de 17 anos que foi realizado a reportagem sobre o sonho e objetivo dele recebeu uma proposta de um time profisssional chamado Remo do estado Pará.",
        alternativa:[
            "Aceita Proposta (R$100000)",
            "Recusar Proposta(Treinar mais)"
        ]
    },
    {
        enunciado: "Apos um ano, jogando profissionalmente pelo Remo, ajudou a equipe a ser Campeão da Serie C e subiu a equipe para Serie B e foi eleito melhor jogador da Serie C. Apos amistoso contra o Flamengo o tecnico se interessou pelo jogador Naldinho e o jogador recebeu a seguinte proposta do Flamengo.",
        alternativa:[
            "Aceitar Proposta (300.000,00)",
            "Recusar Proposta (Continuar no Reme)"
        ]
    },
    {
        enunciado: "Apos ganhar um Brasileirão Serie A, 2 cariocas, 1 libertadores e ficar em segundo lugar no mundial de clubes perdendo para o Bayer de Munique. Recebeu uma proposta de um time europeu",
        alternativa:[
            "Aceitar Proposta Milan (R$5.000,00"),
            "Recusar Proposta (Continuar no Flamengo)"
        ]
    },
    {
        enunciado: "Apos 7 anos no Milan, conseguiu conquistar 4 Serie A Tim, 6 copas de Italia, 2 champios League.Depois de varias convocações na seleção brasileira não conseguiu fazer nenhuma vez na final da copa do mundo, mais estava determinado em ganhar uma copa do mundo.Foi convocado pela ultima vez na seleção Brasileira e nessa copa conseguiu chegar na final contra a Argentina.E em um lance decisivo teve a chance contra o goleiro e teve que tomar uma decisão rapida.",
        alternativa:[
            "Fazer cavadinha",
            "Driblar o goleiro e fazer o gol"
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativa:[
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = pergunta[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
}

mostraPergunta();