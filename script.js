// question 1
// Traverse each element in array
// let data = [2, 4, 6, 8, 10, 11, 45, 34, 27];

// for (let i = 0; i < data.length; i++) {
//   console.log(data[i]);
// }

// // question2 access array element
// let arr = [2, 4, 6, 8, 10, 11, 45, 34, 27];
// let x = 5;
// let y = 8;
// console.log(arr[x]);
// console.log(arr[y]);

// question 3
// insert element into ARRAY
/*
let data = [10, 20, 30, 40, 50, 60];
let newEl = 35;
let position = 3;

for (let i = data.length - 1; i > 0; i--) {
  // console.log(data[i]);
  // check position
  if (i >= position) {
    data[i + 1] = data[i];
    if (i == position) {
      data[i] = newEl;
    }
  }
}
console.log(data);

// using splice function
let item = [10, 20, 30, 40, 50, 60];
item.splice(4, 0, 45);
console.log(item);
*/

// question 4
// delete element from array
/*
let items = [20, 30, 35, 45, 76, 80];
let position = 3;
for (let i = position; i < items.length - 1; i++) {
  // assign next value into items[i]
  items[i] = items[i + 1];
}
// fixed the value of item
items.length = items.length - 1;
console.log(items);
*/

// search in array
/*
let items = [20, 30, 35, 45, 76, 80];
let searchElement = 76;
let index = undefined;
for (let i = 0; i < items.length - 1; i++) {
  if (items[i] === searchElement) {
    index = i;
    break;
  }
}
console.log(index);
// alternate method for searching element
console.log(items.indexOf(searchElement));
*/

// Question 5
// Merge two array
/*
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [7, 8, 9, 10, 11, 12];
let arrFinal = [];
for (let i = 0; i < arr1.length; i++) {
  arrFinal[i] = arr1[i];
}
for (let i = 0; i < arr2.length; i++) {
  arrFinal[arr1.length + i] = arr2[i];
}
console.log(arrFinal);
*/

// #######################//
// array sorting
// nested loop
// using bubble short
/*
let data = [40, 20, 30, 12, 25];
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if (data[j] > data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}
console.log(data);
*/

//Recursion

// find factorial of 5
/*
function findFact(item) {
  if (item == 0) {
    return 1;
  }
  return item * findFact(item - 1);
}
const data = 5;
console.log(findFact(data));
*/

//  reverse array with recursion
/*
let data = [3, 40, 30, 50, 79];
function customReverse(data, start, end) {
  console.log(data);
  if (start <= end) {
    let temp = data[start];
    data[start] = data[end];
    data[end] = temp;

    customReverse(data, start + 1, end - 1);
  }
}
customReverse(data, 0, data.length - 1);
*/

// insert element into stack and remove element into stack
/*
let data = [];
let currentSize = data.length;
let max = 5;

// push method
function push(newVal) {
  if (currentSize >= max) {
    alert("stack is full you can not add more element");
  }
  data[currentSize] = newVal;
  currentSize += 1;
}
push(29);
push(39);
push(390);
push(398);
push(400);

// pop method
function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    alert("stack is empty");
  }
}
pop();
pop();
console.log(data);
*/
