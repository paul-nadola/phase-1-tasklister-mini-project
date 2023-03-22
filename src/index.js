document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //Grabbing the main div that has input and output
 let main = document.querySelector('#main-content')
  //Grabbing the form that has the input form
  let form = main.querySelector('#create-task-form')
  //creating an event listener for our submit button
  form.addEventListener('submit',(e)=>{
    e.preventDefault();//disabling the default refresh feature
    buildTask(e.target.newTask.value)//targetting the input tag for our forms
    form.reset()//this resets the input field after every input
  })
});
/*Creating a function buildTask that gets called when the submit event
is called, the function takes the input and passes it as an ordered list
in the list div with a delete button that removes a task*/
function buildTask(toDo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', taskDelete)
  btn.textContent = 'x'
  li.textContent = `${toDo}`
  li.appendChild(btn)
  document.querySelector('#tasks').append(li)
}
/*Creating a function to be called when the delete button is clicked
, the function removes a task from the list div and is called in
the buildTask function*/
function taskDelete(e){
  e.target.parentNode.remove()
}