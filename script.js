
function algIdade() {
    let nome, dade;

    /*prompt:comando utilizado para solicitar informações*/

    nome = prompt('Digite seu nome');

    //string= é uma cadeia de caracteres ou seja uma sequencia de texto podendo conter numeros,letras e caracteres especial

    //Number converte um valor para numero
    dade = Number(prompt('Digite sua Idade'));


    alert('Olá ' + nome + ' você tem ' + dade + ' anos.');
}

//algIdade();

function calcTerreno() {
    let largura, comprimento, area;

    largura = Number(prompt('Digite a largura do terreno'));

    comprimento = Number(prompt('Digite o comprimento do terreno'));

    area = largura * comprimento

    alert('A área do terreno é ' + area)
}

//calcTerreno();

function calcHaras() {

    let cavalos, total

    cavalos = Number(prompt('Digite a quantidade de cavalos'));

    total = cavalos * 4;
    alert('A quantidade de ferraduras necessárias será ' + total);
}

// calcHaras();

function caclGasolina() {
    let litros, total

    litros = Number(prompt('Digite a quantidade de gasolina'));

    total = litros * 5.58;
    alert('O valor por litro a ser pago será ' + total + 'L')

}

//caclGasolina();

function calcPadaria() {
    let paes, broas, total

    paes = Number(prompt('Digite a quantidade de Pães que deseja'));

    total = paes * 0.12 % 10;
    alert('O valor por pão a ser pago será ' + total)

    broas = Number(prompt('Digite a quantidade de broas que deseja'));

    total = broas * 1.50 % 10 + paes * 0.12;
    alert('O valor recebido no final do dia será ' + total)
}

//calcPadaria();

function verHab() {
    let idade;

    idade = Number(prompt('Digite sua Idade'));

    if (idade >= 18) {
        alert('Apto para tirar habilitação')
    } else {
        alert('Não está Apto para tirar habilitação')
    }
}

//verHab();

function calcFrutas() {
    let macas, total;

    macas = Number(prompt('Digite quantas maçãs deseja comprar'));

    if (macas > 12) {
        total = macas * 1.00;
    } else {
        total = macas * 1.30;
    }
    alert('A quantidade de maças contas compradas foram de ' + macas + (' e o total a ser pago será de ') + total);
}

//calcFrutas();

function caclVotar() {
    let ano;

    ano = Number(prompt('Digite o ano que você nasceu'))

    if (ano >= 2008) {
        alert('Você não poderá votar')
    } else {
        alert('Você poderá votar')
    }
}

//caclVotar()

function calcFrutas() {
    let macaKg, morangoKg, total, totalDesc, qtdKg

    macaKg = Number(prompt('Quantas maças deseja comprar'))

    mmorangoKg = Number(prompt('Quantas morango deseja comprar'))
    // ||= ou; 
    qtdKg = macaKg + morangoKg;

    if (macaKg > 5 || morangoKg > 5) {
        total = (macaKg * 1.5) + (morangoKg * 2.2);
    } else {
        total = (macaKg * 1.8) + (morangoKg * 2.5);
    }

    if (qtdKg > 8 || total > 25) {
        total = total - (total * 0.1)
    }
    alert('a quantidade de kg comprados foi de ' + qtdKg + 'e o valor total foi de ' + total)
}

function calcMedia() {
    let media

    media = Number(prompt('Digite a média do aluno'))

    if (media < 5) {
        alert('Conceito D')
    } else if (media >= 5 && media < 7) {
        alert('Conceito C')
    } else if (media >= 7 && media < 9) {
        alert('Conceito B')
    } else if (media >= 9 && media <= 10) {
        alert('Conceito A')
    }

}

//calcMedia()

function calcIMC() {
    let altura, peso, imc

    altura = Number(prompt('Digite a sua altura'))
    peso = Number(prompt('Digite o seu peso'))

    imc = peso / (altura * altura)

    if (imc < 18.5) {
        alert('Abaixo do Peso')
    } else if (imc >= 18.5 && imc < 25) {
        alert('Peso Normal')
    } else if (imc >= 25 && imc < 30) {
        alert('Acima do Peso')
    } else if (imc > 30) {
        alert('Obeso')
    }
}

//calcIMC()

function alCarros() {
    let kmPercorridos, categorias, diarias, total;

    kmPercorridos = Number(prompt('Digite quantos km foram percorridos'))
    diarias = Number(prompt('Digite quantos dias o carro foi alugado'))
    categorias = (prompt('Digite a categoria do carro'))

    if (categorias == 'popular') {
        if (kmPercorridos > 100) {
            total = kmPercorridos * 0.1
        } else {
            total = kmPercorridos * 0.2
        }

        total += diarias * 90
    } else if (categorias == 'luxo') {
        if (kmPercorridos > 200) {
            total = kmPercorridos * 0.25
        } else {
            total = kmPercorridos * 0.3
        }

        total += diarias * 150
    } else {
        alert('Digite a categoria correta')
    }

    alert('o total a ser pago será de ' + total)
}

//alCarros()

function prgSaudavel() {
    let horas, pontos, dinheiro

    horas = Number(prompt('Digite quantas horas de atividade você teve no mês'))
    dinheiro = 0.05

    if (horas <= 10) {
        pontos = horas * 2
    } else if (horas < 20) {
        pontos = horas * 5
    } else if (horas >= 21) {
        pontos = horas * 10
    }
    dinheiro = dinheiro * pontos

    alert('Você tem ' + pontos + ' pontos e ganhará ' + dinheiro + ' de grana')
}

//prgSaudavel()

function calcIdade2() {
    let idade, somaIdade, contIdade

    somaIdade = 0;

    contIdade = 1;

    while (contIdade <= 5) {
        idade = Number(prompt('Digite a idade da ' +contIdade+ ' ° pessoa'));

        somaIdade = somaIdade + idade

        contIdade = contIdade + 1
    }
    
    alert('A soma das idades é ' +somaIdade)
}

//calcIdade();

function idade(){
    let idades,maiorIdade,contPesoas;

    maiorIdade = 0
    contPesoas = 1

    while(contPesoas <= 5){
        idades = Number(prompt('Digite a ' +contPesoas+ '° idade'));
        if(idades >=18){

            maioridade = maioridade + 1
            //maiorIdade++
            //maioridade += 1
        }
        contPesoas ++
    }

    alert('A quantidade de pessoas maiores de idade é '+maiorIdade)

}

//idade()

function menorIdade(){
    let idade,menorIdade,contIdade

    menorIdade = 0
    contIdade = 1

    idade = Number(prompt('Digite a '+contIdade+ ' ° idade'))
    
    menorIdade = idade
    
    while(contIdade <=4){
        idade = Number(prompt('Digite a '+contIdade+ ' ° idade'))

        if(idade < menorIdade){
            menorIdade = idade
        }
        contIdade++

    }
    alert('A menor idade é '=menorIdade)
}