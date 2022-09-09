function returnWithoutRepeating (str) {
    let strAsArray = str.split('');
    for (let i = 0; i < strAsArray.length; i++) {
        let nextCharIndex = i + 1;
        if (nextCharIndex < strAsArray.length && strAsArray[i].toLowerCase() === strAsArray[nextCharIndex].toLowerCase()) {
            strAsArray.splice(nextCharIndex, 1);
            i--;
        }
    }
   return strAsArray.join(''); 
}

console.log(returnWithoutRepeating('Dddooo iiiitt RRRRRRRRRRooooooooooB'));