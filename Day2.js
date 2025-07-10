// Access DOM elements
const inputField = document.getElementById('userInput');
const submitButton = document.getElementById('sbmtBtn');
const displayArea = document.getElementById('displayArea');

// Add click event listener
submitButton.addEventListener('click', () => {
  const userText = inputField.value;
  displayArea.textContent = `Your typed text: ${userText}`;
});