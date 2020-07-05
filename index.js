function bubbleSort(arr) {
  let sort = function() {
    for (let i = 0; i < arr.length; i++) {
      let first = arr[i];
      let next = arr[i+1];
      
      if(next < first) {
        arr[i] = next;
        arr[i + 1] = first;
        sort();
    }
  }
    
  }
  sort();
  return arr;
}

bubbleSort([2, 8, 5, 1, 4, 3]);
// bubbleSort([6, 13, 2, 57, 7, 0])