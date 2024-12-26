import { useState } from 'react';

const useCategoryToggles = (initialToggles = {}) => {
  const [toggles, setToggles] = useState(initialToggles);

  const toggleCategory = (category) => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      [category]: !prevToggles[category],
    }));
  };

  const isToggled = (category) => !!toggles[category];

  return { toggles, toggleCategory, isToggled };
};

export default useCategoryToggles;
