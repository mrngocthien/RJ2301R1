function isFirstLetterUpperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
       console.log(str + " contains first character is uppercase");
    } else {
       console.log(str + " contains first character is not uppercase");
    }
}

// isFirstLetterUpperCase('Abcd');
// isFirstLetterUpperCase('abcd');
// isFirstLetterUpperCase('Nguyen van Nam');
// isFirstLetterUpperCase('NGUYEN VAN NAM');
// isFirstLetterUpperCase('nguyen van nam');