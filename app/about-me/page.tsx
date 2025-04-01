import React from "react";
import Navbar from "../components/navbar";
import HikingCard from "./components/hikingCard";
import ActivitiesCard from "./components/activitesCard";
import OttawaCard from "./components/ottawaCard";

const AboutMePage = () => {
    return (
        <>
            <Navbar />
            <HikingCard />
            <OttawaCard />
            <ActivitiesCard />
        </>
    );
};

export default AboutMePage;
