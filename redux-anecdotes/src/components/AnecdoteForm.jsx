import { useDispatch } from 'react-redux'
import { createAnecdote } from "../reducers/anecdoteReducer"
import { createAnecdoteNotification, removeNotification } from '../reducers/notificationReducer'
import noteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAndecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnecdote = await noteService.createNew(content)
        dispatch(createAnecdote(newAnecdote))
        dispatch(createAnecdoteNotification())
        setTimeout(() => dispatch(removeNotification()), 5000)
      }
    return(
        <form onSubmit={addAndecdote}>
            <h2>create new</h2>
            <div><input name='anecdote'/></div>
            <button type="submit">create</button>
        </form>
    )
}
export default AnecdoteForm