// package
import React, { useState } from "react";
import Slider from 'react-slick';

// styles
import styles from "./Hero.module.sass";

// data
import { Health,Doctor,CC,DD,EE,FF,GG } from "./serviceData";
import { settings } from "./setting";

const Hero = () => {
    const [activeService , setActiveService] = useState("Health");

    return (
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <h1> متخصصان حرفه ای و قابل اعتماد در </h1>
                <div className={styles.headerAnimation}>
                    <h1 className={styles.Animation1}> بهداشت و نظافت</h1>
                    <h1 className={styles.Animation2}>اسباب کشی و باربری</h1>
                    <h1 className={styles.Animation3}>لوازم پزشکی</h1>
                    <h1 className={styles.Animation4}>تاسیسات ساختمان</h1>
                </div>
            </div>
            <div className={styles.heroWrapper}>
                <div className={styles.hero}>
                    <img src="/images/landing/art-1.png" alt="hero" />
                </div>
                <div className={styles.sliderWrapper}>
                    <div className={styles.servicesWrapper}>
                        <h5>دنبال چه خدماتی هستی؟</h5>
                        <div className={styles.services}>
                            <button
                                className={activeService === "Health" ? styles.activeService : styles.serviceTitle}
                                onClick={() => setActiveService("Health")}
                            >
                                <p className="sub-2">بهداشت و نظافت <span>٢٣</span> </p>
                            </button>
                            <button
                                className={activeService === "Doctor" ? styles.activeService : styles.serviceTitle}
                                onClick={() => setActiveService("Doctor")}
                            >
                                <p className="sub-2">سلامت و پزشکی <span>۱۰</span></p>
                            </button>
                            <button
                                className={activeService === "c" ? styles.activeService : styles.serviceTitle}
                                onClick={() => setActiveService("c")}
                            >
                                <p className="sub-2">تاسیسات و ساختمان <span>۱٥</span></p>
                            </button>
                            <button
                                className={activeService === "d" ? styles.activeService : styles.serviceTitle}
                                onClick={() => setActiveService("d")}
                            >
                                <p className="sub-2">لوله کشی<span>۲۰</span></p>
                            </button>
                            <button
                                className={activeService === "e" ? styles.activeService : styles.serviceTitle}
                                onClick={() => setActiveService("e")}
                            >
                                <p className="sub-2">وسایل نقلیه<span>۱۰</span></p>
                            </button>
                            <button
                                className={activeService === "f" ? styles.activeService : styles.serviceTitle}
                                onClick={() => setActiveService("f")}
                            >
                                <p className="sub-2">برقکاری<span>۴</span></p>
                            </button>
                            <button
                                className={activeService === "g" ? styles.activeService : styles.serviceTitle}
                                onClick={() => setActiveService("g")}
                            >
                                <p className="sub-2">زیبایی زنان<span>۳</span></p>
                            </button>
                        </div>
                    </div>
                    <div className={styles.serviceSlider}>
                    <Slider className="bid-slider" {...settings}>
                        {
                            activeService === "Health"&& Health.map((x) => (
                                <div className={styles.sliderItem}>
                                    <img src={x.image} />
                                    <p>{x.name}</p>
                                </div>
                            ))
                        }
                        {
                            activeService === "Doctor"&& Doctor.map((x) => (
                                <div className={styles.sliderItem}>
                                    <img src={x.image} />
                                    <p>{x.name}</p>
                                </div>
                            ))
                        }
                        {

                            activeService === "c"&& CC.map((x) => (
                                <div className={styles.sliderItem}>
                                    <img src={x.image} />
                                    <p>{x.name}</p>
                                </div>
                            ))
                        }
                        {
                            activeService === "d"&& DD.map((x) => (
                                <div className={styles.sliderItem}>
                                    <img src={x.image} />
                                    <p>{x.name}</p>
                                </div>
                            ))
                        }
                        {

                            activeService === "e"&& EE.map((x) => (
                                <div className={styles.sliderItem}>
                                    <img src={x.image} />
                                    <p>{x.name}</p>
                                </div>
                            ))
                        }
                        {

                            activeService === "f"&& FF.map((x) => (
                                <div className={styles.sliderItem}>
                                    <img src={x.image} />
                                    <p>{x.name}</p>
                                </div>
                            ))
                        }
                        {

                            activeService === "g" && GG.map((x) => (
                                <div className={styles.sliderItem}>
                                    <img src={x.image} />
                                    <p>{x.name}</p>
                                </div>
                            ))
                        }
                        
                    </Slider>
                    </div>
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