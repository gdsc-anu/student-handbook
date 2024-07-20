import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import useCategoryToggles from './useCatToggles';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";



export default function HomePage() {
    const [categories, setCategories] = useState([]);
    const [sections, setSections] = useState({});
    const [entries, setEntries] = useState([]);
    const { toggles, toggleCategory, isToggled } = useCategoryToggles();
    // const [selectedEntry, setSelectedEntry] = useState(null);
    const [selectedEntryIndex, setSelectedEntryIndex] = useState(null);
    const [toggleHandler, setToggleHandler] = useState(false);

    const handleToggle = () => {
        // setToggleHandler(toggleHandler.isBool ? toggleHandler.xClose : toggleHandler.menuBurger);
        setToggleHandler(!toggleHandler);
    }

    /**
     * {
        isBool: true,
        xClose: <FontAwesomeIcon icon={faXmark} size="2x" color="#C92A2A"/>,
        menuBurger: <FontAwesomeIcon icon={faBars} size="2x" color="#C92A2A"/>
    }
     */

    // UseEffect to fetch categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get("https://anu-handbook-b9deaf3b0e00.herokuapp.com/api/categories");
                setCategories(res.data);
            } catch (error) {
                console.error(error)
            }
        }

        fetchCategories();
    }, [])

    // UseEffect to fetch sections
    useEffect(() => {
        const fetchSection = async () => {
            try {
                const sectionsData = await Promise.all(
                    categories.map(async category => {
                        const res = await axios.get(`https://anu-handbook-b9deaf3b0e00.herokuapp.com/api/${category.title.toLowerCase().split(" ").join("-").replace(/-?&-?/g, '-')}/sections`);
                        // console.log({ category: category.title, sections: res.data });
                        return { category: category.title, sections: res.data };
                    })
                );
                
                const sectByCat = sectionsData.reduce((acc, curr) => {
                    acc[curr.category] = curr.sections;
                    return acc;
                }, {});
                // console.log(sectByCat);
                setSections(sectByCat);
                
            }   catch (error) {
                console.error(error)
            }
        }
        fetchSection();
    }, [categories]);

    //useEffect to fetch entries
    useEffect(() => {
        const fetchEntries = async () => {
            const entriesData = {};
            for (const category of categories) {
                for (const section of (sections[category.title] || [])) {
                try {
                    const res = await axios.get(`https://anu-handbook-b9deaf3b0e00.herokuapp.com/api/${category.title.toLowerCase().split(" ").join("-").replace(/-?&-?/g, '-')}/${section.title.toLowerCase().split(" ").join("-").replace(/-?&-?/g, '-')}/entries`);
                    if (!entriesData[category.title]) {
                    entriesData[category.title] = {};
                    }
                    entriesData[category.title][section.title] = res.data;
                } catch (error) {
                    console.error(`Failed to fetch entries for section ${section.title} of category ${category.title}`, error);
                }
            }
          }
          setEntries(entriesData);
        };
    
        if (Object.keys(sections).length > 0) {
          fetchEntries();
        }
       
      }, [sections, categories]);

    // console.log(entries)

    const handleEntryClick = (index) => {
        setSelectedEntryIndex(index);
      };
    
    const handleNext = () => {
        if (selectedEntryIndex !== null && selectedEntryIndex < entries.length - 1) {
            setSelectedEntryIndex(selectedEntryIndex + 1);
        }
    };
    
    const handleBack = () => {
        if (selectedEntryIndex !== null && selectedEntryIndex > 0) {
          setSelectedEntryIndex(selectedEntryIndex - 1);
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
                        categories={categories}
                        sections={sections}
                        entries={entries}
                        toggleCategory={toggleCategory}
                        isToggled={isToggled}
                        onEntryClick={handleEntryClick}
                        toggleHandler={toggleHandler}
                />
                <Article
                    selectedEntry={selectedEntryIndex}
                   
                />
            </div>
            <Footer 
                onBack={handleBack}
                onNext={handleNext}
                disableBack={selectedEntryIndex === null || selectedEntryIndex === 0}
                disableNext={selectedEntryIndex === null || selectedEntryIndex === entries.length - 1}
            />
            
        </main>
    )
}