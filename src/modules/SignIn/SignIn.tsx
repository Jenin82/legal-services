import style from "./SignIn.module.css";
import logo from "../../assests/signin.svg";

const SignIn = () => {
    return (
        <>
            <div className={style.wrapper}>
                <h1>Sign In</h1>
                <img src={logo} alt="" />
                <form action="">
                    <label htmlFor="">Email Address</label>
                    <input type="text" placeholder="Enter Email" />
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder="Enter Password" />
                    <div>
                        <div>
                            <input
                                type="checkbox"
                                className={style.checkbox}
                                name=""
                                id=""
                            />
                            <p>Remember me</p>
                        </div>
						<p>Forgot Password?</p>
                    </div>
					<button className={style.btn} type="submit">Sign In</button>
					<p>Don't have an account? Sign Up</p>
                </form>

            </div>
        </>
    );
};

export default SignIn;
