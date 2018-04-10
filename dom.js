function appendData(){
var para = document.createElement("p");
var node = document.createTextNode("A Web page is a document. This documentcan be either displayed in the browser window or as the HTML source. But it is the same document in both cases.The Document Object Model (DOM) represents that samedocument so it can be manipulated.The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript");
para.appendChild(node);
document.body.appendChild(para).style.color = "red";
document.getElementById("first").style.color = "purple";
document.body.style.backgroundColor = "lightgrey";
}

