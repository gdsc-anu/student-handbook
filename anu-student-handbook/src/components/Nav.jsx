import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
    return(
        <div className="flex bg-gray-100 py-3 justify-around items-center">
            <FontAwesomeIcon icon={faBars} size="2x" color="#C92A2A" />
            <div className="relative">
                <input 
                    className="bg-gray-300 py-1 px-4 rounded-2xl w-96 pl-10"
                    type="text" 
                    placeholder="Search" 
                />
                <FontAwesomeIcon 
                    icon={faSearch} 
                    className="absolute top-0 left-3 mt-2 text-gray-500"
                />
            </div>
            <img 
                src="src/images/icons8-chatbot-32.png" 
                alt="vector"
            />
        </div>
    )
}
