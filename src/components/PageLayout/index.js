// package
import React from "react";

// styles
import styles from "./PageLayout.module.sass";

// Components
import Header from "../Header";
import Footer from "../Footer";

const PageLayout = ({Component,pageProps}) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
};

export default PageLayout;