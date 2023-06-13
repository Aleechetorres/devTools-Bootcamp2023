function NumeroTelefono(numeros) {
    if (numeros.length !== 10) {
      return "El número de telefono debe contener sólo 10 Dígitos";
    }
  
    const numeroTelefono = numeros.join("");
    const numeroFormateado = `(${numeroTelefono.slice(0, 3)}) ${numeroTelefono.slice(3, 6)}-${numeroTelefono.slice(6)}`;
    return numeroFormateado;
  }

const numeros = [3, 2, 1, 7, 0, 1, 4, 9, 4, 4];
const numeroTelefono = NumeroTelefono(numeros);
console.log(numeroTelefono);
    