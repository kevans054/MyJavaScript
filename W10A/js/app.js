// Assignment W10A
//  Karen Evans
// 11- 18, 2020

//  Question #1. 
var firstPtag = document.querySelector('p');
firstPtag.innerHTML = 'This is the first line of the first topic in the first <p> tag.';

//  Question #2.
var AllH1 = document.querySelectorAll('h1');
AllH1[2].innerHTML = 'Read, read, read!!!';

// Question #3.
var GetElement = document.getElementById('ArticleTwo').style.color = 'orange';

//  Question #4.
var ByClassName = document.getElementsByClassName("ArticleThree");
for (var i = 0; i < ByClassName.length; i++) {
  ByClassName[i].style.backgroundColor = "red";
};

//  Question #5.
var ByTagName = document.getElementsByTagName('div');
for (var i = 0; i < ByTagName.length; i++) {
    ByTagName[i].style.color = 'blue';
}

//  Question #6.
var Mybtn = document.createElement("BUTTON");  
Mybtn.innerHTML = "CLICK ME";                   
document.body.appendChild(Mybtn);               

//  Question #7.
var MyTextNode = document.createTextNode("Hello World");
document.body.appendChild(MyTextNode);  

//  Question #8
var Myparent = document.getElementById("ArticleOne");
var Mychild = document.getElementById("P2");
Myparent.removeChild(Mychild);

// Question #9
var Style = document.getElementById("myDIV").classList.add("mystyle");
console.log('Style');