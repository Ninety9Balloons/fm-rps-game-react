/* eslint-disable react/prop-types */
function BackButton({ setIcon, setPlayerIcon }) {
    function playAgain() {
        setIcon("");
        setPlayerIcon("");
    }

    return (
        <button
            className="uppercase bg-white text-dark-text rounded-lg w-full py-3 mt-5 tracking-widest hover:bg-header-outline hover:text-white transition-all"
            onClick={() => playAgain()}
        >
            Play Again
        </button>
    );
}

export default BackButton;
