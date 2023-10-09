//// - 1
import LoginForm from "components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async values => {
    const response = await FakeAPI.login(values);
    if (response.success) {
      navigate("/profile", { replace: true });
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

//// - 2
// import LoginForm from 'components/LoginForm/LoginForm';
// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';

// export const Login = () => {
//     const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  
//     const handleSubmit = async values => {
//       const response = await FakeAPI.login(values);
//       setIsLoginSuccess(response.success);
//     };
  
//     if (isLoginSuccess) {
//       return <Navigate to="/profile" replace />;
//     }
  
//     return (
//       <div>
//         <h1>Login page</h1>
//         <LoginForm onSubmit={handleSubmit} />
//       </div>
//     );
//   };

// export default Login;
