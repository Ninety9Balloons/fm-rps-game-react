/* eslint-disable react/prop-types */
function RulesButton({ setOpenRules }) {
    return (
        // <!-- Rules Button -->
        <div className="flex justify-center items-center absolute bottom-0 md:right-0 md:mr-5">
            <button
                onClick={() => setOpenRules(true)}
                className="uppercase mb-6 border-2 border-header-outline rounded-lg px-10 py-2 hover:border-white transition-all"
            >
                <p className="tracking-widest">Rules</p>
            </button>
        </div>
    );
}

export default RulesButton;
