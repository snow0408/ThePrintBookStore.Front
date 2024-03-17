//react
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'; // 導入樣式表

//css
import './assets/css/css2.css'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.css'
import './assets/css/slick.css'
import './assets/css/slick-theme.css'
import './assets/css/ionrangeslider.css'
import './assets/css/app.css'
import './assets/css/smart_wizard_all.min.css'

//react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
//type

//react-router-dom
import { RouterProvider } from 'react-router-dom'

//router
import router from './Router'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <ProductItem product={product} />*/}
      <RouterProvider router={router} />      
    </QueryClientProvider>
  </React.StrictMode>,
)
