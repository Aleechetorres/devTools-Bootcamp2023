// Dibujando una X con Asteriscos

function drawX(tamano) {
    for (let i = 0; i < tamano; i++) {
      let line = "";
      for (let j = 0; j < tamano; j++) {
        if (i === j || i === tamano - 1 - j) {
          line += "*";
        } else {
          line += " ";
        }
      }
      console.log(line);
    }
  }
  
  drawX(7);
  