import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import jalurAPI from "../../api/jalur.api"

const initialState = {
    dataJalur: [],
    componentStatus: false,
};

export const fetchJalur = createAsyncThunk("fetch/jalur", async() => {
    try {
        const response = await jalurAPI.getAllJalur();
        return response.data.via_jalur;
    } catch(error) {
        console.log(error);
    }
})

const jalurSlice = createSlice({
    name: "jalur",
    initialState,
    extraReducers(builder){
        builder
            .addCase(fetchJalur.fulfilled, (state, action) => {
                state.dataJalur = action.payload
            })
    }
})

export default jalurSlice.reducer