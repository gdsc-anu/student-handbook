import PropTypes from "prop-types";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import useCategoryToggles from '../lib/useCatToggles';

export default function Header({ data, toggleHandler, handleNavigation, currentContent }) {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const { toggleCategory, isToggled } = useCategoryToggles();

    return (
        <header
            className={`${
                toggleHandler ? "hidden" : "block"
            } ease-in-out duration-500 w-80 fixed h-full px-4 py-2`}
        >
            <div className="header_container_content">
                <div className="mt-3">
                    {data.map((category) => (
                        <div key={category.id} className="header_container_content_category">
                           <div className="flex items-center gap-x-20">
                                <h3 className="rounded hover:shadow text-xs cursor-pointer"
                                        onClick={() => toggleCategory(category.id)}
                                >
                                    {category.title.toUpperCase()}
                                    
                                </h3>
                                {/* <span  className="cursor-pointer"
                                    onClick={() => toggleCategory(category.id)}>
                                    {  isToggled(category.id) ? 
                                        <FontAwesomeIcon icon={faChevronDown}/>:
                                        <FontAwesomeIcon icon={faChevronUp}/>
                                    }
                                </span>  */}
                           </div>
                            <div className={`${isToggled(category.id) ? "hidden": "block"}`}>
                                {category.sections.map((section) => (
                                    <div key={section.id}>
                                        <div className="flex items-center">
                                            <h4 
                                                className="rounded hover:shadow pl-4 border-slate-400 pb-2 active:bg-red-400 text-xs cursor-pointer"
                                                onClick={() => toggleCategory(section.id)}
                                            >
                                                {capitalize(section.title)}
                                            </h4>
                                            {/* <span  className="cursor-pointer"
                                                onClick={() => toggleCategory(section.id)}>
                                                {  isToggled(section.id) ? 
                                                    <FontAwesomeIcon icon={faChevronDown}/>:
                                                    <FontAwesomeIcon icon={faChevronUp}/>
                                                }
                                            </span>     */}
                                        </div> 
                                        <div className={`${isToggled(section.id) ? "hidden": "block"}`}>
                                            {section.entries.map((entry) => (
                                                <div
                                                    key={entry.id}
                                                    className={`cursor-pointer pl-4 py-1 text-xs ${
                                                        currentContent?.id === entry.id
                                                            ? "text-gray-900 font-medium"
                                                            : "text-gray-600 hover:text-gray-900"
                                                    }`}
                                                    onClick={() =>
                                                        handleNavigation(category.id, section.id, entry.id)
                                                    }
                                                >
                                                    <p>
                                                        {entry.title}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
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
                            title: PropTypes.string.isRequired,
                        })
                    ).isRequired,
                })
            ).isRequired,
        })
    ).isRequired,
    toggleHandler: PropTypes.bool.isRequired,
    handleNavigation: PropTypes.func.isRequired,
    currentContent: PropTypes.shape({
        id: PropTypes.number,
    }),
};
