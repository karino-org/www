// package
import React from "react";

// styles
import styles from "./Home.module.sass";
import cn from "classnames";

// components
import Download from "./Download";
import Start from "./Start";
import Hero from "./Hero";

const Home = () => {
    return (
        <div className="container">
            <Hero />
            <Start />
            <Download />
        </div>
    );
};

export default Home;