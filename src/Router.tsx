import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// 舊元件
import EmployeeLoginForm from "./components/EmployeeLoginForm/EmployeeLoginForm";
import MemberLoginForm from "./components/MemberLoginForm/MemberLoginForm";
import Register from "./components/Register/Register";
import CheckVerificationCode from "./components/Register/CheckVerificationCode";
import ForgetPassword from "./components/ForgetPassword/ForgetPasswordForm";
import ResetPassword from "./components/ResetEmailForm/ResetEmailForm";
import HomePage from "./pages/UsedBooks/HomePage/HomePage";
import AddUsedBook from "./pages/UsedBooks/UseBookCreate/index";
import UserBooksList from "./pages/UsedBooks/UseBookList/index";
import PublicLayout from "./layouts/PublicLayout";
import UsedBookAllBook from "./pages/UsedBooks/UsedBookAllBook/UsedBookAllBook";
import Ecpay from "./pages/Ecpay.tsx";
import LinePayPage from "./pages/CartAll/confirm.tsx";
import CartPage from "./pages/CartAll/CartItem.tsx";
import OrderConfirmation from "./pages/CartAll/CheckoutForm.tsx";
import { Step1, Step2, Step3 } from "./pages/CartAll/CheckoutForm.tsx";
import UsedBookInside from "./pages/UsedBookInside/UsedBookInside.tsx";
import UsedBooksOrderConfirmation from "./pages/UsedBooksOrderPage/UsedBooksOrderConfirmation.tsx";
import UsedBooksOrder from "./pages/UsedBooksOrderPage/UsedBooksOrder.tsx";
import UsedBooksCart from "./pages/UsedBooksOrderPage/UsedBooksCart";
import UsedBooksCheckOutForm from "./pages/UsedBooksOrderPage/UsedBooksCheckOutForm.tsx";
import {
  CheckOutStep1,
  CheckOutStep2,
} from "./pages/UsedBooksOrderPage/UsedBooksCheckOutForm.tsx";
import LinePay from "./pages/UsedBooksOrderPage/confirm.tsx";
import MemberCenter from "./components/MemberCenter/MemberCenter.tsx";
//componets
import App from "./App.tsx";
import Error404Page from "./pages/ErrorPage/Error404Page.tsx";
import OtherErrorPage from "./pages/ErrorPage/OtherErrorPage.tsx";
import Test from "./test.tsx";
import { lazy } from "react";
const OrderPage = lazy(() => import("./pages/OrderAll/Orderpage.tsx"));

const ProductSearchPage = lazy(
  () => import("./pages/ProductSearchPage/ProductSearchPage.tsx")
);

const PhysicalEBookHomePage = lazy(
  () => import("./pages/PhysicalEBookHomePage/PhysicalEBookHomePage.tsx")
);

const ProductDetailPage = lazy(
  () => import("./pages/ProductDetailPage/ProductDetailPage.tsx")
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<OtherErrorPage />}>
        <Route index element={<PhysicalEBookHomePage />} />
        <Route
          path="ProductDetail/:productId"
          element={<ProductDetailPage />}
        />
        <Route path="ProductSearch" element={<ProductSearchPage />} />
        <Route path="/MemberCenter" element={<MemberCenter />} />
        <Route path="/productSearch" element={<ProductSearchPage />} />
        //todo會員Id
        <Route path="/order" element={<OrderPage memberId={2} />} />


        <Route path="/cart" element={<CartPage />} />
        <Route path="/list" element={<OrderConfirmation />}>
          <Route index element={<Step1 />} />
          <Route path="/list/Step2" element={<Step2 />} />
        </Route>
        <Route path="/linepay" element={<LinePayPage />} />
      </Route>

      <Route path="/member-login" element={<MemberLoginForm />} />
      <Route path="/employee-login" element={<EmployeeLoginForm />} />
      <Route path="/Register" element={<Register />} />
      <Route
        path="/CheckVerificationCode"
        element={<CheckVerificationCode />}
      />
      <Route path="/ForgetPassword" element={<ForgetPassword />} />
      <Route path="/ResetPassword/:token" element={<ResetPassword />} />
      <Route path="/usedBook" element={<PublicLayout />}>
        <Route index element={<HomePage />} />

        <Route path="/usedBook/add-used-book" element={<AddUsedBook />} />
        <Route
          path="/usedBook/used-book-list"
          element={<UserBooksList userId={2} />}
        />
        <Route path="/usedBook/usedBookAllBook" element={<UsedBookAllBook />} />
        <Route path="/usedBook/:UsedBookId" element={<UsedBookInside />} />
        <Route
          path="/usedBook/usedBookCart"
          element={<UsedBooksCart />}
        ></Route>
        <Route path="/usedBook/checkOut" element={<UsedBooksCheckOutForm />}>
          <Route index element={<CheckOutStep1 />} />
          <Route path="/usedBook/checkOut/Step2" element={<CheckOutStep2 />} />
        </Route>
        <Route path="/usedBook/usedBookPayment/linepay" element={<LinePay />} />
        <Route
          path="/usedBook/UsedBooksOrderConfirmation"
          element={<UsedBooksOrderConfirmation />}
        ></Route>
        <Route
          path="/usedBook/usedBookOrder"
          element={<UsedBooksOrder />}
        ></Route>
      </Route>
      <Route path="*" element={<Error404Page />} />
    </>
  )
);

export default router;
