/**
function checkboxOnclick(checkbox){     
     
    var cls="."+$(checkbox).attr("data-id='xz-aa'")

    if($(checkbox).is(":checked")){
        //选中时
        alert("选中");
        $(cls).css({"display":"none"});
        
    }
    else{
        //未选中时
        alert("未选中");
        $(cls).css({"display":"inline-block"})
    }
} */
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
/**
function func(){
    var p = document.getElementById("p");
//1、采用style修改。
      p.style.background = "red";
//2、采用类选择器className修改。
//   p.className = "one";
}
function func1(){
    var p = document.getElementById("p");
    p.style.background = "";
 //   p.className = " ";
} */
/* 
 $(cls).css("display","none") 
$(cls).css("display","inline-block")
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
$("#xxgd li").mouseover(function () {
    $("#xxgd li a").css({ "color": "#000" });
    $(this).css({ "background-color": "#e0e0e0" });
}).mouseout(function () {
    $("#xxgd li a").css({ "color": "#000" });
    $(this).css({ "background-color": "red" });
});
*/
