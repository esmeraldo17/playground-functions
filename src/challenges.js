// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arrString) {
  let concat = `${arrString[arrString.length - 1]}, ${arrString[0]}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = (wins * 3) + ties;
  return resultado;
}

// Desafio 6
function highestCount(array) {
  let n = 0;
  let highest = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > highest) {
      highest = array[i];
    }
  }
  for (let i2 = 0; i2 < array.length; i2 += 1) {
    if (array[i2] === highest) {
      n += 1;
    }
  }
  return n;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 > dist2) {
    return 'cat2';
  } if (dist2 > dist1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 5 === 0 && array[i] % 3 === 0) {
      result.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      result.push('fizz');
    } else if (array[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      result += '1';
    } else if (string[i] === 'e') {
      result += '2';
    } else if (string[i] === 'i') {
      result += '3';
    } else if (string[i] === 'o') {
      result += '4';
    } else if (string[i] === 'u') {
      result += '5';
    } else {
      result += (string[i]);
    }
  }
  return result;
}

function decode(string) {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      result += 'a';
    } else if (string[i] === '2') {
      result += 'e';
    } else if (string[i] === '3') {
      result += 'i';
    } else if (string[i] === '4') {
      result += 'o';
    } else if (string[i] === '5') {
      result += 'u';
    } else {
      result += (string[i]);
    }
  }
  return result;
}

// Desafio 10
function techList() {
  let teclearn = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
  let name = 'Luis'
  function techList (teclearn, name ) {
    let arrOrdem = teclearn.sort();
    let arrResult = [];
    for (let techs of arrOrdem) {
      arrResult.push({
        tech: techs,
        name: name,
      });
    }
  }
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
