document.getElementById("header").innerHTML = `
<nav class="navbar">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="projects.html">Projects</a>
  <a href="contact.html">Contact</a>
  <button id="toggleTheme">🌙</button>
</nav>`;

document.getElementById("footer").innerHTML = `
<footer>
  <p>© ${new Date().getFullYear()} Rahul Agarwal</p>
</footer>`;
