// Contador de existencias 

function countNameRepetitions(names) {
    const nameCounts = {};
    
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      if (nameCounts[name]) {
        nameCounts[name]++;
      } else {
        nameCounts[name] = 1;
      }
    }
    
    const result = {};
    for (const name in nameCounts) {
      const count = nameCounts[name];
      const asterisks = '*'.repeat(count);
      result[name] = asterisks;
    }
    
    return result;
  }

  const nombres = ['Aleja', 'Rafa', 'Marta', 'Rafa', 'Aleja', 'aleja'];
  const resultado = countNameRepetitions(nombres);
  
  for (const name in resultado) {
    console.log(`${name}: ${resultado[name]}`);
  }
  