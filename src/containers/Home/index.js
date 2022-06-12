// package
import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindiwsSize";

// styles
import styles from "./Home.module.sass";
import cn from "classnames";

// components
import Download from "./Download";
import Start from "./Start";
import Hero from "./Hero";
import Icon from "../../components/Icon";
import Head from "next/head";

const Home = () => {
    
    const navData = [
        {
            name: "حمل و نقل",
            icon: "/images/icons/Transportation.svg"
        },
        {
            name: "بهداشت و سلامت",
            icon: "/images/icons/Health.svg"
        },
        {
            name: "خدمات اداری",
            icon: "/images/icons/OfficJobs.svg"
        },
        {
            name: "بهداشت و نظافت",
            icon: "/images/icons/Sweeping.svg"
        },
        {
            name: "تاسیسات و ساختمان",
            icon: "/images/icons/ConstructionBuild.svg"
        },
        {
            name: "لوازم خانگی",
            icon: "/images/icons/Refrigerator.svg"
        },
        {
            name: "دکوراسیون",
            icon: "/images/icons/Sofa.svg"
        },
        {
            name: "نرم افزار و کامپیوتر",
            icon: "/images/icons/Adaptive.svg"
        },
        {
            name: "وسایل نقلیه",
            icon: "/images/icons/SportsCar.svg"
        },
    ]
    const handler = () => {
        setNavOpener(!navOpener)
        if(window.width > 1023 ){
            if(service === "تمام خدمات") setService("بستن")
            if(service === "بستن" ) setService("تمام خدمات")
        }
    }
    const [navOpener , setNavOpener] = useState(true);
    const window = useWindowSize();
    const [service,setService] = useState("تمام خدمات");
    useEffect(() => {
        if(window.width < 1023){
            setService("تمام خدمات")
        }
        if(!navOpener && window.width > 1023){
            setService("بستن")
        }
    },[window]);
    
    return (
        <>
            <Head>
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <title>استاد کار | Ostad Kar</title>
            </Head>
            <div className="container">
                <Hero />
                <Start />
                <Download />
            </div>
            <div className={styles.wrapper}>
                <div className={cn(styles.navBarWrapper , navOpener ? styles.closeNavBarWrapper:styles.openNavBarWrapper)}>
                    <div className={navOpener ? styles.closetitleWrapper : styles.titleWrapper}>
                        <div className={cn(navOpener ? styles.openNavBar : styles.closeNavbar)}>
                            {
                                !navOpener && 
                                <Icon name="arrow" size="12" className={styles.arrow} />
                            }
                                <button onClick={handler} className={"sub-1"}>{service}</button>
                            {
                                navOpener &&
                                <Icon name="arrow" size="12" className={styles.arrow2}  />
                            }
                        </div>
                        {
                            !navOpener &&
                            <button onClick={() => setNavOpener(true)} className={cn(styles.backBtn)}>
                                <Icon name="backBtn" size="25" />
                            </button>
                        }
                    </div>
                    <div className={navOpener ? styles.openNavItemWrapper : styles.closeNavItemWrapper}>
                        {
                            navData.map((x) =>(
                            <button className={styles.navItem}>
                                <img src={x.icon} /> 
                                <p className="body-1">{x.name}</p>
                            </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;