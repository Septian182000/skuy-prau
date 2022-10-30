import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import pendakiAPI from "../../api/pendaki.api";

const initialState = {
    data: [],
    componentStatus: false,
};

export const fetchPendaki = createAsyncThunk("fetch/todos", async() => {
    try {
        const response = await pendakiAPI.getAllPendaki();
        return response.data.pendaki;
    } catch(error) {
        console.log(error);
    }
})

export const createPendaki = createAsyncThunk("create/pendaki", async({nama, review}) => {
    try {
        const response = await pendakiAPI.createPendaki({nama, review});
        return response.data.insert_pendaki;
    } catch(error) {
        console.log(error);
    }
})

export const updatePendaki = createAsyncThunk("update/pendaki", async ({ id, completed }) => {
    try {
      const response = await pendakiAPI.updatePendaki({ id, completed });
      return response.data.update_pendaki;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletePendaki = createAsyncThunk("delete/pendaki", async (id) => {
    try {
      const response = await pendakiAPI.deletePendakiById(id);
      return response.data.delete_pendaki.returning[0];
    } catch (error) {
      console.log(error);
    }
});

const todoSlice = createSlice({
    name: "pendaki",
    initialState,
    extraReducers(builder){
        builder
            .addCase(fetchPendaki.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(createPendaki.fulfilled, (state, action) =>{
                state.data.push(action.payload);
                state.componentStatus = !state.componentStatus;
            })
            .addCase(deletePendaki.fulfilled, (state, action) => {
                state.fetchStatus = !state.fetchStatus;
                state.data = state.data.filter((item) => item.id !== action.payload.id);
            })
            .addCase(updatePendaki.fulfilled, (state) => {
                state.componentStatus = !state.componentStatus;
            })
    }
})

export default todoSlice.reducer;