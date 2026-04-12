
// gets the button to delete a task and adds an event listener
const button = document.querySelectorAll(".deleteButton")

const completedButton = document.querySelectorAll(".completedButton");

Array.from(completedButton).forEach(button => {
    button.addEventListener('click', taskCompleted)
})


async function taskCompleted(){

    const completed = true

    const taskName = document.querySelector(".taskName").textContent

    try{
        const response = await fetch('/completeTask', {
            method: 'put', 
            headers: {'Content-Type' : 'application/json'}, 
            body: JSON.stringify({
                value: completed, 
                task: taskName
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(error){
        console.log(error)
    }

}


Array.from(button).forEach(button => {
    button.addEventListener('click', deleteTask)
})


// function to delete task
function deleteTask(){
   const taskName = document.querySelector(".taskName").textContent
   
    // sends a fetch request to the server in the delete route and specify the method
    fetch('/deleteTask', {
        method: 'delete', 
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify({
            // sends the value of the input file
          value: taskName,
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