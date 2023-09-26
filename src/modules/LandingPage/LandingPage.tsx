import styles from './LandingPage.module.css';

const LandingPage = () => {
    return <> 
           <div className={styles.signInContainer}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.signInContent}>
        <h1 className={styles.signInHeading}>Sign In</h1>
        <div className={styles.signInButtons}>
          <button className={styles.redButton}>Sign In</button>
          <button className={styles.whiteButton}>Cancel</button>
        </div>
      </div>
    </div>
    </>
};

export default LandingPage;
