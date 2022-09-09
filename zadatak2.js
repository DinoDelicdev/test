function chnage(ammount) {
    let coins = [];
    for (let i = 0; i < ammount; i += 5) {
            
        for (let j = 0; j + i < ammount; j += 3) {
            for (let k = 0; k + j + i < ammount; k += 1) {
                if (i + j + k === ammount) {
                    console.log(i, j, k);
                }
            }
        }
    }
}