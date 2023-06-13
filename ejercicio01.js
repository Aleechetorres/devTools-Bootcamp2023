function next_pal(num) {
    num++; 
    
    while (true) {
      if (isPalindrome(num.toString())) {
        return num;
      }
      num++;
    }
  }
  
  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  
  var numero = 188;
  var siguientePalindromo = next_pal(numero);
  console.log(siguientePalindromo); 
  