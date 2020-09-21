import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from './page/Home';
import { Details } from './page/Details';
import { Cart } from './page/Cart';
import { Checkout } from './page/Checkout';
import { Order } from './page/Ordersuccess';
import { About } from './page/about'


export const AppRoutes = (props) => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Details/:id" component={Details} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Checkout" component={Checkout} />
        <Route path="/Order" component={Order} />
        <Route Path='/about' component={About} />
    </Switch>

)