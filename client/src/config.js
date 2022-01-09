import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://crazyfingers.herokuapp.com/api/"
})