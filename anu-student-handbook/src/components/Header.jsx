import PropTypes from 'prop-types';

export default function Header({categories, sections, entries, toggleCategory, isToggled, onEntryClick}) {
    
    return (
        <header className="bg-gray-100 w-1/4 h-screen p-2">
            <img 
                src="https://www.figma.com/file/gjzrE5bfOhNoYWNSej5Ell/image/d1acd497fdc6d2dea2556a2609ef6f4d4838dc8d" 
                alt="school-logo"
                className='w-52 px-6 py-10'
            />

            <div >
                {categories.map(category => (
                    <div key={category.title}>
                        <p className='text-base'>
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
                                        className='text-sm'
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
}
