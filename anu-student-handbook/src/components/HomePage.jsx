import Header from "./Header";
import Article from "./Article";
import Pulse from "./Pulse";
import useCategories from "../lib/api";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

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

        // Calculate previous entry, section, and category
        const getPreviousNavigation = () => {
            // If not at first entry of current section
            if (currentEntryIndex > 0) {
                return {
                    category: currentCategory,
                    section: currentSection,
                    entry: section.entries[currentEntryIndex - 1].id.toString()
                };
            }
            
            // If at first entry of section but not first section
            if (sectionIndex > 0) {
                const previousSection = category.sections[sectionIndex - 1];
                return {
                    category: currentCategory,
                    section: previousSection.id.toString(),
                    entry: previousSection.entries[previousSection.entries.length - 1].id.toString()
                };
            }
            
            // If at first entry of first section but not first category
            if (categoryIndex > 0) {
                const previousCategory = data[categoryIndex - 1];
                const lastSection = previousCategory.sections[previousCategory.sections.length - 1];
                return {
                    category: previousCategory.id.toString(),
                    section: lastSection.id.toString(),
                    entry: lastSection.entries[lastSection.entries.length - 1].id.toString()
                };
            }
            
            return null;
        };

        // Calculate next entry, section, and category
        const getNextNavigation = () => {
            // If not at last entry of current section
            if (currentEntryIndex < section.entries.length - 1) {
                return {
                    category: currentCategory,
                    section: currentSection,
                    entry: section.entries[currentEntryIndex + 1].id.toString()
                };
            }
            
            // If at last entry of section but not last section
            if (sectionIndex < category.sections.length - 1) {
                const nextSection = category.sections[sectionIndex + 1];
                return {
                    category: currentCategory,
                    section: nextSection.id.toString(),
                    entry: nextSection.entries[0].id.toString()
                };
            }
            
            // If at last entry of last section but not last category
            if (categoryIndex < data.length - 1) {
                const nextCategory = data[categoryIndex + 1];
                const firstSection = nextCategory.sections[0];
                return {
                    category: nextCategory.id.toString(),
                    section: firstSection.id.toString(),
                    entry: firstSection.entries[0].id.toString()
                };
            }
            
            return null;
        };

    const previousNavigation = getPreviousNavigation();
    const nextNavigation = getNextNavigation();

    const handlePagination = (direction) => {
        const navigation = direction === 'prev' ? previousNavigation : nextNavigation;
        
        if (navigation) {
            navigate(
                `/?category=${navigation.category}&section=${navigation.section}&entry=${navigation.entry}`
            );
        }
    };

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
                handlePagination={handlePagination}
                previousNavigation={previousNavigation}
                nextNavigation={nextNavigation}
            />
        </main>
    );
}
