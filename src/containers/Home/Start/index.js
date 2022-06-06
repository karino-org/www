// packege
import React from "react";

// styles
import styles from "./Start.module.sass";


const Start = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>از کجا شروع کنم ؟</h1>
            <div className={styles.imageWrapper}>
                <img src="/images/landing/art-3.png" alt="banner" />
            </div>
            <div className={styles.banner}>
                <button><img src="/images/landing/banner-1.png" alt="banner" /></button>
            </div>
        </div>
    );
};

export default Start;