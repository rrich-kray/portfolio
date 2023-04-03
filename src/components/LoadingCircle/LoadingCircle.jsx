import styles from "./styles.module.scss"
import { React } from 'react'

const LoadingCircle = () => {
    return (
        <div className={styles.loadingScreen}>
            <div className={styles.contentContainer}>
                <div className={styles.square}>
                    <div className={styles.particle}></div>     
                </div>
                <div className={styles.loadingText}>
                    <p>Loading</p>
                </div>
            </div>
        </div>
    )
}

export default LoadingCircle