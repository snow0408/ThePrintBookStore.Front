// PublicLayout.tsx
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'; // 引入 Outlet
import Menu from '../components/Menu/MenuNew';
import Footer from '../components/Footer/Footer';
import Preloader from '../components/Preloader/Preloader';

const PublicLayout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟加载过程，或实现真实的加载逻辑
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <header>
            <Menu />
          </header>
          <section>
            <Outlet /> {/* 子組件會在這裡被渲染 */}
          </section>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
};

export default PublicLayout;
