import React from 'react';
export function Device(props) {
    return (
        <>
            <div class="row">
                <div class="col-sm-4">
                    <img src={props.url} height='300' width='160' style={{ margin: "10px" }} />
                </div>
                <div class="col-sm-8">
                    <h1>{props.model}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
            <Rating {...props} />
        </>
    )
}

function Rating(props) {
    return (
        <div class="row">
            <div class="col-sm-7" >
                <h3>User Rating. &nbsp;&nbsp;
                <span class="glyphicon glyphicon-star" style={{ color: "#ffcc00" }} />
                    <span class="glyphicon glyphicon-star" style={{ color: "#ffcc00" }} />
                    <span class="glyphicon glyphicon-star" style={{ color: "#ffcc00" }} />
                    <span class="glyphicon glyphicon-star" style={{ color: "#ffcc00" }} />
                    <span class="glyphicon glyphicon-star-empty" />
                </h3>
                <p>2.0 average based on 100 reviews.</p>
            </div>
            <div class="col-sm-5" >
                <h3>Price(1 pcs):₹ {props.price}</h3>
                <p><b>Quantity:1</b></p>
            </div>
        </div>
    )
}