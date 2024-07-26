import PropTypes from 'prop-types';

export default function Header({categories, sections, entries, toggleCategory, isToggled, onEntryClick, toggleHandler}) {
    return (
        toggleHandler &&
        <header className="bg-gray-100 w-3/4 p-2 header_container">
        <div className='header_container_content'>
            <div>
                {categories.map(category => (
                    <div key={category.title} >
                        <p className='text-xs md:text-sm'>
                            {category.title} 
                            <span 
                                onClick={() => toggleCategory(category.title)}
                            >
                                {isToggled(category.title) ? 
                                    <img src='src/images/up.png' style={{width: '40px'}}/> : 
                                    <img src='src/images/right.png' style={{width: '40px'}}/>
                                }
                            </span>                    
                        </p>
                        {isToggled(category.title) && (
                            <ul>
                                {sections[category.title] && sections[category.title].map(sec => (
                                    <li key={sec.title} 
                                        className='text-xs ml-auto'
                                    >
                                        {sec.title}

                                        <span 
                                            onClick={() => toggleCategory(sec.title)}
                                        >
                                            {isToggled(sec.title) ? 
                                                <img src='src/images/up.png' style={{width: '40px'}}/> : 
                                                <img src='src/images/right.png' style={{width: '40px'}}/>
                                            }
                                        </span> 

                                        {isToggled(sec.title) && (
                                            <ul>
                                                {entries[category.title] && entries[category.title][sec.title].map((entry, index) => (
                                                    <li 
                                                        key={index} 
                                                        className='text-xs' 
                                                        onClick={() => onEntryClick(entry)}
                                                    >
                                                        {entry.title}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
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
    categories: PropTypes.array.isRequired,
    sections: PropTypes.object.isRequired,
    entries: PropTypes.object.isRequired,
    toggleCategory: PropTypes.func.isRequired,
    isToggled: PropTypes.func.isRequired,
    onEntryClick: PropTypes.func.isRequired,
    toggleHandler: PropTypes.bool.isRequired,
}
