const form = document.getElementById("registrationForm");
const inputs = form.querySelectorAll("input, select");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@#$%^&+=]).{8,}$/;
const phoneRegex = /^[6-9]\d{9}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  inputs.forEach(input => {
    if (input.type !== "radio") {
      if (!validateField(input)) valid = false;
    }
  });

  const gender = form.querySelector('input[name="gender"]:checked');
  const genderError = document.getElementById("genderError");
  if (!gender) {
    genderError.textContent = "Please select gender";
    genderError.style.display = "block";
    valid = false;
  } else {
    genderError.style.display = "none";
  }

  if (valid) {
    alert("Registration Successful!");
    form.reset();
    document.getElementById("strengthMeter").value = 0;
    document.getElementById("strengthText").textContent = "";
  }
});

inputs.forEach(input => {
  input.addEventListener("blur", () => validateField(input));
});

function validateField(input) {
  const errorEl = document.getElementById(input.id + "Error");
  let isValid = true;

  if (input.type === "email" && !emailRegex.test(input.value)) {
    errorEl.textContent = "Invalid email format.";
    isValid = false;
  } else if (input.id === "password" && !passwordRegex.test(input.value)) {
    errorEl.textContent = "Password must include uppercase, lowercase, number, special char and 8+ chars.";
    isValid = false;
  } else if (input.id === "phone" && !phoneRegex.test(input.value)) {
    errorEl.textContent = "Enter a valid 10-digit Indian number.";
    isValid = false;
  } else if (input.type === "checkbox" && !input.checked) {
    errorEl.textContent = "You must accept the terms.";
    isValid = false;
  } else if (input.tagName === "SELECT" && input.value === "") {
    errorEl.textContent = "Please select a city.";
    isValid = false;
  } else if (!input.value.trim() && input.type !== "checkbox") {
    errorEl.textContent = "This field is required.";
    isValid = false;
  } else {
    errorEl.textContent = "";
  }

  errorEl.style.display = isValid ? "none" : "block";
  input.classList.toggle("error", !isValid);
  input.classList.toggle("success", isValid);

  return isValid;
}

// Show/Hide Password
document.getElementById("togglePassword").addEventListener("click", () => {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
});

// Password strength indicator
document.getElementById("password").addEventListener("input", (e) => {
  const val = e.target.value;
  const strengthMeter = document.getElementById("strengthMeter");
  const strengthText = document.getElementById("strengthText");

  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[a-z]/.test(val)) score++;
  if (/\d/.test(val)) score++;
  if (/[@#$%^&+=]/.test(val)) score++;

  strengthMeter.value = score;

  const levels = ["Weak", "Okay", "Good", "Strong", "Very Strong"];
  strengthText.textContent = levels[score - 1] || "";
});