import style from "./SignIn.module.css";
import logo from "../../assests/signin.svg";
import { useState } from "react"; // Import useState for handling form input state
import { notify, success } from "../../Components/Toast/Toastify";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
 

  const [email, setEmail] = useState(""); // Add state for email
  const [password, setPassword] = useState(""); // Add state for password

  const handleSubmit = async () => {
    

    if (!email || !password) {
      return notify();
    }

    if (
      email === localStorage.getItem("userName") &&
      password === localStorage.getItem("password")
    ) {
      success();
      localStorage.setItem("loggedIn", "true");
      setTimeout(() => {     
      }, 2000);
    } else {
      notify();
    }
  };

  return (
    <>
      <div className={style.wrapper}>
        <h1>Sign In</h1>
        <img src={logo} alt="" />
        <form action="" className={style.form} onSubmit={handleSubmit}>
          <div className={style.input}>
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.input}>
            <label htmlFor="password">Password</label>
            <input
              type="password" 
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={style.formBottom}>
            <div className={style.checkbox}>
              <input
                type="checkbox"
                className={style.checkbox}
                name=""
                id=""
              />
              <label htmlFor="remember">Remember me</label> 
            </div>
            <p>Forgot Password?</p>
          </div>
          <button className={style.btn} type="submit" onClick={() =>{
                        navigate(`/home`);
                    }
                       
                    }>
            Sign In
          </button>
          <p>Don't have an account? Sign Up</p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
