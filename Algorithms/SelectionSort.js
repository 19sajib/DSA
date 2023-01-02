const numbers = [19, 44, 6, 2, 5, 1, 36, 48, 99, 0, 7];

function selectionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++){
      // set current index as minimum
      let min = i;
      let temp = array[i]
      for(let j = i+1; j < length; j++){
          if(array[j] < array[min]){
              //updateing minimum
              min = j
          }
      }
      array[i] = array[min]
      array[min] = temp
      console.log(array)
  }
}

selectionSort(numbers)
console.log(numbers)