
function algIdade(){
    let nome,idade;

    /*prompt:comando utilizado para solicitar informações*/ 
    
    nome = prompt('Digite seu nome');
    
    //string= é uma cadeia de caracteres ou seja uma sequencia de texto podendo conter numeros,letras e caracteres especial
    
    //Number converte um valor para numero
    idade = Number(prompt('Digite sua Idade'));
    
    
    alert('Olá '+ nome+ ' você tem '+idade+' anos.');
}

//algIdade();

function calcTerreno(){
    let largura,comprimento,area;

    largura = Number(prompt('Digite a largura do terreno'));

    comprimento = Number(prompt('Digite o comprimento do terreno'));

    area = largura * comprimento

    alert('A área do terreno é '+ area)
}

//calcTerreno();

function calcHaras(){
    
    let cavalos,total

    cavalos = Number(prompt('Digite a quantidade de cavalos'));

    total = cavalos * 4;
    alert('A quantidade de ferraduras necessárias será '+ total);
}

// calcHaras();

function caclGasolina(){
    let litros,total

    litros = Number(prompt('Digite a quantidade de gasolina'));

    total = litros * 5.58 ;
    alert('O valor por litro a ser pago será '+ total+'L')

}

//caclGasolina();

function calcPadaria(){
    let paes,broas,total

    paes = Number(prompt('Digite a quantidade de Pães que deseja'));

    total = paes * 0.12 %10 ;
    alert('O valor por pão a ser pago será '+ total)

    broas = Number(prompt('Digite a quantidade de broas que deseja'));

    total = broas * 1.50 %10 + paes * 0.12 ;
    alert('O valor recebido no final do dia será '+ total)
}

calcPadaria();