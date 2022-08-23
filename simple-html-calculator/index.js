
// Forms

const add = document.add;
const sub = document.sub;
const multi = document.multi;

// Divs

const addDiv = document.getElementById('adding');
const subDiv = document.getElementById('subtracting');
const multiDiv = document.getElementById('multiplying');

// addEventListeners

add.addEventListener('submit', function(e) {
    e.preventDefault()
    const h1 = document.createElement('h1')
    const input1 = +add.input1.value
    const input2 = +add.input2.value
   h1.textContent = input1 + input2
    const result = add.append(h1) 
    return result
    
});

sub.addEventListener('submit', function(e) {
    e.preventDefault();
    const h1 = document.createElement('h1');
    const input1 = +sub.input1.value
    const input2 = +sub.input2.value
    h1.textContent = input1 - input2
    const result = sub.append(h1)
    return result
});

multiDiv.addEventListener('submit', function(e) {
    e.preventDefault();
    const h1 = document.createElement('h1');
    const input1 = +multi.input1.value
    const input2 = +multi.input2.value
    h1.textContent = input1 * input2
    const result = multi.append(h1)
    return result
});