// React component displaying an image.

import React from 'react';
import PropTypes from 'prop-types';

// imgData: object with the following properties:
//

export const Image = ({ imgData, folder, type, alt }) => {
  return (
    <img
      src={'${folder}/${imgData.root}.${type}'}
      width={imgData.width}
      height={imgData.height}
      alt={alt || ''}
    />
  );
};

Image.propTypes = {
  imgData: PropTypes.object.isRequired,
  folder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;