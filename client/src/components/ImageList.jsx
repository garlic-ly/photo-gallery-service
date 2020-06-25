import React from 'react';
import PropTypes from 'prop-types';

const ImageList = ({images, toggle}) => {
  return (

    <div> This is imageList</div>
  )


};

ImageList.propTypes= {
  images: PropTypes.array,
  toggle: PropTypes.func,
};

export default ImageList;