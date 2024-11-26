import { useQuery } from "react-query";
import axios from "axios";

const fetchCategories = async () => {
    const response = await axios.get("https://student-handbook-2a3ecf7d17e8.herokuapp.com/api/categories");
    return response?.data; // Return the raw data
};

const useCategories = () => {
    return useQuery("categories", fetchCategories, {
        select: (categories) => {
            // Process data to generate catList and entryList
            let catList = {};
            let entryList = {};

            categories.forEach((cat) => {
                catList[cat.title] = [];
                cat.sections.forEach((sec) => {
                    catList[cat.title].push(sec.title);
                    entryList[sec.title] = [];
                    sec.entries.forEach(entry => {
                        entryList[sec.title].push({ title: entry.title, content: entry.content }); 
                    })
                });
            });

            return { catList, entryList }; // Return the processed data
        },
    });
};

export default useCategories;
