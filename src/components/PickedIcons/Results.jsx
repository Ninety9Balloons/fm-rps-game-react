/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import BackButton from "./BackButton";

function Results({
    playerIcon,
    computerIcon,
    setIcon,
    setPlayerIcon,
    setScore,
    score,
    setWinningIcon,
}) {
    const [resultText, setResultText] = useState("");

    useEffect(() => {
        if (playerIcon === "icon-rock" && computerIcon.icon === "icon-rock") {
            tie();
        }
        if (playerIcon === "icon-paper" && computerIcon.icon === "icon-paper") {
            tie();
        }
        if (
            playerIcon === "icon-scissors" &&
            computerIcon.icon === "icon-scissors"
        ) {
            tie();
        }

        if (
            playerIcon === "icon-rock" &&
            computerIcon.icon === "icon-scissors"
        ) {
            win();
        }
        if (playerIcon === "icon-paper" && computerIcon.icon === "icon-rock") {
            win();
        }
        if (
            playerIcon === "icon-scissors" &&
            computerIcon.icon === "icon-paper"
        ) {
            win();
        }

        if (playerIcon === "icon-rock" && computerIcon.icon === "icon-paper") {
            lose();
        }
        if (
            playerIcon === "icon-paper" &&
            computerIcon.icon === "icon-scissors"
        ) {
            lose();
        }
        if (
            playerIcon === "icon-scissors" &&
            computerIcon.icon === "icon-rock"
        ) {
            lose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [computerIcon]);

    function tie() {
        setResultText("You Tied");
    }

    function win() {
        setResultText("You win");
        setScore((prevState) => prevState + 1);
        setWinningIcon("player");
    }

    function lose() {
        setResultText("You lose");
        setScore((prevState) => prevState - 1);
        setWinningIcon("computer");
    }

    useEffect(() => {
        Number(localStorage.setItem("score", score));
    }, [score]);

    return (
        /* <!-- Results Container Desktop --> */

        <div className={resultText ? "md:flex" : "hidden"}>
            <div
                className="md:w-[190px] flex-col justify-center items-center px-14 mt-10 md:p-0"
                id="results-container-d"
            >
                {/* <!-- Result Text --> */}
                <p className="text-5xl uppercase font-barlow-semi-condensed">
                    {resultText}
                </p>
                {/* Back Button */}
                <BackButton setIcon={setIcon} setPlayerIcon={setPlayerIcon} />
            </div>
        </div>
    );
}

export default Results;
