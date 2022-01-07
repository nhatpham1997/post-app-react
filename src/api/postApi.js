import axiosClient from "./axiosClient";

const postApi = {
    getAll: (params) => {
        const url = "/posts";
        return axiosClient.get(url, { params });
    },
    create: (content) => {
        const url = "/posts";
        return axiosClient.post(url, content);
    },
};

export default postApi;