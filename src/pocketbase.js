import PocketBase from 'pocketbase';

export const pb = new PocketBase('https://pb.devpgs.app');

// Auto-save auth state to localStorage
pb.authStore.onChange((auth) => {
  if (auth) {
    localStorage.setItem('authToken', auth.token);
    localStorage.setItem('user', JSON.stringify(auth.record));
  } else {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }
});

// Auth restoration function using authRefresh()
export const restoreAuth = async () => {
  try {
    const authToken = localStorage.getItem('authToken');
    const userData = localStorage.getItem('user');

    if (authToken && userData) {
      // Parse the JSON string to get the user object
      const parsedUserData = JSON.parse(userData);
      
      // First, restore the auth state to PocketBase
      pb.authStore.save(authToken, parsedUserData);

      // Then validate and refresh the token with the server
      const authData = await pb.collection('users').authRefresh();
      localStorage.setItem('authToken', authData.token);
      localStorage.setItem('user', JSON.stringify(authData.record));
      return {
        success: true,
        user: authData.record,
        token: authData.token
      };
    }

    return { success: false, message: 'No auth data found' };
  } catch (error) {
    console.error('Auth restoration failed:', error);

    // Clear invalid auth data
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    pb.authStore.clear();

    return {
      success: false,
      message: 'Auth restoration failed',
      error: error.message
    };
  }
};

// Initialize auth on app start
export const initializeAuth = async () => {
  return await restoreAuth();
}; 