import icon from '../../assets/img/notification.svg'
import './styles.css'
function NotificationButton() {
    return (
        <>
            <div className="red-btn">
                <img src={icon} alt="Notificar"></img>
            </div>
        </>
    )
}

export default NotificationButton


