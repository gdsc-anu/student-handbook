// Calculate previous entry, section, and category
        const getPreviousNavigation = (currentEntryIndex, currentCategory, currentSection,categoryIndex, category, sectionIndex, section, data) => {
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
        const getNextNavigation = (currentEntryIndex, currentCategory, currentSection,categoryIndex, category, sectionIndex, section, data) => {
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

        const handlePagination = (direction, navigate, previousNavigation, nextNavigation) => {
                const navigation = direction === 'prev' ? previousNavigation : nextNavigation;
                
                if (navigation) {
                    navigate(
                        `/?category=${navigation.category}&section=${navigation.section}&entry=${navigation.entry}`
                    );
                }
            };

export { getPreviousNavigation, getNextNavigation, handlePagination };