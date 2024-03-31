import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainHeader: React.FC = () => {
  return (
    <Dropdown as='li' className='nav-item dropdown profile-dropdown ms-4'>
      <Dropdown.Toggle as='a' className='nav-link' id='dropdown-profile'>
        <img src='src/assets/picture/profile1.jpg' alt='Profile' />
        <div className='profile-info'>
          <h6 className='title'>Brian</h6>
          <span>info@gmail.com</span>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu-end'>
        <Dropdown.Header>
          <h6>Brian</h6>
          <span>info@gmail.com</span>
        </Dropdown.Header>
        <Dropdown.Item href='MemberCenter.html'>會員中心</Dropdown.Item>
        <Dropdown.Item href='shop-cart.html'>My Order</Dropdown.Item>
        <Dropdown.Item href='wishlist.html'>Wishlist</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href='shop-login.html'>Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MainHeader;
