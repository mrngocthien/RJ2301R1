function correctEmail(str) {
   regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
   if (regexp.test(str)) {
       return true;
   } 
   return false;
}

// correct email
console.log(correctEmail('a@gmail.com'));
console.log(correctEmail('ab@yahoo.com'));
console.log(correctEmail('abc@hotmail.com'));

// wrong email
console.log(correctEmail('@gmail.com'));
console.log(correctEmail('ab@gmail.'));
console.log(correctEmail('@#abcgmail.com'));