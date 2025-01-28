import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_BASE_URL || process.env.VITE_BASE_URL;

export const useUserStore = create((set, get) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isCheckingUser: true,

    // register user to the database
    register: async (input) => {
        try {
            set({ error: null });
            const response = await axios.post(`${API_URL}/user/register`, input);

            if (response.data.success) {
                set({ user: response.data.user, isAuthenticated: true });
                localStorage.setItem('Ubertoken', response.data.token);
                return response.data;
            }
            else {
                set({ error: response.data.message });
                toast.error(response.data.message);
            }
        } catch (error) {
            set({ error: error.response.data.message });
            toast.error(error.response.data.message);
        }
    },

    // login user to the application
    login: async (input) => {
        try {
            set({ error: null });
            const response = await axios.post(`${API_URL}/user/login`, input);

            if (response.data.success) {
                set({ user: response.data.user, isAuthenticated: true });
                localStorage.setItem('Ubertoken', response.data.token);
                return response.data;
            }
            else {
                set({ error: response.data.message });
                toast.error(response.data.message);
            }
        } catch (error) {
            set({ error: error.message });
            toast.error(error.response.data.message);
        }
    },

    // logout user from the application
    logout: async () => {
        try {
            const token = localStorage.getItem('Ubertoken');
            set({ error: null });
            const response = await axios.get(`${API_URL}/user/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data.success) {
                set({ user: null, isAuthenticated: false });
                localStorage.removeItem('Ubertoken');
                return response.data;
            }
            else {
                set({ error: response.data.message });
                toast.error(response.data.message);
            }
        } catch (error) {
            set({ error: error.message });
            toast.error(error.message);
        }
    },

    // get user profile details
    checkUser: async () => {
        set({ error: null, isCheckingUser: true, isAuthenticated: false });
        try {
            const token = localStorage.getItem('Ubertoken');
            
            if (!token) {
                set({ isCheckingUser: false });
                return;
            }

            const response = await axios.get(`${API_URL}/user/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.data.success) {
                set({ user: response.data.user, isAuthenticated: true, isCheckingUser: false });
            }
        } catch (error) {
            set({ error: error.message });
        }
        finally {
            set({ isCheckingUser: false });
        }
    },
    
}));