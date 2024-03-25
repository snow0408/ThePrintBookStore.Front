import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

// 舊元件
import App from './App';
import ProductSearchPage from './pages/ProductSearchPage/ProductSearchPage';
import OrderConfirmation, {
  Step1,
  Step2,
  Step3
} from './pages/CartPage/CheckoutForm';
import EmployeeLoginForm from './components/EmployeeLoginForm/EmployeeLoginForm';
import MemberLoginForm from './components/MemberLoginForm/MemberLoginForm';
import Register from './components/Register/Register';
import CheckVerificationCode from './components/Register/CheckVerificationCode';
import ForgetPassword from './components/ForgetPassword/ForgetPasswordForm';
import ResetPassword from './components/ResetEmailForm/ResetEmailForm';
import MemberCenter from './components/MemberCenter/MemberCenter';
import HomePage from './pages/HomePage/HomePage';
import AddUsedBook from './pages/UseBookCreate/index';
import UserBooksList from './pages/UseBookList/index';
import PublicLayout from './layouts/PublicLayout';

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
        <Route path='/list' element={<OrderConfirmation />}>
          <Route index element={<Step1 />} />
          <Route path='Step2' element={<Step2 />} />
          <Route path='Step3' element={<Step3 />} />
        </Route>
        <Route path='/add-used-book' element={<AddUsedBook />} />
        <Route path='/used-book-list' element={<UserBooksList userId={2} />} />
      </Route>
    </>
  )
);

export default router;
