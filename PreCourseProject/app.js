
var name = "don"
console.log( "Don".toUpperCase())
console.log(name.toUpperCase())







const viewCar = document.querySelector(".view");
const carColor = document.querySelector(".color");

viewCar.addEventListener("click", () => {
  pickCar();
});

carColor.addEventListener("click", () => {
  pickColor();
});

function pickCar() {
  let car = [
    { name: "corvette", price: "50,000" },
    { name: "mustang", price: "100,000" },
    { name: "charger", price: "150,000" },
  ];
  alert(
    `Welcome to my exotic car website! We hear you want something fast and fancy. Heres a couple of options!`
  );
  let userChoice = prompt(
    `We have a ${car[0].name} thats priced at $${car[0].price}, a ${car[1].name} thats priced at ${car[1].price} and a ${car[2].name} thats priced at ${car[2].price} please choose between ${car[0].name}, ${car[1].name} or ${car[2].name}? `
  );
  userChoice = userChoice.toLowerCase();
  if (userChoice === "corvette") {
    alert(`I've always been a fan of the Corvettes`);
  } else if (userChoice === "mustang") {
    alert(`Those Mustangs sure can get pretty loud!`);
  } else if (userChoice === "charger") {
    alert("Nice! You can never go wrong with a charger!");
  }
}

function pickColor() {
  let carColor = ["Blue", "Red", "Black"];
  for (let i = 0; i < carColor.length; i++) {

    alert(
      `Nice choice on the car. Have fun revving it up out there!. We are almost done. One last question. `
    );
    let userChoice = prompt(
      `Please select a color for your vehicle from the following:  ${carColor[0]} or ${carColor[1]} or ${carColor[2]} `
    );
    userChoice = userChoice.toLowerCase();
    if (userChoice === "blue") {
      alert("Blue is a great choice. Enjoy!");
      break;
    } else if (userChoice === "red") {
      alert(`Red is a great choice. Enjoy!`);
      break;
    } else if (userChoice === "black") {
      alert(`Black is a great choice. Enjoy!`);
      break;
      alert(
        `Sorry we don't have this color in that car. Please pick from Red, Blue or Black.`
      );
    }
  }
}

