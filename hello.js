//As you can see that we can write javascript outside the web
//And if you want to run this particular code you just type node and your file name you just for example hello.node js

console.log("Hello From Other Planet");

let myName = ["Masood", "Masood", "Huraira", "Junaid", "Akram"];
let result = myName.map((item) => {
  return item + "'s";
});
console.log(result);

//Run javasript function

// console.log(window) window object is not available here
// give error beacuse when javascript integrated with c++ the developer extract the feacture and other realted to dom and window
