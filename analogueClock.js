var date = new Date();
var sec = new Date().getSeconds() * 0.10471975511965977;
var min = new Date().getMinutes() * 6 * Math.PI / 180 + (sec/60);
var hr = new Date().getHours() * 30 * Math.PI / 180 + (min/12);
var canvas,ctx,ch,vc,radius,a,incr,grad,preHr, preSec, preMin,mainDiv,innerDiv,tick,audio,source,textNode,body;


const writeText  = (ctx,ch,cv,radius,incr,) => {
  ctx.font = radius * 0.14 + 'px arial';
  ctx.fillStyle = "#fff";
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  ctx.fillText("12",ch,cv - radius + 0.13 * radius);
  ctx.fillText("6",ch,cv  * 2 - radius * 0.218);
  ctx.fillText("9",ch  - radius + 0.1 * radius,cv);
  ctx.fillText("3",ch  + a,cv);
  ctx.fillText("1",ch + incr * 1.48,cv  - (incr * 2.5));
  ctx.fillText("2",ch + incr * 2.58,cv  - (incr * 1.45));
  ctx.fillText("8",ch - (incr * 2.6),cv + incr * 1.5);
  ctx.fillText("7",ch - (incr * 1.5),cv + incr * 2.6);
  ctx.fillText("10",ch - (incr * 2.56),cv - incr *  1.4);
  ctx.fillText("11",ch - (incr * 1.5),cv - incr *  2.5);
  ctx.fillText("4",ch + incr * 2.6,cv  + (incr * 1.5));
  ctx.fillText("5",ch + incr * 1.52,cv  + (incr * 2.59));
  ctx.font = radius * 0.08 + 'px Monotype Corsiva';
  ctx.fillStyle = "#880000";
  ctx.fillText('HENRY-KC CODES',ch, radius * 0.6);
  ctx.fillText('HENRY-KC CODES',ch, radius * 0.6);
  ctx.fillText('#passionComputerProgramming',ch, radius * 1.5);
};

const digital = () => {
  canvas.style.display = 'none';
  mainDiv = document.querySelector('#div1');
  mainDiv.style.display = 'block';
  body.audio.autoplay = false;
}
const analog = () => {
  canvas.style.display = 'block';
  mainDiv = document.querySelector('#div1');
  mainDiv.style.display = 'none';
}

setInterval(() => {
  audio = document.createElement('audio');
  
  audio.autoplay = true
  source = document.createElement('source');
  source.src = 'media/tick.wav';
  source.type = 'audio/wav';
  textNode = document.createTextNode('Your browser does not support the audio element');
  audio.appendChild(textNode);
  audio.appendChild(source);
  body = document.querySelector('body');
  body.appendChild(audio);

},1000);
               
               
               
setInterval(() => {
  canvas = document.getElementById("canvas");
  canvas.title = "CLICK = DIGITAL CLOCK, ESCAPE = EXIT MESSAGE";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  ch = window.innerWidth / 2;
  cv = window.innerHeight / 2;
  radius = cv;
  if(cv > ch){
    canvas.height = window.innerHeight * 0.6;
      const change = cv - ch;
      cv -= change;
      radius = cv;
      //ch = cv;
  }
  radius = radius * 0.9;
  a = radius - 0.1 * radius;
  incr = a / 3;
  ctx.beginPath();
  ctx.arc(ch,cv, radius,0,2 * Math.PI);
  ctx.fillStyle = '#880000';
  ctx.fill();
  grad = ctx.createRadialGradient(ch,cv,radius * 0.95 ,ch,cv,radius * 1.05);
  grad.addColorStop(0.3,'#999');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(0.7,'#999');
  ctx.strokeStyle = grad;
  ctx.lineWidth = `${radius * 0.1}`;
  ctx.stroke();
  
  ctx.beginPath();
  ctx.fillStyle = grad;
  ctx.arc(ch,cv,0.8 * radius ,0, 2 * Math.PI);
  ctx.fill();
  writeText(ctx,ch,cv,radius,incr,);
  
  ctx.beginPath();
  ctx.translate(ch,cv);
  ctx.rotate(new Date().getHours() * 30 * Math.PI / 180 + ((new Date().getMinutes() * 6 *
   Math.PI / 180 + ((new Date().getSeconds() * 0.10471975511965977)/60))/12));
  ctx.moveTo(0,0);
  ctx.lineTo(0,-cv/2.6);
  ctx.strokeStyle = '#660000';
  ctx.lineCap = 'round';
  ctx.lineWidth = `${radius/10}`;
  ctx.stroke();
  ctx.setTransform(1,0,0,1,0,0);
  ctx.beginPath();
  ctx.translate(ch,cv);
  ctx.rotate(new Date().getMinutes() * 6 * Math.PI / 180 +
   (new Date().getSeconds() * 0.10471975511965977/60));
  ctx.moveTo(0,0);
  ctx.lineTo(0,-cv/1.5);
  ctx.strokeStyle = '#880000';
  ctx.lineCap = 'round';
  ctx.lineWidth = `${radius/22}`;
  ctx.stroke();
  ctx.setTransform(1,0,0,1,0,0);
  
              
  ctx.beginPath();
  ctx.translate(ch,cv);
  ctx.rotate(new Date().getSeconds() * 0.10471975511965977);
  ctx.moveTo(0,0);
  ctx.lineTo(0,-cv/1.24);
  ctx.strokeStyle = '#fafa00';
  ctx.lineCap = 'round';
  ctx.lineWidth = `${radius/44}`;
  ctx.stroke();
  ctx.setTransform(1,0,0,1,0,0);
  ctx.translate(ch,cv);
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.beginPath();
  ctx.arc(0,0, radius * 0.09,0,Math.PI * 2);
  ctx.fillStyle = '#881111';
  ctx.fill();
  ctx.setTransform(1,0,0,1,0,0);
},1000);

setInterval((innerDiv,mainDiv,preHr,preMin,preSec) => {
  innerDiv = document.querySelector('#div1InnerDiv');
  mainDiv = document.querySelector('#div1');
  innerDiv.style.width = window.innerWidth + 'px'; 
  innerDiv.style.height = window.innerHeight + 'px';
  // innerDiv.style.fontSize = window.innerWidth * 0.28 + 'px';
  mainDiv.style.width = window.innerWidth + 'px'; 
  mainDiv.style.height = window.innerHeight + 'px';
  if(window.innerHeight * 3.1 < window.innerWidth){
    innerDiv.style.fontSize = window.innerHeight * 0.888 + 'px';
  }
  if(new Date().getHours() < 10){
      preHr = 0;
  }else{
      preHr = '';
  }
  if(new Date().getSeconds() < 10){
      preSec = 0;
  }else{
      preSec = '';
  }
  if(new Date().getMinutes() < 10){
      preMin = 0;
  }else{
      preMin = '';
  }
  innerDiv.innerHTML =  preHr + '' + new Date().getHours() + ':' + preMin +
   new Date().getMinutes() + ':' + preSec + new Date().getSeconds();
},1000);