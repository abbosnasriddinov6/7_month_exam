import axios from 'axios';
import { create } from 'zustand';

export const usenew = create((set) => ({
    loading: false,
    product3: [],
    error: null,

    getnewproducts: async () => {
        set(() => ({
            loading: true,
        }));
        try {

            const res = await axios.get('http://localhost:3000/products3');
            const data = await res.data;
            set(() => ({
                product3: data,
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
    post: async (newproduct) => {
        set(() => ({
            loading: true,
        }));
        try {
            console.log(newproduct);
            const res = await axios.post('http://localhost:3000/products3', newproduct);
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

export default usenew;