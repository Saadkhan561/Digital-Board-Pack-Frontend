import { axios } from "../utils/axios";

export const uploadDocument = async (data) => {
  try {
    console.log(data);
    const res = await axios.post("/uploads", data);

    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const insertDocument = async (data) => {
  try {
    const { id, ...rest } = data;
    const res = await axios.post(`/uploads/${id}`, rest);

    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};
