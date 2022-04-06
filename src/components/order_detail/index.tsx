import { useParams } from 'react-router-dom';
import orders from '../../json/prova.json'
import './index.css';

export function Detail() {

    const { id } = useParams();
    const order = orders.filter(order => order.orderId === id)[0]
    let date = new Date(order.packageAttachment.packages.length ? order.packageAttachment.packages[0].issuanceDate : "");
    let dateHour = date.getHours() > 9 ? date.getHours() : "0" + date.getHours()
    let dateMinute = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()
    let dateFinal = date.toLocaleDateString() + " " + dateHour + ":" + dateMinute
    return (
        
        <div style={{marginBottom : "455px"}} className="detail_container">
            <div className="infoBox">
                <h1>Informações pessoais e de entrega</h1>
                <div className="info">

                    <div className="infoPessoal">
                        <div className="name">
                            <p className="title">Nome</p>
                            <p className="response">{order.clientProfileData.firstName + " " + order.clientProfileData.lastName}</p>
                        </div>
                        <div className="doc">
                            <p className="title">Documento</p>
                            <p className="response">{order.clientProfileData.document}</p>
                        </div>
                        <div className="typeOfDoc">
                            <p className="title">Tipo do documento</p>
                            <p className="response">{order.clientProfileData.documentType}</p>
                        </div>
                        <div className="phone">
                            <p className="title">Telefone</p>
                            <p className="response">{order.clientProfileData.phone}</p>
                        </div>
                        <div className="email">
                            <p className="title">E-mail</p>
                            <p className="response">{order.clientProfileData.email}</p>
                        </div>
                    </div>
                    <div className="infoLocal">
                        <div className="street">
                            <p className="title">Rua</p>
                            <p className="response">{order.shippingData.address.street}</p>
                        </div>
                        <div className="neighborhood">
                            <p className="title">Bairro</p>
                            <p className="response">{order.shippingData.address.neighborhood}</p>
                        </div>
                        <div className="city">
                            <p className="title">Cidade</p>
                            <p className="response">{order.shippingData.address.city}</p>
                        </div>
                        <div className="state">
                            <p className="title">Estado</p>
                            <p className="response">{order.shippingData.address.state}</p>
                        </div>
                        <div className="postalCode">
                            <p className="title">CEP</p>
                            <p className="response">{order.shippingData.address.postalCode}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="infoProd">
                <h1>Informações do pedido</h1>
                <div className="detail_header">
                    <span>Nome</span>
                    <span>Quantidade</span>
                    <span>Preço</span>
                    <span>Preço total</span>
                    <span>Foto</span>
                </div>
                {order.items.map(order => {
                    return (
                        <div key={order.id} className="detail_linha">
                            <span>{order.name}</span>
                            <span>{order.quantity}</span>
                            <span>{order.price}</span>
                            <span>{order.quantity * order.price}</span>
                            <img src={order.imageUrl} alt="" />
                        </div>
                    )
                })}
            </div>

            {order.packageAttachment.packages.length > 0 && (

                <div className="infoNf">
                    <h1>Informações da nota</h1>
                    <div className="nfBox">
                        <div className="noteNumber nf">
                            <span className="title">Numero da nota</span>
                            <span className="response">{order.packageAttachment.packages[0].invoiceNumber}</span>
                        </div>
                        <div className="NFvalue nf">
                            <span className="title">Valor da NF</span>
                            <span className="response">R$ {order.packageAttachment.packages[0].invoiceValue},00</span>
                        </div>
                        <div className="Date nf">
                            <span className="title">Data e hora</span>
                            <span className="response">{dateFinal}</span>
                        </div>
                        <div className="nfLink nf">
                            <span className="title">Nota fiscal</span>
                            <a href={order.packageAttachment.packages[0].invoiceUrl}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="nficon h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
            )
            }

            <div className="footer">

            </div>
        </div>
    )
}
