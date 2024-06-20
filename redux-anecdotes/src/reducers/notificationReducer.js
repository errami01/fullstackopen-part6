import { createSlice } from '@reduxjs/toolkit'

const initialState = 'This is notification'
const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        show(state, action){
            return state
        }
    }
})
export const { show } = notificationSlice.actions
export default notificationSlice.reducer