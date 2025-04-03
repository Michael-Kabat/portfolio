import React from "react";
import Image from "next/image";
import LogPicture from "../../../public/images/standingOnLogPicture.jpg";
import LakeSerenePicture from "../../../public/images/lakeSerenePicture.jpg";
import OregonHikePicture from "../../../public/images/oregonHikePicture.jpg";
import CypressPicture from "../../../public/images/cypressLandscapePicture.jpg";
const HikingCard = () => {
    return (
        <div className="m-10 card card-side bg-base-200 shadow-sm ">
            <figure>
                <Image
                    src={LogPicture}
                    className="object-cover h-120 w-115 rounded-lg ml-4 mt-2 mr-2"
                    alt="Standing on a log over a lake"
                />
            </figure>
            <div className="card-body">
                <Image
                    src={LakeSerenePicture}
                    className="flex-row-reverse object-cover h-59 w-100 rounded-lg shadow-lg mt-4"
                    alt="Lake Serene hike"
                />
                <Image
                    src={OregonHikePicture}
                    className="flex-row-reverse object-cover h-59 w-100 rounded-lg shadow-lg mb-2"
                    alt="Oregon hike"
                />
            </div>
            <Image
                src={CypressPicture}
                className="flex-row-reverse object-cover h-120 w-150 rounded-lg shadow-lg m-2 mr-4 mt-10"
                alt="Cypress Mountain hike"
            />
        </div>
    );
};

export default HikingCard;
