import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import PropsTypes from 'prop-types';

export default function Nav({setToggleHandler, toggleHandler}) {
    return(
        
        <nav className="flex justify-between items-center bg-gray-100 py-3 px-4">
            <div className=' flex items-center text-x1'>
                <FontAwesomeIcon 
                    icon={faBars} color="#C92A2A" 
                    className='cursor-pointer' 
                    onClick={() => setToggleHandler(!toggleHandler)}
                />  

                <img 
                        src="https://www.figma.com/file/gjzrE5bfOhNoYWNSej5Ell/image/d1acd497fdc6d2dea2556a2609ef6f4d4838dc8d" 
                        alt="school-logo"
                        className='w-16 md:w-40 ml-2 sm:ml-20'
                />
            </div>
            <div className="flex items-center gap-x-5">
               <div className='relative md:w-65'>
                    <input
                        className="w-full bg-gray-300 py-1 px-4 rounded shadow outline-none pl-12 hidden md:block"
                        type="text" 
                        placeholder="Search" 
                    />
                    <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
                        <button className='p-1 focus:outline-none text-black md:text-gray-200'>
                            <FontAwesomeIcon 
                                icon={faSearch} 
                                // className=" absolute top-0 left-3 mt-2 text-gray-500"
                            />   
                        </button>
                    </span>
               </div>
            </div>
            <div className=''>
                <img 
                    src="src/images/icons8-chatbot-32.png" 
                    alt="vector"
                />
            </div>
        </nav>
    )
}

Nav.propTypes = {
    setToggleHandler: PropsTypes.func.isRequired,
    toggleHandler: PropsTypes.bool.isRequired
}
