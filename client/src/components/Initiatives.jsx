import { Link } from "react-router-dom";
import placeholderImage from "../assets/initiative_placeholder.jpg";
import { FaLocationDot, FaTags } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const Initiatives = ({ initiativesData }) => {
    return (
        <>
            <div className=" min-h-[600px] w-full   text-white flex flex-wrap justify-center items-center gap-20 pb-10">
                {initiativesData.map((initiative) => (
                    <div
                        key={initiative.id}
                        className="w-[1100px] h-[400px] flex flex-wrap justify-center items-center  shadow-md shadow-slate-500 bg-white rounded-md overflow-hidden pr-6"
                    >
                        <figure className=" overflow-hidden object-cover w-1/2 p-4 rounded-xl">
                            <img
                                src={placeholderImage}
                                alt={initiative.name}
                                className="rounded-md shadow-sm shadow-slate-500  w-full "
                            />
                        </figure>
                        <div className="w-1/2">
                            <div className=" h-[400px] gap-10 px-3 text-black flex flex-col justify-center items-start ">
                                <div className="flex flex-col gap-3 w-full">
                                    <h2 className=" pt-2 text-2xl font-bold text-slate-900  overflow-hidden self-start">
                                        {initiative.name}
                                    </h2>
                                    <div className="w-full flex items-center justify-between  gap-1">
                                        <div className="flex items-center justify-between gap-1">
                                            <FaTags className="text-[#B12227] underline text-lg font-bold" />
                                            <p className="text-[#B12227] underline text-sm font-bold">
                                                {initiative.type}
                                            </p>{" "}
                                        </div>
                                        <div className="flex items-center justify-center gap-3">
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
                                </div>
                                <p className="text-md">
                                    {initiative.description}
                                </p>
                                <div className="mt-10 self-end">
                                    <Link
                                        to={`/initiatives/${initiative.id}`}
                                        className="text-white flex items-center text-sm justify-center bg-[#003472] p-2 px-6 rounded-lg hover:bg-blue-950"
                                    >
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Initiatives;
