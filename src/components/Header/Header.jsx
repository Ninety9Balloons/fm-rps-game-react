/* eslint-disable react/prop-types */
function Header({ score }) {
    return (
        <div className="border-2 border-header-outline md:max-w-[600px] md:w-[600px] flex justify-between rounded-lg p-2 md:p-4 uppercase items-center absolute top-0 left-0 right-0 self-center m-5 md:mx-auto">
            {/* <!-- Logo --> */}
            <img
                src="images/logo.svg"
                className="w-24 md:w-36 ml-2"
                alt="Logo"
            />

            {/* <!-- Score --> */}
            <div className="bg-white rounded-lg flex flex-col items-center px-5 md:px-8 py-2">
                <p className="text-score-text tracking-widest text-sm md:text-md">
                    Score
                </p>
                <p className="text-header-outline text-4xl md:text-6xl font-bold">
                    {score}
                </p>
            </div>
        </div>
    );
}

export default Header;
