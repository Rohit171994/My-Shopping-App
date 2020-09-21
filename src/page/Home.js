import React from 'react';
import './home.css';
import { Carousel } from '../components/side-nav';
import { Card } from '../components/product-detailsCard/productCards';
import { Products } from "../mock/productList";


export class Home extends React.Component {

    componentDidMount() {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0)

    }


    render() {
        return (
            <>
                <div class="row">
                    <div class="col-sm-12">
                        <Carousel />
                    </div>
                    <div class="col-sm-6" id='card'>
                        {Products.map(i => <Card info={i} />)}
                    </div>
                </div>


            </>
        )
    }
}