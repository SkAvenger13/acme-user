const render = (userList, users, hash) => {
    const html = users.map((user) => {
        return `
            <li>
                <a href='#${user.userId}'>${user.username}</a>
                <ul>
                    ${Object.values(user.userId === hash*1 ? user : {}).map((element) => {
                        return `
                            <li>
                                ${element}
                            </li>
                        `
                    }).join('')}
                </ul>
            </li>
        `
    }).join('');
    userList.innerHTML = html;
};

module.exports = render;