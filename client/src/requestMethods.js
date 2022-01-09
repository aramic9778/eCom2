import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2FiODc5YjY4MzJmMTE1YzRkYTQ4NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDgzMTQ3MSwiZXhwIjoxNjQxMDkwNjcxfQ.4BVXtIufOSB-UO-Doqq5PRu0vUVnblog372OTI46UbA"
export const publicRequest = axios.create({
    baseURL: BASE_URL,

});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },

}) 