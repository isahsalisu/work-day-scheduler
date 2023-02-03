$(document).ready(function () {
    //This section displays the current time at the header of the page
   $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
});