import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { voteNotification, removeNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const anecdoteState = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    const regex = new RegExp(filter,'i')
    const anecdotes = anecdoteState.filter((anecdote) => regex.test(anecdote.content))
    const dispatch = useDispatch()
    const handleVote = (id, content )=>{
        dispatch(vote(id))
        dispatch(voteNotification(content))
        setTimeout(() => dispatch(removeNotification()), 5000)
    }
    return (
        <>
            {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
        </>
    )
}
export default AnecdoteList