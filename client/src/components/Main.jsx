import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import InitiativeDetails from "./InitiativeDetails";
import FilterInitiatives from "./FilterInitiatives";

const Main = () => {
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
            keyDetails:
                "Interactive courses, hands-on projects, and mentorship programs.",
            goals: "To foster interest in STEM fields and prepare students for future careers.",
            howToGetInvolved:
                "Enroll in the online courses and participate in project-based learning. Volunteer as a mentor to guide students.",
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
                "Interactive courses, hands-on projects, and mentorship programs.",
            goals: "To foster interest in STEM fields and prepare students for future careers.",
            howToGetInvolved:
                "Enroll in the online courses and participate in project-based learning. Volunteer as a mentor to guide students.",
        },
        {
            id: 4,
            name: "Artificial Intelligence Workshop",
            description:
                "Exploring the fundamentals of artificial intelligence and machine learning.",
            targetDemographics: "Students and professionals",
            subject: "Technology",
            region: "North America",
            type: "Workshop Series",
            language: "English",
            keyDetails:
                "Interactive courses, hands-on projects, and mentorship programs.",
            goals: "To foster interest in STEM fields and prepare students for future careers.",
            howToGetInvolved:
                "Enroll in the online courses and participate in project-based learning. Volunteer as a mentor to guide students.",
        },
        {
            id: 5,
            name: "Environmental Conservation Program",
            description:
                "Educating communities about environmental issues and promoting sustainable practices.",
            targetDemographics: "General public",
            subject: "Environmental Science",
            region: "South America",
            type: "Outdoor Activities",
            language: "Spanish",
            keyDetails:
                "Interactive courses, hands-on projects, and mentorship programs.",
            goals: "To foster interest in STEM fields and prepare students for future careers.",
            howToGetInvolved:
                "Enroll in the online courses and participate in project-based learning. Volunteer as a mentor to guide students.",
        },
        {
            id: 6,
            name: "Healthcare Innovation Summit",
            description:
                "Bringing together healthcare professionals to discuss innovations and advancements in healthcare.",
            targetDemographics: "Healthcare professionals",
            subject: "Healthcare",
            region: "Africa",
            type: "Conference",
            language: "English",
            keyDetails:
                "Interactive courses, hands-on projects, and mentorship programs.",
            goals: "To foster interest in STEM fields and prepare students for future careers.",
            howToGetInvolved:
                "Enroll in the online courses and participate in project-based learning. Volunteer as a mentor to guide students.",
        },
        {
            id: 7,
            name: "Entrepreneurship Bootcamp",
            description:
                "Empowering aspiring entrepreneurs with the skills and knowledge to start their own businesses.",
            targetDemographics: "Entrepreneurs",
            subject: "Business",
            region: "Oceania",
            type: "Bootcamp",
            language: "English",
            keyDetails:
                "Interactive courses, hands-on projects, and mentorship programs.",
            goals: "To foster interest in STEM fields and prepare students for future careers.",
            howToGetInvolved:
                "Enroll in the online courses and participate in project-based learning. Volunteer as a mentor to guide students.",
        },
    ];

    return (
        <main className="min-h-[550px] ">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                    path="initiatives/:id"
                    element={
                        <InitiativeDetails initiativesData={initiativesData} />
                    }
                />
                <Route
                    path="initiatives"
                    element={
                        <FilterInitiatives initiativesData={initiativesData} />
                    }
                />
            </Routes>
        </main>
    );
};

export default Main;
