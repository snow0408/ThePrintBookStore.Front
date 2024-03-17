
import './App.css'

import CartItem from './pages/CartPage/CartItem.tsx';

import { useGetApiCartsApiId } from './API.ts';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faShoppingCart);

export interface CartItemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imgSrc?: string;
  description?: string;
}

// 初始化購物車數據
const initialCart: Cart[] = [
  { id: 1, name: '商品A', price: 100, quantity: 2, imgSrc: '/path/to/imageA.png' },
  { id: 2, name: '商品B', price: 200, quantity: 1, imgSrc: '/path/to/imageB.png' },
];
let memberId = 0
const TestData = useGetApiCartsApiId(memberId)

// App 組件，應用的主要入口點
const App: React.FC = () => {
  // if (TestData.isSuccess)

  return (
    <div>
      {/* 在應用中顯示購物車頁面 */}
      {TestData.data?.data && <CartItem initialCart={TestData.data.data} />}
    </div>
  );
}


export default App
