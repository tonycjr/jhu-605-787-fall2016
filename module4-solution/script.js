// Arrays
/*var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
array[2](array[0]);
console.log(array[3].course);

*/
// Short hand array creation
//var names = ["Yaakov", "John", "Joe"];

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  // STEP 12: (NOTHING TO DO. ALREADY DONE FOR YOU)
  // Compare the 'firstLetter' retrieved in STEP 11 to lower case
  // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
  // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
  // name in the loop.
  
  
  if (firstLetter === 'j') {
    // console.log("Bye " + names[i]);
    yaakovGreeter.name = names[i];
    yaakovGreeter.sayHello();
  } else {
    // console.log("Hello " + names[i]);
    johnGreeter.name = names[i];
    johnGreeter.sayHi();
  }

}

/*names[100] = "Jim";
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}*/

/*var names2 = ["Yaakov", "John", "Joe"];

var myObj = {
  name: "Yaakov",
  course: "HTML/CSS/JS",
  platform: "Courera"
};
for (var prop in myObj) {
  console.log(prop + ": " + myObj[prop]);
}

for (var name in names2) {
  console.log("Hello " + names2[name]);
}

names2.greeting = "Hi!";

for (var name in names2) {
  console.log("Hello " + names2[name]);
}
*/




































