// package
import React from "react";
import Icon from '../Icon';

// styles
import cn from "classnames";
import styles from "./Header.module.sass";

const Header = () => {
    return (
        <div className={cn("container",styles.wrapper)}>
            <div className={styles.phone}>
                <a className={styles.downloadBtn}  href="#download" ><Icon name="download" size="20"/> دانلود اپلیکیشن </a>
                <p className={cn("sub-1" , styles.phoneNumber)}><Icon name="phone" size="20" />۰۲۱ - ۲۴۴ ۳۴ ۴۳</p>
            </div>
            <div className={styles.logoWrapper}>
                <img src="/images/logo.png" alt="logo" />
            </div>
        </div>
    );
};

export default Header;