// Get hour time blocks by id
var hour = document.getElementById("hours")

// Add today's date
var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY'));

var objDate = new Date();
var hours = objDate.getHours();
    if(hours >= 9 && hours <= 17){
        $(".hour").addClass("table-primary");  //present
    }else if(hours < 9){
        $(".hour").addClass("table-secondary"); //past
    }else{
        $(".hour").addClass("table-success"); //future
    }