        function bai1(){
            var n = prompt("Enter number: ");
            n = Number(n);
            var m = n;
            for (var i=1;i<m;i++) {
            n=n*(m-i);
            }
        return document.write(m + "!= " + n + "</br>");
        }
        //Test case bai1
        //console.log(bai1(true));
        //n=5; n!=120;
        function bai2(){
            var a = prompt("Enter phrase: ");
            var n = a.length;
            var b = "";
            for (var i = 1; i<=n; i++){
            b = b + a[n-i];
            }
        return document.write(b);
        }
        //Test case bai2
        //console.log(bai2(true));
        //"ASTROWORLD" => "DLROWORTSA"
        function bai3(){
            var a = prompt("Enter number(s): ");
            document.write(a);
            for (var i = 0; i<9; i++) {
            document.write("-"+a);
            }
        }
        //Test case bai3
        //console.log(bai3(true));
        //23;
        function bai4(){
            var ninenine = ["Jake","Amy","Charles","Terry","Rosa","Gina"];
            ninenine.sort();
            for (var i = 0; i<ninenine.length;i++) {
            document.write((i+1) + ". " + ninenine[i] + "</br>");
            }
        }
        //Test case bai4
        //console.log(bai4(ninenine = ["Jake","Amy","Charles","Terry","Rosa","Gina"]));
        //NINE-NINE
        function bai5(){
            var Num = [6,3,9,8,2,7,4,1,23,30,44,666];
            for (var i = 0; i<Num.length;i++) {
            Num[i]=Num[i]*2;
            }
        return Num;
        }
        //Test case bai5
        //console.log(bai5([6,3,9,8,2,7,4,1,23,30,44,666]));
        //=>(12) [12, 6, 18, 16, 4, 14, 8, 2, 46, 60, 88, 1332];
        function bai6(){
            var Num = [6,3,9,8,2,7,4,1,23,30,44,666];
            var NewNum = [0];
            for (var i = 0; i<Num.length;i++) {
            NewNum[i]=Num[i]%2;
        }
        return NewNum;
        }  
        //Test case bai6
        //console.log(bai6([6,3,9,8,2,7,4,1,23,30,44,666]));
        //=>(12) [0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0];