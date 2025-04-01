import React from "react";

const HikingHeroCard = () => {
    return (
        <div className="m-10 card card-side bg-base-200 shadow-sm ">
            <figure>
                <img
                    src="images\standingOnLogPicture.jpg"
                    className="object-cover h-120 w-115 rounded-lg ml-4 mt-2 mr-2"
                />
            </figure>
            <div className="card-body">
                <img
                    src="images\lakeSerenePicture.jpg"
                    className="flex-row-reverse object-cover h-59 w-100 rounded-lg shadow-lg mt-4"
                />
                <img
                    src="images\oregonHikePicture.jpg"
                    className="flex-row-reverse object-cover h-59 w-100 rounded-lg shadow-lg mb-2"
                />
            </div>
            <img
                src="images\cypressLandscapePicture.jpg"
                className="flex-row-reverse object-cover h-120 w-150 rounded-lg shadow-lg m-2 mr-4 mt-10"
            />
        </div>
    );
};

export default HikingHeroCard;
