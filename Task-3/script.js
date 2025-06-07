
function checkAnswer(option) {
  const result = document.getElementById("quiz-result");
  if (option === "b") {
    result.textContent = "Correct! 🎉";
  } else {
    result.textContent = "Oops! Try again.";
  }
}


async function getJoke() {
  const jokeBox = document.getElementById("joke");
  jokeBox.textContent = "Loading...";
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    });
    const data = await response.json();
    jokeBox.textContent = data.joke;
  } catch (error) {
    jokeBox.textContent = "Failed to fetch a joke.";
  }
}
