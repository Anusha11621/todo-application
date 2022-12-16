let task = document.querySelector('.todoitems')

let todoList = []

let inputElement = document.querySelector('.input')


function createAndAppendTodo(given,flag){
    let li = document.createElement('li')
    li.style.display = "flex"
    li.style.backgroundColor='pink'
    li.style.justifyContent = 'space-between'
    li.style.width = '70vw'
    li.style.marginBottom='10px'
    li.style.padding = '10px'
    
   

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    

    let para = document.createElement('p')
    para.classList.add('paragraph')
    para.innerText =  given

    if(flag == true){
        para.classList.toggle('line') 
        checkbox.checked = true
    }

    let deleteicon = document.createElement('i')
    deleteicon.classList.add("far", "fa-trash-alt")
    deleteicon.style.marginTop = '18px'
    count()
    li.append(checkbox)
    li.append(para)
    li.append(deleteicon)
    task.append(li)
}

inputElement.addEventListener('keydown',function(event){
    if(event.key == "Enter" && inputElement.value !== " "){
        let li = document.createElement('li')
        li.style.display = "flex"
        li.style.backgroundColor='pink'
        li.style.justifyContent = 'space-between'
        li.style.width = '70vw'
        li.style.marginBottom='10px'
        li.style.padding = '10px'
        

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        

        let para = document.createElement('p')
        para.classList.add('paragraph')
        para.innerText =  inputElement.value

        let deleteicon = document.createElement('i')
        deleteicon.classList.add("far", "fa-trash-alt")
        deleteicon.style.marginTop = '18px'

        task.append(li)
        li.append(checkbox)
        li.append(para)
        li.append(deleteicon)

        let newTodo = {
            value:inputElement.value,
            state:"Active"
        }
        todoList.push(newTodo)
        count()
        inputElement.value =""
    }
})


task.addEventListener('click',function(e){
    if(e.target.classList.contains('far') ){
        let taskItem = e.target.parentElement
        taskItem.remove()
        let index = 0
        for(let i = 0;i<todoList.length;i++){
            if(todoList[i].value == taskItem.innerText ){
                index = i    
            }
        }
        todoList.splice(index,1)
    }
    count()
    if(e.target.checked === true){
    
        let taskItem = e.target.parentElement
        let paratext = taskItem.querySelector('.paragraph')
        //paratext.classList.add('line')
        paratext.classList.add('line')
        let paravalue = paratext.innerText


        todoList.forEach((data)=>{
            if(paravalue == data.value){
            data.state = "Inactive"
        }
        })
        count()
    }
    else{
        let taskItem = e.target.parentElement
        let paratext = taskItem.querySelector('.paragraph')
        paratext.classList.remove('line')
        count()
    }
})

let countele = document.querySelector('.count')

function count(){
    let countt = 0
    todoList.forEach((data)=>{
        if(data.state == "Active"){
        countt++;
        }
    })
    countele.innerText = countt + "items left"
}



let showDownbtn = document.querySelector('.showbutton')
let c=0;
showDownbtn.addEventListener('click',()=>{
    if(c%2==1){
        todoList.forEach((data)=>{
            data.state = "Active"
        })
    }
    else{
        todoList.forEach((data)=>{
            data.state = "Inactive"
        })
    }
    Array.from(task.children).forEach((data)=>{
        data.remove()
    })
    todoList.forEach((data)=>{
        if(data.state == "Active"){
        createAndAppendTodo(data.value)
        }else{
            createAndAppendTodo(data.value,true)
        }
    })
    count()
    console.log(todoList);
    c++;
})


let allbtn = document.querySelector('.all')

allbtn.addEventListener('click',function(){
    Array.from(task.children).forEach((data)=>{
        data.remove()
    })
    todoList.forEach((data)=>{
        if(data.state == "Active"){
        createAndAppendTodo(data.value)
        }else{
            createAndAppendTodo(data.value,true)
        }
    })
    count()
})

let activebtn = document.querySelector('.active')

activebtn.addEventListener('click',function(){
    let ul = document.querySelector('.todoitems')
    Array.from(ul.children).forEach((data)=>{
        data.remove()
    })
    todoList.forEach((data)=>{
        if(data.state == "Active"){
            createAndAppendTodo(data.value)
        }
    })
    count()
})

let completebtn = document.querySelector('.complete')

completebtn.addEventListener('click',function(){
    let ul = document.querySelector('.todoitems')
    
    Array.from(ul.children).forEach((data)=>{
        data.remove()
    })
    todoList.forEach((data)=>{
        if(data.state == "Inactive"){
            createAndAppendTodo(data.value,true)
        }
    })
    count()
})

let clearbtn = document.querySelector('.clear')

clearbtn.addEventListener('click',()=>{
    let ul = document.querySelector('.todoitems')
    
    Array.from(ul.children).forEach((data)=>{

        data.remove()
    })
    todoList.forEach((data)=>{
        if(data.state == "Active"){
            createAndAppendTodo(data.value)
        }
        else{
            todoList=todoList.filter((ele)=>{
                return ele.state=='Active'
            })
        }
    })
    count()
})

console.log(todoList);