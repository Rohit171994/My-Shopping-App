import React from 'react';
import './Ordersuccess.css';
import { Link } from 'react-router-dom';
import { ApplicationStore } from "../data-store/store";
const id = parseInt(Math.random() * 10000000)
export function Order() {
    return (
        <>
            <div class="row">
                <div class="col-sm-3" >
                    <span class="glyphicon glyphicon-ok-circle" id='tick' />
                </div>
                <div class="col-sm-9" id='text' >
                    <h2><strong>Order completed successfully!</strong></h2>
                    <br />
                    <p>Thankyou for purchasing with us - we appreciate that.</p>
                    <p>Your Order number is <strong>#SA-OD{id}</strong>.</p>
                    <Reciept />
                    <br /><br />
                    <ApplicationStore.Consumer>
                        {(ctx) => {
                            return (
                                <Link to='/'><button type="button" onClick={() => ctx.refreshContent()} class="btn btn-primary"><span class="glyphicon glyphicon-arrow-left" />&nbsp;&nbsp;Continue shopping</button></Link>
                            )
                        }}
                    </ApplicationStore.Consumer>
                    <br /><br /><br /><br />
                    <p>That's all !!!</p>
                </div>
            </div>
        </>
    )
}

function Reciept() {

    return (
        <>
            <ApplicationStore.Consumer>
                {
                    (ctx) => {
                        const cartItems = Object.values(ctx.orderSumray);
                        const addressDetails = (ctx.addressSumary);
                        const payment = (ctx.paymentSummary)
                        const sum = cartItems.reduce(function (acc, obj) {
                            return acc + obj.quantity * parseFloat(obj.price);
                        }, 0.0)
                        return (
                            <>
                                <a class="info collapsed" data-toggle="collapse" data-target="#demo">View full order summary</a>
                                <div id="demo" class="collapse">
                                    <div class="row" style={{ backgroundColor: "rgb(0, 212, 255)", height: '40px', borderRadius: '5px', margin: '10px' }}>
                                        <div class="col-sm-4">
                                            <h4><strong>ProductName</strong></h4>
                                        </div>
                                        <div class="col-sm-2">
                                            <h4><strong>Quantity</strong></h4>
                                        </div>
                                        <div class="col-sm-3">
                                            <h4><strong>Per-Unit</strong></h4>
                                        </div>
                                        <div class="col-sm-3">
                                            <h4><strong>Total</strong></h4>
                                        </div>
                                    </div>

                                    {cartItems.map(item => {
                                        return (

                                            <div class="row" style={{ margin: '10px' }}>
                                                <div class="col-sm-4">
                                                    <h4><strong>{item.model}</strong></h4>
                                                </div>
                                                <div class="col-sm-2">
                                                    <h4>{item.quantity}</h4>
                                                </div>
                                                <div class="col-sm-3">
                                                    <h4>₹{parseInt(item.price)}</h4>
                                                </div>
                                                <div class="col-sm-3">
                                                    <h4>₹{parseInt(item.price) * item.quantity}</h4>
                                                </div><hr />
                                            </div>
                                        )
                                    })}

                                    <hr />
                                    <h3>Your Total amount is :₹{sum}</h3>
                                    <hr />
                                    <p>OrderId:#SA-OD{id}</p>
                                    <p>Name: {addressDetails.name} </p>
                                    <p>Contact:{addressDetails.contact}</p>
                                    <p>Alternate no.:{addressDetails.alternate}</p>
                                    <p>Paid through Card: {payment.card}</p>
                                    <p>Address:{addressDetails.address}</p>

                                </div>
                            </>
                        )

                    }
                }
            </ApplicationStore.Consumer>
        </>
    )
}

