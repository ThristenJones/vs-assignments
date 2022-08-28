let peopleArray = [
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

    const filterNames = peopleArray.filter(person => {
        // if(person.lastName.indexOf('a') === person.lastName.length -1){
        //     return person
        // }

        if (person.lastName.indexOf('y') === person.lastName.length -1 || person.lastName[person.lastName.length -1] === 'a'){
           
            return person
        }
        })

    
    console.log(filterNames);

    filterNames.splice(1,1)
    console.log(filterNames)

    const reverseArray = filterNames.reverse();

    console.log(reverseArray)

   

    // const remove = filterNames.indexOf('kyle')

    // console.log(remove);


// const older18 = peopleArray.filter(person => person.age > 18)

// const order = older18.sort((a, b) => {
//     return a.lastName.localeCompare(b.lastName)
// });

// const result = order.map(person => {
//     return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
// });


