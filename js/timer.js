import Sound from "./sounds.js"

const sound = Sound()

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {

  let minutes = minutesDisplay.textContent
  let seconds = secondsDisplay.textContent
  let timerTimeOut

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  
  function plusMinutes() {
    updateDisplay((Number(minutesDisplay.textContent) + 5), seconds)
    if (minutesDisplay.textContent >= 90) {
      updateDisplay(90, 0)
    }
  }

  function minusMinutes() {
    updateDisplay((Number(minutesDisplay.textContent) - 5), seconds)    
    if (minutesDisplay.textContent <= 0) {
      updateDisplay(0, 0)
    }
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {  
      let minutes = minutesDisplay.textContent
      let seconds = secondsDisplay.textContent
      let isFinished = (minutes == 0 && seconds == 0)      
      
      if (isFinished) {
        sound.timeEnd()
        resetControls()
        reset()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
    
      updateDisplay(minutes, String(seconds - 1))
    countDown()
  
    },1000)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countDown,
    updateDisplay,
    plusMinutes,
    minusMinutes,
    reset,
    hold
  }

}