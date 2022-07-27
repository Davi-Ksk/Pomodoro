import Timer from "./timer.js "
import Sound from "./sounds.js"

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const buttonSoundForest = document.querySelector('#sound-forest')
const buttonSoundRain = document.querySelector('#sound-rain')
const buttonSoundCoffee = document.querySelector('#sound-coffee')
const buttonSoundFireside = document.querySelector('#sound-fireside')
let volumeSoundForest = document.querySelector('#sound-forest-volume')
let volumeSoundRain = document.querySelector('#sound-rain-volume')
let volumeSoundCoffee = document.querySelector('#sound-coffee-volume')
let volumeSoundFireside = document.querySelector('#sound-fireside-volume')
const cardForest = document.querySelector('#card-forest')
const cardRain = document.querySelector('#card-rain')
const cardCoffee = document.querySelector('#card-coffee')
const cardFireside = document.querySelector('#card-fireside')
const buttonLightsOff = document.querySelector('.button-lights-off')
const buttonLightsOn = document.querySelector('.button-lights-on')
const body = document.querySelector('body')

const sound = Sound()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
})

function resetControls() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

buttonLightsOff.addEventListener('click', function () {
  body.classList.add('dark')
  buttonLightsOff.classList.add('hide')
  buttonLightsOn.classList.remove('hide')
})

buttonLightsOn.addEventListener('click', function () {
  body.classList.remove('dark')
  buttonLightsOff.classList.remove('hide')
  buttonLightsOn.classList.add('hide')
})

let forestSoundState = false
let rainSoundState = false
let coffeeSoundState = false
let firesideSoundState = false

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  timer.countDown()
})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  timer.hold()
})

buttonStop.addEventListener('click', function () {
  resetControls()
  timer.reset()
})

buttonPlus.addEventListener('click', function () {
  timer.plusMinutes()
})

buttonMinus.addEventListener('click', function () {
  timer.minusMinutes()
})


buttonSoundForest.addEventListener('click',function () {
  if (!forestSoundState) {
    cardForest.classList.add('sound-active')
    forestSoundState = true
    sound.forestAudio.play()
  }
  else {
    cardForest.classList.remove('sound-active')
    forestSoundState = false
    sound.forestAudio.pause()
  }
})

buttonSoundRain.addEventListener('click',function () {
  if (!rainSoundState) {
    cardRain.classList.add('sound-active')
    sound.rainAudio.play()
    rainSoundState = true
  }
  else {
    cardRain.classList.remove('sound-active')
    sound.rainAudio.pause()
    rainSoundState = false
  }
})

buttonSoundCoffee.addEventListener('click',function () {
  if (!coffeeSoundState) {
    cardCoffee.classList.add('sound-active')
    sound.coffeeAudio.play()
    coffeeSoundState = true
  }
  else {
    cardCoffee.classList.remove('sound-active')
    sound.coffeeAudio.pause()
    coffeeSoundState = false
  }
})

buttonSoundFireside.addEventListener('click',function () {
  if (!firesideSoundState) {
    cardFireside.classList.add('sound-active')
    sound.firesideAudio.play()
    firesideSoundState = true
  }
  else {
    cardFireside.classList.remove('sound-active')
    sound.firesideAudio.pause()
    firesideSoundState = false
  }
})

volumeSoundForest.addEventListener('input',function () {
  sound.setVolume(sound.forestAudio, volumeSoundForest)
})

volumeSoundRain.addEventListener('input',function () {
  sound.setVolume(sound.rainAudio, volumeSoundRain)
})

volumeSoundCoffee.addEventListener('input',function () {
  sound.setVolume(sound.coffeeAudio, volumeSoundCoffee)
})

volumeSoundFireside.addEventListener('input',function () {
  sound.setVolume(sound.firesideAudio, volumeSoundFireside)
})




