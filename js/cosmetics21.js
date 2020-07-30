function checkboxOnclick(checkbox){
    if ( checkbox.checked == true){
         for(var i=0;i<15;i++){
             document.getElementsByClassName("zzaa")[i].style.display='none';
             //Action for checked 
         }    
     }
     else{
         for(var i=0;i<15;i++){
             document.getElementsByClassName("zzaa")[i].style.display='inline-block';
         }
     }       
}
function aaa(checkbox){
    if ( checkbox.checked == true){
         for(var i=0;i<15;i++){
             document.getElementsByClassName("zzaa1")[i].style.display='none';
             //Action for checked 
         }    
     }
     else{
         for(var i=0;i<15;i++){
             document.getElementsByClassName("zzaa1")[i].style.display='inline-block';
         }
     }       
}
function aaa1(checkbox){
    if ( checkbox.checked == true){
         for(var i=0;i<15;i++){
             document.getElementsByClassName("zzaa2")[i].style.display='none';
             //Action for checked 
         }    
     }
     else{
         for(var i=0;i<15;i++){
             document.getElementsByClassName("zzaa2")[i].style.display='inline-block';
         }
     }       
}