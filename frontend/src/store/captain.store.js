import {create} from 'zustand';

export const useCaptainStore = create((set) => ({
    captain: null,
}));