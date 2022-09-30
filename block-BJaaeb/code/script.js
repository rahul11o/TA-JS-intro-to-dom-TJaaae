/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/
/*
function createInputElm(labelMessage, type = "text"){
let label = document.createElement("label");
let input = document.createElement("input");
input.type = type;
label.innerText = labelMessage;
label.append(input);
return label;
}
*/
// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

function createInputElm(labelMessage, type = "text"){
  let value = `<labe> ${labelMessage} : <input type = ${type} ></label>`
  return value;
}

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
function createList(arr){
  let ul = document.createElement("ul");
arr.forEach(function(elem){
  let li = document.createElement("li");
  li.innerText = elem;
  ul.append(li)
})
return ul;
}


// TEST
// createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
// createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below

/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

function createTodoList(arr){
   ul = document.createElement("ul");
  
   arr.forEach(function(elem){
    li = document.createElement("li");
    para = document.createElement("p");
    para.innerText = elem.name;
    input = document.createElement("input")
    input.type = "checkbox"
    input.checked = elem.isDone;
    input.name = " ";
    input.id = " ";
    span = document.createElement("span")
    span.innerText = "X";
    li.append(para,input, span)
    ul.append(li);
    console.log(input.checked);
   })
  
  
   return ul;
} 

// TEST
// createTodoList([
//   { name: 'Learn DOM', isDone: false },
//   { name: 'Learn JS', isDone: true },
// ]);
// createTodoList([
//   { name: 'Learn DOM', isDone: false },
//   { name: 'Learn React', isDone: true },
//   { name: 'Learn JS', isDone: true },
// ]);
