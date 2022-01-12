// Get hour time blocks by id
var hour = document.getElementsByClassName("hours")
// Get all the submit buttons in a query selector
const submitBtn = document.getElementsByClassName("submit-button");

// Add today's date
var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY'));

var objDate = new Date();
var hours = objDate.getHours();

for(let i=0; i< hour.length; i++){
    if( hour[i].id == hours){
        hour[i].classList.add("table-primary");  //present
    } else if(hour[i].id < hours){
        hour[i].classList.add("table-secondary");  //past
    } else{
        hour[i].classList.add("table-success"); //future
    }
}

for (let i=0; i<submitBtn.length; i++){
    submitBtn[i].addEventListener('click', function(e){
        console.log("from",e.target.id)
        const textAreaId= e.target.id+"t"
        const textAreaEl= document.getElementById(textAreaId);
        const textAreaVal=textAreaEl.value
        console.log(textAreaVal)
    })
}

