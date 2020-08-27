const form = document.querySelector('#formulario');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputPeso1 = event.target.querySelector('#peso');
    const inputAltura1 = event.target.querySelector('#altura');

    const peso = Number(inputPeso1.value);
    const altura = Number(inputAltura1.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    console.log(imc);
    console.log(nivelImc);
    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];  
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];   
    if (imc < 18.5) return nivel[0];
};

function getImc(peso, altura) {
    const imc = peso / altura **2;
    return imc;
};

function criarP(className) {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criarP();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p);
}

