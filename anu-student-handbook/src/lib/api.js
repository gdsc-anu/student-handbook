import { useQuery } from "react-query";
import axios from "axios";

const fetchCategories = async () => {
    const response = await axios.get("https://student-handbook-2a3ecf7d17e8.herokuapp.com/api/categories");
    return response?.data; // Return the raw data
};

const useCategories = () => useQuery("categories", fetchCategories);

export default useCategories;
