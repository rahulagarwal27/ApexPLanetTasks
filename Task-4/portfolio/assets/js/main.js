// Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleTheme");
  const dark = localStorage.getItem("theme") === "dark";

  if (dark) document.body.classList.add("dark");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });
});

// Contact form fake submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("responseMessage").style.display = "block";
      form.reset();
    });
  }
});
