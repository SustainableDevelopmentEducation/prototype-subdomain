import { Link } from "react-router-dom";
import placeholderImage from "../assets/initiative_placeholder.jpg";
import { FaLocationDot, FaTags } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useState } from "react";

const initiativesData = [
    {
        id: 1,
        name: "STEM Education Program",
        description:
            "Empowering students in science, technology, engineering, and mathematics.",
        targetDemographics: "Middle and high school students",
        subject: "Technology",
        region: "Global",
        type: "Online Courses",
        language: "English",
        keyDetails:
            "Interactive courses, hands-on projects, and mentorship programs.",
        goals: "To foster interest in STEM fields and prepare students for future careers.",
        howToGetInvolved:
            "Enroll in the online courses and participate in project-based learning. Volunteer as a mentor to guide students.",
    },
    {
        id: 2,
        name: "Literacy for All",
        description:
            "Promoting literacy and a love for reading among all age groups.",
        targetDemographics: "All age groups",
        subject: "Literature",
        region: "Asia",
        type: "Community Workshops",
        language: "Chinese",
        keyDetails: "Reading sessions, book clubs, and storytelling events.",
        goals: "To improve literacy rates and create a culture of reading within communities.",
        howToGetInvolved:
            "Join local workshops, volunteer as a reader, or donate books to support the initiative.",
    },
    {
        id: 3,
        name: "Digital Skills Bootcamp",
        description:
            "Equipping individuals with essential digital skills for the modern workforce.",
        targetDemographics: "Adults seeking career development",
        subject: "Technology",
        region: "Europe",
        type: "In-Person Workshops",
        language: "German",
        keyDetails:
            "Hands-on training in digital tools, resume building, and job placement assistance.",
        goals: "To bridge the digital skills gap and empower individuals for better employment opportunities.",
        howToGetInvolved:
            "Enroll in the bootcamp as a participant or volunteer to assist with workshops.",
    },
];

const Initiatives = () => {
    const [filterModalOpen, setFilterModalOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center gap-10 w-full h-screen py-20 bg-slate-200">
            <div className=" flex w-full items-center justify-center gap-2 md:w-max text-white px-4 ">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for initiatives"
                    className="w-80 h-10 p-2 rounded-lg shadow-md shadow-slate-400  "
                />
                <div className="relative ">
                    <button
                        className="w-28 h-10 p-2 rounded-lg shadow-md shadow-slate-400 text-slate-950 font-medium bg-white flex items-center justify-center gap-1"
                        onClick={() => {
                            setFilterModalOpen(!filterModalOpen);
                        }}
                    >
                        <LuFilter />
                        Filter
                        {filterModalOpen ? (
                            <MdOutlineKeyboardArrowUp />
                        ) : (
                            <MdOutlineKeyboardArrowDown className="text-lg" />
                        )}
                    </button>
                    <div
                        className={`absolute w-56 h-64 top-12 right-5 rounded-md bg-white text-blue-950 shadow-md shadow-slate-400 font-medium px-4 p-2 z-50 ${
                            filterModalOpen ? "" : "hidden"
                        }`}
                    >
                        <p>Language</p>
                        <p>Location</p>
                    </div>
                </div>
            </div>
            <div className=" min-h-[600px] w-full   text-white flex flex-wrap justify-center items-center gap-10 ">
                {initiativesData.map((initiative) => (
                    <div
                        key={initiative.id}
                        className="w-[350px] h-[500px]  shadow-md shadow-slate-500 bg-slate-100 rounded-xl overflow-hidden hover:scale-105 transition-all duration-200 "
                    >
                        <Link
                            to={`/initiatives/${initiative.id}`}
                            className="flex flex-col gap-4 "
                        >
                            <figure className=" overflow-hidden object-cover max-h-[220px]">
                                <img
                                    src={placeholderImage}
                                    alt={initiative.name}
                                />
                            </figure>
                            <div className="flex items-center justify-between px-4 gap-1">
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
                            <div className=" gap-5 px-3 text-black flex flex-col justify-between items-start">
                                <h2 className=" pt-2 text-lg font-bold text-slate-900  overflow-hidden">
                                    {initiative.name}
                                </h2>
                                <p className="text-md">
                                    {initiative.description}
                                </p>
                                <div className="mt-10 self-center">
                                    <Link
                                        to={`/initiatives/${initiative.id}`}
                                        className="text-white flex items-center justify-center font-normal bg-[#003472] p-2 px-6 rounded-lg hover:bg-blue-950"
                                    >
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Initiatives;
