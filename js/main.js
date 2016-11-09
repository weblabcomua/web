$(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop != 0){
            $("nav.navbar").addClass("nav-fixed");
            $(".scroll.top").fadeIn(1000);
            $(".submenu").slideUp(1000);
            $(".navbar-header p").fadeIn(1500);
            return false;
        } else {
            $("nav.navbar").removeClass("nav-fixed");
            $(".scroll.top").fadeOut(1000);
            $(".submenu").slideDown(1000);
            $(".navbar-header p").fadeOut(1000);
            return false;
        }
    });

    //анимация bg
	var a = 1;
    var timerId = setInterval(function() {
        a++;
        $("#AnimatedBg").css("background-position","-"+a+"px 150px");
    }, 50);


    //всплывающий блок портфолио
    if(window.outerWidth >= 1200){
            $("div.col-lg-4").hover(function(){
            $(this).children(".block_desc").css({cursor:"pointer"});
            $(this).children(".block_desc").slideDown(500);
        },function(){
            $(".block_desc").slideUp(300);
        });

        //автоклик большой фотографии на портфолио
        /*$("#portfolio span").click(function(){
          var a = $(this).parent().parent().parent().children("a");
          $(a).trigger("click");
       });*/
    }
    
    //слайдер отзывы
    $('.bxslider').bxSlider({
         pagerCustom: '#bx-pager',
         controls: false,
         auto: true
    });
    
    //отправка формы обратной связи
    $(".btn-block").click(function(e){
        e.preventDefault();
		$(".validation").html("");
		$("#contacts input.form-control, #contacts textarea").css("border","solid 2px #3c763d");

        var name = $(".input-name").val();
        var phone = $(".input-phone").val();
        var email = $(".input-email").val();
        var msg = $(".input-msg").val();
		
		var reg = /\d/g;
		
        var error = Array();
        var i = 0;
        if(name.length === 0){
            error[++i] = "Введите имя";
			$(".input-name").css("border","solid 2px #b14949").next(".validation").html(error[i]);
        }
        
        if(phone.length === 0){
            error[++i] = "Введите телефон";
			$(".input-phone").css("border","solid 2px #b14949").next(".validation").html(error[i]);
        }else if(phone.match(reg)===null || phone.match(reg).length !== 10){
			error[++i] = "Не корректный телефон";
			$(".input-phone").css("border","solid 2px #b14949").next(".validation").html(error[i]);
		}
        
        if(email.length === 0){
            error[++i] = "Введите e-mail";
			$(".input-email").css("border","solid 2px #b14949").next(".validation").html(error[i]);
        }else if(email.indexOf("@") === -1 || email.indexOf(".") === -1){
			error[++i] = "Не корректный e-mail";
			$(".input-email").css("border","solid 2px #b14949").next(".validation").html(error[i]);
		}
        
        if(msg.length === 0){
            error[++i] = "Введите сообщение";
			$(".input-msg").css("border","solid 2px #b14949").next(".validation").html(error[i]);
        }
        
        if(error.length === 0){
            //отправка сообщения на почту
			$.ajax({
			url: 'mail.php',
			type: 'POST',
			data: {name: name, phone: phone, email: email, msg: msg},
			success: function(res){
				$(".success").html(res);
				$("#contacts input.form-control, #contacts textarea").css("border","solid 1px #cfcfcf").val("");
			},
			error: function(){
				$(".error").html("Сервер временно не доступен");
			   }
			});
		}

    });

    //опредиление растояния проскроленой части страниц
    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
      //console.log(scrolled);
        if(scrolled>900){
            //$("#scrol_top").fadeIn(1500);
            $("#scrol_top").css("display","block");
        }else{
            $("#scrol_top").fadeOut(1500);
            //$("#scrol_top").css("display","none");
        } 
    };
   

    //top_scroll
    $("#scrol_top a").click(function(event){
        $('html, body').animate({scrollTop: -event.pageY}, 2000);
        //console.log(event.pageY);
    });
    
    //скрол при клике на меню
    $("#myMenu ul li a").click(function(e){
        e.preventDefault();    
        var elem = $(this).attr("href");
        var pos = $(elem).offset().top;
        console.log(pos);
        $('html, body').animate({scrollTop: pos-50}, 1000);

    });
    
    //скрол по кнопке
    $("#order").click(function(e){
		e.preventDefault();
		var pos = $("#contacts").offset().top;
		$('html, body').animate({scrollTop: pos-50}, 1000);
	});
		
	//альтернативное портфолио
	function showPortfolio(a){	
		var width = window.innerWidth-window.innerWidth*0.1+"px";
		$(".cont img, .cont").css("width", width);
		$("span.closed").css("margin-right", window.innerWidth*0.1/2-10+"px");
		
		$(a).fadeIn(700);
		//$("body").css("overflow","hidden");
		
		$(".closed").click(function(){
			$(".my_modal").fadeOut(500);
			//$("body").css("overflow","auto");
		});
	}
	
	$(".glyphicon-search").click(function(){
		var a = $(this).parent().parent().next().next(".my_modal");		
		showPortfolio(a);
	});
	
	$("#a_portfolio img").click(function(){
		var a = $(this).next(".my_modal");		
		showPortfolio(a);
	}); /* альтернативное портфолио */
		
	//timer
	setInterval(function(){
        timer({
            month: "November",
            day: "15",
            year: "2016",
            hour: "17",
            minute: "30",
            second: "00"
        });
	}, 10);
        
        
    $('[data-toggle="tooltip"]').tooltip();

	
	
});