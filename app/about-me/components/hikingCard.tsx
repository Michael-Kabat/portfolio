import React from "react";
import Image from "next/image";
const HikingCard = () => {
    return (
        <div className="m-10 card card-side bg-base-200 shadow-sm ">
            <figure>
                {/* <img
                    src="images\standingOnLogPicture.jpg"
                    className="object-cover h-120 w-115 rounded-lg ml-4 mt-2 mr-2"
                    alt="Standing on a log over a lake"
                /> */}
                <Image
                    src="images\standingOnLogPicture.jpg"
                    className="object-cover h-120 w-115 rounded-lg ml-4 mt-2 mr-2"
                    alt="Standing on a log over a lake"
                />
            </figure>
            <div className="card-body">
                <Image
                    src="images\lakeSerenePicture.jpg"
                    className="flex-row-reverse object-cover h-59 w-100 rounded-lg shadow-lg mt-4"
                    alt="Lake Serene hike"
                />
                <Image
                    src="images\oregonHikePicture.jpg"
                    className="flex-row-reverse object-cover h-59 w-100 rounded-lg shadow-lg mb-2"
                    alt="Oregon hike"
                />
            </div>
            <Image
                src="images\cypressLandscapePicture.jpg"
                className="flex-row-reverse object-cover h-120 w-150 rounded-lg shadow-lg m-2 mr-4 mt-10"
                alt="Cypress Mountain hike"
            />
        </div>
    );
};

export default HikingCard;
