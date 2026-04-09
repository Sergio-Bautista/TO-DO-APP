// gets the button to delete a task and adds an event listener
const button = document.querySelectorAll(".deleteButton")

Array.from(button).forEach(button => {
    button.addEventListener('click', deleteTask)
})


// function to delete task
function deleteTask(){
    const id = this.previousSibling.textContent
    const name = this.parentNode.previousElementSibling.textContent
    // sends a fetch request to the server in the delete route and specify the method
    fetch('/deleteTask', {
        method: 'delete', 
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify({
            // sends the value of the input file
          value: name,
          taskId: id
        })
    })
    .then(res => {
        if(res.ok) return res.json()
    })
    // reloads the page to get the new information from db
    .then(() => {
        location.reload()
    })
}