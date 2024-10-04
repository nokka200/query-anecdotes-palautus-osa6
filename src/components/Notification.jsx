import { useNotificationValue, useNotificationDispatch } from '../NotificationContext'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  const notification = String(useNotificationValue())
  const dispatch = useNotificationDispatch()

  console.log('notification', notification)


  if (notification === "null") {
    console.log('notification is null')
    return null
  } else if (notification.length < 5) {
    setTimeout(() => { 
      console.log('clear')
      dispatch( { type: 'CLEAR_NOTIFICATION', data: "null" } );
    }, 5000)
      return (
        <div style={style}>
          <p>too short anecdote, must have length 5 or more</p>
        </div>
      )
  } else {
    setTimeout(() => { 
      console.log('clear')
      dispatch( { type: 'CLEAR_NOTIFICATION', data: "null" } );
    }, 5000)
    return (
      <div style={style}>
        <p>New notification '{notification}' created!</p>
      </div>
    )
  }
}

export default Notification
