import React from 'react';

const PageLayout = ({Component,pageProps}) => {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
};

export default PageLayout;