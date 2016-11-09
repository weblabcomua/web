	function timer(setting){
		//Дата для обратного отсчета
		var date_new = setting.month+","+setting.day+","+setting.year+" "+setting.hour+":"+setting.minute+":"+setting.second;

		//Объект даты для обратного отсчета
		var date_t = new Date(date_new);
		//Объект текущей даты
		var date = new Date();
		//вычесляем сколько милисикунд до установленной даты
		var timer = date_t-date;
		
		if(date_t>date){
			var day = parseInt(timer/(60*60*1000*24));
			if(day<10){
				day = "0"+day;
			}
			day = day.toString();         
			$("#day p").html(day);
			
			var hour = parseInt(timer/(60*60*1000))%24;
			if(hour<10){
				hour = "0"+hour;
			}
			hour = hour.toString();          
			$("#hour p").html(hour);
			
			var minute = parseInt(timer/(60*1000))%60;
			if(minute<10){
				minute = "0"+ minute;
			}
			minute = minute.toString();
			$("#min p").html(minute);
			
			var second = parseInt(timer/(1000))%60;
			if(second<10){
				second = "0"+second;
			}
			second = second.toString();
			$("#sec p").html(second);
			
			var msecond = parseInt(timer)%1000;
			if(msecond<10){
				msecond = "0"+msecond;
			}
			msecond = msecond.toString();
			msecond = msecond.slice(0,2);
			$("#msec p").html(msecond);
			
		
		}else{
			$("#timer").css("display","none");
		}
	}