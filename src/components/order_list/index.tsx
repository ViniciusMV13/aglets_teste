import { Link } from 'react-router-dom';
import orders from '../../json/prova.json'
import './index.css';
export function OrderList() {
    const axios = require('axios');

    async function makeGetRequest() {
        let res = await axios.get('http://aglets.com.br/prova/prova.json');
        let data = res.data;
        console.log(data);
    }

    makeGetRequest();
    return (
        <div className="container">
            <h1>Pedidos</h1>
            <div className='gridBox'>
                <div className="header">
                    <span>Número do pedido</span>
                    <span>Status do pedido</span>
                    <span>Data do pedido</span>
                    <span>Valor do pedido</span>
                </div>
                {orders.map(order => {
                    let date = new Date(order.creationDate).toLocaleDateString();
                    return (

                        <div key={order.orderId} className="linha">
                            <span><Link to={`/detail/${order.orderId}`}>{order.orderId}</Link></span>
                            <span>{order.statusDescription}</span>
                            <span>{date}</span>
                            <span>R$ {order.totals[0].value},00</span>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}