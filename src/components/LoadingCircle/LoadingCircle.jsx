import styles from "./styles.module.scss"
import { React, useEffect, useRef } from 'react'
import { Html } from "@react-three/drei"

const LoadingCircle = ({isLoading, setLoading}) => {
    const loadingRef = useRef()

    setTimeout(() => {
        setLoading(false);
    }, 5000);

    console.log(isLoading)
    
    return ( 
        <div className={styles.loadingScreen} ref={loadingRef} style={{zIndex: isLoading ? 999 : -999 }}>
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
    )
}

export default LoadingCircle