import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStore.getItem("token")

    return axios.create({
        baseURL: "http://localhost:3000/", 
        headers: {
            authorization: token
        }
    });
};