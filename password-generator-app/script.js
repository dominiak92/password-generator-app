const length = document.querySelector('.panel__length-number')
const slider = document.querySelector('.panel__slider')
const howStrength = document.querySelector('.panel__howStrength')
const uppercase = document.querySelector('.uppercase')
const lowercase = document.querySelector('.lowercase')
const numbers = document.querySelector('.numbers')
const symbols = document.querySelector('.symbols')
const button = document.querySelector('button')
const copyBtn = document.querySelector('.screen__copy')
const output = document.querySelector('.screen__output')
const barOne = document.querySelector('.bar1')
const barTwo = document.querySelector('.bar2')
const barThree = document.querySelector('.bar3')
const barFour = document.querySelector('.bar4')
const symbolsStr = "!#$%&'()*+-<=?>@[]^_{}~"
const bars = [...document.querySelectorAll('.bars')]
const medium = [barOne, barTwo, barThree]
const weak = [barOne, barTwo]

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

function randomString() {
    const stringLength = slider.value;
    let randomString = "";
    for (let i = 0; i < stringLength; i++) {
    const consts = [randomNumber(), randomSymbol(), randomUpper(), randomLower()];
    
    !lowercase.checked ? consts.splice(3, 1) : null;
    !uppercase.checked ? consts.splice(2, 1) : null;
    !symbols.checked ? consts.splice(1, 1) : null;
    !numbers.checked ? consts.splice(0, 1) : null;
    !lowercase.checked && !uppercase.checked && !symbols.checked && !numbers.checked ? output.innerText = '' :
   
      randomString += consts[Math.floor(Math.random() * consts.length)];
    }
    output.innerText = randomString;
    let counter = 0;
    lowercase.checked ? counter++ : counter--;
    uppercase.checked ? counter++ : counter--;
    symbols.checked ? counter++ : counter--;
    numbers.checked ? counter++ : counter--;

    const border = '2px solid white'

    counter == 4 || stringLength < 14 ? howStrength.innerText = 'STRONG' : null
    counter == 2 || stringLength < 9 ? howStrength.innerText = 'MEDIUM' : null
    counter == 0 || stringLength < 5 ? howStrength.innerText = 'WEAK' : null
    counter == -2 || stringLength <= 3 ? howStrength.innerText = 'TOO WEAK!' : null
    stringLength < 6 ? howStrength.innerText = 'TOO WEAK!' : null
    stringLength > 14 ? howStrength.innerText = 'STRONG' : null
    bars.forEach(bar => randomString === '' ? (howStrength.innerText = '', bar.style.backgroundColor = "transparent", bar.style.border = border) : null )



    howStrength.innerText === 'TOO WEAK!' ? (barOne.style.backgroundColor = "#F64A4A", barOne.style.border = "none", barFour.style.backgroundColor = "transparent", barFour.style.border = border, barThree.style.backgroundColor = "transparent", barThree.style.border = border, barTwo.style.backgroundColor = "transparent", barTwo.style.border = border) : null;
    weak.forEach(bar => howStrength.innerText === 'WEAK' ? (bar.style.backgroundColor = "#FB7C58", bar.style.border = "none", barFour.style.backgroundColor = "transparent", barFour.style.border = border, barThree.style.backgroundColor = "transparent", barThree.style.border = border) : null)
    medium.forEach(bar => howStrength.innerText === 'MEDIUM' ? (bar.style.backgroundColor = "#F8CD65", bar.style.border = "none", barFour.style.backgroundColor = "transparent", barFour.style.border = border) : null)
    bars.forEach(bar => howStrength.innerText === 'STRONG' ? (bar.style.backgroundColor = "#A4FFAF", bar.style.border = "none") : null)
  
  }
    const copy = async () => {
      try {
        await navigator.clipboard.writeText(output.innerText);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }

  button.addEventListener('click', randomString)
  copyBtn.addEventListener('click', copy)
