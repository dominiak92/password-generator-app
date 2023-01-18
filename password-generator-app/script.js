const length = document.querySelector('.panel__length-number')
const slider = document.querySelector('.panel__slider')
const uppercase = document.querySelector('.uppercase')
const lowercase = document.querySelector('.lowercase')
const numbers = document.querySelector('.numbers')
const symbols = document.querySelector('.symbols')
const button = document.querySelector('button')
const symbolsStr = "!#$%&'()*+-/<=>?@[]^_{|}~"
console.log(uppercase.checked)

sliderValue = () => {
length.innerText = slider.value
}

slider.oninput = sliderValue
randomLower = () => {
return String.fromCharCode(Math.floor(Math.random()*26) + 97)
}
randomUpper = () => {
return String.fromCharCode(Math.floor(Math.random()*26) + 65)
}
randomNumber = () => {
return String.fromCharCode(Math.floor(Math.random()*9) + 48)
}
randomSymbol = () => {
 return symbolsStr[Math.floor(Math.random() * symbolsStr.length)]
}

randomFunc = () => {
lower: randomLower()
}