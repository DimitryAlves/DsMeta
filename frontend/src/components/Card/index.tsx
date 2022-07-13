import NotificationButton from '../NotificationButton'
import './styles.css'

function Card() {
    return (
        <div className="card">
            <h2 className="vendas">Vendas</h2>
            <div>
                <div className="control">
                    <input className="caixa1" type="text"/>
                </div>
                <div className="control">
                    <input className="caixa1" type="text"/>
                </div>
            </div>
            <div>

                <table className="table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#123</td>
                            <td className="show">14/06/2006</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>

                            <td>
                                <div className="btn-container">
                                    <NotificationButton/>
                                </div>

                            </td>
                        </tr>

                        <tr>
                            <td className="show992">#123</td>
                            <td className="show">14/06/2006</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="btn-container">
                                    <NotificationButton/>
                                </div>

                            </td>
                        </tr>

                        <tr>
                            <td className="show992">#123</td>
                            <td className="show">14/06/2006</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="btn-container">
                                    <NotificationButton/>
                                </div>

                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Card

