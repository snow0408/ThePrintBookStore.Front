import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import usedBookLogo from '../../assets/images/logo_dark.png'

const UsedBooksOrderConfirmation: React.FC = () => {
  const [paymentStatus, setPaymentStatus] = useState<boolean>(false);

  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setPaymentStatus(location.state.paymentStatus);
    }
  }, [location.state]);


  setTimeout(() => {
    window.location.href = 'http://localhost:5173/usedBook/UsedBookOrder';
  }, 3000);

  return (

    <div className="cart text-center">
      <img style={{ width: '350px' }} className='mb-5' src={usedBookLogo} />
      {paymentStatus ? <h3 className='mb-3'>付款成功，感謝您的購買</h3> :
        <h3 className='m-4'>付款失敗</h3>}
      <h5>請等候跳轉...</h5>
    </div>

  );
};
export default UsedBooksOrderConfirmation;
