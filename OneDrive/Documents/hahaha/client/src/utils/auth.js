// Simple authentication using localStorage to simulate file storage
const AUTH_KEY = 'celestial_users';

// Initialize with default demo account
if (!localStorage.getItem(AUTH_KEY)) {
  localStorage.setItem(AUTH_KEY, JSON.stringify([
    { username: 'Demo', password: 'Demo123' }
  ]));
}

export const getUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY) || '[]');
  } catch {
    return [];
  }
};

export const addUser = (username, password, email) => {
  const users = getUsers();
  if (users.find(u => u.username.toLowerCase() === username.toLowerCase())) {
    throw new Error('Username already exists');
  }
  users.push({ username, password, email });
  localStorage.setItem(AUTH_KEY, JSON.stringify(users));
};

export const verifyCredentials = (username, password) => {
  const users = getUsers();
  return users.find(
    u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
  );
};
