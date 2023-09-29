import { axiosInstance } from "../axios-config";

export const getPeople = () =>{
    const resp = axiosInstance.get('/');
    return resp;
}

export const postPeople = async (data) => {
    const resp = await axiosInstance.post("new", data, {
      headers: {
        "Content-type": "application/json",
      },
    });
    return resp;
  };

  export const deletePeople = async (data) => {
    const resp = await axiosInstance.delete("delete", {
      data: { id: data },
    });
    return resp;
  };
