let enviar = document.querySelector('#submit');

let elementos = {
    areas:['Front-End', 'Back-End'],
    front:['React', 'Vue'],
    back:['Java', 'C#'],
    tecnologias:[],
}
enviar.addEventListener('click', (e) => {

    e.preventDefault();
    let nome = document.querySelector('#nome').value
    let label = document.createElement('label');
    let form = document.querySelector('#atuacao');
    label.setAttribute('class', 'area');
    label.textContent = `Bem-vindo ${nome}, selecione uma área de interesse.`;
    form.appendChild(label);


    elementos.areas.forEach((index) => { 
        console.log(index);
        let area = document.createElement('input');

        area.setAttribute('type', 'radio');     
        area.setAttribute('name','area');
        area.setAttribute('id', index);
        area.setAttribute('onchange', 'change()');
        area.value = index;
        form.appendChild(area);
    
        let areaInput = document.createElement('label');
        areaInput.setAttribute('for',index);
        areaInput.textContent =index;
        form.appendChild(areaInput);
        
    });
})
function change(){
    let areaSelecionada
    let selecionado = document.querySelectorAll('[type=radio]');

    //confere qual radio button foi selecionado
    for(const radioButton of selecionado ){
        if(radioButton.checked){
            areaSelecionada = radioButton.value;
            break;
        }
    }

    //caso um item já for selecionado ele deleta e atualiza com a nova opção
    if(document.querySelector('select')){
        document.querySelector('#framework').removeChild(document.querySelector('select'));
    }
    var framework = document.querySelector('#framework');
    var texto = document.createElement('legend');
    
    switch (areaSelecionada) {
        case 'Front-End':

            let select = document.createElement('select');
            select.setAttribute('id', 'select');


            texto.setAttribute('class', 'texto');
            texto.textContent = 'Selecione qual framework gostaria de estudar!';

           if(!document.querySelector('.texto')){

               framework.appendChild(texto);
           }
            framework.appendChild(select);


            elementos.front.forEach((index) => {

                let option = document.createElement('option') 
                option.setAttribute('value',index);
                option.setAttribute('id', index);
                option.textContent = index;
                select.appendChild(option);
            });
            document.querySelector('#select').addEventListener('change', ()=>{
                futuro();
                tecnologias();

            })

            break;
    
        case 'Back-End':
            let caixa = document.createElement('select');
            caixa.setAttribute('id', 'select');
            document.querySelector('#framework').appendChild(caixa);

            texto.setAttribute('class', 'texto');
            texto.textContent = 'Selecione qual framework gostaria de estudar!';

           if(!document.querySelector('.texto')){

               framework.appendChild(texto);
           }
            framework.appendChild(caixa);


            elementos.back.forEach((index) => {

                let option = document.createElement('option') 
                option.setAttribute('value',index);
                option.setAttribute('id', index);
                option.textContent = index;
                caixa.appendChild(option);
            })

            break;
    }
    console.log(areaSelecionada)
}
function futuro(){
    let futuro = document.querySelector('.fullstack');
    let texto = document.createElement('legend');
    texto.setAttribute('id', 'continuar-legend');
    texto.textContent = 'Que legal! Você pensa em continuar estudando essa tecnologia ou pretende se tornar um desenvolvedor Full-Stack?';
    futuro.appendChild(texto);

    let continuar = document.createElement('input');
    continuar.setAttribute('type', 'radio');
    continuar.setAttribute('id', 'continuar');
    continuar.setAttribute('name', 'continuar');
    futuro.appendChild(continuar);

    let continuarTexto = document.createElement('label');
    continuarTexto.setAttribute('for', 'continuar');
    continuarTexto.textContent = 'Continuar na área!';
    futuro.appendChild(continuarTexto);

    let mudar = document.createElement('input');
    mudar.setAttribute('type', 'radio');
    mudar.setAttribute('id', 'full-stack');
    mudar.setAttribute('name', 'continuar')
    futuro.appendChild(mudar);

    let mudarTexto = document.createElement('label');
    mudarTexto.setAttribute('for', 'full-stack');
    mudarTexto.textContent = 'Mudar para Full-Stack!!';
    futuro.appendChild(mudarTexto);
}
function tecnologias(){
    const tecnologiasDiv = document.querySelector('.tecnologias')
    const tec = document.createElement('input');
    tec.setAttribute('type', 'text');
    tec.setAttribute('id', 'tecnologias')
    tecnologiasDiv.appendChild(tec);

    const tecButton = document.createElement('button');
    tecButton.setAttribute('id', 'tec-button');
    tecButton.textContent = 'Adicionar';
    tecnologiasDiv.appendChild(tecButton);
    document.querySelector('#tec-button').addEventListener('click', (e)=>{
        e.preventDefault()
        let input = document.querySelector('#tecnologias');
        elementos.tecnologias.push(input.value);
        console.log(elementos.tecnologias);
    })  
}




