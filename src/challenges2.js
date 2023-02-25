// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i in array) {
    let count = 0;
    for (let i2 in array) {
      if (array[i] === array[i2]) {
        count += 1;
      }
      if (array[i] < 0 || array[i] > 9 || count > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return ('(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10])
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA + lineB) > lineC && (lineB + lineC) > lineA && (lineA + lineC) > lineB) {
    return true;
  } if ((lineA + lineB) < lineC || (lineB + lineC) < lineA || (lineA + lineC) < lineB) {
    return false;
  }
}

// Desafio 13
function hydrate(drinks) {
  
  let count = 0;
  for (let i in drinks) {
    if (drinks[i].match(/[1-9]/g)){ 
      count += Number(drinks[i]);
    }
  }
  if (count === 1){
    return count + " copo de água";
  } else {
    return count + " copos de água";
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
