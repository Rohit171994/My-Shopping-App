import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { AppRoutes } from './routes';
import { Header } from './components/header';
import { Aside } from './components/side-nav';
import { ApplicationStore } from './data-store/store';
import { addToCart, removeFromCart, totalRemove } from './data-store/cart';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      orderSumray: {},
      paymentSummary: {},
      addressSumary: {}
    }
  }

  addToCart = (product) => {
    const updatedCart = addToCart(product, this.state.cart);
    this.setState({
      cart: updatedCart
    });
  }
  removeFromCart = (product) => {
    const updatedCart = removeFromCart(product, this.state.cart);
    this.setState({
      cart: updatedCart
    });
  }
  totalRemove = (product) => {
    const updatedCart = totalRemove(product, this.state.cart);
    this.setState({
      cart: updatedCart
    });
  }

  setAddressSummary = (adddress) => {
    this.setState({
      addressSumary: adddress
    })
  }


  setPaymentSummary = (paymentSummary) => {
    this.setState({
      paymentSummary: paymentSummary
    })
  }

  setOrderSummary = () => {
    let c = this.state.cart;
    this.setState({
      cart: {},
      orderSumray: c
    })
  }
  refreshContent = () => {
    this.setState({
      paymentSummary: {},
      addressSumary: {},
      orderSumray: {}
    })
  }

  render() {
    return (
      <ApplicationStore.Provider value={{
        cart: this.state.cart,
        paymentSummary: this.state.paymentSummary,
        orderSumray: this.state.orderSumray,
        addressSumary: this.state.addressSumary,
        addToCart: this.addToCart,
        removeFromCart: this.removeFromCart,
        totalRemove: this.totalRemove,
        setAddressSummary: this.setAddressSummary,
        setPaymentSummary: this.setPaymentSummary,
        setOrderSummary: this.setOrderSummary,
        refreshContent: this.refreshContent
      }}>
        <BrowserRouter>
          <div className="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <Header />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-3">
                <Aside />
              </div>
              <div class="col-sm-9">
                <AppRoutes />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </ApplicationStore.Provider>
    )
  }
}
export default App;
