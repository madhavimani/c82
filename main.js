var mouseevent="empty";
var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext('2d');
colour="purple";
linewidth=10;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent="mouseDown";

}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseUP";

}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";

}
canvas.addEventListener("mousedown",mymousemove);
function mymousemove(e){
  currentx=e.clientX-canvas.offsetLeft;  
  currenty=e.clientY-canvas.offsetTop;
if(mouseevent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=linewidth;
    console.log("lastposition of x and y are X="+lastx+" Y="+lasty);
    ctx.moveTo(lastx,lasty);
    console.log("currentposition of x and y are X="+currentx+" Y="+currenty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();

}
lastx=currentx;
lasty=currenty;
}

