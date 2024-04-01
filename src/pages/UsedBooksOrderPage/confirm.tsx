import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { usepaymentAmountStore, paymentAmountstate } from '../../state';
import '../../App.css';

const LinePay: React.FC = () => {
  const navigate = useNavigate(); // useNavigate在函式組件的主體使用
  const [transactionId, setTransactionId] = useState<string>('');
  const [orderId, setOrderId] = useState<string>('');
  const { count, setCount } = usepaymentAmountStore<paymentAmountstate>(
    (state) => state
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const transactionIdParam = params.get('transactionId');
    const orderIdParam = params.get('orderId');
    setCount(500);

    if (transactionIdParam && orderIdParam) {
      setTransactionId(transactionIdParam);
      setOrderId(orderIdParam);
    }
  }, []);

  const baseLoginPayUrl = 'https://localhost:7236/api/LinePay/';
  const confirmPayment = async () => {
    console.log(count);

    try {
      const payment = {
        amount: 500,
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

      let paymentStatus: boolean = false;

      if (
        (response.data.returnMessage = 'Success.' && response.data.info != null)
      ) {
        console.log('完成付款');
        paymentStatus = true;
      } else {
        console.log('付款失敗');
      }
      navigate('/usedBook/UsedBooksOrderConfirmation', {
        state: { paymentStatus: paymentStatus }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    //todo這一段不需要餒
    <div className='cart'>
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
              <td colSpan={2}> 購買數量 : </td>
            </tr>
            <tr>
              <td colSpan={2} style={{ textAlign: 'right' }}>
                總金額 : {count}
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

export default LinePay;
