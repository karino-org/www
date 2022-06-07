// package
import React from "react";
import Link from "next/link";
import Icon from "../Icon";

// styles
import cn from "classnames"
import styles from "./Footer.module.sass";


const Footer = () => {
    return (
        <footer className={cn("container",styles.wrapper)}>
            <div className={styles.bodyWrapper}>
                <div className={styles.description}>
                    <img src="/images/logo.png" alt="logo"/>
                    <p className="body-1">
                        سایت ما مرجع آنلاین خدمات است؛ مکانی برای یافتن متخصصان خوش‌نام که دسترسی به متخصصان
                         را آسان می‌کند و با شفافیت قیمت‌ها و بالا بردن کیفیت خدمات، موجب رضایت خاطر شما می‌شود.
                          با سفارش آنلاین خدمات و دسترسی سریع به هزاران متخصص قابل اعتماد، تجربه متفاوت و هوشمندانه‌ای از
                           دریافت صدها خدمت منزل، ساختمان و خودرو خواهید داشت. استادکار، انتخابی برای آسایش زندگی شماست.
                        </p>
                </div>
                <div className={styles.linkWrapper}>
                    <p className="sub-1">لینک های مهم</p>
                    <ul className={styles.link}>
                        <li><Link href="#"><a>خدمات</a></Link></li>
                        <li><Link href="#"><a>دریافت اپلیکیشن از بازار</a></Link></li>
                        <li><Link href="#"><a>دریافت مستقیم اپلیکیشن </a></Link></li>
                        <li><Link href="#"><a>دریافت اپلیکیشن از گوگل پلی</a></Link></li>
                        <li><Link href="#"><a>دریافت اپلیکیشن از گوگل اپ استور</a></Link></li>
                    </ul>
                </div>
                <div className={styles.contactWrapper}>
                    <p className="sub-1">تماس با ما</p>
                    <ul className={styles.contact}>
                        <li>آدرس: خیابان ولیعصر، بالاتر از پارک ساعی، کوچه ساعی دوم، پلاک ۳۱، ساختمان </li>
                        <li>ساعی، طبقه چهارم، کد پستی : 1511934619</li>
                        <li>پشتیبانی و جذب متخصص: 92009019-021</li>
                        <li>info@ostadkar.ir</li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyrightWrapper}>
                <div className={styles.socialmedia}>
                    <Icon name="facebook" size="30" />
                    <Icon name="socail" size="30" />
                    <Icon name="whatsapp" size="30" />
                </div>
                <div>
                    <p className="sub-2">.تمام حقوق مادی و معنوی این وب سایت محفوظ می باشد</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;