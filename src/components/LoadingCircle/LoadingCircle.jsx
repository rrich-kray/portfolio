import styles from "./styles.module.scss"
import { React } from 'react'
import { Html } from "@react-three/drei"

const LoadingCircle = () => {
    return (
        <Html>   
            <div className={styles.loadingScreen}>
                <div className={styles.contentContainer}>
                    <div className={styles.square}>
                        <div className={styles.particle} style={{top: 0, right: 0}}></div>  
                        <div className={styles.particle} style={{top: 0, left: 0}}></div>  
                        <div className={styles.particle} style={{bottom: 0, right: 0}}></div>  
                        <div className={styles.particle} style={{bottom: 0, left: 0}}></div>  
                    </div>
                    <div className={styles.loadingText}>
                        <p>Loading</p>
                    </div>
                </div>
            </div>
        </Html>
    )
}

export default LoadingCircle