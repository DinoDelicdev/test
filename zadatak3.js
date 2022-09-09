function returnFirstNonRepeatingChar(str) {
    
    for (let i = 0; i < str.length; i++) {
        let counter = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                counter++;
            }
        }
        if (counter === 1) {
            return str[i];
        } else {
            counter = 0;
        }
    }
}

console.log(returnFirstNonRepeatingChar('tooth'));