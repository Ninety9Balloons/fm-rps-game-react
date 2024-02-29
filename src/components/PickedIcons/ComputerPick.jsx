import Icon from "../IconsContainer/Icon";
import { useEffect } from "react";

/* eslint-disable react/prop-types */
function ComputerPick({ computerIcon, setComputerIcon, winningIcon }) {
    const paperIcon = {
        icon: "icon-paper",
        borderColor: "border-paper-gradient-1",
        shadowColor: "shadow-[2px_7px_0px_0px_rgba(43,56,122)]",
    };

    const scissorsIcon = {
        icon: "icon-scissors",
        borderColor: "border-scissors-gradient-1",
        shadowColor: "shadow-[2px_7px_0px_0px_rgba(183,123,11)]",
    };

    const rockIcon = {
        icon: "icon-rock",
        borderColor: "border-rock-gradient-1",
        shadowColor: "shadow-[2px_7px_0px_0px_rgba(167,53,74)]",
    };

    const icons = [paperIcon, scissorsIcon, rockIcon];

    // Select a random icon

    useEffect(() => {
        const randomIcon = Math.floor(Math.random() * icons.length);

        setTimeout(() => {
            setComputerIcon(icons[randomIcon]);
        }, 1000);
    }, []);

    return (
        <div className="flex flex-col items-center">
            {/* <!-- Text Desktop --> */}
            <p className="uppercase mb-8 tracking-widest hidden md:block">
                The House picked
            </p>

            {/* <!-- Placeholder --> */}
            {computerIcon === "placeholder" ? (
                <div className="bg-dark-text rounded-full opacity-25 w-[120px] h-[120px] md:w-[150px] md:h-[150px]"></div>
            ) : (
                //  {/* <!-- Icon --> */}
                <div
                    className={
                        winningIcon === "computer"
                            ? "drop-shadow-[0_0px_35px_rgba(255,255,255,.5)]"
                            : ""
                    }
                >
                    <Icon
                        icon={computerIcon.icon}
                        borderColor={computerIcon.borderColor}
                        shadowColor={computerIcon.shadowColor}
                    />
                </div>
            )}

            {/* <!-- Text Mobile --> */}
            <p className="uppercase mt-8 tracking-widest md:hidden">
                The House picked
            </p>
        </div>
    );
}

export default ComputerPick;
