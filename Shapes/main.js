//Triangle
function printTrigangle(n) {
    for (var i = 1; i <= n; i++) {
        for (var m = 0; m < i; m++) {
            document.write(" * ");
        }
        document.write("</br>");
    }
}
//Empty Rectangle
function printEmptyRectangle(a,b) {
    if (a>=3 && b>=3) {
        border(a);
        for (var i = 0; i < (b-2); i++) {
            mid(a);
        }
        border(a);
    }
}
function border(a) {
    for (var m = 0; m < a; m++) {
            document.write(" * ");
    }
    document.write("</br>");
}
function mid(a) {
    document.write(" *");
    var c = a-2;
    for (var n = 0; n < c; n++){
        document.write("&nbsp;&nbsp;&nbsp;");
    }
    document.write(" * </br>");
}
//Special Triangle
function printSpecialTrigangle(n) {
    if (n>1) {
        document.write("<pre>");
        bottomedge(n);
        for (var i = 1; i<n; i++) {
            for (var y = 0; y < 2*i; y++){
                document.write(" ")
            }
            z = 1 + 2*(n - 1 - i);
            edge(z);
            document.write("</br>");
        }
        document.write("</pre");
    }
}
function bottomedge(n) { 
    var x = 1 + 2*(n-1);
    for (var y = 0; y < x; y++) {
        document.write("* ");
    }
    document.write("</br>")
}
function edge(n) {
    for (var i = 0; i<n; i++) {
        document.write("*");
        document.write(" ");
    }
}
//X
function printX(n) {
    document.write("<pre>");
    upperhalfX(n);
    middleX(n);
    lowerhalfX(n);
    document.write("</pre>");
}
function upperhalfX(n) {
    for (var i = 0; i < (n/2-1);  i++) {
        for (var x = 0; x<i; x++) {
            document.write(" ")
        }
        document.write("*");
        var space = (n - 2 - 2*i);
        for (var y = 0; y<space; y++) {
            document.write(" ")
        }
        document.write("*</br>");
    }
}
function lowerhalfX(n) {
    for (var i = 0; i < (n/2-1);  i++) {
        for (var x = n/2 - 2 - i; x > 0; x--) {	
            document.write(" ")
        }
        document.write("*");
        var space = (1 + 2*i);
        for (var y = 0; y<space; y++) {
            document.write(" ")
        }
        document.write("*</br>");
    }
}
function middleX(n) {
    var space2 = (n-1)/2
    for (var i = 0; i<space2 ; i++) {
        document.write(" ");
    }
    document.write("*</br>");
}
//Butterfly
function printButterfly(n) {
    document.write("<pre>");
    upperhalfButterfly(n);
    middleButterfly(n);
    lowerhalfButterfly(n);
    document.write("</pre>");
}
function upperhalfButterfly(n) {
    for (var i = 0; i < (n/2-1);  i++) {
        for (var x = 0; x<i; x++) {		
            document.write("* ")
        }
        document.write("*");
        var space = (n - 2 - 2*i);
        for (var y = 0; y<space; y++) {
            document.write("  ")
        }
        document.write(" ");
        for (var x = 0; x<i+1; x++) {		
            document.write("* ")
        }
        document.write("</br>")
    }
}
function lowerhalfButterfly(n) {
    for (var i = 0; i < (n/2-1);  i++) {
        for (var x = n/2 - 2 - i; x > 0; x--) {		
            document.write("* ")
        }
        document.write("*");
        var space = (1 + 2*i);
        for (var y = 0; y<space; y++) {
            document.write("  ")
        }
        document.write(" ");
        for (var x = n/2 - 1 - i; x >= 0; x--) {		
            document.write("* ")
        }
        document.write("</br>");
    }
}
function middleButterfly(n) {
    var space2 = (n-1)/2
    for (var i = 0; i<space2 ; i++) {
        document.write("* ");
    }
    document.write("* ");
    for (var i = 0; i<space2 ; i++) {
        document.write("* ");
    }
    document.write("</br>")
}