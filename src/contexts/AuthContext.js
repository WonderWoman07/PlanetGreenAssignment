import React, { createContext, useContext, useEffect, useState } from 'react';
import { pb, restoreAuth } from '../pocketbase';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth on app start
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        setIsLoading(true);
        const result = await restoreAuth();
        
        if (result.success) {
          setUser(result.user);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Helper function to save auth data to localStorage
  const saveAuthToStorage = (authData) => {
    if (authData && authData.token) {
      localStorage.setItem('authToken', authData.token);
      localStorage.setItem('user', JSON.stringify(authData.record));
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
      
      setUser(authData.record);
      setIsAuthenticated(true);
      
      // Manual backup save to localStorage
      saveAuthToStorage(authData);
      
      return { success: true, user: authData.record };
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, error: error.message };
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      // Create user
      const record = await pb.collection('users').create(userData);
      console.log("Recordddd : ", record)
      // Auto login after registration
      const authData = await pb.collection('users').authWithPassword(
        userData.email, 
        userData.password
      );
      
      setUser(authData.record);
      setIsAuthenticated(true);
      
      // Manual backup save to localStorage
      saveAuthToStorage(authData);
      
      return { success: true, user: authData.record };
    } catch (error) {
      console.error('Registration failed:', error);
      return { success: false, error: error.message };
    }
  };

  // Logout function
  const logout = () => {
    pb.authStore.clear();
    setUser(null);
    setIsAuthenticated(false);
    toast.success('Logged out !')
  };

  // Refresh auth function
  const refreshAuth = async () => {
    try {
      const result = await restoreAuth();
      if (result.success) {
        setUser(result.user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
      return result;
    } catch (error) {
      console.error('Auth refresh failed:', error);
      setUser(null);
      setIsAuthenticated(false);
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    refreshAuth
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 