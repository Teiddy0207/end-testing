// import React, { useState } from 'react';

// function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = (e) => {
//     e.preventDefault();
//     // Implement your registration logic here
//     console.log('Registering with:', email, password);
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <br />
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <br />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => { // hàm tạo sự kiện để có thể đăng kí
    e.preventDefault();
    // Thực hiện logic đăng ký ở đây (ví dụ: gửi yêu cầu đăng ký đến máy chủ)

    // Lưu trữ thông tin đăng ký (ví dụ: trong localStorage)
    const user = { email, password }; 
    localStorage.setItem('user', JSON.stringify(user));


    console.log('Registering with:', email, password);

    // Chuyển hướng đến trang đăng nhập
    navigate('/login');
  };

  return (
    <div className='mainRes'>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => 
          setEmail(e.target.value)} required />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br />  
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;