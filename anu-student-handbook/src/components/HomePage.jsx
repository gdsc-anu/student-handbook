import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Pulse from "./Pulse";
import useCategories from "../lib/api"
import useCategoryToggles from '../lib/useCatToggles';
import { useState } from "react";


export default function HomePage() {
    const { toggleCategory, isToggled } = useCategoryToggles(); //toggle the selected category and the section
    const [selectedSec, setSelectedSec] = useState(0);
    const [toggleHandler, setToggleHandler] = useState(false); //toggle the header comp as a sidebar
    const [currEntry, setCurrEntry] = useState(0);  //track the curr entry
    const [currSec, setCurrSec] = useState(0); //track the curr section
    const [currCat, setCurrCat] = useState(0);  // track the curr category
    
    const handleToggle = () =>  setToggleHandler(!toggleHandler);

    //loads the entries when the respective section is clicked
    const handleEntryClick = (index) => {
        setSelectedSec(index);
        setCurrEntry(0)
    };
    
    const { data, isLoading, error } = useCategories();
    
    if (isLoading) return <Pulse />;
    if (error) return <p>Error fetching categories: {error.message}</p>;
    
    
    const { catList, entryList } = data;
    const categoryKeys = Object.keys(catList); // List of category keys
    const entryKeys = Object.keys(entryList);
    //console.log(entryKeys);
    // categoryKeys.map((item, index) => {
    //     console.log(catList[item][index]);
    // })

    // entryKeys.map((item, index) => {
    //     console.log(entryList[item][index])
    // })
    const currentCategory =  categoryKeys.map(item => item)//categoryKeys.map((item, index) => {return catList[item][index]});// catList[categoryKeys[currCat]]; Current category
    //console.log(`Current Category: ${currentCategory}`);
    //const sections = Object.keys(currentCategory); // Sections within the current category
    const currentSection = categoryKeys.map((item, index) => catList[item][index]);//currentCategory[sections[currSec]]; // Current section entries 
    console.log(`Current Section: ${currentSection}`);
    const currentEntry = entryKeys.map((item, index) =>  entryList[item][index]); //currentSection[currEntry]; //
    currentEntry.forEach((entry, idx) => {
        console.log(`Entry ${idx}:`, entry);
    });
    //console.log(`Current Entry: ${currentEntry}`);
    //console.log(currentEntry)

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
                   selectedSection={currentSection}
                   selectedEntry={selectedSec}
                   entryList={entryList}
                   currEntry={currEntry}
                   onBack={handlePreviousEntry}
                    onNext={handleNextEntry}
                />
            </div>
        </main>
    )
}