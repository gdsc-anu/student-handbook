import PropTypes from "prop-types";

const Footer = ({nextNavigation, previousNavigation, handlePagination, data}) => {
    const getEntryTitle = (navigation) => {
        if (!navigation) return '';
        return data
            .find(c => c.id.toString() === navigation.category)
            ?.sections.find(s => s.id.toString() === navigation.section)
            ?.entries.find(e => e.id.toString() === navigation.entry)
            ?.title || '';
    };

    // Helper function to get section title
    const getSectionTitle = (navigation) => {
        if (!navigation) return '';
        return data
            .find(c => c.id.toString() === navigation.category)
            ?.sections.find(s => s.id.toString() === navigation.section)
            ?.title || '';
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
                {/* Previous Navigation */}
                <div className="flex-1">
                    <button
                        onClick={() => handlePagination('prev')}
                        disabled={!previousNavigation}
                        className={`group flex items-start space-x-3 px-4 py-2 rounded-lg transition-colors ${
                            previousNavigation 
                                ? 'hover:bg-blue-50' 
                                : 'cursor-not-allowed opacity-50'
                        }`}
                    >
                        {previousNavigation && (
                            <div className="text-left">
                                <div className="text-sm text-gray-500">Previous</div>
                                <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                    {getEntryTitle(previousNavigation)}
                                </div>
                                <div className="text-sm text-gray-500 mt-0.5">
                                    {getSectionTitle(previousNavigation)}
                                </div>
                            </div>
                        )}
                    </button>
                </div>


                {/* Next Navigation */}
                <div className="flex-1 flex justify-end">
                    <button
                        onClick={() => handlePagination('next')}
                        disabled={!nextNavigation}
                        className={`group flex items-start space-x-3 px-4 py-2 rounded-lg transition-colors ${
                            nextNavigation 
                                ? 'hover:bg-blue-50' 
                                : 'cursor-not-allowed opacity-50'
                        }`}
                    >
                        {nextNavigation && (
                            <div className="text-right">
                                <div className="text-sm text-gray-500">Next</div>
                                <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                    {getEntryTitle(nextNavigation)}
                                </div>
                                <div className="text-sm text-gray-500 mt-0.5">
                                    {getSectionTitle(nextNavigation)}
                                </div>
                            </div>
                        )}
                       
                    </button>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <p className="bg-gray-200 py-1 px-4 rounded-2xl my-4">Made by GDSC-ANU 23/24</p>
        </div>
    </div>
    );
};

export default Footer;

Footer.propTypes = {
    nextNavigation: PropTypes.func.isRequired,
    previousNavigation: PropTypes.func.isRequired,
    handlePagination: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            sections: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    title: PropTypes.string.isRequired,
                    entries: PropTypes.arrayOf(
                        PropTypes.shape({
                            id: PropTypes.number.isRequired,
                            title: PropTypes.string.isRequired
                        })
                    ).isRequired
                })
            ).isRequired
        })
    ).isRequired
}

/**
 */