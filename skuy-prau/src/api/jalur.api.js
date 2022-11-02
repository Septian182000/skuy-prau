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
    },
    async updateJalur(data) {
      try{
        const id = data.id ;
        const respone = await axiosInstance.patch(`/jalur/${id}`, data);
        return respone;
      } catch (err){
        console.log(err);
      }
    }
    
};

export default jalurAPI