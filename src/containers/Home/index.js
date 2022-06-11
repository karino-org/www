// package
import React, { useState } from "react";

// styles
import styles from "./Home.module.sass";
import cn from "classnames";

// components
import Download from "./Download";
import Start from "./Start";
import Hero from "./Hero";
import Icon from "../../components/Icon";

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
        if(service === "تمام خدمات") setService("بستن")
        if(service === "بستن" ) setService("تمام خدمات")
    }
    const [navOpener , setNavOpener] = useState(false);
    const [service,setService] = useState("تمام خدمات");
    return (
        <>
            <div className="container">
                <Hero />
                <Start />
                <Download />
            </div>
            <div className={styles.wwwwww}>
                <div className={cn(styles.navBarWrapper , navOpener ? styles.closeNavBarWrapper:styles.openNavBarWrapper)}>
                    <div className={cn(navOpener ? styles.openNavBar : styles.closeNavbar)}>
                        {!navOpener && <Icon name="arrow" size="12" className={styles.arrow} />}
                        <button onClick={handler} className={"sub-1"}>{service}</button>
                        {navOpener && <Icon name="arrow" size="12"  />}
                    </div>
                    <div className={navOpener ? styles.openNavItemWrapper : styles.closeNavItemWrapper}>
                        {
                            navData.map((x) =>(
                            <div className={styles.navItem}>
                                <img src={x.icon} /> 
                                <p className="body-1">{x.name}</p>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;