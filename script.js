document.querySelectorAll('.isi').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

function hideung() {
  document.body.classList.toggle('maghrib');
}