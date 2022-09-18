// const axios  = require("axios");

const todoForm = document.todoform

function get() {
    
    axios.get('https://api.vschool.io/johnsmit/todo')
        .then(res => getData(res.data))
        .catch(error => console.log(error))
}

get();

    // FUNCTIONS

    function deleteItem(e){
        const id = e.target.parentNode.id
        
        axios.delete(`https://api.vschool.io/johnsmit/todo/${id}`)
          .then( res => {
            console.log(res.data)
            window.location.reload()
          })
          .catch(error => console.log(error))
    }
  

function getData(array) {
    
    for(let i = 0; i < array.length; i++){
        // console.log(array[i])
        const h1 = document.createElement("h1")
        const h2 = document.createElement("h2")
        const h3 = document.createElement("h3")

        const div = document.createElement('div')
        const todoContainer = document.createElement('div');
        const checkbox = document.createElement('input')
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button')
        const saveButton = document.createElement('button')
        checkbox.setAttribute("type", "checkbox")

        h1.textContent = `Title: ${array[i].title}`
        h2.textContent = `Description: ${array[i].description}`
        h3.textContent = `Price: ${array[i].price}`
        div.innerHTML = `<img src="${array[i].imgUrl}" width="50px" height="50px"/>`
        deleteButton.textContent = "DELETE"
        editButton.textContent = "EDIT"
        saveButton.textContent = 'Mark as complete'

        todoContainer.id = `${array[i]._id}`


    // addEventListeners

    deleteButton.addEventListener('click', deleteItem)
    
    // editButton.addEventListener('click', function(e){
       
    //    const title = document.createElement('input')
    //    const description = document.createElement('input')
    //    const imgUrl = document.createElement('input')
    //    const price = document.createElement('input')
       
    //    console.log(e)

    //    title.value = e.target.parentElement.children[0].textContent
    //    description.value = e.target.parentElement.children[1].textContent
    //    imgUrl.value = e.target.parentElement.children[2].textContent
    //    price.value = e.target.parentElement.children[3].textContent

    //    console.log(title.value)
       
    //    todoContainer.append(title, description, imgUrl, price, saveButton)

    // });
        
    
    saveButton.addEventListener('click', function(e){
        const id = e.target.parentNode.id

        console.log(e)

        const updateItem = {
            title: 'completed',  
        }
    
            axios.put(`https://api.vschool.io/johnsmit/todo/${id}`, updateItem)
    
                .then(res=> {
                    console.log(res.data)
                    window.location.reload()
                })
                .catch(error => console.log(error))
    });
    
    checkbox.addEventListener('click', function(e){
        console.log(e)

        if(e.target.checked){
            h1.style.textDecoration = "line-through"
            h2.style.textDecoration = "line-through"
            h3.style.textDecoration = "line-through"
        } else if(!e.target.checked){
            h1.style.textDecoration = "none"
            h2.style.textDecoration = "none"
            h3.style.textDecoration = "none"
        }
        
    })

    todoContainer.append(h1, h2, h3, div, deleteButton, checkbox, saveButton );
    document.body.appendChild(todoContainer);
    }
};
    //OBJECTS

    //ADDEVENTLISTENERS

  
     
todoForm.addEventListener('submit', function(e){
    e.preventDefault();

    const newPost = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
        price: todoForm.price.value
    }
    
    axios.post('https://api.vschool.io/johnsmit/todo', newPost)
        .then(res => { 
            console.log(res.data)
            location.reload()
        })
        .catch(error => console.log(error))

})


    // CRUD


    


  



