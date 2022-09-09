function removeCharacters(str, chars) {
    let stringAsArray = str.split('');
    let newArray = [];
    for (let i = 0; i < stringAsArray.length; i++) {
        if (!chars.includes(stringAsArray[i])) {
            newArray.push(stringAsArray[i]);
        }
    }
    return newArray.join('');   
}

console.log(removeCharacters('pada kisa', 'abcd'));

