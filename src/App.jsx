import { useState } from "react";
import MainContainer from "./components/MainContainer";
import Rules from "./components/RulesModal/Rules";
import RulesButton from "./components/RulesModal/RulesButton";

function App() {
    const [openRules, setOpenRules] = useState(false);

    return (
        <div className="flex flex-col justify-between items-center  min-h-screen h-full w-full min-w-screen bg-gradient-to-b from-radial-gradient-1 to-radial-gradient-2 text-white relative">
            <Rules openRules={openRules} setOpenRules={setOpenRules} />
            <MainContainer />
            <RulesButton setOpenRules={setOpenRules} />
        </div>
    );
}

export default App;
