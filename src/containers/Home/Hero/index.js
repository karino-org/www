// package
import React from "react";

// styles
import styles from "./Hero.module.sass";


const Hero = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <h1>متخصصان حرفه ای و قابل اعتماد در</h1>
                <h1 className={styles.xxx}> بهداشت و نظافت</h1>
            </div>
            <div className={styles.heroWrapper}>
                <div className={styles.hero}>
                    <img src="/images/landing/art-1.png" />
                </div>
                <div>

                </div>
            </div>
            <div className={styles.bannerWrapper}>
                <img src="/images/landing/banner-2.png" alt="banner " />
                <img src="/images/landing/banner-3.png" alt="banner " />
            </div>
        </div>
    );
};

export default Hero;