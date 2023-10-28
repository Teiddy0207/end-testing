import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();// ngăn chặn k cho trình duyệt refresh lại trang 1 lần nữa, giúp tăng tốc độ duyệt web

  const registeredUser = JSON.parse(localStorage.getItem('user'));
  // lưu dữ liệu nguời đăng kí vào 1 mảng localstore k cố định , có thể  kiểm tra đăng nhập
//json.parse lưu trữ dưới dạng chuỗi
// getitem là để lấy giá trị của user
  if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
    // Đăng nhập thành công
    console.log('Login successful');

    // onLogin();
    onLogin(registeredUser.email);
    // Chuyển hướng đến trang chính
    navigate('/');
  } else {
    // Đăng nhập không thành công
    console.log('Login failed');
  }
  };
const backToHome =() => {
navigate ('/')
}
  return (
   
   
 
   <div style={{ textAlign: 'center', marginTop: '20px'}} className='cover' >
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ maxWidth: '300px', margin: 'auto' }} className='Incontainer'>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  style={{ width: '100%', marginBottom: '10px' }} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
        <br />
        <button type="submit"  style={{ width: '40%' , height:'3em' ,background: 'grey'}} className='login-btn'>Login</button>
     
      </form>
      <button  onClick={() => backToHome()}style={{ marginTop: '10px' }} > Back</button>
    </div>
    

  );
};

export default Login;


