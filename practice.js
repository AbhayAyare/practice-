// console.log("hello js ");
// let Fullname = "Abhay Ayare";
// let age = 21;
// isfollow = true;
// let x = null;
// A = BigInt("1234");
// B = Symbol("hello")
// console.log(A);
// console.log(isfollow);
// console.log(age);
// console.log(Fullname);

// const student = {
//     name: "Abhay ayare",
//     age:21,
//     cgpi :6,
//     isPass:true
// };

// student["name"] = "abhay";
// console.log(student.name);

// const product = {
//     title: "ball pen",
//     rating: 4,
//     offer : 5,
//     price :270,
// };
// console.log(product)

// const linkdin ={
//     userName : "AbhayAyare",
//     post:195,
//     followers: 289,
//     following : 4,
//     isFollow:true,
//     tagline:"apna collage | ex-microsoft DRDO to education "
// };
// console.log(linkdin)

//artimetic Operators 
// let a =5;
// let b =3;
// console.log("a",a,"b",b);
// console.log(" a + b = ",a +b);
// console.log("a - b = ",a - b);
// console.log("a * b = ",a * b);
// console.log("a / b = ",a / b);
// console.log("a % b = ",a % b);
// console.log("a ** b = ",a ** b);
//unary operators a++ & a--
//  a++;// a =a+1; a++ = post increment ++a pre incremnet
//  a--;// a =a-1; a-- = post increment --a pre incremnet
//  console.log("a = ",a)

//assignment operators
// let a =5;
// let b =3;
// a+=4; all artimetic we can use
// console.log("a = ",a)

//comparison Operators  
// let a =5;
// let b =2;
// console.log("a === b",a===b);// check data type also
// console.log(a>=b);

//logical operators  && all true , || logical or for at leat one value true ,! logical not 

// conditional staement  if,else,else if 

//ternary operators condition?true output: false output;
// let age =21;
// let result =age>18?"adult":"not adult";//compact if else 
// console.log(result)

// alert("alert bro padha le");

// let number  =prompt("number ");
// let check = number %5 ===0?"multiple of 5":"not multiple of 5";
// console.log(number ,"is ",check);


//loops  for loop ,do while loop ,while loop 
// let sum =0;
// for(let i = 0;i<5;i++){
//   sum = sum+i;
// } 
// console.log(sum);

// For of loop && for in loop //
// let str = "Abhay";
// let sixe = 0;
// for(let i of str){ // iterator -> char 
//     console.log(i)
//     sixe++;
// }
// console.log(sixe);

//for in loop 
// const object ={
//     name : "Abhay",
//     age : 21,
//     id : 123,
// };
// for(let key in object){
//     console.log("key: ",key,"value :",object[key]);
// }

// let str= 'Abhay';
// console.log(str[4]);

//templete literals  special typestring
// let sentence = `this is a template literals`;
// console.log(sentence);
// let obj ={
//     item: "pen",
//     price: 10,
// };
// let output = `the cost od ${obj.item} is ${obj.price} rupees`;
// console.log(output)

// let str = "Abhay";
// let str1 = "ayare";
// console.log(str.trim());
// console.log(str.slice(0,3));
// console.log(str.concat(str,str1));
// console.log(str.replace("A","B"));
// console.log(str.charAt(0));


//array push pop & tostring()convert to string
//concat() join muptiple array & returns result
//shift() pop  delete from start returns
//unshift() push
// slice(start,end) can not change orginal array
// let marks = [87,67,77,67,67,57];
// console.log(marks.slice(3,));
// console.log(marks.splice(2,2,2,22));// start,delete element,new elemenet add
// console.log(marks);

//function 
//  function myfunction(msg){
//     //parameter
//     console.log(msg);
//  }
//  myfunction(" ilove javascript");//argument

//  function sum( a, b){
//     let c = a+b;
//     return c;
//  }
//  console.log(sum(10,20));

//modern Js
//arrow function (type of compact function )
// const arrowsum =(a,b) =>{
//     console.log(a+b);
// };

// function countVowels(string){
// let count = 0;
// for(const char of string){
//     console.log(char);
//     if(char === "a" || char === "e" || char === "o" || char === "u"  ||char === "i"){
//         count++;
//     }
//    }
//    return count;
// }
// countVowels("abhay ayare");


// const countVowels = (string) >={
// let count = 0;
// for(const char of string){
//     console.log(char);
//     if(char === "a" || char === "e" || char === "o" || char === "u"  ||char === "i"){
//         count++;
//     }
//    }
//    return count;
// }

