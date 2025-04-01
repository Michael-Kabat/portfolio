import React from "react";

const OttawaCard = () => {
    return (
        <div className="card card-side bg-base-200 shadow-sm m-10">
            <figure>
                <img
                    src="images/ottawaSignPicture.jpg"
                    alt="Ottawa Sign"
                    className="object-cover h-120 w-200 rounded-lg ml-4 mt-4 mb-4"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title mt-4 font-bold font-mono">
                    About Me!
                </h2>
                <p className="text-base">
                    Hi! My name is Michael - I love to go outdoors, play sports,
                    and build projects!
                    <br />I am currently a first-year student at Carleton
                    University, located in Ottawa,
                    <br />
                    studying Computer Science in the Software Engineering
                    Stream.
                    <br />
                    <br />
                    I am currently working on my full stack notes application
                    that will be an
                    <br />
                    alternative for tools such as Evernote or OneNote!
                    <br />
                </p>

                <div className="mt-4 grid grid-cols-2">
                    <img
                        src="images/beavertailPicture.jpg"
                        alt="Beaver tails"
                        className="object-cover h-65 w-68 rounded-lg "
                    />
                    <img
                        src="images/ottawaHillPicture.jpg"
                        alt="Ottawa national war memorial"
                        className="object-cover h-65 w-68 rounded-lg ml-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default OttawaCard;
