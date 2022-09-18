/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

function calculateQuestion1(itemsObject) {
  //takes the itemsObject array and returns a new array with the quantity and price doubled
  return itemsObject.map((item) => {
    //using map to iterate through the itemsObject array and return a new array with the quantity and price doubled
    return {
      quantity: item.quantity * 2,
      price: item.price * 2,
    };
  });
}

function calculateQuestion2(itemsObject) {
  //takes the itemsObject array and filter out the items
  return itemsObject.filter((item) => {
    //using filter to iterate through the itemsObject array and return a new array with the items with a quantity > 2 and price > 300
    return item.quantity > 2 && item.price > 300;
  });
}

function calculateQuestion3(itemsObject) {
  //takes the itemsObject array and returns the total value of all the items
  return itemsObject.reduce((total, item) => {
    //using reduce to iterate through the itemsObject array and return the total value of all the items
    return total + item.quantity * item.price;
  }, 0);
  //set the initial value of total to 0
}

// Test cases
console.log(
  "Function for quesiton1:double \n",
  calculateQuestion1(itemsObject)
);
console.log(
  "Function for question2:filter \n",
  calculateQuestion2(itemsObject)
);
console.log("Function for question3:total \n", calculateQuestion3(itemsObject));

/*
  Question 2
  Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
  */

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";
const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

function formatText(str) {
  ans = ""; //creat an answer string
  for (let i = 0; i < str.length; i++)
    if (str[i].match(/[a-z,' '-]/i))
      //if it is a letter or a space we add it to the answer,remove all the non-alphabet characters
      ans += str[i];

  ans = ans.replace(/\s{2,}/g, " ").trim(); //remove extra space and start space and end space
  ans = ans.toLowerCase(); //convert the string to lowercase
  ans = ans.replaceAll("-", " ");
  return ans;
}

var ans = formatText(
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  "
);
console.log(ans);

/*
  Question 3
  Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
  */

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

function merge(array1, array2) {
  let array3 = [];
  //new array
  for (let i = 0; i < array1.length; i++) {
    //creating a new object with all required properties
    temp = {
      uuid: array1[i].uuid,
      name: array1[i].name,
      role: null,
    };
    array3.push(temp);
    //pushing the new object to the result array
  }
  for (let i = 0; i < array2.length; i++) {
    temp = {
      uuid: array2[i].uuid,
      name: null,
      role: array2[i].role,
    };
    array3.push(temp);
    //pushing the new object to the result array
  }
  array3.sort((a, b) => {
    //sorting the resultant array based on uuid
    return a.uuid - b.uuid;
  });
  return array3;
  //returning the result array
}

//main function
let array3 = merge(first, second);
console.log(array3);
