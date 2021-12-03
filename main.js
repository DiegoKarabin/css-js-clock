;(() => {
  function setDate() {
    const now = new Date()

    function setHand(hand, date, rate) {
      const capitalizedHand = hand.charAt(0).toUpperCase() + hand.slice(1)
      const handValue = date[`get${capitalizedHand}`]()
      const degrees = (handValue / rate) * 360 + 90
      const handElement = document.querySelector(`.${hand}-hand`)

      handElement.style.transform = `rotate(${degrees}deg)`
    }

    setHand('seconds', now, 60)
    setHand('minutes', now, 60)
    setHand('hours', now, 12)
  }

  setDate()

  setInterval(setDate, 1000)
})()
