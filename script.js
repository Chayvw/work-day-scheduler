$(document).ready(function(){
    $(".saveBtn").on("clikc", function(){
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    

}