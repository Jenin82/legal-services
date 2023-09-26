import style from "./SignUp.module.css";

const SignUp = () => {
    return (
        <>
            <div className={style.wrapper}>
                <h1>Sign Up</h1>
                <form action="" className={style.form}>
                    <div className={style.input}>
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Enter Value" />
                    </div>
                    <div className={style.input}>
                        <label htmlFor="">Mobile Number</label>
                        <input type="number" placeholder="Enter Value" />
                    </div>
                    <div className={style.input}>
                        <label htmlFor="">Email Address</label>
                        <input type="email" placeholder="Enter Email" />
                    </div>
                    <div className={style.input}>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Enter Password" />
                    </div>
                    <div className={style.input}>
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" placeholder="Enter Password" />
                    </div>
                    <button className={style.btn} type="submit">
                        Sign Up
                    </button>
                    <p>Don't have an account? Sign Up</p>
                </form>
            </div>
        </>
    );
};

export default SignUp;
