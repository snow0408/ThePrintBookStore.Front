// OrderConfirmation.tsx
import React, { useState } from 'react';
import '../../assets/css/app.css';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useCartStore, CartState } from './CountMath';
import { CartItemType } from '../../App';
import { useGetApiCartsMemberId, usePutApiCartsId } from '../../API';
import LinePay from '../../picture/LinePay.png';

// 擴展訂單介面以包含買家資訊

interface CartProps {
  initialCart: CartItemType[];
}

// 客戶資料
export const Step1: React.FC<CartProps> = ({ initialCart }) => {
  const { mutate: updatebuyer } = usePutApiCartsId();
  const [formData, setFormData] = useState({
    Name: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const customerData = {
      id: 3,
      data: formData
    };
    updatebuyer(customerData);
  };

  return (
    <div id='step-1' role='tabpanel' aria-labelledby='step-1'>
      <form onSubmit={handleSubmit}>
        <div className='contact-info'>
          <h4 className='mb-32'>確認資料</h4>
        </div>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='mb-24'>
              <input
                type='text'
                className='form-control'
                id='name'
                name='Name'
                placeholder='{memberName}'
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='mb-24'>
              <input
                type='tel'
                className='form-control'
                id='phone'
                name='phone'
                placeholder='電話號碼'
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='col-sm-12'>
            <div className='mb-24'>
              <input
                type='text'
                className='form-control'
                id='House'
                name='House'
                placeholder='請輸入完整地址'
              />
            </div>
          </div>
          <div className='col-sm-12'>
            <textarea
              className='form-control notes mb-32'
              name='notes'
              id=''
              cols={68}
              rows={5}
              placeholder='備註事項'
            ></textarea>
          </div>
          <div className='sw-toolbar-elm toolbar toolbar-bottom' role='toolbar'>
            <Link to={'/list/Step2'} className='nav-link'>
              <button className='btn sw-btn-prev sw-btn' type='submit'>
                去結帳
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

// export const Step2 = () => {
//   return (
//     // className="tab-pane"
//     <div id="step-2" role="tabpanel" aria-labelledby="step-2">
//       <div className="contact-info">
//         <h4 className="mb-32">確認地址</h4>
//       </div>
//       <div className="row">
//         <div className="col-sm-6">
//           <div className="mb-24">
//             <div className="mb-24">

//             </div>
//           </div>
//         </div>
//         <div className="col-sm-6">
//           <div className="mb-24">
//             <input type="number" className="form-control" id="zip-code" name="Zip-Code" placeholder="郵遞區號" />
//           </div>
//         </div>

//         <div className="sw-toolbar-elm toolbar toolbar-bottom" role="toolbar">
//           <Link to={'/list/'} className="nav-link">
//             <button className="btn sw-btn-prev sw-btn" type="button" >上一步</button>
//           </Link>
//           <Link to={'/list/Step3'} className="nav-link">
//             <button className="btn sw-btn-prev sw-btn" type="button">結帳去</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

//付款方式todo加LinePay
export const Step2 = () => {
  const { cart, total } = useCartStore<CartState>((state) => state);

  const requestPayment = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const baseLoginPayUrl = 'https://localhost:7236/api/LinePay/';
    const payment = {
      amount: total,
      currency: 'TWD',
      orderId: Date.now().toString(),
      packages: [
        {
          id: '20191011I001',
          amount: total,
          name: '印跡書閣',
          products: [
            {
              name: '印跡書閣',
              quantity: 1,
              price: total
            }
          ]
        }
      ],
      redirectUrls: {
        confirmUrl: 'http://127.0.0.1:5173/linepay',
        cancelUrl: 'https://localhost:7236/api/Cancel'
      }
    };

    try {
      const response = await fetch(baseLoginPayUrl + 'Create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payment)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res = await response.json();
      window.location = res.info.paymentUrl.web;
    } catch (error) {
      console.log('Request failed', error);
    }
  };

  return (
    <div id='step-2' role='tabpanel' aria-labelledby='step-2'>
      <div className='contact-info'>
        <h4 className='mb-32'>付款方式</h4>
      </div>
      <div className='row'>
        <div className='col-sm-6'>
          <div className='mb-24'>
            <div className='mb-24'>
              <div>
                <button type='button' onClick={requestPayment}>
                  <img src={LinePay} alt='' />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='mb-24'>
            <div className='mb-32'></div>
          </div>
        </div>
        <div className='col-sm-12'>
          <div className='mb-24'></div>
        </div>
        <div className='sw-toolbar-elm toolbar toolbar-bottom' role='toolbar'>
          <Link to={'/list'} className='nav-link'>
            <button className='btn sw-btn-prev sw-btn' type='button'>
              上一步
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

//側邊的訂單介面
export const YourOrder: React.FC = () => {
  const { cart, total } = useCartStore<CartState>((state) => state);

  return (
    <div>
      {cart.length > 0 && (
        <div className='order-detail'>
          <div className='sub-total'>
            <h6 className='col-3'>
              <span className='dark-gray'>訂單商品</span>
            </h6>
            <h6 className='col-3'>單價</h6>
            <h6 className='col-3'>數量</h6>
            <h6 className='col-3'>總價</h6>
          </div>
          <hr />
          {cart.map((item) => (
            <div className='sub-total' key={item.id}>
              <h6 className='col-3'>
                <span className='dark-gray'>{item.productName}</span>
              </h6>
              <h6 className='col-3'>${item.unitPrice}</h6>
              <h6 className='col-3'>{item.quantity}</h6>
              <h6 className='col-3'>
                ${(item.unitPrice * item.quantity).toFixed(0)}
              </h6>
            </div>
          ))}
          <hr />
          <div className='sub-total'>
            <h5 className='dark-gray'>商品總價</h5>
            <h5>$ {total}</h5>
          </div>
          <hr />
          <div className='sub-total'>
            <h5 className='dark-gray'>運費</h5>
            <h5>Free Shipping</h5>
          </div>
          <hr />
          <h6>選擇折價券</h6>
          <div className='find-books-input'>
            <input
              type='text'
              className='search-input'
              placeholder='Add Coupon'
            />
            <a href='index.html'>
              <img src='static/picture/click-btn-white.png' alt='' />
            </a>
          </div>
          <hr />
          <div className='sub-total'>
            <h5 className='dark-gray'>折價金額</h5>
            <h5>-$0</h5>
          </div>
          <div className='sub-total'>
            <h4>總付款金額</h4>
            <h4>${total.toFixed(0)}</h4>
          </div>
          <hr />
        </div>
      )}
    </div>
  );
};

//上面的標籤頁
const OrderConfirmation: React.FC = () => {
  const TestData = useGetApiCartsMemberId(3);
  if (TestData.isSuccess) console.log(TestData.data?.data);
  return (
    <div className='page-content '>
      {/* Shipping Details Start */}
      <section className='checkout container'>
        <div className='row'>
          <div className='col-8'>
            <div className='checkout-form'>
              <form action='signup.html' id='form-wizard'>
                <ul className='nav'>
                  <li className='nav-item'>
                    <Link to={'/list/'} className='nav-link'>
                      <div className='num'>1</div>
                      <span>客戶資料</span>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/list/Step2'} className='nav-link'>
                      <div className='num'>2</div>
                      <span>付款方式</span>
                    </Link>
                  </li>
                </ul>

                <div className='tab-content'>
                  <Outlet />
                </div>
              </form>
            </div>
          </div>
          <div className='col-4'>
            <YourOrder />
          </div>
        </div>
      </section>

      {/* Shipping Details End */}
    </div>
  );
};

export default OrderConfirmation;
