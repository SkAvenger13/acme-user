const render = require('./render');
const userGenerator = require('./generator');

let users = userGenerator();
if (!window.localStorage.getItem('users')) {
    window.localStorage.setItem('users', JSON.stringify(users));
}

const userList = document.querySelector('#user-list');

const renderer = () => {
    users = JSON.parse(window.localStorage.getItem('users'));
    render(userList, users, window.location.hash.slice(1));
}

// render(userList, users, window.location.hash.slice(1));

window.addEventListener('hashchange', renderer);

renderer();