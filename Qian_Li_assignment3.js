/*
Question 1
Given the following array and implement the table dynamically
*/

const table = document.getElementById("tableA");
var text = "";
var head = "";
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

// assigning the header values by looping through tableHeader
head += `<tr>`;
tableInfo.tableHeader.forEach((header) => (head += `<th>${header}</th>`));
head += `</tr>`;
table.innerHTML += head;

// adding rows into the table by looping through tableContent
tableInfo.tableContent.forEach(
  (data) =>
    (text += `
    <tr>
        <td>${data["Student Name"]}</td>
        <td>${data.Age}</td>
        <td>${data.Phone}</td>
        <td>${data.Address}</td>
    </tr>
    `)
);
table.innerHTML += text;

/*
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  */

let data = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

var orderedStr = "<ol start='1'>";
data.forEach((data_item) => (orderedStr += `<li>${data_item}</li>`));
orderedStr += "</ol>";
const listA = document.getElementById("myListA");
listA.innerHTML = orderedStr;

var unorderedStr = "<ul>";
data.forEach((data_item) => (unorderedStr += `<li>${data_item}</li>`));
unorderedStr += "</ul>";
const listB = document.getElementById("myListB");
listB.innerHTML = unorderedStr;

/*
  Question 3
  Given a array and implement a dropdown list with the following options dynamically 
  FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
  */

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const select = document.getElementById("mySelect");
for (var i = 0; i < dropDownList.length; i++) {
  let option = new Option(dropDownList[i].content, dropDownList[i].value);
  select.add(option);
}
