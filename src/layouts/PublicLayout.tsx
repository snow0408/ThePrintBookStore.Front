// PublicLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // 引入 Outlet
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';

const PublicLayout: React.FC = () => {
  return (
    <>
      <Menu />
      <main>
        <Outlet /> {/* 子組件會在這裡被渲染 */}
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
