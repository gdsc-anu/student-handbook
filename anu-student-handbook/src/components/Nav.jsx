import {faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Nav() {
    return(
        <div className="flex">
            <FontAwesomeIcon icon={faBars} />
            <input 
                type="text" 
                placeholder="Search" 
            />
            <img 
                src="../images/vector.png" 
                alt="vector"
            />
        </div>
    )
}