let countdown;

function timer(seconds){
   const now = Date.now();
   const then = now + seconds *1000;
   countdown = setInterval(()=>{
        const secondLeft = Math.round((then - Date.now())/1000);
        if(secondLeft<0){
            clearInterval(countdown);
            return;
        }
        console.log(secondLeft);
   },1000);
}