import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import baseURL from "../../utils/base.js";

const initialState = {
  loading1:true,
  portofolioData:[],
  error1: ""
};





export const getcontact= createAsyncThunk("getcontact",async({ rejectWithValue, getState, dispatch })=>{

  try{
 
    const res = await axios.get("http://localhost:7000/api/getcontact");
    // console.log(res.data);
    return res.data;

  }
  catch (error) {
    // console.log("dfjk");
    return rejectWithValue(error?.response?.data);
  }
});



export const postcontact = createAsyncThunk(
  "postcontact",
  async (
    { name,email,mobile,age,address,gender,_id },
    { rejectWithValue, getState, dispatch }
  ) => {
    
// console.log(skills1);
    try {
      
      //make the http request
      const { data } = await axios.post("http://localhost:7000/api/contact", {
        
      name,
      email,
      gender,
      mobile,
      age,
      address,
      _id
      });

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response?.data);
    }
  }
);
// console.log(";sjdgi rn rgrhiue hgiuhjgioujhgihrgher");
const dataSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: (builder) => {
   


    builder.addCase(postcontact.pending, (state) => {
      state.loading1 = true;
    });
    builder.addCase(postcontact.fulfilled, (state, action) => {
      state.loading1 = false;
      state.portofolioData = action.payload;
      
    });
    builder.addCase(postcontact.rejected, (state, action) => {
      state.loading1 = false;
      state.error1=action.payload;
      // state.portofolioData={};

    });
    builder.addCase(getcontact.pending, (state) => {
      state.loading1 = true;
    });
    builder.addCase(getcontact.fulfilled, (state, action) => {
      state.loading1 = false;
      state.portofolioData = action.payload;
    });
    builder.addCase(getcontact.rejected, (state, action) => {
      state.loading1 = false;
      state.error1=action.payload;
    })
  }
})



const dataReducer9= dataSlice.reducer;

export default dataReducer9;




// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";







// const initialState = {
//     loading1:true,
//     portofolioData:[],
//     error1: ""
//   };
//   // const res = await axios.get(`${baseURL}`);
//   // console.log(res.data);
//   export const getdat= createAsyncThunk("getdat",async({ rejectWithValue, getState, dispatch })=>{
  
//     try{
   
//       const res = await axios.get('http://localhost:7000/api/getData');
//       console.log(res.data);
//       return res.data;
  
//     }
//     catch (error) {
//       console.log("dfjk");
//       return rejectWithValue(error?.response?.data);
//     }
//   });
//   // console.log(";sjdgi rn rgrhiue hgiuhjgioujhgihrgher");
//   const dataSlice = createSlice({
//     name: "data",
//     initialState,
//     extraReducers: (builder) => {
//       //create account
//       builder.addCase(getdat.pending, (state) => {
//         state.loading1 = true;
//       });
//       builder.addCase(getdat.fulfilled, (state, action) => {
//         state.loading1 = false;
//         state.portofolioData = action.payload;
//       });
//       builder.addCase(getdat.rejected, (state, action) => {
//         state.loading1 = false;
//         state.portofolioData=[]
//         state.error1=action.payload;
//       });
//     }
//   })
  
  
  
//   const dataReducer = dataSlice.reducer;
  
//   export default dataReducer;
  
  
  
  
  