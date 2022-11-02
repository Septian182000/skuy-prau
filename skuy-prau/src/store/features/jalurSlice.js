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

export const updateJalurById = createAsyncThunk("update/jalur", async({id, status}) => {
    try{
        const response = await jalurAPI.updateJalur({id, status})
        return response.data.update_via_jalur_by_pk;
    } catch(error) {
        console.log(error)
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
            .addCase(updateJalurById.fulfilled, (state, action) => {
				state.componentStatus = !state.componentStatus;
			})
    }
})

export default jalurSlice.reducer