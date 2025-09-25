import users from "./data.js";

const index = () => {
  return users; 
};

const store = (user) => {
  users.push(user); 
  console.log("User ditambahkan:", user);
};

const destroy = (indexUser) => {
  console.log("User dihapus:", users[indexUser]);
  users.splice(indexUser, 1); 
};

export { index, store, destroy };
