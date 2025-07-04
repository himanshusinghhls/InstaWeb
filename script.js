document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name) {
    alert("Name is required.");
    return;
  }

  if (!email) {
    alert("Email is required.");
    return;
  } else if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Form submitted successfully!");
  document.getElementById("contactForm").reset();
});
