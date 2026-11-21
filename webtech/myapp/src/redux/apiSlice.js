import axios from "axios";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
 
const API_URL="http://localhost:5050/users";

const fetchData=createAsyncThunk("api/fetchdata",async()=>{
    const responce =await axiox.get (API_URL);
    return responce.data;    
});
const apiSlice=createSlice({
    name:"api",
    initialstate:{
        data:[],
        satus:"idle",
        error:null        
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(this.state)=>{
            state.status="loading..."
        })
        .addCase(fetchData.fulfilled,(state.action)=>{

        })
    }
})

 