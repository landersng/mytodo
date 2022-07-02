// DELETING A TO-DO:
const unOrder = document.querySelector('.myTodo ul');

unOrder.addEventListener('click', function(m){
    if(m.target.className === 'delete'){

        const li = m.target.parentElement;
        //  li.parentNode.removeChild(li)
        unOrder.removeChild(li)
    }
       
})

const newAdd =  document.forms[1]

newAdd.addEventListener('submit', function(q){
    q.preventDefault()
    const main = newAdd.querySelector('input[type="text"]').value
    console.log(main)


    //CREATING ELEMENTS

    const listMain = document.createElement('li')
    const newDoings = document.createElement('span')
    const deleteItem = document.createElement('span')

    // ADDING CONTENTS
     deleteItem.textContent = 'DEL'
     newDoings.textContent = main

     //ADDING THE STYLE
     deleteItem.classList.add('delete')
     newDoings.classList.add('doings')
     

    // APPENDING ELEMENTS TO DOM

    listMain.appendChild(newDoings)
    listMain.appendChild(deleteItem)
    unOrder.appendChild(listMain) 

})
