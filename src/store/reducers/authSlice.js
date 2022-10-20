import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    isAuth:true
}

export const AuthSlice = createSlice({
    name:'Auth',
    initialState,
    reducers:{
        setAuth(state, action){
            state.isAuth = action.payload            
        }
    }
})

export default AuthSlice.reducer;