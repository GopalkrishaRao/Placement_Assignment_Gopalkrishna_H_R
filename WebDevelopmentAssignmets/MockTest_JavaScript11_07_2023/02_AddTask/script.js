let tasks= document.querySelectorAll('.tasks')[0];
let submitBtn = document.querySelectorAll('.btnSubmit')[0];
submitBtn.addEventListener('click', addTask);
let input = document.getElementsByClassName('input')[0];

function addTask(){
    let li= document.createElement('li');
    li.innerText=input.value
    // adds the new task on the top of the list
    tasks.insertBefore(li, tasks.firstChild)
    input.value=''
}