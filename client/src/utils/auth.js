// utils/auth.js

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token !== null && token !== undefined;
};

export const isAdmin = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return false; // No token, so definitely not an admin
  }
  try {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    return decodedToken && decodedToken.role === 'admin';
  } catch (error) {
    console.error('Error decoding token:', error);
    return false; // Error decoding token, so not an admin
  }
};


export const currentAdmin = (token) => {
  try {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    console.log("decodedToken && decodedToken.role === 'admin'", decodedToken && decodedToken.role === 'admin')

    return decodedToken && decodedToken.role === 'admin';
  } catch (error) {
    console.error('Error decoding token:', error);
    return false;
  }
}

// Function to decode JWT token
export const parseJwt = (token) => {
  try {
      return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
      return null;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};
