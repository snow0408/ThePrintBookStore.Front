//import React, { useState, useEffect } from 'react';
import { useEffect } from "react";
import { CartItemType } from "../App";
import "../assets/css/app.css";
import orangeCart from "../picture/orange-cart.png";
import { useCartStore, CartState } from "./CountMath";
import {
  CartDetailsDto,
  useDeleteApiCartsDetailsId,
  usePutApiCartsDetailsId,
} from "../API";
import { useNavigate } from "react-router-dom";

interface CartProps {
  initialCart: CartDetailsDto[];
}

export interface CountQuantity {
  count: number;
  increase: (by: number) => void;
  resetCount: () => void;
}

const CartItem: React.FC<CartProps> = ({ initialCart }) => {
  //const [cart, setCart] = useState<CartItemType[]>(initialCart);
  const navigate = useNavigate();
  const { cart, setCart, total, calculateTotal } = useCartStore<CartState>(
    (state) => state
  );
  const { mutate: updateDetail } = usePutApiCartsDetailsId();
  const { mutate: deleteDetail } = useDeleteApiCartsDetailsId();
  const handleCheckout = () => {
    navigate("/list", { state: { cartItems: cart } });
  };

  useEffect(() => {
    if (initialCart) {
      // 在這裡處理獲取的資料，例如設定初始購物車內容
      setCart(initialCart || []);
      calculateTotal();
    }
  }, []);

  const removeFromCart = (itemId: number) => {
    if (cart.length > 0) {
      setCart(cart.filter((item) => item.id !== itemId));
    }
    calculateTotal();
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (cart.length > 0) {
      setCart(
        cart.map((item) => (item.id === itemId ? { ...item, quantity } : item))
      );
    }
    calculateTotal();
  };

  const plusQuantity = (itemId: number) => {
    setCart(
      cart.map((item) => {
        if (item.id === itemId && item.quantity !== undefined) {
          updateDetail({
            id: itemId ?? 0,
            params: { quantity: Math.min(10, item.quantity + 1) },
          });
          return { ...item, quantity: Math.min(10, item.quantity + 1) };
        }
        return item;
      })
    );

    calculateTotal();
  };

  const decreaseQuantity = (itemId: number) => {
    if (cart.length > 0) {
      const targetItem = cart.find((item) => item.id === itemId);
      if (!targetItem) {
        return;
      }

      if (targetItem.quantity === 1) {
        const shouldDelete = window.confirm("是否要刪除此商品？");
        if (shouldDelete) {
          deleteDetail({ id: itemId });
          setCart(cart.filter((item) => item.id !== itemId));
        }
      } else {
        setCart(
          cart.map((item) => {
            updateDetail({
              id: itemId ?? 0,
              params: { quantity: Math.max(0, item.quantity! - 1) },
            });
            return item.id === itemId
              ? { ...item, quantity: Math.max(0, item.quantity! - 1) }
              : item;
          })
        );
      }
      calculateTotal();
    }
  };

  const clearCart = () => {
    setCart([]);
  };
  let totalItems = 0;

  if (cart.length > 0) {
    totalItems = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
  }

  return (
    <div className="cart">
      {cart.length > 0 ? (
        cart.map((item, index) => {
          return index === 0 ? (
            <div key={item.id} className="row">
              <div className="col-lg-12">
                <table className="cart-table mb-24">
                  <thead>
                    <tr>
                      <th>商品</th>
                      <th>單價</th>
                      <th>數量</th>
                      <th>總計</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="col-md-12 mb-5">
                      <td className="pd">
                        <div className="product-detail-box">
                          <div className="img-block">
                            <img src={item.imgSrc} alt={item.productName} />
                          </div>
                          <div>
                            <h5 className="dark-gray">{item.productName}</h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h5 className="dark-gray">${item.unitPrice}</h5>
                      </td>
                      <td>
                        <div className="quantity quantity-wrap">
                          <input
                            className="decrement dark-gray"
                            type="button"
                            value="-"
                            onClick={() => decreaseQuantity(item.id)}
                          />
                          <input
                            type="text"
                            name="quantity"
                            value={item.quantity}
                            maxLength={2}
                            size={1}
                            className="number"
                            onChange={(e) => {
                              const newQuantity = parseInt(e.target.value, 10);
                              if (!isNaN(newQuantity) && newQuantity <= 10) {
                                updateQuantity(item.id, newQuantity);
                                updateDetail({
                                  id: item.id ?? 0,
                                  params: { quantity: newQuantity },
                                });
                              } else {
                                const shouldReset =
                                  window.confirm(
                                    "購買10本以上的書籍，詳情請洽客服"
                                  );
                                if (shouldReset) {
                                  e.target.value = item.quantity.toString();
                                  updateDetail({
                                    id: item.id ?? 0,
                                    params: { quantity: item.quantity },
                                  });
                                }
                              }
                            }}
                          />
                          <input
                            className="increment dark-gray"
                            type="button"
                            value="+"
                            onClick={() => plusQuantity(item.id)}
                          />
                        </div>
                      </td>
                      <td>
                        <h5>${(item.unitPrice * item.quantity).toFixed(0)}</h5>
                      </td>
                      <td>
                        <a href="#">
                          <i onClick={() => removeFromCart(item.id)}>刪除</i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div key={item.id} className="row">
              <div className="col-lg-12">
                <table className="cart-table mb-24">
                  <tbody>
                    <tr className="col-md-12 mb-5">
                      <td className="pd">
                        <div className="product-detail-box">
                          <div className="img-block">
                            <img src={item.imgSrc} alt={item.productName} />
                          </div>
                          <div>
                            <h5 className="dark-gray">{item.productName}</h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h5 className="dark-gray">${item.unitPrice}</h5>
                      </td>
                      <td>
                        <div className="quantity quantity-wrap">
                          <input
                            className="decrement dark-gray"
                            type="button"
                            value="-"
                            onClick={() => decreaseQuantity(item.id)}
                          />
                          <input
                            type="text"
                            name="quantity"
                            value={item.quantity}
                            maxLength={2}
                            size={1}
                            className="number"
                            onChange={(e) => {
                              const newQuantity = parseInt(e.target.value, 10);
                              if (!isNaN(newQuantity) && newQuantity <= 10) {
                                updateQuantity(item.id, newQuantity);
                                updateDetail({
                                  id: item.id ?? 0,
                                  params: { quantity: newQuantity },
                                });
                              } else {
                                const shouldReset =
                                  window.confirm(
                                    "購買10本以上的書籍，請訊問客服"
                                  );
                                if (shouldReset) {
                                  e.target.value = item.quantity.toString();
                                  updateDetail({
                                    id: item.id ?? 0,
                                    params: { quantity: item.quantity },
                                  });
                                }
                              }
                            }}
                          />
                          <input
                            className="increment dark-gray"
                            type="button"
                            value="+"
                            onClick={() => plusQuantity(item.id)}
                          />
                        </div>
                      </td>
                      <td>
                        <h5>${(item.unitPrice * item.quantity).toFixed(0)}</h5>
                      </td>
                      <td>
                        <a href="#">
                          <i onClick={() => removeFromCart(item.id)}>刪除</i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        })
      ) : (
        <div>空的</div>
      )}
      {/* <h6 > <button onClick={clearCart} className="clearcart-btn"><i class="fa-regular fa-trash-can">清空購物車</i></button></h6> */}
      <section className="shipping mb-40">
        <div className="container">
          <div className="choose-shipping-mode">
            <div className="row">
              <div className="col-xl-6">
                <div className="shipping-details">
                  <div className="filter-block"></div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="amounts between">
                  <div className="shipping-charges mb-24">
                    <h6></h6>
                  </div>

                  <div className="sub-total mb-24">
                    <h6>購物車商品總數</h6>
                    <h6>{totalItems}</h6>
                  </div>

                  <div className="grand-total mb-24">
                    <h5>總金額：</h5>
                    <h5>{total.toFixed(0)}</h5>
                  </div>
                  <h6>
                    {" "}
                    <button onClick={handleCheckout} className="cus-btn">
                      <span className="icon">
                        <img src={orangeCart} alt="" />
                      </span>
                      去結帳
                    </button>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartItem;
