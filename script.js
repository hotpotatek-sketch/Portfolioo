function startClock() {
  const clock = document.getElementById('clock');
  if (!clock) return;
  const manilaTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Manila',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(new Date());
  clock.textContent = manilaTime;
}

function validateLoginForm(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const message = document.getElementById('loginMessage');
  if (!emailInput || !passwordInput || !message) return;

  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const emailPattern = /^\S+@\S+\.\S+$/;
  const passwordPattern = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

  if (!emailPattern.test(email)) {
    message.textContent = 'Please enter a valid email address.';
    return;
  }
  if (!passwordPattern.test(password)) {
    message.textContent = 'Password must be 8+ chars with upper, lower, and a number.';
    return;
  }

  message.textContent = '';
  window.location.href = 'index.html';
}

function initLogin() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', validateLoginForm);
  }
}

function init() {
  startClock();
  setInterval(startClock, 1000);
  initLogin();
}

document.addEventListener('DOMContentLoaded', init);
