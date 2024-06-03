// ======== Calender With JS ============= //
let year  =  document.querySelector(".year");
let month =  document.querySelector(".month");
let day   =  document.querySelector(".day");
let date   =  document.querySelector(".date");
let time  =  document.querySelector(".time");


let monthName = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
let dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];

let cDate = new Date(); // date object

year.innerHTML = cDate.getFullYear();
month.innerHTML = monthName[cDate.getMonth()];
day.innerHTML = dayName[cDate.getDay()];
//date.innerHTML = cDate.getDate();
date.innerHTML = ( cDate.getDate() < 10 ) ? "0" + cDate.getDate() : cDate.getDate();

// ============= Clock With JS ============ //

function MyClock(){
let cDate = new Date();
let cHours =  cDate.getHours();
let cMins =  cDate.getMinutes();
let cSecs =  cDate.getSeconds();
let session = "AM";

if(cHours == 0){
     cHours = 12;
} else if( cHours>12 ){
  cHours = cHours-12;
  session = "PM";
}

cHours = ( cHours < 10 ) ?  "0"  + cHours : cHours;
cMins  = ( cMins < 10 )  ?  "0"  + cMins  : cMins;
cSecs  = ( cSecs < 10 )  ?  "0"  + cSecs  : cSecs;

let clockTime = cHours + ":" + cMins + ":" + cSecs +" "+ session;
time.innerHTML =  clockTime;
setTimeout( MyClock, 2000 );

}

MyClock();


// console.log(monthName);
// console.log(dayName);
// console.log(cDate.getDay());