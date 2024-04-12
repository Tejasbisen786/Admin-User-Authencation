// utils/auth.js

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token !== null && token !== undefined;
};

export const isAdmin = () => {
  const token = localStorage.getItem('token');
  const decodedToken = token ? JSON.parse(atob(token.split('.')[1])) : null;
  return decodedToken && decodedToken.role === 'admin';
};

// Function to decode JWT token
export const parseJwt = (token) => {
  try {
      return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
      return null;
  }
};
