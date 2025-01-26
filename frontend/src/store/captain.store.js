import { create } from 'zustand';
import toast from 'react-hot-toast';
import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;
export const useCaptainStore = create((set) => ({
    captain: null,
    error: null,
    isCaptainAuthenticated: false,
    isCheckingCaptain: true,

    // signup function
    signup: async (input) => {
        set({ error: null });
        try {
            const response = await axios.post(`${API_URL}/captain/register`, input);
            if (response.data.success) {
                set({ captain: response.data.captain, isCaptainAuthenticated: true });
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

    // login function
    login: async (input) => {
        try {
            set({ error: null });
            const response = await axios.post(`${API_URL}/captain/login`, input);
            if (response.data.success) {
                set({ captain: response.data.captain, isCaptainAuthenticated: true });
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

    // checkin captain
    checkCaptain: async () => {
        set({ error: null, isCheckingCaptain: true, isCaptainAuthenticated: false });
        try {
            const token = localStorage.getItem('Ubertoken');
            if (!token) {
                set({ isCheckingCaptain: false, isCaptainAuthenticated: false });
                return;
            }
            const response = await axios.get(`${API_URL}/captain/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.data.success) {
                set({ captain: response.data.captain, isCaptainAuthenticated: true, isCheckingCaptain: false });
            }
        } catch (error) {
            set({ error: error.message });
        }
    },

    // logout function
    logout: async () => {
        try {
            const token = localStorage.getItem('Ubertoken');
            set({ error: null });
            const response = await axios.get(`${API_URL}/captain/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.data.success) {
                set({ captain: null, isCaptainAuthenticated: false });
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

}));