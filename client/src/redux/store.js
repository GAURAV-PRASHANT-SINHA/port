import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./rootSlice.js";
import dataReducer1 from "./aboutSlice.js";
import dataReducer2 from "./experienceSlice.js";
import dataReducer3 from "./projectSlice.js";
import usersReducer from "./userSlice.js";
import dataReducer9 from "./contactSlice.js";

//store
const store = configureStore({
  reducer: {

    gaurav: dataReducer,
    prashant:dataReducer1,
    sinha:dataReducer2,
    death:dataReducer3,
    use:usersReducer,
    god:dataReducer9
    
  },
});

export default store;