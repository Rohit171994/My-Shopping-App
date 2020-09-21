import React from 'react';
import { Link } from 'react-router-dom';
import { ApplicationStore } from "../data-store/store";
import { Buttons } from '../mock/increment-decrement'
export function Cart() {

    return (

        <ApplicationStore.Consumer>
            {
                (ctx) => {
                    {
                        const cartItems = Object.values(ctx.cart);
                        const sum = cartItems.reduce(function (acc, obj) {
                            return acc + obj.quantity * parseFloat(obj.price);
                        }, 0.0)
                        return (

                            <div>
                                <div class="row" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div class="col-sm-12" >
                                        <h2><strong>Viewing your cart</strong></h2>
                                    </div>
                                </div>
                                <div class="row" style={{ backgroundColor: "teal", color: "white", height: '40px', borderRadius: '5px', margin: '10px' }}>
                                    <div class="col-sm-4">
                                        <h4><strong>ProductName</strong></h4>
                                    </div>
                                    <div class="col-sm-2">
                                        <h4><strong>Quantity</strong></h4>
                                    </div>
                                    <div class="col-sm-3">
                                        <h4><strong>Total</strong></h4>
                                    </div>
                                    <div class="col-sm-3">
                                        <h4><strong>Add/Remove or Delete</strong></h4>
                                    </div>

                                </div>

                                {cartItems.length == 0 ?
                                    <h3>Your Cart Is Empty</h3>
                                    : cartItems.map(item => {
                                        return (
                                            <>
                                                <div class="row" style={{ margin: '10px' }}>
                                                    <div class="col-sm-4">
                                                        <img height="30" width="15" src={item.url} /> <strong>{item.model}</strong>
                                                    </div>
                                                    <div class="col-sm-2">
                                                        <h4><strong>{item.quantity}</strong></h4>
                                                    </div>
                                                    <div class="col-sm-3">
                                                        <h4><strong>₹{parseInt(item.price) * item.quantity}</strong></h4>
                                                    </div>
                                                    <div class="col-sm-3">
                                                        <h4><strong>
                                                            <Buttons
                                                                showRemoveBtn={true}
                                                                onDec={() => ctx.removeFromCart(item)}
                                                                onInc={() => ctx.addToCart(item)}
                                                                remove={() => ctx.totalRemove(item)} />
                                                        </strong></h4>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}

                                {cartItems.length > 0 ?
                                    <>
                                        <hr />
                                        <h3>Your Total amount is :₹{sum}</h3>
                                        <br />
                                        <div class="row">
                                            <div class="col-sm-5">
                                                <Link to="/Checkout"><button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-qrcode" /> &nbsp;Proceed and make payment</button></Link>
                                            </div>
                                            <div class="col-sm-7">
                                                <Link to='/'><button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-arrow-left" />&nbsp;Continue-Shopping</button></Link>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <Link to='/'><button type="button" class="btn btn-primary">Continue-Shopping</button></Link>
                                }
                            </div>
                        )
                    }
                }}
        </ApplicationStore.Consumer>
    )
}
