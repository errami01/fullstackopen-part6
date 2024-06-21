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
        set(state, action){
            return action.payload
        },
        removeNotification(){
            return initialState
        }
    }
})
export const { createAnecdoteNotification, voteNotification, removeNotification, set } = notificationSlice.actions
export const setNotification= (message, duration) => {
    return dispatch =>{
        dispatch(set(message))
        setTimeout(() => dispatch(removeNotification()), duration*1000)
    }
}
export default notificationSlice.reducer