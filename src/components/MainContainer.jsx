import { useEffect, useState } from "react";
import Header from "./Header/Header";
import IconsContainer from "./IconsContainer/IconsContainer";
import PickedIcons from "./PickedIcons/PickedIcons";

function MainContainer() {
    const [icon, setIcon] = useState("");
    const [playerIcon, setPlayerIcon] = useState("");
    const [score, setScore] = useState("");

    useEffect(() => {
        setScore(Number(localStorage.getItem("score")));
    }, [score]);

    return (
        <div className="p-7 min-h-screen w-full max-w-[400px] md:max-w-[800px] max-h-[700px] flex flex-col justify-center md:items-center">
            {/* Header */}
            <Header score={score} />

            {/* Hero Icons Container */}
            {icon === "" && (
                <IconsContainer
                    setIcon={setIcon}
                    setPlayerIcon={setPlayerIcon}
                />
            )}

            {/* Picked Icons */}
            {icon !== "" && (
                <PickedIcons
                    icon={icon}
                    playerIcon={playerIcon}
                    setIcon={setIcon}
                    setPlayerIcon={setPlayerIcon}
                    score={score}
                    setScore={setScore}
                />
            )}
        </div>
    );
}

export default MainContainer;
