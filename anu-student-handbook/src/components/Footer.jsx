import PropTypes from "prop-types";

const Footer = ({onBack, onNext}) => {
    return (
        <div className="inset-x-0 bottom-0">
            <div className="flex justify-around">
                <button 
                    className="bg-gray-300 py-1 px-6 rounded-2xl" 
                    onClick={onBack}
                >
                    Back
                </button>

                <button 
                    className="bg-gray-300 py-1 px-6 rounded-2xl"
                    onClick={onNext}
                >
                    Next
                </button>
            </div>
            <div className="flex justify-center">
                <p className="bg-gray-200 py-1 px-4 rounded-2xl my-4">Made by GDSC-ANU 23/24</p>
            </div>
        </div>
    );
};

export default Footer;

Footer.propTypes = {
    onBack: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
}