import React from "react";
import Links from "./links";

const HeroCard = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="/images/aboutMePicture.jpg"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold font-mono">
                        Michael Kabat
                    </h1>
                    <div className="flex w-full flex-col text-lg">
                        <div className="divider divider-start text-red-600">
                            Computer Science
                        </div>
                        <div className="divider divider-neutral font-bold text-black">
                            at
                        </div>
                        <div className="divider divider-end text-red-600">
                            Carleton University
                        </div>
                    </div>
                    <Links />
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
