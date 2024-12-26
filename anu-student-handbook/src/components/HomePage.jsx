import Header from "./Header";
import Article from "./Article";
import Pulse from "./Pulse";
import useCategories from "../lib/api";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getPreviousNavigation, getNextNavigation, handlePagination } from "../lib/pagination";

export default function HomePage() {
    const [currentContent, setCurrentContent] = useState(null);
    const [toggleHandler, setToggleHandler] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const { data, isLoading, error } = useCategories();

    const currentCategory = searchParams.get("category");
    const currentSection = searchParams.get("section");
    const currentEntry = searchParams.get("entry");

    useEffect(() => {
        if (!searchParams.get("category") || !searchParams.get("section") || !searchParams.get("entry")) {
            setSearchParams({ category: "1", section: "1", entry: "1" });
        }
    }, [searchParams, setSearchParams]);

    useEffect(() => {
        if (data) {
            const category = data.find((c) => c.id.toString() === currentCategory);
            const section = category?.sections.find((s) => s.id.toString() === currentSection);
            const entry = section?.entries.find((e) => e.id.toString() === currentEntry);

            setCurrentContent(entry || null);
        }
    }, [data, currentCategory, currentSection, currentEntry]);

    if (isLoading) return <Pulse />;
    if (error) return <p>Error fetching categories: {error.message}</p>;

    const handleNavigation = (catId, secId, entryId) => {
        navigate(`/?category=${catId}&section=${secId}&entry=${entryId}`);
    };

    // Find current category and section indices
        const categoryIndex = data.findIndex(c => c.id.toString() === currentCategory);
        const category = data[categoryIndex];
        const sectionIndex = category?.sections.findIndex(s => s.id.toString() === currentSection);
        const section = category?.sections[sectionIndex];

        // Get current entry index
        const currentEntryIndex = section?.entries.findIndex(
            entry => entry.id.toString() === currentEntry
        );

        
    const previousNavigation = getPreviousNavigation(currentEntryIndex, currentCategory, currentSection,categoryIndex, category, sectionIndex, section, data);
    const nextNavigation = getNextNavigation(currentEntryIndex, currentCategory, currentSection,categoryIndex, category, sectionIndex, section, data);
    const handlePaginate = (direction) => handlePagination(direction, navigate, previousNavigation, nextNavigation);
    

    return (
        <main className="flex">
            <Header
                data={data}
                toggleHandler={toggleHandler}
                handleNavigation={handleNavigation}
                currentContent={currentContent}
            />
            <Article
                data={data}
                setToggleHandler={setToggleHandler}
                toggleHandler={toggleHandler}
                selectedSection={currentSection}
                currentContent={currentContent}
                handlePagination={handlePaginate}
                previousNavigation={previousNavigation}
                nextNavigation={nextNavigation}
            />
        </main>
    );
}
