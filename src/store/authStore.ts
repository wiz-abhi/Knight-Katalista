import { create } from 'zustand';
import { User } from '../models/User';
import jwt from 'jsonwebtoken';

interface AuthUser {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      const user = {
        id: data.user._id,
        email: data.user.email,
        name: data.user.name,
      };

      localStorage.setItem('token', data.token);
      set({ user, isAuthenticated: true });
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  },
  signup: async (name: string, email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      const user = {
        id: data.user._id,
        email: data.user.email,
        name: data.user.name,
      };

      localStorage.setItem('token', data.token);
      set({ user, isAuthenticated: true });
    } catch (error) {
      throw new Error('Registration failed');
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, isAuthenticated: false });
  },
}));