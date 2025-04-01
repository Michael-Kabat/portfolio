import React from "react";

const ActivitiesCard = () => {
    return (
        <div className="flex-row-reverse m-10 card card-side bg-base-200 shadow-sm ">
            <figure>
                <img
                    src="images\jumpingSandDunePicture.PNG"
                    className="object-cover h-120 w-110 rounded-lg mt-4 mr-4"
                    alt="Jumping over a sand dune"
                />
            </figure>
            <div className="card-body">
                <img
                    src="images\rockClimbingHikePicture.jpg"
                    className="flex-row-reverse object-cover h-120 w-90 rounded-lg shadow-lg ml-3 mt-4"
                    alt="Rock climbing on a hike"
                />
            </div>
            <div>
                <img
                    src="images\volleyballServePicture.jpeg"
                    className="object-cover h-59 w-138 rounded-lg shadow-lg ml-4 m-2 mt-10"
                    alt="Volleyball serve"
                />

                <img
                    src="images\highfivingSoccerPicture.jpg"
                    className="float-left object-cover h-59 w-72 rounded-lg shadow-lg ml-4"
                    alt="Playing soccer"
                />
                <img
                    src="images\toughMudderWaterPicture.jpg"
                    className="float-right object-cover h-59 w-63 rounded-lg shadow-lg"
                    alt="Tough Mudder 5k"
                />
            </div>
        </div>
    );
};

export default ActivitiesCard;
