/* eslint-disable react/prop-types */

import { useState } from "react";
import ComputerPick from "./ComputerPick";
import PlayerPick from "./PlayerPick";
import Results from "./Results";

function PickedIcons({
    icon,
    playerIcon,
    setIcon,
    setPlayerIcon,
    score,
    setScore,
}) {
    const [computerIcon, setComputerIcon] = useState("placeholder");
    const [winningIcon, setWinningIcon] = useState("");

    return (
        <div className="flex w-full justify-around md:py-44 flex-wrap">
            <div className="order-first ">
                {/* <!-- Player Pick --> */}
                <PlayerPick icon={icon} winningIcon={winningIcon} />
            </div>

            <div className="order-last md:order-[0]">
                {/* Results */}
                <Results
                    playerIcon={playerIcon}
                    computerIcon={computerIcon}
                    setIcon={setIcon}
                    setPlayerIcon={setPlayerIcon}
                    score={score}
                    setScore={setScore}
                    setWinningIcon={setWinningIcon}
                />
            </div>

            {/* <!-- Computer Pick --> */}
            <ComputerPick
                computerIcon={computerIcon}
                setComputerIcon={setComputerIcon}
                winningIcon={winningIcon}
            />
        </div>
    );
}

export default PickedIcons;
