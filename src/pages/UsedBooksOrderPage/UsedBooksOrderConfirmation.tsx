import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { usePostApiUsedBookOrdersApi } from '../../API';

const UsedBooksOrderConfirmation: React.FC = () => {
  const [paymentStatus, setPaymentStatus] = useState<boolean>(false);

  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setPaymentStatus(location.state.paymentStatus);
    }
  }, [location.state]);

  const { mutate: createOrder } = usePostApiUsedBookOrdersApi();
  const handleCreateOrder = (e: React.MouseEvent<HTMLButtonElement>) => {
    createOrder({
      data: {
        sellerId: 10,
        buyerId: 11,
        totalAmount: 8888,
        status: 'TEST',
        shippingFee: 0
      }
    });
    console.log('新增成功');
  };

  setTimeout(() => {
    window.location.href = 'http://localhost:5173/usedBook/UsedBookOrder';
  }, 2000);

  return (

    <div className="cart">
      <h2>UsedBooksOrderConfirmation</h2>
      {paymentStatus ? <h3>付款成功</h3> : <h3>付款失敗</h3>}

      <button onClick={handleCreateOrder}>TEST Create Order</button>
    </div>

  );
};
export default UsedBooksOrderConfirmation;
