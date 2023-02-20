import React from "react";
import styles from "./MainPage.module.scss";
import { Navigation } from "../../Navigation/Navigation";
import Fundamentals from "../../Fundamentals/Fundamentals";
import HealthCare from "../../HealthCare/HealthCare";
import Introduce from "../../Introduce/Introduce";
import { WhenHelp } from "src/Components/WhenHelp/WhenHelp";
import { Footer } from "src/Components/Footer/Footer";

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <Navigation />
            <HealthCare />
            <Introduce />
            <Fundamentals />
            <WhenHelp />
            <Footer />
        </div>
    );
};

export default MainPage;
