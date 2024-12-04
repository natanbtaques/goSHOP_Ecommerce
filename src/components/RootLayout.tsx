import React, { ReactElement } from "react";
import BottomHeader from "./header/BottomHeader"
import Footer from "./Footer";
import Header from "./header/Header";


interface Props { children: ReactElement }
const RootLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <BottomHeader />

            {children}
            <Footer />
        </>

    );
}

export default RootLayout;
