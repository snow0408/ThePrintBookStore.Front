// OrderConfirmation.tsx
import React ,{useEffect} from 'react';
import '../../assets/css/app.css';
import emailIcon from '../../picture/mail-box.png';
import { Outlet, Link } from 'react-router-dom';
import { useCartStore, CartState } from '../../components/CountMath';
import { CartItemType } from '../../App';

// 擴展訂單介面以包含買家資訊

interface CartProps {
  initialCart: CartItemType[];
}



// 客戶資料
export const Step1 = () => {
  return (
    // className="tab-pane " 
    <div id="step-1" role="tabpanel" aria-labelledby="step-1">
      <div className="contact-info">
        <h4 className="mb-32">客戶資料</h4>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-24">
            <input type="text" className="form-control" id="first-name" name="first-name" placeholder="First Name" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-24">
            <input type="text" className="form-control" id="last-name" name="last-name" placeholder="Last Name" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-24">
            <input type="text" className="form-control" id="email" name="email" placeholder="Email" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-24">
            <input type="tel" className="form-control" id="phone" name="phone" placeholder="Phone Number" />
          </div>
        </div>
        <div className="mb-32 col-md-12">
          <input type="text" className="form-control" id="company" name="company" placeholder="Company Name (Optional)" />
        </div>
      </div>
    </div>
  )
}

export const Step2 = () => {
  return (
    // className="tab-pane"
    <div id="step-2" role="tabpanel" aria-labelledby="step-2">
      <div className="contact-info">
        <h4 className="mb-32">確認地址</h4>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb-24">
            <div className="mb-24">
              <div className="select">
                <select name="Country" id="_Country">
                  <option selected>地區</option>
                  <option value="1">台北市</option>
                  <option value="2">新北市</option>
                  <option value="3">桃園縣</option>
                  <option value="4">新竹市</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb-24">
            <input type="number" className="form-control" id="zip-code" name="Zip-Code" placeholder="郵遞區號" />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="mb-24">
            <input type="text" className="form-control" id="House" name="House" placeholder="請輸入完整地址" />
          </div>
        </div>
        <div className="col-sm-12">
          <textarea className="form-control notes mb-32" name="notes" id="" cols={68} rows={5} placeholder="備註事項"></textarea>
        </div>

      </div>
    </div>
  )
}
//付款方式todo加綠界
export const Step3 = () => {
  return (
    <div id="step-3" role="tabpanel" aria-labelledby="step-3">
      <div className="contact-info">
        <h4 className="mb-32">付款方式</h4>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="select card-select mb-24">
            <img src={emailIcon} alt="" />
            <select className="checkout-3" name="Country" id="_Country">
              <option selected disabled hidden>Credit Card</option>
              <option value="1">option 1</option>
              <option value="2">option 2</option>
              <option value="3">option 3</option>
            </select>
          </div>

        </div>
        <div className="col-sm-12">
          <div className="icon-block">
            <input type="text" className="form-control mb-24" id="card-no" name="card-no" placeholder="Card Number" />
            <i className="far fa-shield-alt"></i>
          </div>
        </div>
        <div className="col-sm-12">
          <input type="text" className="form-control mb-24" id="card-name" name="card-name" placeholder="Name of Card" />
        </div>
        <div className="col-sm-6">
          <input type="date" className="form-control mb-24" id="date" name="date" placeholder="Expiration Date (MM / YY)" />
        </div>
        <div className="col-sm-6">
          <div className="icon-block">
            <input type="text" className="form-control mb-24" id="card-no" name="card-no" placeholder="Card Number" />
            <i className="fal fa-comments-dollar"></i>
          </div>
        </div>
      </div>
    </div>
  )
}



const YourOrder: React.FC = () => {
  const { cart, total } = useCartStore<CartState>((state) => state);

 return (
    <div className="order-detail">
     <div className="sub-total">
            <h6 className='col-3'><span className="dark-gray">訂單商品</span></h6>
            <h6 className='col-3'>單價</h6>
            <h6 className='col-3'>數量</h6>
            <h6 className='col-3'>總價</h6>
          </div>
      <hr />
      {cart.map((item, index) => (
       
          <div className="sub-total" key={item.id}>
            <h6 className='col-3'><span className="dark-gray">{item.name}</span></h6>
            <h6 className='col-3'>${item.price}</h6>
            <h6 className='col-3'>{item.quantity}</h6>
            <h6 className='col-3'>${(item.price * item.quantity).toFixed(0)}</h6>
          </div>
        ))}
      <hr />
      <div className="sub-total">
        <h5 className="dark-gray">商品總價</h5>
        <h5>$ {total}</h5>
      </div>
      <hr />
      <div className="sub-total">
        <h5 className="dark-gray">運費</h5>
        <h5>Free Shipping</h5>
      </div>
      <hr />
      <h6>選擇折價券</h6>
      <div className="find-books-input">
        <input type="text" className="search-input" placeholder="Add Coupon" />
        <a href="index.html"><img src="static/picture/click-btn-white.png" alt="" /></a>
      </div>
      <hr />
      <div className="sub-total">
        <h5 className="dark-gray">折價券</h5>
        <h5>-$05.00</h5>
      </div>
      <div className="sub-total">
        <h4>總付款金額</h4>
        <h4>$70.50</h4>
      </div>
      <hr />
    </div>
  );
};




const OrderConfirmation: React.FC = () => {
  return (
    <div className="page-content">
      {/* Shipping Details Start */}
      <section className="checkout container">
        <div className="row">
          <div className="col-xl-8">
            <div className="checkout-form">
              <form action="signup.html" id="form-wizard">
                <ul className="nav">
                  <li className="nav-item">
                    <Link to={'/list/'} className="nav-link">
                      <div className="num">1</div>
                      <span>客戶資料</span>
                    </Link>

                  </li>
                  <li className="nav-item">
                    <Link to={'/list/Step2'} className="nav-link">
                      <div className="num">2</div>
                      <span>運送資訊</span>
                    </Link>
                    {/* <a className="nav-link" href="#step-2">
                      <div className="num">2</div>
                      <span>運送資訊</span>
                    </a> */}
                  </li>
                  <li className="nav-item">
                    <Link to={'/list/Step3'} className="nav-link">
                      <div className="num">3</div>
                      <span>付款方式</span>
                    </Link>

                  </li>
                </ul>

                <div className="tab-content">
                  <Outlet />

                </div>
                <div className="sw-toolbar-elm toolbar toolbar-bottom" role="toolbar">
                  <button className="btn sw-btn-prev sw-btn" type="button">Continue</button>
                  <button className="btn sw-btn-next sw-btn" type="button">Next</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-4">
            <YourOrder />
          </div>
        </div>
      </section >

      {/* Shipping Details End */}
    </div >
  );
};

export default OrderConfirmation;

