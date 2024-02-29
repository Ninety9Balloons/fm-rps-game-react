/* eslint-disable react/prop-types */
import Icon from "./Icon";

function IconsContainer({ setIcon, setPlayerIcon }) {
    function handleClick(e) {
        setIcon({
            icon: e.target.getAttribute("data-icon"),
            class: e.target.className,
        });

        setPlayerIcon(e.target.getAttribute("data-icon"));
    }

    return (
        // <!-- Icon Container -->
        <div
            className="w-full flex flex-wrap justify-center md:w-[400px] relative"
            id="icons-container"
        >
            {/* <!-- Upper Icons Container --> */}
            <div className="flex justify-between w-full md:w-[400px] z-20">
                <Icon
                    icon="icon-paper"
                    borderColor="border-paper-gradient-1 "
                    shadowColor="shadow-[2px_7px_0px_0px_rgba(43,56,122)]"
                    handleClick={(e) => handleClick(e)}
                />

                <Icon
                    icon="icon-scissors"
                    borderColor="border-scissors-gradient-1 "
                    shadowColor="shadow-[2px_7px_0px_0px_rgba(183,123,11)]"
                    handleClick={(e) => handleClick(e)}
                />
            </div>
            <div className="w-full flex justify-center mt-10 z-20">
                <Icon
                    icon="icon-rock"
                    borderColor="border-rock-gradient-1 "
                    shadowColor="shadow-[2px_7px_0px_0px_rgba(167,53,74)]"
                    handleClick={(e) => handleClick(e)}
                />
            </div>

            {/* <!-- Background triangle thing behind icons --> */}
            <img
                src="/images/bg-triangle.svg"
                alt="background triangle"
                className="w-full h-full absolute scale-75 z-10"
            />
        </div>
    );
}

export default IconsContainer;
