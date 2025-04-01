import React from "react";

const ActivitiesHeroCard = () => {
    return (
        <div className="flex-row-reverse m-10 card card-side bg-base-200 shadow-sm ">
            <figure>
                <img
                    src="images\jumpingSandDunePicture.PNG"
                    className="object-cover h-120 w-110 rounded-lg mt-4 mr-4"
                />
            </figure>
            <div className="card-body">
                <img
                    src="images\rockClimbingHikePicture.jpg"
                    className="flex-row-reverse object-cover h-120 w-90 rounded-lg shadow-lg ml-3 mt-4"
                />
            </div>
            <div>
                <img
                    src="images\volleyballServePicture.jpeg"
                    className="object-cover h-59 w-138 rounded-lg shadow-lg ml-4 m-2 mt-10"
                />

                <img
                    src="images\highfivingSoccerPicture.jpg"
                    className="float-left object-cover h-59 w-72 rounded-lg shadow-lg ml-4"
                />
                <img
                    src="images\toughMudderWaterPicture.jpg"
                    className="float-right object-cover h-59 w-63 rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default ActivitiesHeroCard;
