        function bai1(n){
            if(typeof n == 'number'){
                return n*n;
            } 
            alert('Try again')
        }
        //Test case bai1
        //console.log(bai1(3));
        //console.log(bai1(5)); 
        function bai2(a, b, c){
            let x = 3*a+2*b-c
            if(typeof a == 'number', typeof b == 'number', typeof c == 'number' ){
                return bai1(x);
            } 
            alert('Try again')
        }
        //Test case bai2
        //console.log(bai2(3, 5, 7));
        //console.log(bai2(1, 2, 4));
        function bai3(str){
            let newstr = str.slice(0,9) + '...'
            document.write(newstr);
        }
        //Test case bai3
        //console.log(bai3("Travis Scott is the best rapper in the world"));
        function bai4(a){
            a=a.toLowerCase();
            var b = a.length;
            var c = a.slice(1,b);
            var d = a[0].toUpperCase() + c;
            document.write(d);
        }
        //Test case bai4
        //console.log(bai4("welcome to Astroworld"));
        function bai5(a){
        a.sort(function(a,b){return a-b});
        return a[0];
        }
        //Test case bai5
        //console.log(bai5([384,981,560,794]));
        function bai6(array){
        var ninenine = array.sort();
        document.write(ninenine)
        }
        //Test case bai6
        //console.log(bai6(["Jake","Amy","Charles","Terry","Rosa"]));
        var aboutMe = function(){
        var greetings = " Hello, my name is "+ this.lastName+' '+ this.firstName+". I am "+ this.age+" years old.";
        return document.write(greetings);
        }
        var parent = {
        firstName: "Anh",
        lastName: "Phan Ngọc",
        age: 48,
        say: function(){}
        }
        var student = {
        firstName: "Khoa",
        lastName: "Phan Anh",
        age: 15,
        say: function(){}
        }
        var teacher = {
        firstName: "Thương",
        lastName: "Phan Thị",
        age: 35,
        say: function(){}
        }
        //Test case bai7
        //console.log(parent.say=aboutMe; parent.say());
        //console.log(student.say=aboutMe; student.say());
        //console.log(teacher.say=aboutMe; teacher.say());