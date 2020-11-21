// Practice
// js cookies
// November 18, 2020



function MyFunction(btncolor){
    Cookies.set("selection", btncolor);
    location.href="selection.html";
    console.log(btncolor);
}

function FunctionCookie() {
    console.log("COOKIE FUNCTION")
        Cookies.remove("selection");
        location.href="selection.html";
       
    //     var target = document.querySelector(".body>div");
    //     Cookies.remove("Selection");
    //     location.href="selection.html";
        
    }

