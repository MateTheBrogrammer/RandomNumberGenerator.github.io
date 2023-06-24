
document.getElementById("generateNumber").onclick = function() {
    var minNumber = parseInt(document.getElementById("minimumNumber").value);
    var maxNumber = parseInt(document.getElementById("maximumNumber").value);
    var generatedNumber = document.getElementById("generatedNumber");
    
    let value = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    generatedNumber.textContent = value;
}

// Stop showing footer text when keyboard is active in mobile

const textElement = document.getElementById('footerText');

function handleTextVisibility() {
  const isMobile = window.innerWidth <= 768; 
  const isKeyboardActive = window.innerHeight < window.outerHeight;

  if (isMobile && isKeyboardActive) {
    textElement.style.display = 'none';
  } else {
    textElement.style.display = 'block';
  }
}

window.addEventListener('resize', handleTextVisibility);
window.addEventListener('scroll', handleTextVisibility);
