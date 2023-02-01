function correctAccount(str) {
   regexp = /^[_a-z0-9]{6,}$/;
   if (regexp.test(str)) {
       return true;
   } 
   return false;
}

// correct Account
console.log(correctAccount('123abc_'));
console.log(correctAccount('_abc123'));
console.log(correctAccount('______'));
console.log(correctAccount('123456'));
console.log(correctAccount('abcdefg'));

// wrong Account
console.log(correctAccount('.@'));
console.log(correctAccount('12345'));
console.log(correctAccount('1234_'));
console.log(correctAccount('abcde '));