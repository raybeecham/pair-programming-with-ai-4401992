// ReactJS component displaying responsive images.
import React from 'react';
import PropTypes from 'prop-types';

// Image component.
function Image({ src, alt, width, className }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      className={className} />
  );

  // Image component properties.
  Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
  };

  // Image component default properties.
  Image.defaultProps = {
    src: '',
    alt: '',
    width: '100%',
    className: ''
  };

  // Return Image component.
  return Image;
}