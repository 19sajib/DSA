const numbers = [19, 44, 6, 2, 5, 1, 36, 48, 99, 0, 7];

function bubbleSort(array) {
    const length = array.length
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if(array[j+1] < array[j]){
                //Swaping Numbers
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                //console.log(array)
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);