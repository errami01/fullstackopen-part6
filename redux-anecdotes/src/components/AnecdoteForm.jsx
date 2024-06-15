import { useDispatch } from 'react-redux'
import { createAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAndecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
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