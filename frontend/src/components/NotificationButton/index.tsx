import axios from 'axios';
import icon from '../../assets/img/notification.svg'
import { BASE_URL } from '../../utils/request';
import './styles.css'
 
type Props = {
    saleId: number;
}

function handleClick(id :number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        console.log("Sucesso")
    })

}

function NotificationButton( {saleId} : Props) {
    return (
        <>
            <div className="red-btn" onClick={() => handleClick(saleId)}>
                <img src={icon} alt="Notificar"></img>
            </div>
        </>
    )
}

export default NotificationButton


