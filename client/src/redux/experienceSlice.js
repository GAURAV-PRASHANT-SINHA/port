import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading1:true,
    portofolioData:[],
    error1: ""
  };
  
  
  
  
  
  export const getexperience= createAsyncThunk("getexperience",async({ rejectWithValue, getState, dispatch })=>{
  
    try{
   
      const res = await axios.get("http://localhost:7000/api/exp1");
      // console.log(res.data);
      return res.data;
  
    }
    catch (error) {
      // console.log("dfjk");
      return rejectWithValue(error?.response?.data);
    }
  });
  
  
  
  export const postexperience = createAsyncThunk(
    "postexperience",
    async (
      { title,period,company,description,description2 },
      { rejectWithValue, getState, dispatch }
    ) => {
    //   const skills1 = skills.split(",");
  // console.log(skills1);
      try {
        //make the http request
        const { data } = await axios.post("http://localhost:7000/api/exp", {
          
      title,
      period,
      company,
      description,
      description2
        });
        return data;
      } catch (error) {
        console.log(error);
        return rejectWithValue(error?.response?.data);
      }
    }
  );

  export const updateexp = createAsyncThunk("updateexp",
    async({title,period,company,description,description2,_id},
      {rejectWithValue,getState,dispatch})=>{
        try{
const {data}= await axios.post("http://localhost:7000/api/exp2",{
  title,
      period,
      company,
      description,
      description2,
      _id
});
 return data;
}
catch(error)
{
  console.log(error);
        return rejectWithValue(error?.response?.data);
}
      }
    )


export const delxp= createAsyncThunk("delxp",
  async({_id},
    {rejectWithValue,getState,dispatch},)=>{

try{
  const {data}= await axios.post("http://localhost:7000/api/del1",{_id})
  return data;
}
catch(error)
{
  console.log(error);
        return rejectWithValue(error?.response?.data);
}

    }
) 
  




  // console.log(";sjdgi rn rgrhiue hgiuhjgioujhgihrgher");
  const dataSlice = createSlice({
    name: "data",
    initialState,
    extraReducers: (builder) => {
     
  
  
      builder.addCase(postexperience.pending, (state) => {
        state.loading1 = true;
      });
      builder.addCase(postexperience.fulfilled, (state, action) => {
        state.loading1 = false;
        state.portofolioData = action.payload;
        
      });
      builder.addCase(postexperience.rejected, (state, action) => {
        state.loading1 = false;
        state.error1=action.payload;
        // state.portofolioData={};
  
      });
      
      
      builder.addCase(getexperience.pending, (state) => {
        state.loading1 = true;
      });
      builder.addCase(getexperience.fulfilled, (state, action) => {
        state.loading1 = false;
        state.portofolioData = action.payload;
      });
      builder.addCase(getexperience.rejected, (state, action) => {
        state.loading1 = false;
        state.error1=action.payload;
      })

      builder.addCase(updateexp.pending, (state) => {
        state.loading1 = true;
      });
      builder.addCase(updateexp.fulfilled, (state, action) => {
        state.loading1 = false;
        state.portofolioData = action.payload;
      });
      builder.addCase(updateexp.rejected, (state, action) => {
        state.loading1 = false;
        state.error1=action.payload;
      });

      builder.addCase(delxp.pending, (state) => {
        state.loading1 = true;
      });
      builder.addCase(delxp.fulfilled, (state, action) => {
        state.loading1 = false;
        // state.portofolioData = action.payload;
        
      });
      builder.addCase(delxp.rejected, (state, action) => {
        state.loading1 = false;
        // state.error1=action.payload;
    });
 
 
  }})
  
  
  
  const dataReducer2= dataSlice.reducer;
  
  export default dataReducer2;
  
  
  
  