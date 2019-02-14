			//Bai 1: Thay doi font chu ca 3 doan van
			
			function changeFontSize() {
				var x = document.getElementById("coChuBai1").value;
				var doanVan = document.querySelectorAll(".box p");
				var size = x + "px";
				for (var i = 0; i < doanVan.length; i++) {
					doanVan[i].style.fontSize = size;
				}
			}
			//Bai 2: Thay doi font chu 1 doan van len 1px va khong qua 30px
			function increaseFontSize1() {
			     var doanVan = document.getElementById("p1");
			     var coChu = window.getComputedStyle(doanVan).getPropertyValue('font-size');
			     var coChuMoi = parseInt(coChu) + 1;
			     if (coChuMoi <= 30) {
			     	doanVan.style.fontSize = coChuMoi + "px";
			     }
			}
			function increaseFontSize2() {
			     var doanVan = document.getElementById("p2");
			     var coChu = window.getComputedStyle(doanVan).getPropertyValue('font-size');
			     var coChuMoi = parseInt(coChu) + 1;
			     if (coChuMoi <= 30) {
			     	doanVan.style.fontSize = coChuMoi + "px";
			     }
			}
			function increaseFontSize3() {
			     var doanVan = document.getElementById("p3");
			     var coChu = window.getComputedStyle(doanVan).getPropertyValue('font-size');
			     var coChuMoi = parseInt(coChu) + 1;
			     if (coChuMoi <= 30) {
			     	doanVan.style.fontSize = coChuMoi + "px";
			     }
			}
			//Bai 3: Thay doi font chu 1 doan van giam xuong 1px va khong duoi 10px
			function decreaseFontSize1(){
			     var doanVan = document.getElementById("p1");
			     var coChu = window.getComputedStyle(doanVan).getPropertyValue('font-size');
			     var coChuMoi = parseInt(coChu) - 1;
			     if (coChuMoi >= 10) {
			     	doanVan.style.fontSize = coChuMoi + "px";
			     }
			}
			function decreaseFontSize2(){
			     var doanVan = document.getElementById("p2");
			     var coChu = window.getComputedStyle(doanVan).getPropertyValue('font-size');
			     var coChuMoi = parseInt(coChu) - 1;
			     if (coChuMoi >= 10) {
			     	doanVan.style.fontSize = coChuMoi + "px";
			     }
			}
			function decreaseFontSize3(){
			     var doanVan = document.getElementById("p3");
			     var coChu = window.getComputedStyle(doanVan).getPropertyValue('font-size');
			     var coChuMoi = parseInt(coChu) - 1;
			     if (coChuMoi >= 10) {
			     	doanVan.style.fontSize = coChuMoi + "px";
			     }
			}
			//Bai 4: Doi mau chu 3 doan van lan luot la xanh, vang, do
			function changeColor() {
				document.getElementById("p1").style.color = "green";
				document.getElementById("p2").style.color = "yellow";
				document.getElementById("p3").style.color = "red";
			}
			//Bai 5: Doi mau nen
			//Test case:
			//changeBgColor("red")
			//changeBgColor("lightblue")
			//changeBgColor("pink")
			//changeBgColor("lightyellow")
			function changeBgColor() {
				var x = document.getElementById("mauNenTrang").value;
				document.body.style.backgroundColor = x;
			}
			//Bai 6: Copy doan van nay vao doan van khac
			function copyContent() {
				var doanVan1 = document.getElementById("willBeChanged").value;
				var doanVan2 = document.getElementById("willBeCopied").value;
				var noiDung2 = document.getElementById(doanVan2).innerHTML;
				document.getElementById(doanVan1).innerHTML = noiDung2;
			}
			//Bai FizzBuzz
			function FizzBuzz() {
				for (var i = 1; i<=100; i++) {
					if (i%15 == 0) {
						document.write("FizzBuzz ");
					} else if (i%3 == 0) {
						document.write("Fizz ");
					} else if (i%5 == 0) {
						document.write("Buzz ");
					} else {
						document.write(i + " ");
					}
				}
			}
			for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)