//foreach loop in arrays//  higher order function  Callback the function and other function as parameter or other function as return?o/p  
// let arr = ["pune","mumbai","kolhapur"];
// arr.forEach((val , idex,arr) => {
//     console.log(val.toUpperCase(),idex,arr);
// });

// let arr = [1,2,3,4]
// arr.forEach((val,idex) =>{
//     console.log(val*val,idex)
// });

//map Array Methods as smiler to foreach and differnce is its retrun new array
//arr.map(callbackFnx(value,index,array))

// let num = [1,2,3,4];
// let newarr = num.map((val) =>{
//   return val;

// });
// console.log(newarr);

// let calcSquare = (num) =>{
//     console.log(num*num);
// }

//fillter method
// let arr = [1,2,3,4,5]
// let newarr = arr.filter((val) =>{
//        return val % 2 == 0;
// });
// console.log(newarr);

// let output = arr.reduce((res,curr)=>{
//     return res + curr;
// });
// console.log(output);

// let n =prompt("enter the number ");
// let arr =[];

// for(let i = 1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr)

// let factorial =  arr.reduce((prev ,curr) =>{
//    return prev * curr; 
// });
// console.log(factorial);

/////////////////////////////////////////////////////
///DOM// Document Object Model
// document has HTML code 

// let button = document.getElementById("Myid");// its retrun Id element
// console.dir(button);

// let Headings = document.getElementsByClassName("heading1");// its retrun HTML collection smiler to array 
// console.dir(Headings);
// console.log(Headings);

// let parahs = document.getElementsByTagName("p"); // its retrun tagName
// console.dir(parahs);

// Query selector retrun NodeList for class use (.clasaname) & for id use (#className)

// let firstelemenet = document.querySelector("p"); // assces First elemenet 
// console.dir(firstelemenet);

// let firstelemenet = document.querySelectorAll("p"); // assces First elemenet 
// console.dir(firstelemenet);

// Method = 1)firstelemenet.tagName retrun tagName
// 2)innerText  retrun the text content of the all its childern
// 3)innerHTMl return the plain text or html content in the elemenet
// 3)textContent retrun textual content even for hidden elements (set the value)

// let h1 = document.querySelector("h1");
// console.dir(h1);

// let div = document.querySelector("div");
// console.dir(div);

// let div = document.querySelectorAll(".BOX");

// let idx =1;
// for(divs of div){
//    divs.innerText = `Abhay Sanjay Ayare ${idx}`;
//    idx++;
// }

// div[0].innerText = " Abhay"; 
// div[1].innerText = "Sanjay";
// div[2].innerText = "Ayare ";

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let Heading = document.querySelector("h1");
// console.log(Heading.setAttribute("heading","H1"));

//Node.style is use to style in JS

//insert elemenet 
//node.append
//node.prepend
//node.remove

// let newbtn = document.createElement("Button");
// newbtn.innerText = "click me";
// console.dir(newbtn);

// let div = document.querySelector("div");
// div.after(newbtn);

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () =>{
//     console.log("Btn1 was clicked ");
//     let a = 25;
//     a++;
//     console.log(a);//26
// };

// let BOX = document.querySelector("div");
// BOX.onmouseover = () =>{
//      console.log("you are inside Div")
// };

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clinetx, evt.clinetx);
// };

// Event Listeners // 

// let btn1 = document.querySelector("#btn1"); // same event multiple event 
// btn1.addEventListener("click", (evt) =>{
//     console.log("Button 1 click - hendler 1");
// });
// btn1.addEventListener("click", (evt) =>{
//     console.log("Button 1 click - hendler 2");
// });
// const handler = () =>{
//     console.log("Button 1 click - hendler 3")
// }

// btn1.addEventListener("click",handler );
// btn1.addEventListener("click", (evt) =>{
//     console.log("Button 1 click - hendler 4");
// });

// btn1.removeEventListener("click",handler);

// let Button = document.querySelector("#Mode");
// let currentMode = "light";//dark
// let body = document.querySelector("body");


// Button.addEventListener("click", () =>{
//     if(currentMode === "light"){
//         currentMode = "dark";
//         body.classList.add("drak");
//         body.classList.remove("light")
//     }
//     else{
//         currentMode = "light";
//         body.classList.add("light")
//         body.classList.remove("drak")

//     }
//     console.log(currentMode);

// });