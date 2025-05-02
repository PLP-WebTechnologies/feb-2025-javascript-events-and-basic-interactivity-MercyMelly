//  Typing Effect
const text = "🌌 Welcome to the Magic Portal 🌌";
let index = 0;
function typeEffect() {
  const typingText = document.getElementById('typingText');
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

//  Toggle..theme
const body = document.body;
const toggleBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') body.classList.add('light');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
});

//  Gallery
document.querySelectorAll('.thumbnails img').forEach(img => {
  img.addEventListener('click', () => {
    const main = document.getElementById('mainImage');
    main.style.opacity = 0;
    setTimeout(() => {
      main.src = img.src;
      main.style.opacity = 1;
    }, 300);
  });
});

//  Tabs
const tabContent = {
  1: 'This portal connects you to magical realms.',
  2: 'Only true seekers know what lies beyond the veil. ',
  3: 'The portal has existed since ancient code was written.'
};

document.querySelectorAll('.tab-buttons button').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    const tabDiv = document.getElementById('tabContent');
    tabDiv.style.opacity = 0;
    setTimeout(() => {
      tabDiv.innerHTML = tabContent[tab];
      tabDiv.style.opacity = 1;
    }, 300);
  });
});

// Forms
document.getElementById('portalForm').addEventListener('submit', function (e) {
  e.preventDefault();
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const feedback = document.getElementById('formFeedback');

if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    feedback.innerText = 'Invalid email format.';
    feedback.style.color = 'red';
  } else if (password.length < 8) {
    feedback.innerText = 'Password must be at least 8 characters.';
    feedback.style.color = 'red';
  } else {
    feedback.innerText = 'Welcome, portal traveler!';
    feedback.style.color = 'green';
  }
});

// Easter Egg..secretsss
document.body.addEventListener('dblclick', () => {
  document.getElementById('easterEgg').classList.add('show');
  setTimeout(() => {
    document.getElementById('easterEgg').classList.remove('show');
  }, 3000);
});
