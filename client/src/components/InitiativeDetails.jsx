import { useParams } from "react-router-dom";
import placeholderImage from "../assets/initiative_placeholder.jpg";
import { FaLocationDot, FaTags } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { useState } from "react";

const InitiativeDetails = ({ initiativesData }) => {
    const { id } = useParams();
    const [initiative, setInitiative] = useState(initiativesData[id - 1]);

    return (
        <div className=" min-h-[600px] w-full text-white flex flex-wrap justify-center items-center gap-20 pt-20">
            <div className="w-[750px] h-[800px] shadow-md shadow-slate-500 bg-white rounded-xl overflow-hidden ">
                <figure className=" overflow-hidden object-cover max-h-[220px]">
                    <img src={placeholderImage} alt={initiative.name} />
                </figure>
                <div className="flex items-center justify-between px-4 pt-5 gap-1">
                    <div className="flex items-center justify-between gap-1">
                        <FaTags className="text-[#B12227] underline text-lg font-bold" />
                        <p className="text-[#B12227] underline text-sm font-bold">
                            {initiative.type}
                        </p>{" "}
                    </div>
                    <div className="flex items-center justify-center gap-5">
                        <div className="flex items-center justify-center">
                            <FaLocationDot className="text-[#003472] underline text-lg font-bold" />
                            <p className="text-[#003472] underline text-sm font-bold">
                                {initiative.region}
                            </p>
                        </div>
                        <div className="flex items-center justify-center ">
                            <IoChatbubbles className="text-[#02544E] underline text-xl font-bold" />
                            <p className="text-[#02544E] underline text-sm  font-bold">
                                {initiative.language}
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" gap-5 px-5 pt-5 text-black flex flex-col justify-center items-center">
                    <h2 className=" pt-2 text-xl font-bold text-slate-900  overflow-hidden">
                        {initiative.name}
                    </h2>
                    <p className="text-md">{initiative.description}</p>
                    <p className="text-md">{initiative.keyDetails}</p>
                    <p className="text-md">{initiative.goals}</p>
                    <p className="text-md">{initiative.howToGetInvolved}</p>
                </div>
            </div>
        </div>
    );
};

export default InitiativeDetails;
