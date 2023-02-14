function generateLetter() {
	var name = prompt("Enter your name:");
	var partner = prompt("Enter your partner's name:");
	var color = prompt("Choose a color (red, pink, purple, blue, or green):");
	var letter = document.getElementById("letter");
	letter.innerHTML = "My dearest " + partner + ",<br><br>" +
		"I just wanted to take a moment to express my deepest feelings of love for you. Every time I see you, my heart skips a beat and my world is filled with joy and happiness. I am so grateful to have you in my life.<br><br>" +
		"I love the way your " + color + " eyes sparkle in the sunlight and the way your smile lights up the room. You are the most beautiful person I have ever met, both inside and out.<br><br>" +
		"I promise to love, honor, and cherish you for all the days of my life. You are my soulmate, my partner, and my best friend. I can't wait to spend the rest of my life with you.<br><br>" +
		"With all my love,<br>" + name;
}