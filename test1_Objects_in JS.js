console.log("Hello World");
var x = 10;
var y = 20;
var z = x + y;
console.log("The value of x and y is:" + z);

var animal = {
  name: "cat",
  breed: "Presian",
  location: {
    city: "agra",
    country: "India",
  },
  hindi: "billi",
};
var bird = {
  name: "bat",
  breed: "bird",
  location: animal.location,
  hindi: "chamgadar",
};
var plant = {
  name: "sunflower",
  breed: "plant",
  location: animal.location,
  hindi: "surajmukhi",
};
var human = {
  name: "Gargi",
  breed: "human",
  location: animal.location,
  hindi: "manushyaa",
};
animal.legs = "8";
animal.location.city = "New delhi";
bird.liocaton = { city: "laddoo", country: "Bharat" };
plant.location = { city: "purikachori", country: "JaiHind" };
console.log(animal);
console.log(bird);
console.log(plant);
console.log(human);

console.log("###########################################");
console.log("###########################################");
console.log("###########################################");
/*("var created outisde the function can be sused in the function BUT ifvar created inside the function can not access out that function but the inner function can use it*/
var user = "Krishna";

function sayHi() {
  var id = 12345;
  console.log(`The user name is: ${user} and the ID is: ${id}`);
  function bye() {
    var tata = "Tchuss..!";
    cnonsole.log(`We ae going and we say ${bye} to ${user} with ID: ${id}`);
  }
  console.log(`let see ths is running or not `);
}
sayHi();
console.log(`can we use inside ${user}`);
