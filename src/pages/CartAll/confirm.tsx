import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/css/app.css';
import { useCartStore, CartState } from './CountMath';

const LinePayPage: React.FC = () => {
  const [transactionId, setTransactionId] = useState<string>('');
  const [orderId, setOrderId] = useState<string>('');
  const { total } = useCartStore<CartState>((state) => state);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const transactionIdParam = params.get('transactionId');
    const orderIdParam = params.get('orderId');

    if (transactionIdParam && orderIdParam) {
      setTransactionId(transactionIdParam);
      setOrderId(orderIdParam);
    }
  }, []);

  const baseLoginPayUrl = 'https://localhost:7236/api/LinePay/';
  const confirmPayment = async () => {
    try {
      const payment = {
        amount: total,
        currency: 'TWD'
      };

      const response = await axios.post(
        `${baseLoginPayUrl}Confirm?transactionId=${transactionId}&orderId=${orderId}`,
        payment,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log(response.data);
      // 跳轉到商品頁面
      // setTimeout(() => {
      //   window.location.href = 'http://127.0.0.1:5173/cart';
      // }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* 最上方的 bar */}
      <center>
        <table>
          <thead>
            <tr>
              <th colSpan={2}> 測試商品 </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>
                <img
                  src='https://static.accupass.com/org/2011051025162614811630.jpg'
                  alt='商品圖片'
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}> 價格 : {total} </td>
            </tr>
            <tr>
              <td colSpan={2}> 購買數量 : </td>
            </tr>
            <tr>
              <td colSpan={2} style={{ textAlign: 'right' }}>
                總金額 : {total}
              </td>
            </tr>
            <tr>
              <td align='center' colSpan={2}>
                <button onClick={confirmPayment}> 確認付款</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className='Container'>
          <p id='paymentStatus'>交易狀態 : 交易已授權，等待確認</p>
        </div>
      </center>
    </div>
  );
};

export default LinePayPage;
