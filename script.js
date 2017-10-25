
//Functions
function toggleStyle(elements) {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var className = element.className;
    if (className === "style1"){
      element.className = "style2";
    } else {
      element.className = "style1";
    }
  }
}

function changeText(element, text) {
  element.innerHTML = text;
}

function toggleButtonText(button) {
  if (button.className === "style1")  {
    changeText(button, "style2");
    button.className = "style2";
  } else {
    changeText(button, "style1");
    button.className = "style1";
  }
}

  //Driver Code
var button = document.querySelector("button");
button.addEventListener("mouseout", function(){
  var paragraphs = document.querySelectorAll("p");
  toggleStyle(paragraphs);
  toggleButtonText(this)

})


// var images = document.querySelectorAll("img");
// for (var i = 0; i < images.length; i++) {
//   images[i].src = "https://klce.com/wp-content/uploads/2017/07/cats-animals-kittens-background-us.jpg"
// }

// var paragraphs = document.querySelectorAll("p");
// for (var i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].innerHTML = paragraphs[i].innerHTML.replace(/of/g, "thisusedtobeanof");
// }