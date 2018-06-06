// JavaScript Document
//置顶
jQuery(function($){
    $(window).bind("scroll",function() { 
        initScroll() 
    });
	var $fd_box = $('.fd_box');
	
	var $left_s = $('.show_btn');
	
    function initScroll()
    {
    	$(".cx_fd_box").click(function() {
    		$fd_box.animate({bottom:'-200px'});
    		$left_s.removeClass("d-none");
    	});
    	
    	$left_s.click(function() {
    		$('.fd_box').removeClass("slideInLeft"); 
    		$left_s.addClass("d-none"); 
    	});

        if ($(window).scrollTop() > $(window).height()/4) {
			$fd_box.fadeIn();
				
			//ie浏览器时	
			if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
					$(".cx_fd_box").click(function() {
						$('.fd_box').addClass("d_none"); 
						$left_s.removeClass("d_none");
					});
					$left_s.click(function() {
						$('.fd_box').removeClass("d_none");
						$left_s.addClass("d_none"); 
					});
				}	
		
        } else {
			$fd_box.fadeOut();
        }
    }

    $('.top a').bind('click', function(e){
		$("html,body").animate({scrollTop:0});
    });

});
	
		
//切换
function getNames(obj,name,tij)
	{	
		var p = document.getElementById(obj);
		var plist = p.getElementsByTagName(tij);
		var rlist = new Array();
		for(i=0;i<plist.length;i++)
		{
			if(plist[i].getAttribute("name") == name)
			{
				rlist[rlist.length] = plist[i];
			}
		}
		return rlist;
	}
	function fod(obj,name,zz)
		{
			var p = obj.parentNode.getElementsByTagName("span");
			var p1 = getNames(name,"f","div"); // document.getElementById(name).getElementsByTagName("div");
			for(i=0;i<p1.length;i++)
			{
				if(obj==p[i])
				{
					p[i].className = zz;
					p1[i].className = "dis";
				}
				else
				{
					p[i].className = "ss";
					p1[i].className = "undis";
				}

			}
		}
		