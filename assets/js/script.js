$(document).ready(function () {
    //This section displays the current time at the header of the page
   $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    // //This section helps to get the current number of hours using moment.js
    function ToUpdateHourSec() {
        var currentHour = moment().hour();
    
        //this section will switch over time each,  to confirm  if it is past, present, or future using the switch methode
  
        $('.time-block').each(function () {
          var $block = $(this),
            sectionHour = parseInt($block.attr('id').split('r')[1]);
          switch (true) {
            case currentHour > sectionHour:
              $block.removeClass('future present').addClass('past');
              break;
            case currentHour === sectionHour:
              $block.removeClass('past future').addClass('present');
              break;
            default:
              $block.removeClass('present past').addClass('future');
          }
        });
      }
      ToUpdateHourSec();

       // Storing the input data from the textarea to  localstorage

    $('.saveBtn').click(function () {
        var value = $(this).prev().val(),
          time = $(this).closest('.time-block').attr('id');
        localStorage.setItem(time, value);
      });
    
       // Using for each loops to load back saved data from local storage per hours
      var hourIds = ['hour9', 'hour10', 'hour11', 'hour12', 'hour13', 'hour14', 'hour15', 'hour16', 'hour17'];
      hourIds.forEach(function (hourId) {
        $('#' + hourId + ' .description').val(localStorage.getItem(hourId));
      });


});