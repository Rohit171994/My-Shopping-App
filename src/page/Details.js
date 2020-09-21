import React from 'react';
import { Device } from '../components/device/device';
import { XtraDetails } from '../components/device/xtradetails'
import './Details.css';
import { Products } from "../mock/productList";

export class Details extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0)

    }

    render() {

        const { match: { params: { id } } } = this.props;
        const product = Products.find(p => p.id.toString() === id) || {};
        return (
            <div className='container'>
                <div class="row">
                    <div class="col-sm-12" className='topheading' style={{ backgroundColor: "lightblue", color: 'green' }}>
                        <p><strong>Info!</strong>&nbsp;&nbsp; Below are the details you are looking for. </p>
                    </div>
                    <div class="col-sm-12">
                        <Device {...product} />

                    </div>
                    <div class="col-sm-12">
                        <XtraDetails {...product} />

                    </div>
                </div>
                <br /><br />
                <Thatsall />
            </div>
        )
    }
}
function Thatsall() {
    return (
        <div class="row">
            <div class="col-sm-12">
                That's all !!!
            </div>
        </div>
    )
}


