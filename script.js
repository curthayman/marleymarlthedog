// --- Image Modal Logic ---
const imgModal = document.getElementById('imgModal');
const imgModalImg = document.getElementById('imgModalImg');
const imgModalCaption = document.getElementById('imgModalCaption');
const imgModalClose = document.getElementById('imgModalClose');

function openImgModal(src, caption) {
  imgModal.style.display = 'flex';
  imgModalImg.src = src;
  imgModalCaption.textContent = caption;
}

imgModalClose.onclick = function() {
  imgModal.style.display = 'none';
};

imgModal.onclick = function(e) {
  if (e.target === imgModal) {
    imgModal.style.display = 'none';
  }
};

// --- Loading Animation ---
window.addEventListener('load', function() {
  setTimeout(() => {
    document.getElementById('loadingOverlay').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('loadingOverlay').style.display = 'none';
    }, 700);
  }, 900); // Show loader for at least 0.9s
});

// --- Animated Paw Prints ---
function spawnPawPrint() {
  const pawTrail = document.getElementById('pawTrail');
  const paw = document.createElement('span');
  paw.className = 'paw-print';
  paw.textContent = '🐾';
  paw.style.left = Math.random() * 95 + 'vw';
  paw.style.top = '0px';
  pawTrail.appendChild(paw);
  setTimeout(() => paw.remove(), 4000);
}
for (let i = 0; i < 8; i++) {
  setTimeout(spawnPawPrint, i * 400);
}
setInterval(spawnPawPrint, 2500);

// --- Social Sharing ---
document.getElementById('copyLinkBtn').onclick = function() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const msg = document.getElementById('copyMsg');
    msg.style.display = 'inline';
    setTimeout(() => { msg.style.display = 'none'; }, 2000);
  });
};

// --- Guestbook (Formspree) ---
const guestbookForm = document.getElementById('guestbookForm');
if (guestbookForm) {
  guestbookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    fetch(guestbookForm.action, {
      method: 'POST',
      body: new FormData(guestbookForm),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        guestbookForm.style.display = 'none';
        document.getElementById('guestbookThanks').style.display = 'block';
      } else {
        alert('There was a problem submitting your message. Please try again!');
      }
    }).catch(() => {
      alert('There was a problem submitting your message. Please try again!');
    });
  });
}

// --- Seasonal Themes ---
function getSeason() {
  const now = new Date();
  const month = now.getMonth();

  // Valentine's: February
  if (month === 1) return 'valentine';
  // Spring: March, April, May
  if (month >= 2 && month <= 4) return 'spring';
  // Summer: June, July, August
  if (month >= 5 && month <= 7) return 'summer';
  // Autumn: September, October, November
  if (month >= 8 && month <= 10) return 'autumn';
  // Winter: December, January, February
  return 'winter';
}

function setSeasonalTheme() {
  const season = getSeason();
  const decor = document.getElementById('seasonalDecor');
  decor.innerHTML = '';
  let emoji, count, bg;

  switch (season) {
    case 'valentine':
      emoji = '❤️';
      count = 18;
      bg = 'linear-gradient(135deg, #ffb6c1 0%, #ff4e50 100%)';
      break;
    case 'spring':
      emoji = '🌸';
      count = 16;
      bg = 'linear-gradient(135deg, #b2f9d2 0%, #f9d423 100%)';
      break;
    case 'summer':
      emoji = '🌞';
      count = 10;
      bg = 'linear-gradient(135deg, #f9d423 0%, #ff4e50 100%)';
      break;
    case 'autumn':
      emoji = '🍂';
      count = 16;
      bg = 'linear-gradient(135deg, #ffb347 0%, #ffcc33 100%)';
      break;
    case 'winter':
    default:
      emoji = '❄️';
      count = 18;
      bg = 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)';
      break;
  }

  // Set background
  document.body.style.background = bg;

  // Add falling decorations
  for (let i = 0; i < count; i++) {
    const item = document.createElement('span');
    item.className = 'seasonal-item';
    item.textContent = emoji;
    item.style.left = Math.random() * 100 + 'vw';
    item.style.animationDelay = (Math.random() * 8) + 's';
    item.style.fontSize = (1.5 + Math.random() * 2.5) + 'em';
    decor.appendChild(item);
  }
}

setSeasonalTheme();

// --- Game Logic ---
document.getElementById('playGameBtn').onclick = function() {
  const gameArea = document.getElementById('gameArea');
  gameArea.innerHTML = '<p>Find the hidden bone! 🦴</p>';
  const bone = document.createElement('div');
  bone.textContent = '🦴';
  bone.style.position = 'absolute';
  bone.style.left = Math.random() * 80 + '%';
  bone.style.top = Math.random() * 80 + '%';
  bone.style.fontSize = '2em';
  bone.style.cursor = 'pointer';
  bone.onclick = function() {
    alert('You found the bone! Marley is happy!');
    gameArea.innerHTML = '';
  };
  gameArea.appendChild(bone);
};
// --- Marley's Mood Widget ---
const moods = [
  { emoji: "😴", text: "Sleepy – Time for a cozy nap!" },
  { emoji: "😃", text: "Happy – Tail wagging and ready for fun!" },
  { emoji: "🐾", text: "Adventurous – Let’s go outside and explore!" },
  { emoji: "🍗", text: "Hungry – Is it treat time yet?" },
  { emoji: "👀", text: "Curious – Watching the world from the window." },
  { emoji: "🥰", text: "Loving – Ready for cuddles and pets!" },
  { emoji: "🎾", text: "Playful – Who wants to play fetch?" }
];

// Pick a random mood each time the page loads
function setMarleyMood() {
  const mood = moods[Math.floor(Math.random() * moods.length)];
  const moodDiv = document.getElementById('marleyMood');
  if (moodDiv) {
    moodDiv.innerHTML = `<span class="mood-emoji">${mood.emoji}</span><span class="mood-text">${mood.text}</span>`;
  }
}
setMarleyMood();

