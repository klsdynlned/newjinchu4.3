function startTime()

            {

                var today=new Date();//定义日期对象

                var yyyy = today.getFullYear();//通过日期对象的getFullYear()方法返回年

//              var MM = today.getMonth()+1;//通过日期对象的getMonth()方法返回年
//
//              var dd = today.getDate();//通过日期对象的getDate()方法返回年

                var hh=today.getHours();//通过日期对象的getHours方法返回小时

                var mm=today.getMinutes();//通过日期对象的getMinutes方法返回分钟

                var ss=today.getSeconds();//通过日期对象的getSeconds方法返回秒

                var vv=today.getMilliseconds()

                // 如果分钟或小时的值小于10，则在其值前加0，比如如果时间是下午3点20分9秒的话，则显示15：20：09

//              MM=checkTime(MM);
//
//              dd=checkTime(dd);

                mm=checkTime(mm);

                ss=checkTime(ss);
//              document.getElementById('nowDateTime').innerHTML=MM+"-"+dd;
                document.getElementById('nowDateTimeSpan').innerHTML=hh+":"+mm+":"+ss+"."+vv;

                setTimeout('startTime()',3);//每一秒中重新加载startTime()方法

            }



            function checkTime(i)

            {

                if (i<10){

                    i="0" + i;

                }

                  return i;

            }
		var name = prompt("请输入你的名字","名字");
		var mm = prompt("请输入你的学号","学号");
		if(name!='aaaa'){
			x=document.getElementById("demo");  //查找元素
			var a=name+'-'+mm;
			x.innerHTML=a;    //改变内容
		}
//		document.write("<p style='color: red;'>"+name+"</p>")


//获取图片   图片改变时调用
let imgElement = document.getElementById('putt');
	let inputElement = document.getElementById('fileInput');
	inputElement.addEventListener('change', (e) => {
		imgElement.src = URL.createObjectURL(e.target.files[0]);
	}, false);