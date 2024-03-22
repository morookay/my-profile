const button = document.querySelector('#qr-code')

button.addEventListener('click', function() {
  var buttonId = this.getAttribute('id');
  document.getElementById('modal-container').removeAttribute('class');
  document.getElementById('modal-container').classList.add(buttonId);
  document.body.classList.add('modal-active');
});

 document.getElementById('modal-container').addEventListener('click', function() {
    this.classList.add('out');
    document.body.classList.remove('modal-active');
  });
