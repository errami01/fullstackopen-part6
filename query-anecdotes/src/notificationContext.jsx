import { createContext, useContext, useReducer } from 'react'

const notificationReducer = (state, action) => {
    switch (action.type){
      case 'CREATE':
        return `Anecdote '${ action.payload }' was created`
      case 'VOTE':
        return `Anecdote '${ action.payload }' voted`
      default: 
        return ''
    }
  }
const notificationContext = createContext()

export const NotificationContextProvider = ({children}) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, '')
    return (
        <notificationContext.Provider value={[notification, notificationDispatch]}>
            {children}
        </notificationContext.Provider>
    )
}
export const useNotificationValue = () => {
  return useContext(notificationContext)[0]
}
export const useNotificationDispatch = () => {
  return useContext(notificationContext)[1]
}
export default notificationContext