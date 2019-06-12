{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.0.0/moment.min.js"></script> */}
setInterval(()=>{
    let time=moment().format('MMMM Do YYYY, h:mm:ss a').split(' ');
    console.log(time);
    
    document.getElementById('clock').innerHTML=time[3];
    document.getElementById('am').innerHTML=time[4];
    document.getElementById('day').innerHTML = moment().format('dddd');
},1000)