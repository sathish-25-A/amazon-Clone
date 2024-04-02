import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import dress from "../img/mw1.jpg";

const Cart = () => {
  return (
    <>
    <Meta title={"Cart"} />
            <Breadcrumb title="Cart" />
            <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={dress} className="img-fluid" alt="product image" />
                </div>
                <div className="w-75">
                  <p>Mens Blue Shirt</p>
                  <p>Size:M</p>
                  <p>Color:Blue</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">RS:700</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    min={1}
                    max={10}
                    id=""
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger " />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">RS:700</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/store" className="button">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: RS: 700</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Cart;