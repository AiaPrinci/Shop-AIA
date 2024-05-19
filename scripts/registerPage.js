let p = document.getElementById('users-p');
let users = document.getElementById('users');
let x = document.getElementById('x');

const usersWindow = () => {
    p.addEventListener('click', () => {
        users.style.display = 'flex';
    });
    
    x.addEventListener('click', () => {
        users.style.display = 'none';
    });
}

usersWindow();