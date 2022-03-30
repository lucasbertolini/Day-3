
let atributos = {
    frontEnd:['React', 'Vue'],
    backEnd:['Java', 'C#'],
    areas:['Front-End','Back-End'],
    continuar:['Desejo continuar estudando', 'Desejo me tornar Full-Stack'],
}
let selecionado = false;

//cria a caixa de opções 
let perguntaBox = document.createElement('select');
perguntaBox.setAttribute('class', 'pergunta');
document.querySelector('body').appendChild(perguntaBox);

//Cria as opções
let display = document.createElement('option');
display.setAttribute('selected', '');
display.textContent = 'Selecione uma opção'
perguntaBox.appendChild(display);

//melhorar essa parte, muito repetitivo
let frontEnd01 = document.createElement('option');
frontEnd01.setAttribute('class', 'opcaoFront');
frontEnd01.textContent = 'Front-End';
perguntaBox.appendChild(frontEnd01);

let backEnd01 = document.createElement('option');
backEnd01.setAttribute('class', 'backEnd');
backEnd01.textContent = 'Back-End'
perguntaBox.appendChild(backEnd01)


perguntaBox.addEventListener('change', ()=>{
    switch (perguntaBox.value) {
        case 'Front-End':
            caixaPergunta('perguntas');
            opcoes();
            break;
        case 'Back-End':
            caixaPergunta('perguntas');
            opcoes();
            break;
    }
});

function caixaPergunta(className){

    let perguntas = document.createElement('select');
    perguntas.setAttribute('class', className);
    document.querySelector('body').appendChild(perguntas)

};
function continuar(){

    caixaPergunta('continuar');
    for(let i = 0; i <= atributos.continuar.length; i++){
        let opcao = document.createElement('option');
        opcao.textContent = atributos.continuar[i];
        document.querySelector('.continuar').appendChild(opcao)
    };

    let texto = document.createElement('p');
    texto.setAttribute('class', 'texto-resposta');
    texto.textContent = 'Você deseja se tornar um developer Full-Stack?';
    document.querySelector('.resposta-texto').appendChild(texto);


};
function opcoes(){

   if(selecionado && perguntaBox != 'Selecione uma opção') return

    switch (perguntaBox.value) {
        case 'Front-End':
            for(let i = 0; i < atributos.frontEnd.length; i++){
                let opcoes = document.createElement('option');
                opcoes.textContent = atributos.frontEnd[i]
                document.querySelector('.perguntas').appendChild(opcoes);
                selecionado = true;
                
            };
            continuar();
            break;
    
        case 'Back-End':
            for(let i = 0; i < atributos.backEnd.length; i++){
                let opcoes = document.createElement('option');
                opcoes.textContent = atributos.backEnd[i];
                document.querySelector('.perguntas').appendChild(opcoes);
                selecionado = true;
            };
            continuar();
            break;
       // case 'Selecione uma opção':
            for(let i = 0; i < areas.length; i++){
                let opcoes = document.createElement('option');
                opcoes.textContent = areas[i];
                document.querySelector('.pergunta').appendChild(opcoes);
                selecionado = true;
            };
           
    };
};

