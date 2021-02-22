//scroll to top button
var index =0;


function ScrollTop(){
  window.scrollTo({
      top:0,
      behavior:"smooth"
  })
  index =0;
  console.log(index);
}
function first(){
  index = 1;
  document.getElementById('sec1').scrollIntoView({behavior:"smooth"});
}




function ScrollNext(){
if(index>1){
    index--;
document.getElementById('sec'+ index.toString()).scrollIntoView({behavior:"smooth"});
console.log(index);
}else {
  window.scrollTo({
      top:0,
      behavior:"smooth"
  })
  index =0;
}

}


function ScrollPrev(){
  if(index < 9){
  index ++;
document.getElementById('sec'+ index.toString()).scrollIntoView({behavior:"smooth"});
console.log(index);
}else{
  index +=0;
  console.log(index);
}
}


//initiate button
function Scroll(){
  index=1;
document.getElementById('sec1').scrollIntoView({behavior:"smooth"});
console.log(index);
}





function page2(){
  document.getElementById('sec2').scrollIntoView({behavior:"smooth"});
}
function page3(){
  document.getElementById('sec3').scrollIntoView({behavior:"smooth"});
}
function page4(){
  document.getElementById('sec4').scrollIntoView({behavior:"smooth"});
}
function page5(){
  document.getElementById('sec5').scrollIntoView({behavior:"smooth"});
}
function page6(){
  document.getElementById('sec6').scrollIntoView({behavior:"smooth"});
}
function page7(){
  document.getElementById('sec7').scrollIntoView({behavior:"smooth"});
}
function page8(){
  document.getElementById('sec8').scrollIntoView({behavior:"smooth"});
}
function page9(){
  document.getElementById('sec9').scrollIntoView({behavior:"smooth"});
}
