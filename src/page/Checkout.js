import React from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';
import { ApplicationStore } from './/../data-store/store'
import { Formik } from "formik";
import { SignupSchema, NewSchema } from '../mock/validation';


export class Checkout extends React.Component {
    render() {
        const Validationdetails = SignupSchema

        return (
            <>
                <div class="row">
                    <div class="col-sm-12" className='topheading' style={{ backgroundColor: "lightblue", marginRight: '10px' }}>
                        <p><strong>Info!</strong>&nbsp;&nbsp; All below fields are mandatory, except coupon code. </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6" id='information' >
                        <h2><u>Delivery Information</u></h2>
                        <div>
                            <ApplicationStore.Consumer>
                                {
                                    (ctx) => {
                                        return (
                                            <Formik
                                                initialValues={{ name: "" }}
                                                onSubmit={(values, actions) => {
                                                    ctx.setAddressSummary(values);
                                                }}
                                                validationSchema={Validationdetails}

                                            >
                                                {props => (<form onSubmit={props.handleSubmit}>
                                                    <div class="form-group">
                                                        <label htmlFor="name">Name:</label>
                                                        <input type="text" name='name' class="form-control" placeholder='Name' onChange={props.handleChange} />
                                                        {props.errors.name && <div>{props.errors.name}</div>}
                                                    </div>
                                                    <div class="form-group">
                                                        <label htmlFor="number">Contact:</label>
                                                        <input type="number" name='contact' class="form-control" onChange={props.handleChange} placeholder='Enter mobile number' />
                                                        {props.errors.contact && <div>{props.errors.contact}</div>}
                                                    </div>
                                                    <div class="form-group">
                                                        <label htmlFor="alt-number">Alternate Contact:</label>
                                                        <input type="number" name='alternate' class="form-control" onChange={props.handleChange} placeholder='Enter alternate-mobile number' />
                                                        {props.errors.alternate && <div>{props.errors.alternate}</div>}
                                                    </div>
                                                    <div class="form-group">
                                                        <label htmlFor="email">Email:</label>
                                                        <input type="email" name='email' class="form-control" onChange={props.handleChange} placeholder='Enter valid email id' />
                                                        {props.errors.email && <div>{props.errors.email}</div>}
                                                    </div>
                                                    <div class="form-group">
                                                        <label htmlFor="address1">Address:</label>
                                                        <textarea type="text" name='address' class="form-control" onChange={props.handleChange} placeholder='Address' />
                                                        {props.errors.address && <div>{props.errors.address}</div>}
                                                    </div>
                                                    <button type="submit" class="btn btn-primary">Save & Continue</button>
                                                </form>
                                                )}
                                            </Formik>
                                        );
                                    }}
                            </ApplicationStore.Consumer>
                        </div>
                    </div>
                    <div class="col-sm-5" id='cardDetails'>
                        <h2><u>Payment details:</u></h2>
                        <div class='row'>
                            <div class='col-sm-6'>
                            </div>
                            <div class='col-sm'>
                                <img src='http://i76.imgup.net/accepted_c22e0.png' />
                            </div>
                        </div>
                        <div>
                            <Payment />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <Link to="/Cart"><button type="button" class="btn btn-success"><span class="glyphicon glyphicon-arrow-left" /> &nbsp; Back to Cart</button></Link>
                    </div>
                </div>
            </>
        )
    }
}


class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isvalid: false
        }
    }
    render() {
        const Validationdetail = NewSchema;
        return (
            <ApplicationStore.Consumer>
                {(ctx) => {
                    const cartItems = Object.values(ctx.cart);
                    const sum = cartItems.reduce(function (acc, obj) {
                        return acc + obj.quantity * parseFloat(obj.price);
                    }, 0.0)

                    return (
                        <Formik
                            initialValues={{ name: "" }}
                            onSubmit={(values, actions) => {
                                ctx.setPaymentSummary(values);
                                this.setState({ isvalid: true })

                            }}
                            validationSchema={Validationdetail}
                        >
                            {props => (<form onSubmit={props.handleSubmit}>
                                <div class="form-group">
                                    <label for="cardno.">CARD NUMBER</label>
                                    <input type="number" class="form-control" name='card' onChange={props.handleChange} placeholder='Valid Card Number' />
                                    {props.errors.card && <div>{props.errors.card}</div>}
                                </div>
                                <div class='row'>
                                    <div class='col-sm-7'>
                                        <div class="form-group">
                                            <label for="exp">EXPIRY</label>
                                            <input type="number" class="form-control" name='expiry' onChange={props.handleChange} placeholder='MM / YY' />
                                            {props.errors.expiry && <div>{props.errors.expiry}</div>}
                                        </div>
                                    </div>
                                    <div class='col-sm-5'>
                                        <div class="form-group">
                                            <label for="cv">CVV CODE</label>
                                            <input type="number" class="form-control" name='cvv' onChange={props.handleChange} placeholder='CVV' />
                                            {props.errors.cvv && <div>{props.errors.cvv}</div>}
                                        </div>
                                    </div>

                                </div>
                                <div class="form-group">
                                    <label for="coupon">COUPON CODE(if any)</label>
                                    <input type="text" class="form-control" placeholder='coupons' />
                                </div>
                                {!this.state.isvalid ? <button type='submit' class="btn btn-primary">Submit</button> :

                                    <Link to='./Order'><button type="submit" onClick={() => ctx.setOrderSummary()} class="btn btn-success">Pay&nbsp; ₹ {sum}</button></Link>
                                }
                            </form>
                            )}
                        </Formik>)
                }
                }
            </ApplicationStore.Consumer>

        );
    }
}