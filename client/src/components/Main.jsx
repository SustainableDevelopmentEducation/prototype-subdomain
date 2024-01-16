import { Route, Routes } from "react-router-dom";
import Initiatives from "./Initiatives";
import Homepage from "./Homepage";
import InitiativeDetails from "./InitiativeDetails";

const Main = () => {
    return (
        <main className="min-h-[550px] ">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="initiatives" element={<Initiatives />} />
                <Route path="initiatives/:id" element={<InitiativeDetails />} />
            </Routes>
        </main>
    );
};

export default Main;
