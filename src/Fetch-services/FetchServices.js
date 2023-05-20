import axios from "axios";

export const GetAllProducts = async () => axios.get('/api/products');