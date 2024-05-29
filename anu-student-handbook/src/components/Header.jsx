import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useCategoryToggles from './useCatToggles';
// import upArrow from '../images/up.png';
// import rightArrow from '../images/right.png';

export default function Header() {
    const [categories, setCategories] = useState([]);
    const [sections, setSections] = useState({});
    const [entries, setEntries] = useState({});
    const { toggles, toggleCategory, isToggled } = useCategoryToggles();

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
                        return { category: category.title, sections: res.data };
                    })
                );
                
                const sectByCat = sectionsData.reduce((acc, curr) => {
                    acc[curr.category] = curr.sections;
                    return acc;
                }, {});
                setSections(sectByCat);
                
            }   catch (error) {
                console.error(error)
            }
        }
        fetchSection();
    }, [categories]);

    useEffect(() => {
        const fetchEntries = async () => {
          const entriesData = {};
          for (const category of categories) {
            for (const section of (sections[category.title] || [])) {
              try {
                const res = await axios.get(`https://anu-handbook-b9deaf3b0e00.herokuapp.com/api/categories/${category.title}/section/${section.slug}/entries`);
                if (!entriesData[category.title]) {
                  entriesData[category.title] = {};
                }
                entriesData[category.title][section.slug] = res.data;
              } catch (error) {
                console.error(`Failed to fetch entries for section ${section.slug} of category ${category.title}`, error);
              }
            }
          }
          setEntries(entriesData);
        };
    
        if (Object.keys(sections).length > 0) {
          fetchEntries();
        }
      }, [sections, categories]);

    // const toCapitalise = (str) => {str[0].toUpperCase() + str.slice(1).toLowerCase()}
    return (
        <header className="bg-gray-100 w-1/4 h-screen">
            <img 
                src="https://www.figma.com/file/gjzrE5bfOhNoYWNSej5Ell/image/d1acd497fdc6d2dea2556a2609ef6f4d4838dc8d" 
                alt="school-logo"
                className='w-52 px-6 py-10'
            />

            <div>
                {categories.map(category => (
                    <div key={category.title}>
                        <p className='text-xs'>
                            {category.title} <span onClick={() => toggleCategory(category.title)}>{isToggled(category.title) ? <img src='src/images/up.png' style={{width: '40px'}}/> : <img src='src/images/right.png' style={{width: '40px'}}/>}</span>                    
                        </p>
                        {isToggled(category.title) && (
                            <ul>
                                {sections[category.title] && sections[category.title].map(sec => (
                                    <li key={sec.title} className='text-xs'>{sec.title}
                                        {isToggled(sec.title) && (
                                            <ul>
                                                {entries[category.title] && entries[category.title][sec.slug].map(entry => (
                                                    <li key={entry.title} className='text-xs'>{entry.title}</li>
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
    firstToggle: PropTypes.func,
    secondToggle: PropTypes.func,
    fToggle: PropTypes.bool,
    sToggle: PropTypes.bool
}