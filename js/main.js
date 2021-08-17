//capturar evento de submit formulario
const form = document.querySelector('.form');

function handleSubmit(event){
  event.preventDefault();
  const inputPeso = document.querySelector('#peso');
  const inputAltura = document.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if(!peso) {
    setResultado('Peso invalido', false);
    return;
  }

  if(!altura) {
    setResultado('Altura invalida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc})`
  setResultado(msg,true)
}

function getNivelImc(imc){
  const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];
  if(imc >= 39.9){
    return nivel[5]
  }
  if (imc >= 34.9){
    return nivel[4]
  }
  if (imc >= 29.9){
    return nivel[3]
  }
  if (imc >= 24.9){
    return nivel[2]
  }
  if (imc >= 18.5){
    return nivel[1]
  }
  if (imc < 18.5) {
    return nivel[0]
  }
}

function getImc(peso, altura){
  return (peso / (altura ** 2)).toFixed(2)
}

function criaParagrafo(){
  const p = document.createElement('p');
  return p
}

function setResultado(msg, isValid){
  const resultado = document.querySelector('.resultado-final');
  resultado.innerHTML = '';
  const p = criaParagrafo();
  if(isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad')
  }
  p.innerHTML = msg
  resultado.appendChild(p);
}


form.addEventListener('submit', handleSubmit)