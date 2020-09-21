import React from 'react';
import { Link } from "react-router-dom";
import './product.css';
import { ApplicationStore } from "../../data-store/store";



export function Card(props) {
    return (
        <ApplicationStore.Consumer>
            {
                (ctx) => {
                    const { id } = props.info;
                    const isitemAdded = ctx.cart[id] != undefined;
                    return (
                        <div className="card" style={{ width: '270px' }} >
                            <h2>{props.info.model}</h2>
                            <img class="card-img-top" src={props.info.url} alt="Card image" style={{ width: "190px", height: "350px" }} />
                            <div class="card-body">
                                <h4 class="card-title">{props.info.brand}</h4>
                                <p class="card-text">{props.info.info}</p>
                                <div className='cardBtns'>
                                    <Link to={`/Details/${props.info.id}`}>
                                        <span class="btn btn-primary">Details</span></Link>
                                    <span class="btn btn-success" disabled={isitemAdded} onClick={() => ctx.addToCart(props.info)}>Add to cart</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </ApplicationStore.Consumer>

    )
}


