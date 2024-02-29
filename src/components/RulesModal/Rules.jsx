/* eslint-disable react/prop-types */
function Rules({ openRules, setOpenRules }) {
    return (
        //    Rules Modal
        <div
            className={
                openRules
                    ? "flex flex-col justify-between items-center px-7 py-20 bg-white w-full h-full min-w-screen min-h-screen absolute z-30"
                    : "hidden"
            }
        >
            <p className="text-3xl uppercase font-bold text-dark-text">Rules</p>
            <img src="images/image-rules.svg" alt="Rules image" />
            <button
                onClick={() => setOpenRules(false)}
                className="p-5 hover:brightness-[.25] transition-all"
            >
                <img src="images/icon-close.svg" alt="Close icon" />
            </button>
        </div>
    );
}

export default Rules;
