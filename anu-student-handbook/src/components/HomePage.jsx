import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Footer from "./Footer";
import useCategories from "../lib/api"
import useCategoryToggles from './useCatToggles';
import { useState } from "react";


export default function HomePage() {
    const { toggleCategory, isToggled } = useCategoryToggles();
    const [selectedSec, setSelectedSec] = useState(null);
    const [toggleHandler, setToggleHandler] = useState(false);
    const [currEntry, setCurrEntry] = useState(0);
    const [currSec, setCurrSec] = useState(0);
    const [currCat, setCurrCat] = useState(0);
    
    const handleToggle = () =>  setToggleHandler(!toggleHandler);
    const handleEntryClick = (index) => {
        setSelectedSec(index);
        setCurrEntry(0)
    };
    
    const { data, isLoading, error } = useCategories();
    
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching categories: {error.message}</p>;
    
    const { catList, entryList } = data;
    
    const categoryKeys = Object.keys(catList); // List of category keys
    const currentCategory = catList[categoryKeys[currCat]]; // Current category
    const sections = Object.keys(currentCategory); // Sections within the current category
    const currentSection = currentCategory[sections[currSec]]; // Current section entries
    const currentEntry = currentSection[currEntry]; //
    console.log(currentEntry)

    const handleNextEntry = () => {
        // Move to the next entry
        if (currEntry < currentSection.length - 1) {
            setCurrEntry((prevIndex) => prevIndex + 1);
        }
        // Move to the next section
        else if (currSec < sections.length - 1) {
            setCurrSec((prevIndex) => prevIndex + 1);
            setCurrEntry(0); // Reset entry index for the new section
        }
        // Move to the next category
        else if (currCat < categoryKeys.length - 1) {
            setCurrCat((prevIndex) => prevIndex + 1);
            setCurrSec(0); // Reset section index for the new category
            setCurrEntry(0); // Reset entry index for the new category
        }
    };

    const handlePreviousEntry = () => {
        // Move to the previous entry
        if (currEntry > 0) {
            setCurrEntry((prevIndex) => prevIndex - 1);
        }
        // Move to the previous section
        else if (currSec > 0) {
            setCurrSec((prevIndex) => prevIndex - 1);
            const prevSection = currentCategory[sections[currSec - 1]];
            setCurrEntry(prevSection.length - 1); // Go to the last entry of the previous section
        }
        // Move to the previous category
        else if (currCat > 0) {
            setCurrCat((prevIndex) => prevIndex - 1);
            const prevCategory = catList[categoryKeys[currCat - 1]];
            const lastSection = Object.keys(prevCategory).slice(-1)[0]; // Last section of the previous category
            const lastSectionEntries = prevCategory[lastSection];
            setCurrSec(Object.keys(prevCategory).length - 1); // Set section to the last
            setCurrEntry(lastSectionEntries.length - 1); // Set entry to the last
        }
    };
    

    return(
        <main>
           <Nav
                handleToggle={handleToggle}
                toggleHandler={toggleHandler}
            />
            <div className="flex">
                <Header
                    categories={catList}
                    toggleCategory={toggleCategory}
                    isToggled={isToggled}
                    onEntryClick={handleEntryClick}
                    toggleHandler={toggleHandler}
                />
                <Article
                   selectedEntry={selectedSec}
                   entryList={entryList}
                   currEntry={currEntry}
                />
            </div>
            <Footer 
                onBack={handlePreviousEntry}
                onNext={handleNextEntry}
            /> 
        </main>
    )
}