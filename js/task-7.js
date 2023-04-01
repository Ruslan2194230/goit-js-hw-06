const fontControl = document.getElementById('font-size-control')
const textSpan = document.getElementById('text')

// fontControl.oninput = () => {
// textSpan.style.fontSize = `${fontControl.value}px`
// }

// или

function changeFontSize(){
    textSpan.style.fontSize = `${fontControl.value}px`
}

fontControl.addEventListener('input',changeFontSize)