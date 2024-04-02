import React from 'react';
import {
  CartDetailsDto,
  OrderDetailsDto,
  OrdersDto,
  useGetApiCartsDetails,
  useGetApiOrderMemberId,
  useGetApiOrdersDetailsId
} from '../../API';
import { AxiosError, AxiosResponse } from 'axios';
import { UseQueryResult } from '@tanstack/react-query';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

interface OrderProp {
  memberId: number;
}

// 定義 OneOrder 組件，接受 orderId 屬性
const OneOrder: React.FC<{ orderId: number }> = ({ orderId }) => {
  // 使用 useGetApiOrdersDetailsId hook 取得訂單詳細資料
  const orderDetailResponse = useGetApiOrdersDetailsId(orderId);
  // 從回應中取得訂單詳細資料
  const orderDetailData = orderDetailResponse.data?.data;
  // console.log(orderId, " ", orderDetailData);
  return (
    <div className='mb-2'>
      {/* 手風琴的開始 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          <h5>訂單編號:{orderId}</h5>
        </AccordionSummary>
        {/* 手風琴的詳細內容 */}
        <AccordionDetails>
          <div className='mb-2'>
            {/* 如果有訂單詳細資料，則顯示訂單內容 */}
            {orderDetailData && orderDetailData.length > 0 ? (
              orderDetailData.map((item, index) => {
                return index === 0 ? (
                  // 如果是第一個商品，顯示完整的表格標題
                  <div key={index} className='col-lg-12'>
                    <div className='widget'>
                      <table className='table-bordered check-tbl'>
                        <thead className='text-center'>
                          <tr>
                            <th></th>
                            <th>商品名稱</th>
                            <th>數量</th>
                            <th>單價</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* 顯示商品詳細資訊 */}
                          <tr>
                            <td className='product-item-img col-2'>
                              {/* 顯示商品圖片 */}
                              <img src={item.imgSrc} alt={'圖片謀去啊'} />
                            </td>
                            {/* 顯示商品名稱 */}
                            <td className='product-item-name col-6'>
                              {item.productName}
                            </td>
                            {/* 顯示商品數量 */}
                            <td className='product-item-name col-2'>
                              {item.quantity}
                            </td>
                            {/* 顯示商品單價 */}
                            <td className='product-price col-2'>
                              ${item.unitPrice}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  // 如果不是第一個商品，僅顯示商品詳細資訊
                  <div key={index} className='col-lg-12'>
                    <div className='widget'>
                      <table className='table-bordered check-tbl'>
                        <tbody>
                          <tr>
                            <td className='product-item-img col-2'>
                              <img src={item.imgSrc} alt={'圖片謀去啊'} />
                            </td>
                            <td className='product-item-name  col-6'>
                              {item.productName}
                            </td>
                            <td className='product-item-name col-2'>
                              {item.quantity}
                            </td>
                            <td className='product-price col-2'>
                              ${item.unitPrice}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })
            ) : (
              // 如果沒有訂單詳細資料，顯示提示訊息
              <div>這個訂單什麼都沒有，資料庫忘了載吼。</div>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

// 定義 OrderPage 組件，接受 memberId 屬性
const OrderPage: React.FC<OrderProp> = ({ memberId }) => {
  // 使用 useGetApiOrderMemberId hook 取得會員訂單資料
  const orderResponse = useGetApiOrderMemberId(memberId);

  // 從回應中取得會員訂單資料
  const orderData = orderResponse.data?.data;

  return (
    <div className='container'>
      <div className='row '>
        {/* 左側區域顯示會員的訂單列表 */}
        <div className='col-lg-7 widget mt-5'>
          <h4 className='widget-title'>您的訂單</h4>
          {orderData ? (
            orderData.map((order, index) => (
              <OneOrder orderId={order.id as number} key={index} />
            ))
          ) : (
            // 如果沒有訂單資料，顯示提示訊息
            <div>沒有任何的訂單，哭了，要不要去逛逛呢?</div>
          )}
        </div>

        {/* 右側區域顯示訂單資訊 */}
        <div className='col-lg-5 mt-5'>
          <form className='shop-form widget'>
            <h4 className='widget-title'>訂單資訊</h4>
            {orderData && orderData.length > 0 && (
              <table className='table-bordered check-tbl mb-4'>
                <tbody>
                  <tr>
                    <td>付款方式</td>
                    <td className='product-price'>信用卡</td>
                  </tr>
                  <tr>
                    <td>下單時間</td>
                    <td>{orderData[0].orderDate}</td>
                  </tr>
                  <tr>
                    <td>運送狀態</td>
                    <td className='product-price-total'>
                      {orderData[0].status}
                    </td>
                  </tr>
                  <tr>
                    <td>使用優惠券</td>
                    <td className='product-price'>
                      {orderData[0].couponUsed ? '$0.00' : '未使用'}
                    </td>
                  </tr>
                  <tr>
                    <td>總價格</td>
                    <td className='product-price-total'>
                      ${orderData[0].totalPrice}
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
