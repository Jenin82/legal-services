import styles from "./LandingPage.module.css";
import logo from "../../assests/logo.png"

const LandingPage = () => {
    return (
        <>
            <div className={styles.backgroundImage}></div>
            <div className={styles.signInContainer}>
                <div className={styles.heading}>
					<img src={logo} alt="" />
                    <h1>Legal</h1>
                    <h1 className={styles.bridge}>Bridge</h1>
                </div>
                <div className={styles.signInButtons}>
                    <button className={styles.redButton}>Sign In</button>
                    <button className={styles.whiteButton}>Sign Up</button>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
