import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        createAnecdoteNotification(){
            return `Anecdote successfully created`
        },
        voteNotification(state, action){
            return `You voted '${action.payload}'`
        },
        removeNotification(){
            return initialState
        }
    }
})
export const { createAnecdoteNotification, voteNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer