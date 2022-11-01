import { axiosInstance } from "../config/axiosInstance";

const jalurAPI = {
    async getAllJalur() {
        try {
          const response = await axiosInstance.get("/jalur");
          console.log(response);
          return response;
        } catch (err) {
          console.log(err);
        }
      }
};

export default jalurAPI