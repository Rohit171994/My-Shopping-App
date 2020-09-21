import React from 'react';
import './carousel.css';
export function Carousel() {
    return (
        <div className="container">
            <br />
            <div id="myCarousel" class="carousel slide" data-ride="carousel">

                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>

                <div class="carousel-inner" role="listbox">

                    <div class="item active">
                        <img src="https://miro.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg" />
                    </div>
                    <div class="item">
                        <img src="https://miro.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg" />
                    </div>
                    <div class="item">
                        <img src="https://miro.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg" />
                    </div>
                    <div class="item">
                        <img src="https://miro.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg" />
                    </div>
                </div>
                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}   