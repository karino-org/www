// packege
import React from "react";

// styles
import styles from "./Start.module.sass";
import cn from "classnames";

const Start = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>از کجا شروع کنم ؟</h1>
            <div>
                <div className={styles.imageWrapper}>
                    <img src="/images/landing/art-3.png" alt="banner" />
                </div>
                <div className={styles.resStep}>
                    <div className={cn(styles.circle)}>۱</div>
                    <div className={styles.line}></div>
                    <div className={styles.box}>
                        <p className={cn("sub-2",styles.boxTitle)}>ثبت درخواست خدمات از استادکار</p>
                        <p className={cn(styles.description,"body-2")}>
                            سفارش خدمات مورد نظرت رو ثبت کن.
                            لیست قیمت اولیه رو بررسی کن.
                            نظرها و امتیازهای متخصصان رو ببین.
                        </p>
                        <div className={styles.boxImage}>
                            <img src="/images/landing/art-4.png" alt="art Picture" />
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={cn(styles.circle)}>۲</div>
                    <div className={styles.line}></div>
                    <div className={styles.box}>
                        <p className={cn("sub-2",styles.boxTitle)}>ثبت درخواست خدمات از استادکار</p>
                        <p className={cn(styles.description,"body-2")}>
                            سفارش خدمات مورد نظرت رو ثبت کن.
                            لیست قیمت اولیه رو بررسی کن.
                            نظرها و امتیازهای متخصصان رو ببین.
                        </p>
                        <div className={styles.boxImage}>
                            <img src="/images/landing/art-4.png" alt="art Picture" />
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={cn(styles.circle)}>۳</div>
                    <div className={styles.line}></div>
                    <div className={styles.box}>
                        <p className={cn("sub-2",styles.boxTitle)}>ثبت درخواست خدمات از استادکار</p>
                        <p className={cn(styles.description,"body-2")}>
                            سفارش خدمات مورد نظرت رو ثبت کن.
                            لیست قیمت اولیه رو بررسی کن.
                            نظرها و امتیازهای متخصصان رو ببین.
                        </p>
                        <div className={styles.boxImage}>
                            <img src="/images/landing/art-4.png" alt="art Picture" />
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={cn(styles.circle)}>۴</div>
                    <div className={styles.line}></div>
                    <div className={styles.box}>
                        <p className={cn("sub-2",styles.boxTitle)}>ثبت درخواست خدمات از استادکار</p>
                        <p className={cn(styles.description,"body-2")}>
                            سفارش خدمات مورد نظرت رو ثبت کن.
                            لیست قیمت اولیه رو بررسی کن.
                            نظرها و امتیازهای متخصصان رو ببین.
                        </p>
                        <div className={styles.boxImage}>
                            <img src="/images/landing/art-4.png" alt="art Picture" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.banner}>
                <button><img src="/images/landing/banner-1.png" alt="banner" /></button>
            </div>
        </div>
    );
};

export default Start;