import { useEffect, useContext } from "react"
import notificationContext from "../notificationContext"
const Notification = () => {
  const [notification, dispatch] = useContext(notificationContext)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  useEffect(()=> {
    if(notification)
      setTimeout(()=> dispatch({type: ''}), 5000)
  },[notification])
  if (!notification) return null

  return (
    <div style={style} >
      {notification}
    </div>
  )
}

export default Notification
