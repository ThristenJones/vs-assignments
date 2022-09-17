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
          .then( response => console.log(response.data))
          .catch(error => console.log(error))

          location.reload()
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
        saveButton.textContent = 'Save'

        todoContainer.id = `${array[i]._id}`

    deleteButton.addEventListener('click', deleteItem)
    
    editButton.addEventListener('click', function(e){
       
       const title = document.createElement('input')
       const description = document.createElement('input')
       const imgUrl = document.createElement('input')
       const price = document.createElement('input')
       const id = e.target.parentNode.id

       
       todoContainer.append(title, description, imgUrl, price, saveButton)

       const updateItem = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
        price: todoForm.price.value
    }


    saveButton.addEventListener('submit', updateItem)
    
        axios.put(`https://api.vschool.io/johnsmit/todo/${id}`, updateItem)

            .then(res=> console.log(res.data))
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
    todoContainer.append(h1, h2, h3, div, deleteButton, checkbox, todoForm, editButton, saveButton );
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
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
});

   

    // CRUD


    


  



