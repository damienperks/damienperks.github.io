        function bai1(a, b) {
            if (typeof a == "number" && typeof b == "number"){
            if(a>b){
                return a;
                } else {
                return b;
                }
            }
            else {
                alert("One number was not identified, try again.")
            }
        }
        //Test case bai1
        //bai1(4,6) => 6;
        //bai1("y",true) => One number was not identified, try again.
        function bai2(a) {
            if (a>0) {
                var m = a;
                for (var i=1;i<m;i++) {
                a=a*(m-i);
                }
            return document.write(m + "!= " + a + "</br>");
            }
            else {
                alert("Negative numbers have no factorials.");
            }
        }
        //Test case bai2
        //bai2(-5) => Negative numbers have no factorials.;
        //bai2(5) => 5!=120
        function bai3(arrayofnum) {
            var EvenNumbers = [];
            for (var i = 0; i<arrayofnum.length; i++) {
            if((EvenNumbers[i]%2) == 0) {
                EvenNumbers.push(arrayofnum[i]);
                }
            }
            EvenNumbers.sort(function(a,b){return (a-b)});
            return EvenNumbers;
        }
        //Test case bai3
        //bai3([1,2,3,4,5,6,7,8,9]);
        // (3) [2, 4, 6, 8]
        //bai3([23, 84, 67, 29, 13, 99, 44, 202]);
        //(6) [44, 84, 202]
        var Amy = {
        username: "AmySantiago",
        password: "brooklyn99",
        confirm: "brooklyn99",
        check: function(){}
        };
        var Jake = {
        username: "RexBuckingham",
        password: "MrFart",
        confirm: "MrFarp",
        check: function(){}
        };
        var Test =	function () {
        if ((this.username.length > 0) && (this.username.length<20) && (this.password.length>=6 && this.password.length<=32) && (this.confirm == this.password)) {
        alert("Pass.");
        }
        else {
        alert("Fail.");
        }
        };
        //Test case bai4
        //Amy.check=Test; Amy.check(); => Pass;
        //Jake.check=Test; Jake.check(); => Fail
