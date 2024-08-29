import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading1:true,
    portofolioData:[],
    error1: ""
  };
  
  
  
  
  
  export const getproject= createAsyncThunk("getproject",async({ rejectWithValue, getState, dispatch })=>{
  
    try{
   
      const res = await axios.get("http://localhost:7000/api/getproject");
      // console.log(res.data);
      return res.data;
  
    }
    catch (error) {
      // console.log("dfjk");
      return rejectWithValue(error?.response?.data);
    }
  });
  
  
  
  export const postproject = createAsyncThunk(
    "postproject",
    async (
      { title,description,description2,description3,description4,description5,image,link },
      { rejectWithValue, getState, dispatch }
    ) => {
    //   const skills1 = skills.split(",");
  // console.log(skills1);
      try {
        //make the http request
        const { data } = await axios.post("http://localhost:7000/api/project", {
          
      title,
      description,
      image,
      link,
      description2,
      description3,
      description4,
      description5
        });
        return data;
      } catch (error) {
        console.log(error);
        return rejectWithValue(error?.response?.data);
      }
    }
  );

  export const updateproject = createAsyncThunk("updateproject",
    async({title,image,link,description,description2,description3,description4,description5,_id},
      {rejectWithValue,getState,dispatch})=>{
        try{
const {data}= await axios.post("http://localhost:7000/api/updateproject",{
  title,
      image,
      link,
      description,
      _id,
      description2,
      description3,
      description4,
      description5
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


export const delproject= createAsyncThunk("delproject",
  async({_id},
    {rejectWithValue,getState,dispatch},)=>{

try{
  const {data}= await axios.post("http://localhost:7000/api/deleteproject",{_id})
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
     
  
  
      builder.addCase(postproject.pending, (state) => {
        state.loading1 = true;
      });
      builder.addCase(postproject.fulfilled, (state, action) => {
        state.loading1 = false;
        state.portofolioData = action.payload;
        
      });
      builder.addCase(postproject.rejected, (state, action) => {
        state.loading1 = false;
        state.error1=action.payload;
        // state.portofolioData={};
  
      });
      
      
      builder.addCase(getproject.pending, (state) => {
        state.loading1 = true;
      });
      builder.addCase(getproject.fulfilled, (state, action) => {
        state.loading1 = false;
        state.portofolioData = action.payload;
      });
      builder.addCase(getproject.rejected, (state, action) => {
        state.loading1 = false;
        state.error1=action.payload;
      })

      builder.addCase(updateproject.pending, (state) => {
        state.loading1 = true;
      });
      builder.addCase(updateproject.fulfilled, (state, action) => {
        state.loading1 = false;
        state.portofolioData = action.payload;
      });
      builder.addCase(updateproject.rejected, (state, action) => {
        state.loading1 = false;
        state.error1=action.payload;
      });

      builder.addCase(delproject.pending, (state) => {
        state.loading1 = true;
      });
      builder.addCase(delproject.fulfilled, (state, action) => {
        state.loading1 = false;
        // state.portofolioData = action.payload;
        
      });
      builder.addCase(delproject.rejected, (state, action) => {
        state.loading1 = false;
        // state.error1=action.payload;
    });
 
 
  }})
  
  
  
  const dataReducer3= dataSlice.reducer;
  
  export default dataReducer3;
  
  
  
  