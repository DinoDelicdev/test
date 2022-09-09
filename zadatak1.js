function returnUniqueValues(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        } 
    }
    return uniqueArr;
}

console.log(returnUniqueValues([1, 2, 3, 2, 1, 4]));