'use client';
import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);
  let accessToken = null; // in-memory only (session-safe)

  const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

  // ✅ Axios instance with interceptor
  const api = axios.create({
    baseURL: apiURL,
    withCredentials: true, // allow backend cookies
  });

  api.interceptors.request.use((config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (res) => res,
    async (error) => {
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const res = await axios.get(`${apiURL}/refresh`, {
            withCredentials: true,
          });

          if (res.data?.token) {
            accessToken = res.data.token; // store in-memory only
            setAuth(res.data.user);
            originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
            return api(originalRequest);
          }
        } catch (refreshErr) {
          console.error('Token refresh failed:', refreshErr);
          setAuth(null);
        }
      }
      return Promise.reject(error);
    }
  );

  // ✅ Restore session from cookie
  const fetchUser = useCallback(async () => {
    try {
      const res = await axios.get(`${apiURL}/refresh`, { withCredentials: true });
      if (res.data?.user && res.data?.token) {
        accessToken = res.data.token;
        setAuth(res.data.user);
      } else {
        setAuth(null);
      }
    } catch (err) {
      console.warn('Session restore failed:', err);
      setAuth(null);
    } finally {
      setLoading(false);
    }
  }, [apiURL]);

  useEffect(() => {
    fetchUser();
    // optional: auto-refresh every 14 minutes
    const interval = setInterval(fetchUser, 14 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchUser]);

  // ✅ Logout
  const logout = async () => {
    try {
      await axios.post(`${apiURL}/logout`, {}, { withCredentials: true });
    } catch (err) {
      console.error('Logout failed:', err);
    } finally {
      setAuth(null);
      accessToken = null;
    }
  };

  if (loading) return null;

  const value = { auth, api, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
