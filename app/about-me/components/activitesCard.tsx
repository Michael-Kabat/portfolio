import React from "react";
import Image from "next/image";

const ActivitiesCard = () => {
    return (
        <div className="flex-row-reverse m-10 card card-side bg-base-200 shadow-sm ">
            <figure>
                <Image
                    src="images\jumpingSandDunePicture.PNG"
                    className="object-cover h-120 w-110 rounded-lg mt-4 mr-4"
                    alt="Jumping over a sand dune"
                />
            </figure>
            <div className="card-body">
                <Image
                    src="images\rockClimbingHikePicture.jpg"
                    className="flex-row-reverse object-cover h-120 w-90 rounded-lg shadow-lg ml-3 mt-4"
                    alt="Rock climbing on a hike"
                />
            </div>
            <div>
                <Image
                    src="images\volleyballServePicture.JPEG"
                    className="object-cover h-59 w-138 rounded-lg shadow-lg ml-4 m-2 mt-10"
                    alt="Volleyball serve"
                />

                <Image
                    src="images\highfivingSoccerPicture.JPG"
                    className="float-left object-cover h-59 w-72 rounded-lg shadow-lg ml-4"
                    alt="Playing soccer"
                />
                <Image
                    src="images\toughMudderWaterPicture.JPG"
                    className="float-right object-cover h-59 w-63 rounded-lg shadow-lg"
                    alt="Tough Mudder 5k"
                />
            </div>
        </div>
    );
};

export default ActivitiesCard;
