// --- Falling Paw Prints ---
function spawnPawPrint() {
  const pawTrail = document.getElementById('pawTrail');
  if (!pawTrail) return;
  const paw = document.createElement('span');
  paw.className = 'paw-print';
  paw.textContent = '🐾';
  paw.style.left = Math.random() * 95 + 'vw';
  paw.style.top = '0px';
  paw.style.fontSize = (1.5 + Math.random() * 1.5) + 'em';
  paw.style.opacity = 0.7 + Math.random() * 0.3;
  pawTrail.appendChild(paw);
  setTimeout(() => paw.remove(), 4000);
}
setInterval(spawnPawPrint, 700);

// --- Seasonal Falling Emojis ---
function getSeasonalEmojis() {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();

  // Winter: Dec, Jan, Feb
  if (month === 11 || month === 0 || month === 1) {
    // Holiday: Dec 20 - Jan 2
    if ((month === 11 && day >= 20) || (month === 0 && day <= 2)) {
      return ['🎄', '❄️', '☃️', '🎅'];
    }
    return ['❄️', '☃️', '🌨️'];
  }
  // Spring: Mar, Apr, May
  if (month >= 2 && month <= 4) {
    return ['🌸', '🌷', '🐦', '☀️'];
  }
  // Summer: Jun, Jul, Aug
  if (month >= 5 && month <= 7) {
    return ['🌞', '🌻', '🍉', '🦋'];
  }
  // Fall: Sep, Oct, Nov
  if(month >= 8 && month <= 10) {
    // Halloween: Oct 25 - Nov 2
    if ((month === 9 && day >= 25) || (month === 10 && day <= 2)) {
      return ['🎃', '👻', '🍂', '🕸️'];
    }
    return ['🍁', '🍂', '🦃', '🌰'];
  }
  return ['🐾'];
}

function createSeasonalItem() {
  const decor = document.getElementById('seasonalDecor');
  if (!decor) return;
  const emojis = getSeasonalEmojis();
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  const item = document.createElement('span');
  item.className = 'seasonal-item';
  item.textContent = emoji;
  item.style.left = Math.random() * 98 + 'vw';
  item.style.fontSize = (1.5 + Math.random() * 2) + 'em';
  item.style.top = '-40px';
  decor.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 8000);
}
setInterval(createSeasonalItem, 1200);

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

function setMarleyMood() {
  const mood = moods[Math.floor(Math.random() * moods.length)];
  const moodDiv = document.getElementById('marleyMood');
  if (moodDiv) {
    moodDiv.innerHTML = `<span class="mood-emoji">${mood.emoji}</span><span class="mood-text">${mood.text}</span>`;
  }
}
setMarleyMood();

// --- Loading Animation ---
window.addEventListener('load', function() {
  setTimeout(() => {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
      overlay.style.opacity = 0;
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 700);
    }
  }, 900);
});

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

if (imgModalClose) {
  imgModalClose.onclick = function() {
    imgModal.style.display = 'none';
  };
}

if (imgModal) {
  imgModal.onclick = function(e) {
    if (e.target === imgModal) {
      imgModal.style.display = 'none';
    }
  };
}

// --- Social Sharing ---
const copyLinkBtn = document.getElementById('copyLinkBtn');
if (copyLinkBtn) {
  copyLinkBtn.onclick = function() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const msg = document.getElementById('copyMsg');
      if (msg) {
        msg.style.display = 'inline';
        setTimeout(() => { msg.style.display = 'none'; }, 2000);
      }
    });
  };
}

// --- Game Logic ---
const playGameBtn = document.getElementById('playGameBtn');
if (playGameBtn) {
  playGameBtn.onclick = function() {
    const gameArea = document.getElementById('gameArea');
    if (!gameArea) return;
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
}
