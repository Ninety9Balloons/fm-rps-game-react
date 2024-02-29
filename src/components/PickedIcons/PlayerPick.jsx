/* eslint-disable react/prop-types */
function PlayerPick({ icon, winningIcon }) {
    return (
        <div className="flex flex-col items-center">
            {/* <!-- Text Desktop --> */}
            <p className="uppercase mb-8 tracking-widest hidden md:block">
                You picked
            </p>

            {/* <!-- Icon --> */}
            <div
                className={
                    winningIcon === "player"
                        ? "drop-shadow-[0_0px_35px_rgba(255,255,255,.5)]"
                        : ""
                }
            >
                <img
                    src={`/images/${icon.icon}.svg`}
                    alt={icon.icon}
                    data-icon={icon.icon}
                    className={icon.class}
                />
            </div>
            {/* <!-- Text Mobile --> */}
            <p className="uppercase mt-8 tracking-widest md:hidden">
                You picked
            </p>
        </div>
    );
}

export default PlayerPick;
