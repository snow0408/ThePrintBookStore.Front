import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

// 舊元件
import App from './App';
import ProductSearchPage from './pages/ProductSearchPage/ProductSearchPage';
import EmployeeLoginForm from './components/EmployeeLoginForm/EmployeeLoginForm';
import MemberLoginForm from './components/MemberLoginForm/MemberLoginForm';
import Register from './components/Register/Register';
import CheckVerificationCode from './components/Register/CheckVerificationCode';
import ForgetPassword from './components/ForgetPassword/ForgetPasswordForm';
import ResetPassword from './components/ResetEmailForm/ResetEmailForm';
import MemberCenter from './components/MemberCenter/MemberCenter';
import HomePage from './pages/UsedBooks/HomePage/HomePage';
import AddUsedBook from './pages/UsedBooks/UseBookCreate/index';
import UserBooksList from './pages/UsedBooks/UseBookList/index';
import PublicLayout from './layouts/PublicLayout';
import UsedBookAllBook from './pages/UsedBooks/UsedBookAllBook/UsedBookAllBook';
import Ecpay from './pages/Ecpay.tsx';
import LinePayPage from './pages/CartAll/confirm.tsx';
import CartPage from './pages/CartAll/CartItem.tsx';
import OrderConfirmation from './pages/CartAll/CheckoutForm.tsx';
import { Step1, Step2, Step3 } from './pages/CartAll/CheckoutForm.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/member-login' element={<MemberLoginForm />} />
      <Route path='/employee-login' element={<EmployeeLoginForm />} />
      <Route path='/Register' element={<Register />} />
      <Route
        path='/CheckVerificationCode'
        element={<CheckVerificationCode />}
      />
      <Route path='/ForgetPassword' element={<ForgetPassword />} />
      <Route path='/ResetPassword/:token' element={<ResetPassword />} />
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/MemberCenter' element={<MemberCenter />} />
        <Route path='/productSearch' element={<ProductSearchPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/list' element={<OrderConfirmation />}>
          <Route index element={<Step1 />} />
          <Route path='/list/Step2' element={<Step2 />} />
        </Route>
        <Route path='/linepay' element={<LinePayPage />} />
        <Route path='/add-used-book' element={<AddUsedBook />} />
        <Route path='/used-book-list' element={<UserBooksList userId={2} />} />
        <Route path='/usedBookAllBook' element={<UsedBookAllBook />} />
      </Route>
    </>
  )
);

export default router;
