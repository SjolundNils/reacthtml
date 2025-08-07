import React from "react";
class checkmark extends React.Component {
  render() {
    return (
      
      <svg
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        version="1.1"
        className="checkmark"
      >
        <path
          fill="currentColor"
          d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8Zm0 14.4A6.408 6.408 0 0 1 1.6 8c0-3.528 2.872-6.4 6.4-6.4 3.528 0 6.4 2.872 6.4 6.4 0 3.528-2.872 6.4-6.4 6.4Zm3.672-9.936L6.4 9.736 4.328 7.672 3.2 8.8 6.4 12l6.4-6.4-1.128-1.136Z"
        />
      </svg>
    );
  }
}

export default checkmark;
