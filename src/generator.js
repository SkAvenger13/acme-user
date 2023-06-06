const {faker} = require('@faker-js/faker');

const userGenerator = () => {
    let users = new Array(50).fill('').map((element, index) => {
        let user = {
            userId: index,
            username: faker.internet.displayName(),
            email: faker.internet.email(),
            avatar: faker.internet.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.anytime()
        };
        return user;
    });
    return users;
};

module.exports = userGenerator;