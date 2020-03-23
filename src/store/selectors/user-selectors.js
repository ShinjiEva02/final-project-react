export const filterUsers = (users, searchValue) =>
    searchValue === ""
        ? users
        : users.filter(user => user.name.toLowerCase().includes(searchValue));

export const findById = (users, id) => users.find(item => item.id === id) || {};
