/* eslint-disable react/prop-types */
function Icon({ icon, shadowColor, borderColor, handleClick }) {
    return (
        <div>
            <img
                src={`/images/${icon}.svg`}
                alt={icon}
                data-icon={icon}
                className={`bg-white rounded-full p-7 flex justify-center items-center border-[15px] w-[120px] h-[120px] md:w-[150px] md:h-[150px]  hover:-translate-y-2 transition-all cursor-pointer ${shadowColor} ${borderColor}`}
                onClick={handleClick}
            />
        </div>
    );
}

export default Icon;
