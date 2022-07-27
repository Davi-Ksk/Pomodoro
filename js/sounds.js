export default function Sound() {
  
  const forestAudio = new Audio("./sounds/Forest.wav")
  const rainAudio = new Audio("./sounds/Rain.wav")
  const coffeeAudio = new Audio("./sounds/CoffeeShop.wav")
  const firesideAudio = new Audio("./sounds/Fireside.wav")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  forestAudio.loop = true
  rainAudio.loop = true
  coffeeAudio.loop = true
  firesideAudio.loop = true
  kitchenTimer.volume = 0.05

  function setVolume(sound,soundInput) {
    sound.volume = soundInput.value / 100
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    timeEnd,
    setVolume,
    forestAudio,
    rainAudio,
    coffeeAudio,
    firesideAudio
  }


}