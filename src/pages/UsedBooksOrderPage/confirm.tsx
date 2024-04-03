import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { usepaymentAmountStore, paymentAmountstate } from '../../state';
import '../../App.css';
import { usePutApiUsedBookPaymentRecordsApi, useGetApiUsedBookPaymentRecordsApi } from '../../API';

const LinePay: React.FC = () => {
  const navigate = useNavigate(); // useNavigate在函式組件的主體使用
  const [transactionId, setTransactionId] = useState<string>('');
  const [orderId, setOrderId] = useState<string>('');

  const { mutate: putUsedBookPaymentRecord } = usePutApiUsedBookPaymentRecordsApi();
  function updatePaymentStatus(orderId: string, paymentStatus: boolean) {
    putUsedBookPaymentRecord({ params: { paymentNumber: orderId, status: paymentStatus } });
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const transactionIdParam = params.get('transactionId');
    const orderIdParam = params.get('orderId');

    if (transactionIdParam && orderIdParam) {
      setTransactionId(transactionIdParam);
      setOrderId(orderIdParam);
    }
  }, []);

  const [amount, setAmount] = useState<number>(0)
  const getPaymentRecord = useGetApiUsedBookPaymentRecordsApi({ paymentNumber: orderId });
  const paymentRecord = getPaymentRecord.data?.data;
  useEffect(() => {
    if (paymentRecord && paymentRecord.length > 0) {
      const firstPaymentRecord = paymentRecord[0];
      setAmount(firstPaymentRecord.paymentAmount!);
    }
  }, [paymentRecord]);

  const baseLoginPayUrl = 'https://localhost:7236/api/LinePay/';
  const confirmPayment = async () => {

    try {
      const payment = {
        amount: amount,
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

        //更新付款紀錄
        updatePaymentStatus(orderId, true);
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
        <table className='mt-5'>
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
              <td colSpan={2} align='center'>
                <h5>總金額 : {amount}</h5>
              </td>
            </tr>
            <tr>
              <td align='center' colSpan={2}>
                <button onClick={confirmPayment} className='btn btn-primary btnhover btnhover2 mt-3'> 確認付款</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className='Container mt-4'>
          <p id='paymentStatus'>交易狀態 : 交易已授權，等待確認</p>
        </div>
      </center>
    </div>
  );
};

export default LinePay;
