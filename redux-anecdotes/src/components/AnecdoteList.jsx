import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'


const AnecdoteList = () => {
    const anecdoteState = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    const regex = new RegExp(filter,'i')
    const anecdotes = anecdoteState.filter((anecdote) => regex.test(anecdote.content))
    
    const dispatch = useDispatch()
    return (
        <>
            {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
        </>
    )
}
export default AnecdoteList