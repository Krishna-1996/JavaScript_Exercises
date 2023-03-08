console.log("Hello World")
var x = 10;
var y = 20;
var z = x+y;
console.log("The value of x and y is:"+z);

var animal = {
    name: 'cat',
    breed: 'Presian',
    location: {
        city: 'agra',
        country: 'India',
    },
    hindi: 'billi'

};
var bird = {
    name: 'bat',
    breed: 'bird',
    location: animal.location,
    hindi: 'chamgadar'

};
var plant = {
    name: 'bat',
    breed: 'plant',
    location: animal.location,
    hindi: 'chamgadar'

};
animal.legs = '8';
animal.location.city = 'New delhi'
bird.location.country = 'Bharat'
console.log(animal);
console.log(bird);
console.log(plant);