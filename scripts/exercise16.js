function updateTime()                 
{
  let date = new Date();
  th = document.getElementById("th");  
  th.innerHTML = date.getHours()  + ":" + date.getMinutes() + ":" + date.getSeconds();   
  setTimeout("updateTime();", 1000);  //Reset this function to run again in one second.
}