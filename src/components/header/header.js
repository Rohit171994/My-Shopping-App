import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { ApplicationStore } from '../../data-store/store'

export function Header() {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-header" id='appname'>
                    <Link to="/" className="navbar-brand" style={{ fontSize: '2em', fontWeight: 'bolder', color: 'green' }} >
                        Myshop-App</Link>
                </div>
                <form className="navbar-form navbar-left" action="">
                    <div className='btns'>
                        <input type="text" placeholder="Search in portal" />
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                </form>
                <div id='headbtns'>
                    <ul className="nav navbar-nav">
                        <li class="active"><Link to="/">Home</Link></li>
                        <li class="active"><Link to="/about">About</Link></li>
                        <li style={{ display: 'felx', alignItems: 'center' }}><Link to="/Cart">ViewCart
                            <ApplicationStore.Consumer>
                                {(ctx) => {
                                    const items = Object.values(ctx.cart).length;
                                    return (
                                        <React.Fragment>
                                            <span class="glyphicon glyphicon-shopping-cart" />
                                            <span class="badge">{items}</span>
                                        </React.Fragment>
                                    )
                                }}
                            </ApplicationStore.Consumer>
                        </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}




