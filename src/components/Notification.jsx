import { useNotificationValue, useNotificationDispatch } from '../NotificationContext'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  const clearNotification = () => { 
    const dispatch = useNotificationDispatch()
    setTimeout(() => { 
      console.log('clear')
      dispatch( { type: 'CLEAR_NOTIFICATION', data: "null" } );
    }, 5000)
  };
  const notification = String(useNotificationValue())
  console.log('notification', notification)


  if (notification === "null") {
    console.log('notification is null')
    return null
  } else if (notification.length < 5) {
    clearNotification();
      return (
        <div style={style}>
          <p>too short anecdote, must have length 5 or more</p>
        </div>
      )
  } else {
    clearNotification();
    return (
      <div style={style}>
        <p>New notification '{notification}' created!</p>
      </div>
    )
  }
}

export default Notification
