import { axiosInstance } from "../config/axiosInstance";

const pendakiAPI = {
    async getAllPendaki() {
        try {
          const response = await axiosInstance.get("/review");
          console.log(response);
          return response;
        } catch (err) {
          console.log(err);
        }
      },
      async getPendakiByJalur(jalur){
        try{
          const response = await axiosInstance.get(`/review/${jalur}`)
          return response;
        } catch(error){
          console.log(error)
        }
      },
      async createPendaki(data) {
        try {
          const response = await axiosInstance.post("/review", data);
          return response;
        } catch (error) {
          console.log(error);
        }
      },
      async updatePendaki(data) {
        try {
          const id = data.id;
          const response = await axiosInstance.patch(`/review/${id}`, data);
          return response;
        } catch (error) {
          console.log(error);
        }
      },
      async deletePendakiById(id) {
        try {
          const response = await axiosInstance.delete(`/review/${id}`);
          return response;
        } catch (error) {
          console.log(error);
        }
      },
};

export default pendakiAPI