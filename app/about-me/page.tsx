import React from "react";
import Navbar from "../components/navbar";
import HikingHeroCard from "./components/hikingHeroCard";
import ActivitiesHeroCard from "./components/activitesHeroCard";

const AboutMePage = () => {
    return (
        <>
            <Navbar />
            <HikingHeroCard />
            <ActivitiesHeroCard />
        </>
    );
};

export default AboutMePage;
