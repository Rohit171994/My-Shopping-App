import React from 'react';
import { Link } from "react-router-dom";
import { ApplicationStore } from '../../data-store/store'


export function XtraDetails(props) {
    return (

        <ApplicationStore.Consumer>
            {
                (ctx) => {
                    const { id } = props;
                    const isitemAdded = ctx.cart[id] != undefined;
                    return (

                        <div class="row">
                            <div class="col-sm-7" >
                                <div>
                                    <div class="col-sm-2" >
                                        5 star
                                        </div>
                                    <div class="col-sm-9" >
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-1" >
                                        150
                                    </div>
                                </div>
                                <div>
                                    <div class="col-sm-2" >
                                        4 star
                                        </div>
                                    <div class="col-sm-9" >
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-1" >
                                        63
                                        </div>
                                </div>
                                <div>
                                    <div class="col-sm-2" >
                                        3 star
                                        </div>
                                    <div class="col-sm-9" >
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-1" >
                                        15
                                    </div>
                                </div>
                                <div>
                                    <div class="col-sm-2" >
                                        2 star
                                        </div>
                                    <div class="col-sm-9" >
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-1" >
                                        6
                                        </div>
                                </div>
                                <div>
                                    <div class="col-sm-2" >
                                        1 star
                                        </div>
                                    <div class="col-sm-9" >
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-1" >
                                        23
                                         </div>
                                </div>
                            </div>

                            <div class="col-sm-5" id='btns'>
                                {isitemAdded ?
                                    <Link to='/Cart'><button type="button" class="btn btn-primary btn-block">
                                        <span class="glyphicon glyphicon-shopping-cart" />&nbsp;&nbsp; Already added Go to Cart</button></Link>
                                    :
                                    <button onClick={() => ctx.addToCart(props)} type="button" class="btn btn-primary btn-block">
                                        <span class="glyphicon glyphicon-plus" /> &nbsp;&nbsp; Add to cart</button>
                                }
                                <br />
                                <Link to='/'><button type="button" class="btn btn-success btn-block"><span class="glyphicon glyphicon-arrow-left" />&nbsp;&nbsp; Go back and continue shopping</button></Link><br />

                            </div>
                        </div>
                    )
                }}
        </ApplicationStore.Consumer>

    )
}


