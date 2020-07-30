$(function(){
    //选项卡切换
    $('.btn-tab:first-child').addClass('change');
    $('.btn-tab').click(function(){                            
        $(this).siblings().removeClass('change');
        for(var i=0;i<$(this).length;i++){
            $(this).eq(i).addClass('change');
        }
        var name =$(this).text();
        $('[class=prod]').hide();
        if(name=='彩妆精品')
        {
            $("#prod1").fadeToggle(); 
        }
        else if(name=='完美护肤'){
            $("#prod2").fadeToggle();
        }else{
            $("#prod3").fadeToggle();
        }
    });

    $('.img_info ul li').hover(function(){
        $('.btn-buy',this).fadeIn();
    },
    function(){
        $('.btn-buy',this).fadeOut();
    });
})  