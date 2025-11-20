const clickBtn = document.querySelector('.clickBtn');
const modalContainer = document.querySelector('.modalContainer');
const modalContent = document.querySelector('.modalContent');
const closeBtn = document.querySelector('.closeBtn');
const body = document.body;
console.log(modalContent);

// open modal
clickBtn.addEventListener('click', () => {
  modalContainer.style.display = 'block'
  clickBtn.style.display = 'none'
})

// close modal using closeBtn
closeBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none'
  clickBtn.style.display = 'block'
})

// close modal via outside click
modalContainer.addEventListener('click', (e) => {
  if (!modalContent.contains(e.target)) {
  modalContainer.style.display = 'none'
  clickBtn.style.display = 'block'
  }
});

