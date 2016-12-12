$("#calendarFilterBox").calendarPicker();
var dateSelector;
$(function(){
  dateSelector=$("#calendarFilterBox").calendarPicker({callback:function(cal){
    alert(cal.currentDate);
  }});
});
dateSelector.changeDate(new Date());
$(function(){
  dateSelector=$("#calendarFilterBox").calendarPicker({
    monthNames:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    useWheel:true,
    callbackDelay:500,
    years:1,
    months:3,
    days:4,
    showDayArrows:false,
    callback:function(cal){
       $("#mydate").html(cal.currentDate+"");
  }});
});
