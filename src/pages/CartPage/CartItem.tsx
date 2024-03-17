//import React, { useState, useEffect } from 'react';
import { useEffect } from 'react';
import { CartItemType } from '../../App';
import '../../assets/css/app.css';
import orangeCart from '../../picture/orange-cart.png'
import { useCartStore, CartState } from '../../components/CountMath';
import {  CartDetail } from '../../API';


interface CartProps {
  initialCart: CartDetail[];
}

export interface CountQuantity {
  count: number;
  increase: (by: number) => void;
  resetCount: () => void;
}


const CartItem: React.FC<CartProps> = ({ initialCart }) => {
  //const [cart, setCart] = useState<CartItemType[]>(initialCart);
  const { cart, setCart, total, calculateTotal } = useCartStore<CartState>((state) => state);

  useEffect(() => {
    if (initialCart) {
      setCart(initialCart);
      calculateTotal();
    }
  }, []);

  const removeFromCart = (itemId: number) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    setCart(cart.map(item => item.id === itemId ? { ...item, quantity } : item));

  };

  const plusQuantity = (itemId: number) => {
    setCart(cart.map(item => item.id === itemId ? { ...item, quantity: Math.min(10, item.quantity + 1) } : item));
    calculateTotal();
  };

  const decreaseQuantity = (itemId: number) => {
    const targetItem = cart.find(item => item.id === itemId);
    if (!targetItem) {
      return;
    }

    if (targetItem.quantity === 1) {
      const shouldDelete = window.confirm('是否要刪除此商品？');
      if (shouldDelete) {
        setCart(cart.filter(item => item.id !== itemId));
      }
    } else {
      setCart(cart.map(item =>
        item.id === itemId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
      )
      );
    }
    calculateTotal();
  };

  const clearCart = () => {
    setCart([]);
  };

  // total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart">
      {cart.map((item, index) => {
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
                  <tr className="col-md-8 mb-5">
                    <td className="pd">
                      <div className="product-detail-box">
                        <div className="img-block">
                          <img src={item.imgSrc} alt={item.name} />
                        </div>
                        <div>
                          <h5 className="dark-gray">{item.name}</h5>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5 className="dark-gray">${item.price}</h5>
                    </td>
                    <td>
                      <div className="quantity quantity-wrap">
                        <input className="decrement dark-gray" type="button" value="-" onClick={() => decreaseQuantity(item.id)} />
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
                            } else {
                              const shouldReset = window.confirm('購買10本以上的書籍，詳情請洽客服');
                              if (shouldReset) {
                                e.target.value = item.quantity.toString();
                              }
                            }
                          }}
                        />
                        <input className="increment dark-gray" type="button" value="+" onClick={() => plusQuantity(item.id)} />
                      </div>
                    </td>
                    <td>
                      <h5>${(item.price * item.quantity).toFixed(0)}</h5>
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
                  <tr className="col-md-8 mb-5">
                    <td className="pd">
                      <div className="product-detail-box">
                        <div className="img-block">
                          <img src={item.imgSrc} alt={item.name} />
                        </div>
                        <div>
                          <h5 className="dark-gray">{item.name}</h5>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5 className="dark-gray">${item.price}</h5>
                    </td>
                    <td>
                      <div className="quantity quantity-wrap">
                        <input className="decrement dark-gray" type="button" value="-" onClick={() => decreaseQuantity(item.id)} />
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
                            } else {
                              const shouldReset = window.confirm('購買10本以上的書籍，請訊問客服');
                              if (shouldReset) {
                                e.target.value = item.quantity.toString();
                              }
                            }
                          }}
                        />
                        <input className="increment dark-gray" type="button" value="+" onClick={() => plusQuantity(item.id)} />
                      </div>
                    </td>
                    <td>
                      <h5>${(item.price * item.quantity).toFixed(0)}</h5>
                    </td>
                    <td>
                      <a href="#">
                        <i className="fal fa-times" onClick={() => removeFromCart(item.id)}>刪除</i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      })}
      <section className="shipping mb-40">
        <div className="container">
          <div className="choose-shipping-mode">
            <div className="row">
              <div className="col-xl-6">
                <div className="shipping-details">
                  <div className="filter-block">
                    <div className="title mb-32">
                      <h4>Choose shipping mode:</h4>
                    </div>
                    <ul className="unstyled list">
                      <li className="cart-list">
                        <div className="filter-checkbox">
                          <input type="checkbox" id="Instock" />
                          <label className="cart-font black-color" htmlFor="Instock">超商取貨(3~7天) $60.00</label>
                        </div>
                      </li>
                      <br /><br />
                      <li className="cart-list">
                        <div className="filter-checkbox">
                          <input type="checkbox" id="Instock1" />
                          <label className="cart-font black-color" htmlFor="Instock1">宅配到家(3~4天) $160.00</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="amounts">
                  <div className="sub-total mb-24">
                    <h6>購物車商品總數</h6>
                    <h6>{totalItems}</h6>
                  </div>
                  <div className="shipping-charges mb-24">
                    <h6>總金額：</h6>
                    <h6>{total.toFixed(0)}</h6>
                  </div>
                  <div className="grand-total mb-24">
                    <h5>總金額：</h5>
                    <h5>{total.toFixed(0)}</h5>
                  </div>
                  <h6><a href="checkout.html" className="cus-btn"><span className="icon"><img src={orangeCart} alt="" /></span>去結帳</a></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button onClick={clearCart}>清空購物車</button>
    </div>
  );
};

export default CartItem;
