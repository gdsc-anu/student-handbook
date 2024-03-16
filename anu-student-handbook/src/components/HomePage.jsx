import { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";


export default function HomePage() {
   const [fToggle, setFToggle] = useState(false);
   const [sToggle, setSToggle] = useState(false);

    const toggleFirst = () => {
        setFToggle(prevBool => !prevBool)
    }
    
   const toggleSecond = () => {
        setSToggle(prevBool => !prevBool)
    }
    

    return(
        <main className="flex ">
            <Header 
                firstToggle={toggleFirst}
                secondToggle={toggleSecond}
                fToggle={fToggle}
                sToggle={sToggle}
            />
            <div className="flex flex-col w-3/4">
                <Nav/>
                <Article/>
            </div>
        </main>
    )
}