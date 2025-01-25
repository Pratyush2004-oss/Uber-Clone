import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_BASE_URL || process.env.VITE_BASE_URL;

export const useUserStore = create((set) => ({
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

    // login user to the application
    login: async (input) => {
        try {
            set({ error: null });
            const response = await axios.post(`${API_URL}/user/login`, input);

            if (response.data.success) {
                set({ user: response.data.user, isAuthenticated: true });
                return response.data;
            }
            else{
                set({ error: response.data.message });
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(response)
            set({ error: error.message });
            toast.error(error.response.data.message);
        }
    },

    // logout user from the application
    logout: async () => {
        try {
            set({ error: null });
            const response = await axios.get(`${API_URL}/user/logout`);

            if (response.data.success) {
                set({ user: null, isAuthenticated: false });
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
            const response = await axios.get(`${API_URL}/user/profile`);
            console.log(response)
            if (response.data.success) {
                set({ user: response.data.user, isAuthenticated: true });
            }
        } catch (error) {
            console.log(error)
            set({ error: error.message });
        }
    },
}));