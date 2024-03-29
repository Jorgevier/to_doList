$(document).ready(function(){

    $(".saveBtn").on('click', function (){
    
    var value = $(this).siblings('.userInput').val();
    var time = $(this).parent().attr('id');
    
    localStorage.setItem(time, value);
    
    })
    
    function timeUpdater(){
        var currentTime = moment().hours();
        
        $('.time-block').each(function(){
        
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
    
            if (blockHour < currentTime) {
                $(this).addClass('past');
            }
            else if (blockHour === currentTime) {
                $(this).removeClass('past');
                $(this).addClass('present');
            }
            else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    }
    
    timeUpdater();
    
    
    
    
    
    $('#hour-9 .userInput').val(localStorage.getItem('hour-9'));
    $('#hour-10 .userInput').val(localStorage.getItem('hour-10'));
    $('#hour-11 .userInput').val(localStorage.getItem('hour-11'));
    $('#hour-12 .userInput').val(localStorage.getItem('hour-12'));
    $('#hour-13 .userInput').val(localStorage.getItem('hour-13'));
    $('#hour-14 .userInput').val(localStorage.getItem('hour-14'));
    $('#hour-15 .userInput').val(localStorage.getItem('hour-15'));
    $('#hour-16 .userInput').val(localStorage.getItem('hour-16'));
    $('#hour-17 .userInput').val(localStorage.getItem('hour-17'));
    $('#hour-18 .userInput').val(localStorage.getItem('hour-18'));
    $('#hour-19 .userInput').val(localStorage.getItem('hour-19'));
    $('#hour-20 .userInput').val(localStorage.getItem('hour-20'));
    $('#hour-21 .userInput').val(localStorage.getItem('hour-21'));
    $('#hour-22 .userInput').val(localStorage.getItem('hour-22'));
    
    $('#currentDay').text(moment().format('MMM DD YYYY, h:mm:ss a'))
    })