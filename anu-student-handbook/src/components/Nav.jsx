import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import PropsTypes from 'prop-types';

export default function Nav({handleToggle, toggleHandler}) {
    return(
        
        <div className="flex bg-gray-100 py-5 items-center">
        
            {(toggleHandler) ? 
                <FontAwesomeIcon icon={faXmark} color="#C92A2A" onClick={handleToggle}/>:
                <FontAwesomeIcon icon={faBars} color="#C92A2A" onClick={handleToggle}/>
            }
            <img 
                    src="https://www.figma.com/file/gjzrE5bfOhNoYWNSej5Ell/image/d1acd497fdc6d2dea2556a2609ef6f4d4838dc8d" 
                    alt="school-logo"
                    className='w-16 md:w-40 ml-auto'
            />
            <div className="relative mx-4">
                <input 
                    className="w-32 md:w-96 bg-gray-300 py-1 px-4 rounded-2xl pl-10"
                    type="text" 
                    placeholder="Search" 
                />
                <FontAwesomeIcon 
                    icon={faSearch} 
                    className=" absolute top-0 left-3 mt-2 text-gray-500"
                />
                
            </div>
            {/* <FontAwesomeIcon 
                    icon={faMagnifyingGlass}
                    className='md:hidden inline text-gray-500 w-40'
            /> */}
            <img 
                src="src/images/icons8-chatbot-32.png" 
                alt="vector"
            />
        </div>
    )
}

Nav.propTypes = {
    handleToggle: PropsTypes.func.isRequired,
    toggleHandler: PropsTypes.bool.isRequired
}
