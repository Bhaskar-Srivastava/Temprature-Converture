let celciusInput = document.querySelector('#Celcius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#Kelvin > input')

let btn = document.querySelector('.button button')


function RoundNumber(number){
    return Math.round(number*100)/100
}


/* Celcius to Fahrenheit and Kelvin*/
celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    fahrenheitInput.value = RoundNumber(fTemp)
    kelvinInput.value = RoundNumber(kTemp)
})

/* Fahrenheit to Celcius and kelvin*/
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15

    celciusInput.value = RoundNumber(cTemp)
    kelvinInput.value = RoundNumber(kTemp)
})

/* kelvin to Celcius and Fahrenheit*/
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp-273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    fahrenheitInput.value = RoundNumber(fTemp)
    kelvinInput.value = RoundNumber(kTemp)
})

btn.addEventListener('click', ()=>{
    celciusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})