function generateAllCombinations (){
  const startPart = ["the", "our", "yours"];
  const middlePart = ["cars", "motorbike", "airplane"];
  const endPart = ["collection", "garage", "museum"];
  let result = [];

  for (let i = 0; i < startPart.length; i++){
    for (let j = 0; j < middlePart.length; j++){
      for (let p = 0; p < endPart.length; p++){
        result.push(`${startPart[i]} ${middlePart[j]} ${endPart[p]}`);
      }
    }
  }
  return result;
}

console.log(generateAllCombinations().join(`\n`));