import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

//componets
import App from './App'
import ProductSearchPage from './pages/ProductSearchPage/ProductSearchPage';
import OrderConfirmation, { Step1, Step2, Step3 } from './pages/CartPage/CheckoutForm';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
        <Route path="/productSearch" element={<ProductSearchPage />}/>
        <Route path='/list' element={<OrderConfirmation />}>
            <Route index element={<Step1 />} />
            <Route path='/list/Step2' element={<Step2 />} />
            <Route path='/list/Step3' element={<Step3 />} />
          </Route>
        </Route>
    )
);

export default router;