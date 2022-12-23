const colorInput = document.getElementById('inputColor')
const colorDiv = document.getElementById('colorDiv')
const colorCode = document.getElementById('colorCode')
const clickToCpyText = document.getElementById('clickToCpyText')

// Get color value from localStorage
let colorCodeValue = getLastColor()
// Set the color
colorDiv.style.backgroundColor = colorInput.value = colorCode.textContent = colorCodeValue



// Set Event Listeners
colorDiv.onclick = () => copy(colorCodeValue)

colorInput.oninput = (e) => {
    colorDiv.style.backgroundColor =
        colorCode.textContent =
        colorCodeValue = e.target.value

    clickToCpyText.textContent = 'Click to Copy'
}


function copy(that) {
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = that
    inp.select();
    document.execCommand('copy', false);
    inp.remove()
    clickToCpyText.textContent = 'Copied'

    // Change the text to 'Click to copy' again after 4 sec

    setTimeout(() => {
        clickToCpyText.textContent = 'Click to Copy'
    }, 4000);
    setLastColor(colorCodeValue)
}


function getLastColor() {
    return localStorage.lastColorValue || "#9c79fd"
}
function setLastColor(colorCode) {
    localStorage.lastColorValue = colorCode || '#9c79fd'
}