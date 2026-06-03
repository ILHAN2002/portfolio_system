document.addEventListener('DOMContentLoaded', () => {

  fetch('sections/navbar.html')
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML('afterbegin', data);
    });

  fetch('sections/footer.html')
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML('beforeend', data);
    });

});
