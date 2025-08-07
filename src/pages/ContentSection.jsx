import React from "react";
import PropTypes from "prop-types";

const ContentSection = ({ 
  imageSrc, 
  altText, 
  title, 
  children, 
  reverse = false, 
  imageClassName = "retro-icon", 
  sectionClass = "container"
}) => {
  return (
    <section className={sectionClass}>
      <div className="content">
        {!reverse && (
          <div className="content-image ticket">
            <img src={imageSrc} alt={altText} className={imageClassName} />
          </div>
        )}

        <div className="content-text">
          <h2>{title}</h2>
          {children}
        </div>

        {reverse && (
          <div className="content-image">
            <img src={imageSrc} alt={altText} className={imageClassName} />
          </div>
        )}
      </div>
    </section>
  );
};

ContentSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  imageClassName: PropTypes.string,
  sectionClass: PropTypes.string,
};

export default ContentSection;
