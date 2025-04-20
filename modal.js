const openButtons = document.querySelectorAll('.open-modal');
const modal = document.getElementById('modal');
const closeBtn = modal.querySelector('.close-btn');
const overlay = modal.querySelector('.modal-overlay');

openButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('show');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

overlay.addEventListener('click', () => {
  modal.classList.remove('show');
});
