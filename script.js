$(document).ready(function() {
    $(".saveBtn").on("click", function() {
      const value = $(this).siblings(".description").val();
      const time = $(this).parent().attr("id");
  
    // add time and value to local storrage
      localStorage.setItem(time, value);
    });

    
    function hourUpdater() {
        // get current number of hours
        const currentTime = moment().hours();
    
        
        $(".time-block").each(function() {
          const blockHour = parseInt($(this).attr("id").split("-")[1]);
    
         
          if (blockHour < currentTime) {
            $(this).addClass("past");
          } 
          else if (blockHour === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
          } 
          else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
          }
        });
      }
      hourUpdater();
    

      $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
