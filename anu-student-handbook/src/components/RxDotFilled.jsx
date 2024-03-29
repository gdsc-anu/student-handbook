// RxDotfilled.jsx
import React from 'prop-types';
import PropTypes from 'react-'

const RxDotfilled = ({ totalSlides, currentSlideIndex }) => {
  return (
    <div>
      {Array.from({ length: totalSlides }, (_, index) => (
        <span
          key={index}
          style={{
            fontSize: '2em',
            color: index === currentSlideIndex ? '#000' : '#999999', // Change color for active slide
          }}
        >
          •
        </span>
      ))}
    </div>
  );
};

export default RxDotfilled;

RxDotfilled.propTypes = {
  totalSlides: PropTypes.number,
  currentSlideIndex: PropTypes.bool
}