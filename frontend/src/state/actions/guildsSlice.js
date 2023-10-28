import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    guilds: null,
    error: null,
    loading: false,
};


const guildsSlice = createSlice({
    name: "guilds",
    initialState,
    reducers:{
        guildsFetchStart:(state)=>{
            state.loading = true;
        },
        guildsFetchSuccess:(state, action)=>{
            state.guilds = action.payload;
            state.loading = false;
            state.error = false;
        },
        guildsFetchFailure:(state)=>{
            state.error = true;
        }
    }
});

export const {
    guildsFetchStart,
    guildsFetchSuccess,
    guildsFetchFailure
} = guildsSlice.actions;

export default guildsSlice.reducer;