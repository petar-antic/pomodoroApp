const playBtn = document.querySelector('.playBtn');
const rightBtn = document.querySelector('.rightBtn');

function toggleBtn() {
  playBtn.classList.toggle('pause');
}

playBtn.addEventListener('click', toggleBtn);
