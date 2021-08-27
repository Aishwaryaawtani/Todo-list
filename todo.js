
var MainTodoContainer=document.getElementById('todos');
var input=document.querySelector('.todo_input');
// var addingButton=document.querySelector("add-item");
var deleteAllBtn=document.querySelector('.deleteBtn');

// document.querySelector('.add-item').addEventlistener("click",function(e)
// addingButton[0].addEventlistener("click",function(e){

document.querySelector('.add-item').addEventListener('click',function(e){
    // addingButton.addEventListener('click',function(e){

    



    console.log("hi");
    if(input.value.trim())
    // ul tag
     {  let  ulTag=document.createElement("ul");
        ulTag.classList.add('todo-list-container');

        // console.log(ulTag);
        let todoList =document.createElement("div");
        todoList.classList.add('todo-list');
        // LI tag
        let liTag=document.createElement("li");
        liTag.innerHTML=input.value;
        liTag.classList.add('todo-item');
        // console.log(todoList);
        let buttonDiv=document.createElement("div");
        buttonDiv.classList.add('button');
        // complete button element
        let completeButton=document. createElement("button");
         completeButton.classList.add('completed');
         completeButton.innerHTML= '<i class ="fas fa-check"> </i>';

        //  console.log(completeButton);

         let editBtn =document. createElement("button");
         editBtn.classList.add('editBtn');
         editBtn.innerHTML=' <i class ="far fa-edit"> </i>';
         editBtn.onclick=function()
         {
             editWorking(liTag);
         }
         
         
        //  console.log(completeButton);
        let trashBtn=document.createElement("button");
        trashBtn.classList.add('trash');
        trashBtn.innerHTML='<i class ="fas fa-trash"></i>';
        // console.log(trashBtn);


        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editBtn);
        buttonDiv.appendChild(trashBtn);
        // console.lo(ulTag);



        MainTodoContainer.appendChild(ulTag);
        todoList.addEventListener('click',function(e){
var items=e.target;
if(items.classList[0]==='completed'){

    var todo =items.parentElement;
    var todo2=todo.parentElement;
    todo2.classList.add('line-through');

}
if(items.classList[0]==='trash'){

    var todo =items.parentElement;
    var todo2=todo.parentElement;
    var todo3=todo.parentElement;
    todo3.classList.add('fall');
    todo3.addEventListener('transitionend',function(){

        todo3.remove();

    })




            }    })
        
        // when add button click clear the input value
        input.value='';
    
}
else if(input.value==='')
{
    alert('please fill the input field');
}
});
function editWorking(e)
{
    var editValue=prompt('edit the selected item',e.firstChild.nodeValue);
    // var value=e.firstChild;
    // console.log(value);
    e.firstChild.nodeValue=editValue;

}
function deleteAllElement()
{
    var gettingUlTag= document.querySelectorAll('.todo-list-container');
    for(var i=0;i<gettingUlTag.length;i++)
    {
        gettingUlTag[i].remove();
        
    }
console.log(localStorage);
}
