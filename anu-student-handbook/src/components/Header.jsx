import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Header({categories, onEntryClick, toggleHandler}) {
    const Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    let catObj = Object.keys(categories)
    return (
        //toggleHandler &&
        <header className={`bg-gray-100 p-2 header_container  ${toggleHandler
                ? " left-0 w-3/12 border rounded-xl ease-in-out duration-500 h-full"
                : "ease-in-out w-3/12 duration-500 fixed left-[-100%]"}`}>
        <div className={`header_container_content`}>
            <div>
                {catObj.map((category, index) => {
                        return (
                            <div key={index} className='header_container_content_category'>
                                <h2 className='font-black text-xs sm:text-sm hover:bg-gray-200 active:bg-red-400'
                                    //onClick={() => toggleCategory(category)}
                                >
                                    {category.toUpperCase()}
                                    {/* <span 
                                        onClick={() => toggleCategory(category)}
                                    >
                                        {isToggled(category) ? 
                                            <FontAwesomeIcon icon={faMinus} className='sm:ml-12 ml-4'/>:
                                            <FontAwesomeIcon icon={faPlus} className='sm:ml-12 ml-4'/>
                                        }
                                    </span>   */}
                                </h2>
                                {
                                    (<ul>
                                        {
                                            categories[category].map((section, index) => {
                                                return (
                                                    <li key={index} className='pl-4 border-l-2 border-slate-400 hover:bg-gray-200 pb-2 active:bg-red-400'
                                                        onClick={() => onEntryClick(section)}
                                                    >
                                                        {Capitalize(section)}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>)
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="scrollbar">
        <div className="scrollbar__track" />
        <div className="scrollbar__thumb" />
</div>
    </header>
        
    )
}

Header.propTypes = {
    categories: PropTypes.object.isRequired,
    toggleHandler: PropTypes.bool.isRequired,
    isToggled: PropTypes.func.isRequired,
    toggleCategory: PropTypes.func.isRequired,
    onEntryClick: PropTypes.func.isRequired
}
