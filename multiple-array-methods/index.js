var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
];

let morePeopleArray = [
    {
        firstName: "Thristen",
        lastName: "Jones",
        age: 47
    }];

    const addArray = peopleArray.concat(morePeopleArray);

    const filterNames = addArray.filter(person => person.lastName.indexOf('y') === person.lastName.length -1)

    console.log(filterNames);


// const older18 = peopleArray.filter(person => person.age > 18)

// const order = older18.sort((a, b) => {
//     return a.lastName.localeCompare(b.lastName)
// });

// const result = order.map(person => {
//     return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
// });


