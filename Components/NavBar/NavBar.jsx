import React, { useState,useEffect } from 'react'

import { SiConsul } from 'react-icons/si'
import { BsPhoneVibrate } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'
 import {  Link,useNavigate } from 'react-router-dom';
 //import translate from 'google-translate-api';



import logo from '../../assets/logo.jpg'

const NavBar = () => {

  const [active, setActive] = useState('navBarMenu')
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false); 
  const [language, setLanguage] = useState('en'); // Mặc định là tiếng Anh
  const navigate = useNavigate();
  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập và cập nhật nội dung
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoggedInUser(user.email);
    }
  }, []);
  
  const showNavbar = () => {
    setActive('navBarMenu showNavBar')
  }

  const removeNavbar = () => {
    setActive('navBarMenu')
  }

  const handleLogout = () => {
    // Xử lý đăng xuất
    setLoggedInUser(null);

    // Chuyển hướng về trang đăng nhập sau khi đăng xuất
    navigate('/');
  };
  const handleSupportClick = () => {
    // Hiển thị số điện thoại khi nhấn vào "Support"
    setShowPhoneNumber(!showPhoneNumber);
  };
  const handleClosePhoneNumber = () => {
    // Ẩn số điện thoại khi người dùng nhấn nút đóng
    setShowPhoneNumber(false);
  };
  const scrollBack = () => {
    // Cuộn lên đầu trang
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Tuỳ chọn: thêm hiệu ứng cuộn mượt mà
    });
  };

  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div onClick={scrollBack}>
          <SiConsul className='icon' />
        </div>
        <div className='none flex'>
          <li className='flex'  onClick={handleSupportClick} > <BsPhoneVibrate className='icon' /> Support</li>
          
          <li className='flex'> <AiOutlineGlobal className='icon' /> Langueges</li>
        </div>

        <div className="atb flex">
        {loggedInUser ? (
            <>
              <span>Welcome, {loggedInUser}!</span>
              <span  onClick={handleLogout}>Log out </span>
              </>
          ) : (
            <>
       <Link to = '/login'>Dang nhap</Link>

          {/* <span>Sign out</span> */}
          <Link to = '/register'>Dang ki</Link>
          </>
          )}
        </div>


      </div>
      <div className=' navBarTwo flex'>
        <div className="logoDiv">
          <img src={logo} className='Logo' />
        </div>


        <div className={active} >
          <ul className='menu flex'>
            <li onClick={removeNavbar} className='listItem'>
              Home
            </li>
            <li onClick={removeNavbar} className='listItem'>
              About
            </li>
            <li onClick={removeNavbar} className='listItem'>
              Offers
            </li>
            <li onClick={removeNavbar} className='listItem'>
              Seats
            </li>
            <li onClick={removeNavbar} className='listItem'>
              Destination
            </li>
          </ul>

          <button className='btn flex btnOne'>
            Contact
          </button>
           </div>
          <button className='btn flex btnTwo'>
            Contact
          </button>

          <div onClick={showNavbar} className="toggleIcon">
            <CgMenuGridO className='icon' />
          </div>

   
      </div>
      {showPhoneNumber && (
         <div className='support-phone-number'>
         <p onClick={handleClosePhoneNumber} > Support Phone Number: 19000000</p>
         
       </div>
      )}
    
    </div>
  )
}

export default NavBar;