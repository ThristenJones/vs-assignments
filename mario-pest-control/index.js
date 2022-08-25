const form = document.pest;
const pestForm = document.getElementById('pestForm')


form.addEventListener('submit', function(event){
    event.preventDefault();

    let goombaTotal = form.goombas.value * 5;
    let cheepcheepsTotal = form["cheep-cheeps"].value * 11
    let bobombsTotal = form["bob-ombs"].value * 7

    let total = goombaTotal + cheepcheepsTotal + bobombsTotal
     
    const h1 = document.createElement('h1')

     h1.textContent = `Price: $${total}`

     pestForm.append(h1)

    
}) 
