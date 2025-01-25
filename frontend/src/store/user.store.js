import { create } from "zustand";

export const useUserStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    

    register: async (input) => {

    },

    login: async (input) => {

    },

    logout: async () => {

    },

    checkUser: async () => {

    }
}));