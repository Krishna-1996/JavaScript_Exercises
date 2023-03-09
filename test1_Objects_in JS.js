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
    name: 'sunflower',
    breed: 'plant',
    location: animal.location,
    hindi: 'surajmukhi'

};
var human = {
    name: 'Gargi',
    breed: 'human',
    location: animal.location,
    hindi: 'manushyaa'

};
animal.legs = '8';
animal.location.city = 'New delhi'
bird.liocaton = {city: 'laddoo' , country: 'Bharat'}
plant.location = {city: 'purikachori' , country: 'JaiHind'}
console.log(animal);
console.log(bird);
console.log(plant);
console.log(human);