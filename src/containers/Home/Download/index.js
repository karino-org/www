// packege
import React from "react";

// styles
import styles from "./Download.module.sass";
const Download = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <img src="/images/landing/art-2.png" alt="download" />
            </div>
            <div className={styles.title}>
                <h2>راحتی سفارش و ثبت درخواست را در اپلیکیشن ما تجربه کنید.</h2>
            </div>
            <div className={styles.detail}>
                <h3>اپلیکیشن ما را دانلود کنید و هر کاری را که دارید رایگان سفارش دهید!</h3>
            </div>
            <div className={styles.downloadBtn}>
                <div>
                    <button><img src="/images/landing/btn-1.png" alt="download button" /></button>
                    <button><img src="/images/landing/btn-2.png" alt="download button" /></button>
                </div>
                <div>
                    <button><img src="/images/landing/btn-4.png" alt="download button" /></button>
                    <button><img src="/images/landing/btn-3.png" alt="download button" /></button>
                </div>
            </div>
        </div>
    );
};

export default Download;