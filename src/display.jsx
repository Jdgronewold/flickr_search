import React from 'react';
import './Display.css';

const Display = ({images, updateFromChild}) => {

  const updateImg = (image) => {
    return (e) => {
      e.preventDefault();
      updateFromChild('detailImage', image);
    };
  };

  return (
    <div className="images" >
      {images.map( (image, i) => {
        return (
          <div key={i} onClick={updateImg(image)} className="image-item">
            <img
              src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
              alt="No img"
              />
            <span>{image.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Display;
