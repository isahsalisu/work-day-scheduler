


$(document).ready(function(){
    //display current day & time at the top of the page
    $('#currentDay').text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    $('.saveBtn').on('click',function(){
        //store in localstorage
        var value = $(this).siblings('.description').val()
        var time = $(this).parent().attr('id')
        localStorage.setItem(time, value)
    })
    //to gety current number of hours
    function toUpdateHour(){
        var currentHour = moment().hour()
        //loop over time each section , checks to see if we are in  past,present or future.  
        $('.time-block').each(function(){
            var sectionHour = parseInt($(this).attr('id').split('r')[1])
            if(currentHour > sectionHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if(currentHour === sectionHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else{
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })

    }
    toUpdateHour()
    //l this function helps  any saved data from localstoarge 
    $('#hour9 .description').val(localStorage.getItem('hour9'))
    $('#hour10 .description').val(localStorage.getItem('hour10'))
    $('#hour11 .description').val(localStorage.getItem('hour11'))
    $('#hour12 .description').val(localStorage.getItem('hour12'))
    $('#hour13 .description').val(localStorage.getItem('hour13'))
    $('#hour14 .description').val(localStorage.getItem('hour14'))
    $('#hour15 .description').val(localStorage.getItem('hour15'))
    $('#hour16 .description').val(localStorage.getItem('hour16'))
    $('#hour17 .description').val(localStorage.getItem('hour17'))

})



















// Pseudo-Coding the Work Day Scheduler:
// We need to...
// Use jQuery and Moment.js in this app.
// Create our own javascript file.
// Display the current date at the top.
// Create the time blocks - what HTML elements do you need for each one?
// Conditionally format the color of the time blocks based on the current time. Can you use any of the CSS classes from the starter code to help with this?
// When a user clicks on the save button for a time block, its contents are saved in local storage.
// On page reload, text content for the time blocks should be pulled from local storage.
// :100:
// 1

// The app should:

// * Display the current day at the top of the calender when a user opens the planner.
 
// * Present timeblocks for standard business hours when the user scrolls down.
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page

// The following animation demonstrates the application functionality:


//using css class to note past present future
// classList.add  google it


