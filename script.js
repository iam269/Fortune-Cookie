let fortunes = [
  "You will have a great day today! 🌟",
  "Something unexpected will make you smile. 😊",
  "Success is coming your way! 🚀",
  "A pleasant surprise is waiting for you. 🎁",
  "You will make a new friend soon. 🤝",
  "An exciting opportunity will present itself. 🎉",
  "Happiness is closer than you think! ❤️",
  "Be patient. Good things take time. ⏳",
  "A big change is coming in your life. Embrace it! 🔄",
  "Your kindness will return to you in unexpected ways. 💖",
  "You will soon cross paths with someone important. 🌍",
  "Good fortune will follow you wherever you go. 🍀",
  "A dream you have will soon come true. 🌙",
  "Trust your instincts; they will guide you well. 🧭",
  "Adventure is out there—be ready! 🏔️",
  "You will soon receive great news. 📩",
];

document.getElementById("openCookie").addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  document.getElementById("fortuneMessage").innerText = fortunes[randomIndex];
});