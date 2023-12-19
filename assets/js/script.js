$(document).ready(function() {
$(function () {
  // Event listener for clicking the save button to save entries to local storage
  $(".saveBtn").on("click", function() {
    var entries = [];
    $(".description").each(function() {
      var entry = $(this).val();
      entries.push(entry);
      var events = JSON.stringify(entries);
      localStorage.setItem("myEvent", events);
    });
  });
  // Code for applying a class, which has a corresponding color, to all time blocks in relevance to the current time
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
  // Code for retrieving saved entries in local storage and displaying them in the corresponding time block
  var savedEvent = Object.keys(localStorage);
  for (var i = 0; i < savedEvent.length; i++) {
    var keys = localStorage.getItem(savedEvent[i]);
    var parsedEvent = JSON.parse(keys);
    $(".description").each(function() {
      $(this).val(parsedEvent[i])
      i++;
    });
  };
  // Code to display current date and time
  var date = dayjs();
  $('#currentDay').text(date.format("MMM D, YYYY h:mm A"));
});
});