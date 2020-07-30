//导航
$(function(){
    $('.flex-container li:first-child').addClass('change');
    $('.flex-container li').hover(function(){                              
        $(this).siblings().removeClass('change');
        for(var i=0;i<$(this).length;i++){
            $(this).eq(i).addClass('change');
        } 
    });
})