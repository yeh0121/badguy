function showPopup() {
    alert("優惠活動將於今年7月開放，敬請期待！")
  }
function decrease(index){
    const quantityDisplay = document.getElementsByClassName('quantity-display')[index];
    let quantity = parseInt(quantityDisplay.textContent);
    if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
      }
    };

function increase(index){
    const quantityDisplay = document.getElementsByClassName('quantity-display')[index];
    let quantity = parseInt(quantityDisplay.textContent);
    if (quantity <30) {
      quantity++;
      quantityDisplay.textContent = quantity;
    }
}
function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
  } else {
      dropdownContent.style.display = "none";
  }
}
function elevenDropdown() {
  var dropdownContent = document.getElementById("elevenDropdown");
  if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
  } else {
      dropdownContent.style.display = "none";
  }
}
function familyDropdown() {
  var dropdownContent = document.getElementById("familyDropdown");
  if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
  } else {
      dropdownContent.style.display = "none";
  }
}
function diliverDropdown() {
  var dropdownContent = document.getElementById("diliverDropdown");
  if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
  } else {
      dropdownContent.style.display = "none";
  }
}
function payDropdown() {
  var dropdownContent = document.getElementById("payDropdown");
  if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
  } else {
      dropdownContent.style.display = "none";
  }
}
var button = document.getElementById("PAYmethod");
button.addEventListener("click", function() {
      button.style.backgroundColor = "#00ff00"; 
      button.style.color = "#000000"; 
    });
    function showcredit() {
      var textBox = document.getElementById("text-box");
      textBox.style.display = "block"; 
    }

      
  

