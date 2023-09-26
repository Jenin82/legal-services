import styles from './HomePage.module.css'
import {BsPersonCircle} from 'react-icons/bs'
const HomePage = () => {
  return (
    <>
        <div className={styles.profile}><BsPersonCircle/></div>
    </>
  )
}

export default HomePage