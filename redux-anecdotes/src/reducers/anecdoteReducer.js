import { createSlice } from '@reduxjs/toolkit'


const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      return state.concat(asObject(action.payload))
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
export default anecdoteSlice.reducer