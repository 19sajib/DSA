const numbers = [19, 44, 6, 2, 5, 1, 36, 48, 99, 0, 7];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const middleIndex = Math.floor(array.length / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
    console.log(left,right)
    let sortedArr = [] // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  // Use spread operators to create a new array, combining the three 
  console.log({merge: [...sortedArr, ...left, ...right]})
  return [...sortedArr, ...left, ...right]
}


const answer = mergeSort(numbers);
console.log(answer);

// bit different merge function
function merge2(left, right){
    const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
