import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote(state, action) {
      const targetIndex = state.findIndex((anect)=> anect.id === action.payload.id)
      // const targetAnecd = state[targetIndex]
      // targetAnecd.votes= targetAnecd.votes+1
      state[targetIndex] = action.payload    
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
export const { vote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await anecdoteService.getAll()
    dispatch(setAnecdotes(notes))
  }
}
export const createAnecdote = content => {
  return async dispatch => {
    const newNote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newNote))
  }
}
export const updateVotes = anecdote =>{
  return async dispatch => {
    const updated = await anecdoteService.update(anecdote)
    dispatch(vote(updated))
  }
}
export default anecdoteSlice.reducer