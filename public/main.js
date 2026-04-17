// gets the buttons for completed task
const completedButton = document.querySelectorAll(".completedButton");

// loops thorough the array of completed buttons and adds an event listener to each one
Array.from(completedButton).forEach(button => {
    button.addEventListener('click', taskCompleted)
})

// helper function to return the task or the task name 
function getTaskAndTaskName(event, bool){
    // stores the clicked button
    const button = event.currentTarget;
    // looks for the task value relative to the clicked button 
    const task = button.closest('.task');
    // gets the task name from inside the current task element
    const taskName = task.querySelector(".taskName").textContent.trim();
    
    // returns the  task or task name
    return bool ? task : taskName
}

// function to update the task completed
async function taskCompleted(event){
    
    // calling the helper function to grt the task name
    const taskName = getTaskAndTaskName(event)
    
    // calling the helper function to get the task element (passing a boolean value to trigger it)
    const task = getTaskAndTaskName(event, true)

    // check is the class of 'completed' is already in the element to keep the styling when the page is refreshed
    const isCurrentlyCompleted = task.classList.contains('completed');    
    
    try{
        // makes the fetch request to the database with the method of PUT to update the values of 'completed' either True or False 
        const response = await fetch('/completeTask', {
            method: 'put', 
            headers: {'Content-Type' : 'application/json'}, 
            body: JSON.stringify({
                value: !isCurrentlyCompleted, 
                task: taskName
            })
        })
        // const data = await response.json()

        // if the fetch response went okay, the page will reload and and will add the styling to the task displayed
        // if the completed button is clicked again it will make another update request
        if(response.ok){
            task.classList.toggle('completed')
            location.reload()
        }
    }catch(error){
        console.log(error)
    }
}


// gets the button to delete a task 
const button = document.querySelectorAll(".deleteButton")

// loops through all of the deleted button and adds an even listener
Array.from(button).forEach(button => {
    button.addEventListener('click', deleteTask)
})

// function to delete task
function deleteTask(event){

    // calling the helper function to get the task name
    const taskName = getTaskAndTaskName(event)

    // sends a fetch request to the server in the delete route and specify the method
    fetch('/deleteTask', {
        method: 'delete', 
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify({
            // sends the value from the clicked button
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