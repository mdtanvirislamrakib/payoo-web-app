
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '../index.html'
});
