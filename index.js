/*乐购商城首页js
 2020.10.27*/
 // 当页面加载完毕
 $(function(){
	 /*首页大图轮播*/
	 $('#bannerInner').tyslide({
		boxh:460,//盒子的高度
		w:1000,//盒子的宽度
		h:390,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:40,//控制按钮上下偏移的位置，要将按钮向下移动 首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:20,//控制按钮高度
		radius:10,//控制按钮圆角度数
		controlsColor:"#d7d7d7",//普通控制按钮的颜色
		controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
		isShowNum:true//是否显示数字
	 });

  /*图书电子书小轮播 */
     $('#ebooks-banner').tyslide({
	    boxh:223,//盒子的高度
	    w:332,//盒子的宽度
	    h:223,//图片的高度
	    isShow:true,//是否显示控制器
	    isShowBtn:true,//是否显示左右按钮
	    controltop:10,//控制按钮上下偏移的位置，要将按钮向下移动 首先保证boxh 高度>图片 h
	    controlsW:10,//控制按钮宽度
		controlsH:2,//控制按钮高度
		// radius:50,//控制按钮圆角度数
	    controlsColor:"#d7d7d7",//普通控制按钮的颜色
		controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
	 });
	  /* 新书列表交互手风琴效果*/
	  $('.ebooks .right-box ul > li').mouseenter(function(){
		//所有兄弟：隐藏详情页面,显示标题
		$(this).siblings().find('.desc').hide();//隐藏详情
		$(this).siblings().find('.ebooks-title').show();//显示标题
 
		//当前：隐藏标题 显示详情
		$(this).find('.ebooks-title').hide();
		$(this).find('.desc').show();
	})
    /*服装*/
    $("#clothes-banner").tyslide({
        boxh:340,//盒子的高度
        w:430,//盒子的宽度
        h:340,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
      
    });
    /*户外运动*/
    $("#sport-banner").tyslide({
        boxh:340,//盒子的高度
        w:430,//盒子的宽度
        h:340,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
});
    /*童装*/
    $("#children-clothes-banner").tyslide({
        boxh:340,//盒子的高度
        w:430,//盒子的宽度
        h:340,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
});
    // 推广商品切换
    $('.stationery .top-stat ul li').mouseenter(function(){
        $(this).addClass('active').siblings().removeClass('active')
    /*内容切换*/
    var index = $(this).index(); //0=>left:0*1170
    //左右移动
    $('.stationery .title-bottom .inner-box').animate({
        'left': -index * 1170
    });
});
    /*二维码划出效果 */
    $('.qr-code .ticket').hover(function() {
        // 让二维码划出来
        $('.qr-code div').stop(true).animate({
            left:'-100px'
        })
    },function (){
        // 让二维码收回去
        $('.qr-code div').stop(true).animate({
            left:0
        })
    })
    /* 顶部搜索框交互 */
    $(document).scroll(function (){
        // 获取到顶部得距离
        var topDistance = $('body').scrollTop();
        // 判断
        if(topDistance > 500) {
            // 如果滚动距离大于500 滑下去
            $('.top-search-box').slideDown(300)
        }else{
            // 反之收回
            $('.top-search-box').slideUp(300)
        }
    })
    /* 楼层跳转 */
		$('.floor li').click(function(){
			//获取索引
			var index = $(this).index();
			//选中每一个板块到顶部的偏移
			var topOffset = $('.floorBox').eq(index).offset().top;
			
			//让滚动条滚到这个位置
			$('body').animate({
				scrollTop:topOffset - 50
			})
		})
 })
