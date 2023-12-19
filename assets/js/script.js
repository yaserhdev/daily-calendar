// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {

$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").on("click", function() {
    var entries = [];
    $(".description").each(function() {
      var entry = $(this).val();
      entries.push(entry);
      var events = JSON.stringify(entries);
      localStorage.setItem("myEvent", events);
    });
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour = dayjs().hour();
  console.log(currentHour);
  $('.time-block').each(function() {
    var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
    console.log(blockHour, currentHour);
    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour == currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    };
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  var savedEvent = Object.keys(localStorage);
  for (var i = 0; i < savedEvent.length; i++) {
    var keys = localStorage.getItem(savedEvent[i]);
    var parsedEvent = JSON.parse(keys);
    $(".description").each(function() {
      $(this).val(parsedEvent[i])
      i++;
    });
  };

  // TODO: Add code to display the current date in the header of the page.
  var date = dayjs();
  $('#currentDay').text(date.format("MMM D, YYYY h:mm A"));
});

});