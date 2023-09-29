import { axiosInstance } from "../axios-config";

export const getPeople = () =>{
    const resp = axiosInstance.get('/');
    return resp;
}