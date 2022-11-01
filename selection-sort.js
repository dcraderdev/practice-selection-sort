// function selectionSort(arr) {
//   // Copy the original array
//   let copy = arr.slice();
//   // Create an array to store the sorted values
//   let sorted = new Array();
//   // While the array is not empty...
//   while (copy.length) {
//     // Do not move this console.log
//     console.log(sorted.join(','));

//     let minIndex;
//     let min = copy[0];
//     for (let i = 0; i < copy.length; i++) {
//       let el = copy[i];
//       if (el < min) {
//         min = el;
//         minIndex = i;
//         // Find the index of the minimum value in the unsorted half
//       }
//     }
//     // Save and remove the value at the min index
//     copy.splice(minIndex, 1);

//     // Add the min value to the end of the sorted array
//     sorted.push(min);
//   }
//   return sorted;
// }

function selectionSort(arr) {
  // Copy the original array
  let copy = arr.slice();
  // Create an array to store the sorted values
  let sorted = new Array();
  // While the array is not empty...
  while (copy.length) {
    // Do not move this console.log
    console.log(sorted.join(','));


    let minVal = Math.min(...copy);
    let index = copy.indexOf(minVal)
    
    let sliced = copy.splice(index,1);
    sorted.push(sliced[0])

  }
  return sorted;
}


function selectionSortInPlace(arr) {
//   // Set a pointer at zero diving the array into sorted and unsorted halves
//   let divider = 0;
//   let min;
//   let idx;
//   // Repeat while the unsorted half is not empty:
//   while (divider < arr.length) {
//     // Do not move this console.log
//     console.log(arr.join(","));
//     // Find the index of the minimum value in the unsorted half
//     for (let i = divider; i < arr.length; i++) {

//       if (min === undefined || arr[i] < min) {
//         // Save the min value
//         min = arr[i];
//       }
//     }
//     idx = arr.indexOf(min);
//     // Shift every unsorted value to the left of the min value to the right by 1
//     for (let j = idx - 1; j >= divider; j--) {
//       arr[j + 1] = arr[j];
//     }
//     // Put the min value at the divider
//     arr[divider] = min;
//     min = undefined;
//     // Increment the divider and repeat
//     divider++;
//   }

//   return arr;
// }
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;
  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));
    // Find the index of the minimum value in the unsorted half
    let min = arr[divider];
    for (let i = divider + 1; i < arr.length; i++) {
      // Find the next min value
      min = Math.min(min, arr[i]);
    }
    let index = arr.indexOf(min);
    if (divider !== index){
      arr.copyWithin(divider + 1, divider, index)

      arr[divider] = min;
    }

    divider++

    // Shift every unsorted value to the left of the min value to the right by 1
    // Put the min value at the divider
    // Increment the divider and repeat
  }
}
module.exports = [selectionSort, selectionSortInPlace];
