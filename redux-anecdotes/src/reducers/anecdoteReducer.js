import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      return state.concat(action.payload)
    },
    vote(state, action) {
      const targetIndex = state.findIndex((anect)=> anect.id === action.payload)
      const targetAnecd = state[targetIndex]
      targetAnecd.votes= targetAnecd.votes+1
      state[targetIndex] = targetAnecd    
      return state.sort((a, b) => b.votes - a.votes )
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})
export const { createAnecdote, vote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await anecdoteService.getAll()
    dispatch(setAnecdotes(notes))
  }
}
export default anecdoteSlice.reducer