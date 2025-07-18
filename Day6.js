const quotes = [
  // random motivational quote
  "Don't watch the clock; do what it does. Keep going.",
  "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Your future is created by what you do today, not tomorrow.",
  "Doubt kills more dreams than failure ever will.",
  "Small steps every day lead to big results.",
  "Discipline is the bridge between goals and accomplishment.",
  "If it doesn’t challenge you, it won’t change you.",
  "Wake up with determination. Go to bed with satisfaction.",
  "The only way to do great work is to love what you do."
];

const colors = [
  // predefined color array
  "#ffe0b2", "#b2dfdb", "#d1c4e9", "#f8bbd0", "#c8e6c9", "#ffccbc"
];

function showQuote() {
  // Pick a random quote
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];

  // Pick a random background color
  let colorIndex = Math.floor(Math.random() * colors.length);
  let randomColor = colors[colorIndex];

  // Show the quote
  document.getElementById("quoteText").innerText = randomQuote;

  // Change background color
  document.getElementById("profileCard").style.backgroundColor = randomColor;
}
