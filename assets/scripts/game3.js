const cards = ['diamond', 'spade', 'heart', 'club']
const playerCards = document.querySelector('.userCard')
const computerCards = document.querySelector('.compCard')

function play () {
  let dealtCards = []
  let currentCard

  CU
}

function endGame() {
  dealButton.disabled = true
  const container = document.getElementById("resetButtonContainer2")
  resetButton = document.createElement("button")
  resetButton.textContent = "Reset Game"

  container.appendChild(resetButton)
  resetButton.addEventListener("click", restartGame)
}

function restartGame() {
  playerCards.textContent = ''
  computerCards.textContent = ''

  resetButton.parentNode.removeChild(resetButton)
  dealButton.disabled = false
}

document.getElementById("dealButton").addEventListener('click', play)
