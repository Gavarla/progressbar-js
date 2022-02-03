const circles=document.querySelectorAll('.circle');
// console.log(circles);
const pre=document.getElementById('pre');
// console.log(pre);
const next=document.getElementById('next');
// console.log(next);
const progress=document.getElementById('progress');
// console.log(progress);
let currentActive=1;
next.addEventListener('click',()=>{
    currentActive++
    //  console.log(currentActive);
    if(currentActive > circles.length){
        currentActive=circles.length
    }
    update()
})
pre.addEventListener('click',()=>{
    currentActive--
    // console.log(currentActive);
    if(currentActive < 1){
        currentActive =  1
    }
    update()
 })

 function update(){
     circles.forEach((circle,idx)=>{
         if(idx<currentActive){
             circle.classList.add('active')
         }else{
             circle.classList.remove('active')
         }
     })
 
 const actives=document.querySelectorAll('.active')
 progress.style.width=(actives.length-1)/ (circles.length-1) * 100 + '%' 
// progress.style.width = (actives.length / circles.length) * 100 + '%'
if(currentActive=== 1){
    pre.disabled=true
}else if(currentActive===circles.length){
    next.disabled=true
}else{
    pre.disabled=false
    next.disabled=false
}

 
    }

