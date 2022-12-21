const colorInput = document.getElementById('inputColor')
const colorDiv = document.getElementById('colorDiv')
const colorCode = document.getElementById('colorCode')
const clickToCpyText = document.getElementById('clickToCpyText')
let colorCodeValue = "#9c79fd"

colorDiv.onclick = () => copy(colorCodeValue)


colorInput.onchange = (e) => {
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
    inp.remove();
    clickToCpyText.textContent = 'Copied'
}