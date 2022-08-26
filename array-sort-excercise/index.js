const numbers = [1, 3, 5, 2, 90, 20]
const string = ["dog", "wolf", "by", "family", "eaten", "bridge", "cat", "alpha"];
const age = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
];

numbers.sort((a,b) => b - a);

string.sort((a,b) => a.length - b.length)

string.sort((a,b) => a.localeCompare(b));

age.sort((a,b) => a.age - b.age)

console.log(age)