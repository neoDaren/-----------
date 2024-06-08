import { createSlice } from "@reduxjs/toolkit"

interface IUser {
    mail: string,
    phone_number: string,
    user_id: number,
    name: string,
    reg_date: string,
    city: string
}

interface IUserSlice {
    user:null | IUser                                                                                                
}

const initialState:IUserSlice = {
    user:null
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeUsers(state, action ) {
            state.user = action.payload;

        }
    },
}) 

export default userSlice.reducer
export const {changeUsers} = userSlice.actions