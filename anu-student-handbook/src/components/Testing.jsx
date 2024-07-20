// import {useQuery} from 'react-query';
import axios from 'axios';
import { useState } from 'react';

export default function Testing() {
    const [category, setCategory] = useState([]);
    const [section, setSection] = useState({});

    const fetchCat = async () => {
       try {
            const res = await axios.get('https://anu-handbook-b9deaf3b0e00.herokuapp.com/api/categories');
            setCategory(res.data);
       }    catch(err) {
            console.error(err);
       } 
    }; 
    fetchCat();
    // console.log(category);
    // 
    // const {isLoading, error, category} = useQuery('cat', fetchcat);
    
    
    // fetching the respective sections for the category
    const fetchSec = async () => {
        try {
            for (const cat of category) {
                const res = await axios.get(`https://anu-handbook-b9deaf3b0e00.herokuapp.com/api/
                    ${cat.title.toLowerCase().split(" ").join("-").replace(/-?&-?/g, '-')}/sections`);
                setSection({section: res.data});
            }
        }   catch(err) {
            console.log(err);
        }
    };
    
    fetchSec();
    // console.log(section);
    return (
        <div>
            <h1>Testing</h1>
        </div>
    )
}
