const container = document.getElementById('container');
const register_button = document.getElementById('register');
const login_button = document.getElementById('login');

register_button.addEventListener('click', () => {
    container.classList.add("active");
});

login_button.addEventListener('click', () => {
    container.classList.remove("active");
});
