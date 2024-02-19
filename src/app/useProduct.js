import axios from 'axios';
import { create } from 'zustand';

const useProduct1 = create((set) => ({
    loading: false,
    product1: [],
    error: null,

    getProducts: async () => {
        set(() => ({
            loading: true,
        }));
        try {
            const res = await axios.get('http://localhost:3000/Product1');
            const data = await res.data;
            set(() => ({
                product1: data,
            }));
        } catch (err) {
            set(() => ({
                error: err.message,
            }));
        } finally {
            set(() => ({
                loading: false,
            }));
        }
    },
    getProducts2: async () => {
        set(() => ({
            loading: true,
        }));
        try {
            const res = await axios.get('http://localhost:3000/Product2');
            const data = await res.data;
            set(() => ({
                product1: data,
            }));
        } catch (err) {
            set(() => ({
                error: err.message,
            }));
        } finally {
            set(() => ({
                loading: false,
            }));
        }
    },

}));

export default useProduct1;