document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const branch = document.getElementById('branch').value.trim();
  const year = document.getElementById('year').value.trim();
  const password = document.getElementById('password').value;

  const message = document.getElementById('message');

  // Validation
  if (!name || !email || !branch || !year || !password) {
    message.textContent = 'Fill all fields!';
    message.style.color = 'red';
    return;
  }

  if (!email.includes('@')) {
    message.textContent = 'Invalid email filled!';
    message.style.color = 'red';
    return;
  }

  if (password.length < 6) {
    message.textContent = 'Password must be at least 6 characters!';
    message.style.color = 'red';
    return;
  }

  message.textContent = 'Registration successful!';
  message.style.color = 'green';
});

// Password strength checker
document.getElementById('password').addEventListener('input', function () {
  const strengthDiv = document.getElementById('strength');
  const val = this.value;

  if (val.length === 0) {
    strengthDiv.textContent = '';
  } else if (val.length < 6) {
    strengthDiv.textContent = 'Weak password';
    strengthDiv.style.color = 'red';
  } else if (/[A-Z]/.test(val) && /\d/.test(val)) {
    strengthDiv.textContent = 'Strong password';
    strengthDiv.style.color = 'green';
  } else {
    strengthDiv.textContent = 'Moderate password';
    strengthDiv.style.color = 'orange';
  }
});