import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'https://foodshare-server-mu.vercel.app',
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;