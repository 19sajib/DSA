const numbers = [19, 44, 6, 2, 5, 1, 36, 48, 99, 0, 7];

function quickSort(array, left, right){
  const len = array.length; 
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
   
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
        // Swapping elements
        // [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      swap(array, i, partitionIndex);
      // Moving to next element
      partitionIndex++;
    }
  }
   // Putting the pivot value in the middle
   // [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);