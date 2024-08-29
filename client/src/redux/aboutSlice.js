import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../utils/base.js";

const initialState = {
  loading1:true,
  portofolioData:[],
  error1: ""
};





export const getabout= createAsyncThunk("getabout",async({ rejectWithValue, getState, dispatch })=>{

  try{
 
    const res = await axios.get("http://localhost:7000/api/getabout");
    // console.log(res.data);
    return res.data;

  }
  catch (error) {
    // console.log("dfjk");
    return rejectWithValue(error?.response?.data);
  }
});



export const postabout = createAsyncThunk(
  "postabout",
  async (
    { lottieURL,description1,description2,skills,_id },
    { rejectWithValue, getState, dispatch }
  ) => {
    const skills1 = skills.split(",");
// console.log(skills1);
    try {
      //make the http request
      const { data } = await axios.post("http://localhost:7000/api/about", {
        
      lottieURL,
      description1,
      description2,
      skills:skills1,
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
   


    builder.addCase(postabout.pending, (state) => {
      state.loading1 = true;
    });
    builder.addCase(postabout.fulfilled, (state, action) => {
      state.loading1 = false;
      state.portofolioData = action.payload;
      
    });
    builder.addCase(postabout.rejected, (state, action) => {
      state.loading1 = false;
      state.error1=action.payload;
      // state.portofolioData={};

    });
    builder.addCase(getabout.pending, (state) => {
      state.loading1 = true;
    });
    builder.addCase(getabout.fulfilled, (state, action) => {
      state.loading1 = false;
      state.portofolioData = action.payload;
    });
    builder.addCase(getabout.rejected, (state, action) => {
      state.loading1 = false;
      state.error1=action.payload;
    })
  }
})



const dataReducer1= dataSlice.reducer;

export default dataReducer1;




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
  
  
  
  
  